import axios from "axios";

const URL = "https://expensepie.onrender.com";

export const addData = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while calling addData API", error);
  }
};

export const getData = async () => {
  try {
    return await axios.get(`${URL}/getdata`);
  } catch (error) {
    console.log("Error while calling getData API", error);
  }
};


export const getPieChartData = async (data) => {
  try {
    return await axios.get(`${URL}/getpiechartdata`);
  } catch (error) {
    console.log("Error while calling getpierchartdata API", error);
  }
};
export const getLineChartData = async (data) => {
  try {
    return await axios.get(`${URL}/getlinechartdata`);
  } catch (error) {
    console.log("Error while calling getlinechartdata API", error);
  }
};
