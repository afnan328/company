import AboutAreaOne from "@/components/about/aboutAreaOne";
import BlogsAreaOne from "@/components/blogs/blogsAreaOne";
import ContactAreaOne from "@/components/contact/contactAreaOne";
import CoursesAreaOne from "@/components/courses/coursesAreaOne";
import UpcomingCourses from "@/components/courses/upcomingCourses";
import CtaArea from "@/components/ctaArea";
import FeaturesArea from "@/components/features/featuresArea";
import FeedbackOne from "@/components/feedbacks/feedbackOne";
import HeroOne from "@/components/hero/heroOne";
import TeamAreaOne from "@/components/teams/teamAreaOne";
import WhyChooseUs from "@/components/whyChooseUs";
import { blogPostsDataOne } from "@/db/blogPostsData";
import { coursesData } from "@/db/coursesData";
import { teamData } from "@/db/teamData";

export default function Home() { 
  return (
    <>
      <HeroOne />
      <FeaturesArea />
      <AboutAreaOne />
      <CoursesAreaOne data={coursesData.slice(0, 3)} titleShown={true} />
      <WhyChooseUs />
      <UpcomingCourses />
      <FeedbackOne />
      <CtaArea />
      <TeamAreaOne data={teamData.slice(0, 4)} titleShown={true} />
      <ContactAreaOne />
      <BlogsAreaOne data={blogPostsDataOne.slice(0, 3)} titleShown={true} />
    </>
  );
};