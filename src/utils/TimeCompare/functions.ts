import { getTransits } from '../../api/transits'
import { getMinTransitItem } from '../Transit/functions'
import { TimeCompareListItemProps } from '../../components/ListViewItem/TimeCompareListItem'  

export type TimeCompareItem = TimeCompareListItemProps & {
  location: {
    lat: number;
    lng: number;
  };
}

export const getTimeCompareItems = (): TimeCompareItem[] | null => {
  let timeCompareItems = localStorage.getItem("timeCompareItems");
  if (timeCompareItems !== null) {
    return JSON.parse(timeCompareItems);
  } else {
    return null;
  }
}

export const setTimeCompareItems = (items: TimeCompareItem[]) => {
  /** 덮어씌우기 작업이므로 주의하십시오 */
  localStorage.setItem("timeCompareItems", JSON.stringify(items));
}

export const timeCompare = async (item: TimeCompareItem, currentZoneId: number, selectedZoneId: number) => {  
  const currentZoneTransitData = await getTransits({
    lat: item.location.lat,
    lng: item.location.lng,
    zoneId: currentZoneId
  });
  const selectedZoneTransitData = await getTransits({
    lat: item.location.lat,
    lng: item.location.lng,
    zoneId: selectedZoneId
  });

  if (!(currentZoneTransitData && selectedZoneTransitData)) {
    alert('주소를 설정해주세요');
    return false;
  }

  const currentZoneMinTimeTransitItem = getMinTransitItem(currentZoneTransitData);
  const selectedZoneMinTimeTransitItem = getMinTransitItem(selectedZoneTransitData);

  item.distanceFrom = currentZoneMinTimeTransitItem.distance.text;
  item.distanceTo = selectedZoneMinTimeTransitItem.distance.text;
  item.savingTime = currentZoneMinTimeTransitItem.time - selectedZoneMinTimeTransitItem.time;
  return true;
}

export const setDefaultTimeCompareItem = async (currentZoneId: number, selectedZoneId: number) => {
  const defaultItems = [
    {
      icon: "koex" as const,
      heading: "코엑스까지",
      savingTime: 0,
      address: "서울 강남구 영동대로 513",
      distanceFrom: "0km",
      distanceTo: "0km",
      editMode: false,
      location: {
        lat: 37.5131,
        lng: 127.0586
      }
    },
    {
      icon: "seoulForest" as const,
      heading: "서울숲까지",
      savingTime: 0,
      address: "서울 성동구 뚝섬로 273",
      distanceFrom: "0km",
      distanceTo: "0km",
      editMode: false,
      location: {
        lat: 37.5444,
        lng: 127.0374
      }
    }
  ];
  for (let item of defaultItems) {
    await timeCompare(item, currentZoneId, selectedZoneId);
  }
  localStorage.setItem("timeCompareItems", JSON.stringify(defaultItems));
  return defaultItems;
}






