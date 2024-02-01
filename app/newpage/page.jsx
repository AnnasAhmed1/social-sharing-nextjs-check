import Head from "next/head";

const YourPage = () => {
  const pageTitle = "Your Page Title";

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
