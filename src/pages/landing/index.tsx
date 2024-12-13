import Blog from "@/components/landingPage/blog";
import Comments from "@/components/landingPage/comments";
import EventCards from "@/components/landingPage/eventCard";
import HeroSection from "@/components/landingPage/heroSection2";
import InviteOrganizer from "@/components/landingPage/inviteOrganizer";
import TopGenre from "@/components/landingPage/topGenre";
import withPublicLayout from "@/lib/withPublicLayout"

const Home =()=> {
  return (
    <div className="">
      <HeroSection theme="dark" />
      <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-8">
        <div className="flex flex-col gap-8 h-full">
          <EventCards theme="dark" />
          <TopGenre theme="dark" />
        </div>
        <div className="h-full">
          <Blog theme="dark" />
        </div>
      </div>
      <div className="mt-8">
        <InviteOrganizer theme="dark" />
      </div>
      <div className="mt-8">
        <Comments theme="dark" />
      </div>
    </div>
  );
}


export default withPublicLayout(Home)