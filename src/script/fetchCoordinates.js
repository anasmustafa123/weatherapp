const fetchCoordinates = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      const id = navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(
            `${position.coords.latitude},${position.coords.longitude}`
          );
          resolve(`${position.coords.latitude},${position.coords.longitude}`);
        },
        (err) => {
          if (err.code == err.PERMISSION_DENIED) {
            alert("open your gps");
          }
        }
      );
    }
  });
};
export { fetchCoordinates };
