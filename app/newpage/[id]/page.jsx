import axios from "axios";
import Temp from "../temp";

let data;
let param;
let data1;
const Page = ({ id }) => {
  console.log(id);
  return (
    <div>
      annas
      <Temp data={data} param={param} data1={data1} />
    </div>
  );
};

export default Page;

export async function generateMetadata() {
  // const params = useParams();
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
  data = await fetchApi();
  console.log(data);
  return {
    title: "data?.title_subroute",
    description: data?.description,
    openGraph: {
      images: data.image,
    },
  };
}
