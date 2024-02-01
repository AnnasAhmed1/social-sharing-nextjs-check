import Link from "next/link";
export const metadata = {
  title: "New page",
  description: "New page Description",
  openGraph: {
    images:
      "https://media.istockphoto.com/id/1211781372/photo/sityscape-of-beautiful-metropolitan-city-karachi.jpg?s=612x612&w=0&k=20&c=s8x-7guoOpjclH2gnW1Eh6hE9Zj54YnIIm6vfY6C3Ig=",
  },
};
const Index = () => {
  return (
    <div>
      <h1>new page</h1>
      <Link
        href={{
          pathname: "/newpage/1",
          query: 1,
        }}
      >
        <p>1</p>
      </Link>
      <Link
        href={{
          pathname: "/newpage/2",
          query: 2,
        }}
      >
        <p>2</p>
      </Link>
      <Link
        href={{
          pathname: "/newpage/3",
          query: 3,
        }}
      >
        <p>3</p>
      </Link>
      <Link
        href={{
          pathname: "/newpage/4",
          query: 4,
        }}
      >
        <p>4</p>
      </Link>
      <Link
        href={{
          pathname: "/newpage/5",
          query: 5,
        }}
      >
        <p>5</p>
      </Link>
      <Link
        href={{
          pathname: "/newpage/5",
          query: 5,
        }}
      >
        <p>5</p>
      </Link>
    </div>
  );
};

export default Index;
