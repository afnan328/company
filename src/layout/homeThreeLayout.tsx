import FooterThree from "@/components/footerThree";
import Header from "@/components/header";
import { Outlet, ScrollRestoration } from "react-router-dom";

const HomeThreeLayout = () => {
  return (
    <div className="bg-1c1c1c">
      <ScrollRestoration />
      <Header className="white-navbar" logo="/images/white-logo.svg" />
      <Outlet />
      <FooterThree />
    </div>
  );
};

export default HomeThreeLayout;
