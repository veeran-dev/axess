import HeroSection from "@/components/landingPage/heroSection";
import withPublicLayout from "@/lib/withPublicLayout"

const Home =()=> {
  return (
    <div className="">
      <HeroSection />
      {/* <Categories />
      <Statistics />
      <EventCards />
      <CallToAction />
      <Testimonials />
      <Footer /> */}
    </div>
  );
}


export default withPublicLayout(Home)