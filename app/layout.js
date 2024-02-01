import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Layout Title",
  description: "Layout Description",
  openGraph: {
    images:
      "https://media.gettyimages.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I=",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// export const generateMetaData = async () => {
//   const data = fetchApi();
//   console.log(data.title);
//   return {
//     title: "data.title",
//     description: data.description,
//     openGraph: {
//       images: data.image,
//     },
//   };
// };
