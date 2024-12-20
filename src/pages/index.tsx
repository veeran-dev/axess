import Blog from "@/components/landingPage/blog";
import Comments from "@/components/landingPage/comments";
import EventCards from "@/components/landingPage/eventCard";
import HeroSection from "@/components/landingPage/heroSection";
import InviteOrganizer from "@/components/landingPage/inviteOrganizer";
import TopGenre from "@/components/landingPage/topGenre";
import withPublicLayout from "@/lib/withPublicLayout"

const Home =()=> {
  return (
    <div className="">
      <HeroSection />
      <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-8">
        <div className="flex flex-col gap-8 h-full">
          <EventCards />
          <TopGenre />
        </div>
        <div className="h-full">
          <Blog />
        </div>
      </div>
      <div className="mt-8">
        <InviteOrganizer />
      </div>
      <div className="mt-8">
        <Comments />
      </div>
    </div>
  );
}


export default withPublicLayout(Home)