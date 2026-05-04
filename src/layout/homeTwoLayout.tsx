import FooterTwo from "@/components/footerTwo";
import Header from "@/components/header";
import { Outlet, ScrollRestoration } from "react-router-dom";

const HomeTwoLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <FooterTwo />
    </>
  );
};

export default HomeTwoLayout;
