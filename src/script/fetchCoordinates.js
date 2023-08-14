const fetchCoordinates = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      const id = navigator.geolocation.watchPosition((position) => {
        console.log(position.coords.latitude);
        resolve({
          lat: parseFloat(position.coords.latitude),
          long: parseFloat(position.coords.longitude),
        });
      });
    }
  }).catch(function (err){
    console.error(err);
  })
};
export {fetchCoordinates};
