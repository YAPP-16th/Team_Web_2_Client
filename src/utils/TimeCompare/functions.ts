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

export const timeCompare = async (item: TimeCompareItem, currentZoneId: number, selectedLocation: { lat: number, lng: number }) => {  
  const currentZoneTransitData = await getTransits({
    startLocation: {
      // 해당 핫플의 lat, lng 구나
      lat: item.location.lat,
      lng: item.location.lng,
    },
    // currentZoneId는 zoneId 구나
    zoneId: currentZoneId,
    mode: "LocationToZone"
  });

  const selectedZoneTransitData = await getTransits({
    startLocation: {
      lat: item.location.lat,
      lng: item.location.lng,
    },
    destinationLocation: {
      lat: selectedLocation.lat,
      lng: selectedLocation.lng
    },
    mode: "LocationToLocation"
  });

  if (!(currentZoneTransitData && selectedZoneTransitData)) {
    return false;
  }

  const currentZoneMinTimeTransitItem = getMinTransitItem(currentZoneTransitData);
  const selectedZoneMinTimeTransitItem = getMinTransitItem(selectedZoneTransitData);

  item.distanceFrom = currentZoneMinTimeTransitItem.distance.text;
  item.distanceTo = selectedZoneMinTimeTransitItem.distance.text;
  item.savingTime = currentZoneMinTimeTransitItem.time - selectedZoneMinTimeTransitItem.time;
  return true;
}

export const setDefaultTimeCompareItem = async (currentZoneId: number, selectedLocation: { lat: number, lng: number }) => {
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
    await timeCompare(item, currentZoneId, selectedLocation);
  }
  localStorage.setItem("timeCompareItems", JSON.stringify(defaultItems));
  return defaultItems;
}






