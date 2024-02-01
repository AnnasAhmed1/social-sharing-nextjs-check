// pages/yourPage.js
// import { useParams } from "next/router";
import axios from "axios";
import { useParams } from "next/navigation";
import Temp from "./temp";

let data;
const YourPage = () => {
  console.log(data);
  return <Temp data={data} />;
};

export default YourPage;

export async function generateMetadata() {
  const fetchApi = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/1`);
      return response.data;
      console.log(response, "nw");
    } catch (error) {
      console.error(error);
    }
  };
  data = await fetchApi();
  console.log(data);
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: data.image,
    },
  };
}
