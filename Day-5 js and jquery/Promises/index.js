const axios = require("axios");

// const data = axios.get("https://dog.ceo/api/breeds/image/random");

// console.log(data);

// data
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// using  async awaiting

const fetchData = async () => {
  try {
    const data = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
