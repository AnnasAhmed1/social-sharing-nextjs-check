"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FacebookIcon, FacebookShareButton } from "react-share";
const axios = require("axios");
export const generateMetaData = async () => {
  const data = fetchApi();
  console.log(data.title);
  return {
    title: "data.title",
    description: data.description,
    openGraph: {
      images: data.image,
    },
  };
};
const Page = () => {
  const params = useParams();
  const [metadata, setMetadata] = useState({
    title: "",
    description: "",
    openGraph: {
      images: [],
    },
  });

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const newData = response.data;

      setMetadata({
        title: newData.title,
        description: newData.description,
        openGraph: {
          images: [newData.image],
        },
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [params.id]);

  return (
    <div>
      <FacebookShareButton
        url={"https://social-sharing-nextjs-check.vercel.app/newpage/1"}
      >
        <FacebookIcon size={32} round={true} style={{ color: "black" }} />
      </FacebookShareButton>

      {/* Use dynamic metadata in your component */}
      {/* <h1>{metadata.title}</h1>
      <p>{metadata.description}</p> */}

      {/* Render images from dynamic metadata */}
      {/* {metadata.openGraph.images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))} */}
    </div>
  );
};

export default Page;
