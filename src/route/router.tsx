import HomeThreeLayout from "@/layout/homeThreeLayout";
import HomeTwoLayout from "@/layout/homeTwoLayout";
import RootLayout from "@/layout/root";
import About from "@/pages/(innerPage)/about";
import Blog from "@/pages/(innerPage)/blog";
import BlogDetails from "@/pages/(innerPage)/blog-details";
import Contact from "@/pages/(innerPage)/contact";
import CourseDetails from "@/pages/(innerPage)/course-details";
import Courses from "@/pages/(innerPage)/courses";
import Login from "@/pages/(innerPage)/login";
import NotFound from "@/pages/(innerPage)/not-found";
import PrivacyPolicy from "@/pages/(innerPage)/privacy-policy";
import Register from "@/pages/(innerPage)/register";
import Team from "@/pages/(innerPage)/team";
import TeamDetails from "@/pages/(innerPage)/team-details";
import TermsConditions from "@/pages/(innerPage)/terms-conditions";
import Home from "@/pages/home";
import HomeTwo from "@/pages/home-2";
import HomeThree from "@/pages/home-3";
import { createBrowserRouter } from "react-router-dom";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/course-details",
        element: <CourseDetails />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/not-found",
        element: <NotFound />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/team-details",
        element: <TeamDetails />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
    ],
  },
  {
    path: "/home-2",
    element: <HomeTwoLayout />,
    children: [
      {
        path: "/home-2",
        element: <HomeTwo />,
      },
    ],
  },
  {
    path: "/home-3",
    element: <HomeThreeLayout />,
    children: [
      {
        path: "/home-3",
        element: <HomeThree />,
      },
    ],
  },
]);
