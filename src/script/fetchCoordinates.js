const fetchCoordinates = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      const id = navigator.geolocation.getCurrentPosition((position) => {
        console.log(`${position.coords.latitude},${position.coords.longitude}`);
        resolve(`${position.coords.latitude},${position.coords.longitude}`);
        /* resolve({
          lat: parseFloat(position.coords.latitude),
          long: parseFloat(position.coords.longitude),
        }); */
      });
    }
  }).catch(function (err){
    console.error(err);
  })
};
export {fetchCoordinates};
