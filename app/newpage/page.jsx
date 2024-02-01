// pages/yourPage.js
// import { useParams } from "next/router";
import axios from "axios";
import { useParams } from "next/navigation";
import Temp from "./temp";

let data1;
let data;
const YourPage = () => {
  console.log(data1);
  return <Temp data={data} data1={data1} />;
};

export default YourPage;

export async function generateMetadata() {
  const fetchApi = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${data1 ? data1 : "3"}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  var data = await fetchApi();
  console.log(data);
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: data.image,
    },
  };
}
