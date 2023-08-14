const reverseGeodecoding = (data) => {
  return new Promise((resolve, reject) => {
      fetch(
        `https://us1.locationiq.com/v1/reverse?key=pk.9d9a611ab7e2ec79c9136d0e1f37c5a7&lat=${data.lat}&lon=${data.long}&format=json`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((json) => {console.log(json); resolve(json.address.state)});
    }).catch(function (err){
        console.log(err);
    })
};
export {reverseGeodecoding};