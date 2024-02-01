// pages/yourPage.js
"use client";
import { useEffect, useState } from "react";
import { FacebookIcon, FacebookShareButton } from "react-share";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";

const Temp = ({ data, data1 }) => {
  const [id, setId] = useState(1);
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
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    data = fetchApi();
    data1 = params.id;
  }, [params.id]);
  return (
    <div>
      <FacebookShareButton
        url={"https://social-sharing-nextjs-check.vercel.app/newpage/"}
      >
        <FacebookIcon size={32} round={true} style={{ color: "black" }} />
      </FacebookShareButton>

      <Link
        href="/newpage/1"
        onClick={() => {
          setId(1);
        }}
      >
        1
      </Link>
      <Link
        href="/newpage/2"
        onClick={() => {
          setId(2);
        }}
      >
        2
      </Link>
      <Link
        href="/newpage/3"
        onClick={() => {
          setId(3);
        }}
      >
        3
      </Link>
      <Link
        href="/newpage/4"
        onClick={() => {
          setId(4);
        }}
      >
        4
      </Link>
      <Link
        href="/newpage/5"
        onClick={() => {
          setId(5);
        }}
      >
        5
      </Link>
      <Link
        href="/newpage/6"
        onClick={() => {
          setId(6);
        }}
      >
        6
      </Link>
    </div>
  );
};

export default Temp;
