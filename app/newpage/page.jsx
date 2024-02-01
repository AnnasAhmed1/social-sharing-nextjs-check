import Head from "next/head";

export const metadata = {
  title: "New page",
  description: "New page Description",
  openGraph: {
    images:
      "https://media.gettyimages.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I=",
  },
};
const YourPage = () => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1>new page</h1>
    </div>
  );
};

export default YourPage;
