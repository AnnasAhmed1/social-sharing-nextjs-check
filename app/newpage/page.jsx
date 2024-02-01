// pages/yourPage.js
"use client";
import { useEffect, useState } from "react";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { Helmet } from "react-helmet";
// import { useParams } from "next/router";
import axios from "axios";
import { useParams } from "next/navigation";

const YourPage = () => {
  const params = useParams();
  const [metadata, setMetadata] = useState({
    title: "",
    description: "",
    ogImage: "", // Store the dynamic og:image URL here
  });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/1`);
        const newData = response.data;
        console.log(response, "nw");
        setMetadata({
          title: newData.title,
          description: newData.description,
          ogImage: newData.image, // Assuming image is the property you want to use for og:image
        });

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApi();
  }, [params.id]);
  console.log(metadata);
  return (
    <div>
      {/* Dynamic metadata using react-helmet */}
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />
      </Helmet>

      {/* Share button */}
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

export default YourPage;
