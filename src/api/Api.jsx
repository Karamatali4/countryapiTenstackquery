import axios from "axios"

const api = axios.create({
  baseURL:"https://restcountries.com/v2",
})
export  const fetchCountry = async() => {
 try {
  
  const res = await api.get(`/all`);

  return res.status === 200 ? res.data: [];

 } catch (error) {
  console.log(error);
 }
}



export const fetchCountryInd = async (name) => {
  try {
    const res = await api.get(`/name/${name}`); // Corrected endpoint
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
    throw error; // Throwing the error so React Query can handle it
  }
};
