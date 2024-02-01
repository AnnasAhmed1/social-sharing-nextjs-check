import Head from "next/head";

export const metadata = {
  title: "New page",
  description: "New page Description",
  openGraph: {
    images:
      "https://media.istockphoto.com/id/1211781372/photo/sityscape-of-beautiful-metropolitan-city-karachi.jpg?s=612x612&w=0&k=20&c=s8x-7guoOpjclH2gnW1Eh6hE9Zj54YnIIm6vfY6C3Ig=",
  },
};
const YourPage = () => {
  return (
    <div>
      <h1>new page</h1>
    </div>
  );
};

export default YourPage;
