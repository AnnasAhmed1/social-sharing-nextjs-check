// pages/yourPage.js
"use client";
import { useEffect, useState } from "react";
import { FacebookIcon, FacebookShareButton } from "react-share";
import axios from "axios";
import { useParams } from "next/navigation";

const Temp = ({ data }) => {
  const params = useParams();
  const [metadata, setMetadata] = useState({
    title: "",
    description: "",
    ogImage: "", // Store the dynamic og:image URL here
  });
  const fetchApi = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/1`);
      return response.data;
      console.log(response, "nw");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    data = fetchApi();
  }, [params.id]);
  return (
    <div>
      <FacebookShareButton
        url={"https://social-sharing-nextjs-check.vercel.app/newpage/"}
      >
        <FacebookIcon size={32} round={true} style={{ color: "black" }} />
      </FacebookShareButton>

      {/* Your page content */}
      <h1>{metadata.title}</h1>
      <p>{metadata.description}</p>
      <img src={metadata.ogImage} alt="OG Image" />
    </div>
  );
};

export default Temp;
