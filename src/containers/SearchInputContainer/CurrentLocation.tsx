import react from 'react';

// const getLocation = () => {
//     if (navigator.geolocation) { // GPS를 지원하면
//       navigator.geolocation.getCurrentPosition(function(position) {
//         alert(position.coords.latitude + ' ' + position.coords.longitude);
//       }, function(error) {
//         console.error(error);
//       }, {
//         enableHighAccuracy: false,
//         maximumAge: 0,
//         timeout: Infinity
//       });
//     } else {
//       alert('GPS를 지원하지 않습니다');
//     }
//   }
//   getLocation();
const CurrentLocation = () => {
  const geoloc = (success: any, fail: any) => {
    var is_echo = false;
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          if (is_echo) { return; }
          is_echo = true;
          success(pos.coords.latitude, pos.coords.longitude);
        },
        function () {
          if (is_echo) { return; }
          is_echo = true;
          fail();
        }
      );
    } else {
      fail();
    }
  }

  const success = (lat: any, lng: any) => {
    alert(lat + " , " + lng);
  }
  const fail = () => {
    alert("failed");
  }
  console.log('한다')
  geoloc(success, fail);
  console.log('했다')
}


export default CurrentLocation;