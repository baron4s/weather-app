const API_KEY = '90a3221ed7c2bb7b353803bd0263dca9';
const URL = 'https://api.openweathermap.org/data/2.5/weather';

const weather = async (city) => {
  try {
    const dataResponse = await fetch(
      `${URL}?q=${city}&units=metric&appid=${API_KEY}`,
    );
    const dataResponseJson = await dataResponse.json();

    return dataResponseJson;
  } catch (error) {
    alert(error.message);
  }
};

export default weather;
