import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useCallback } from "react";
import HeroSection from "../components/hero-section";
import HonoringTraditionEmbracingI from "../components/honoring-tradition-embracing-i";
import DesignThatSizzles from "../components/design-that-sizzles";
import BathroomsCarpentry from "../components/bathrooms-carpentry";
import Showers from "../components/showers";
import ConceptualModellingPlannin from "../components/conceptual-modelling-plannin";
import AscentToEleganceWhereSta from "../components/ascent-to-elegance-where-sta";
import { useRouter } from "next/router";
import NewsletterCTA from "../components/newsletter-c-t-a";

const LandingPageHomePage = () => {
  const router = useRouter();

  const onCabinetsClosetsCaseworkClick = useCallback(() => {
    router.push("/casework-page");
  }, [router]);

  const onGetStartedTodayClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <div>
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start tracking-[normal]">
      <HeroSection />
      <HonoringTraditionEmbracingI />
      <DesignThatSizzles />
      <BathroomsCarpentry />
      <Showers />
      <ConceptualModellingPlannin />
      <AscentToEleganceWhereSta />
      <section className="self-stretch bg-white overflow-hidden my-5 h-[500px] flex flex-col items-center justify-center relative gap-5 max-w-full text-center text-5xl text-white font-footer-bold-text">
      <div className="w-full h-full relative flex flex-col items-center justify-end bg-cover bg-no-repeat bg-top" style={{backgroundImage: "url('/photo-and-text@3x.png')"}}>
        <h1 className="m-0 text-inherit font-bold font-inherit text-shadow-[0px_4px_10px_rgba(0,_0,_0,_0.65)] cursor-pointer">
          <p className="m-0">Cabinets, Closets,</p>
          <p className="m-0">Casework & More</p>
          <p className="m-0">Storage Solutions</p>
        </h1>
        <button className="cursor-pointer py-3 px-4  bg-transparent rounded-md border-2 border-white mt-5 text-white" onClick={onCabinetsClosetsCaseworkClick}>
          LEARN MORE
        </button>
      </div>
    </section>
      <section className="self-stretch bg-sandybrown overflow-hidden flex flex-col items-center justify-center py-[38px] px-5 box-border gap-[22px_0px] max-w-full text-left text-45xl text-white font-footer-bold-text">
        <h1
          className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full cursor-pointer mq750:text-32xl mq450:text-19xl"
          onClick={onGetStartedTodayClick}
        >
          Get Started Today
        </h1>
        <h3 className="m-0 relative text-5xl font-bold font-inherit inline-block max-w-full mq450:text-lgi">
          Contact with us today to start on your dream projects.
        </h3>
      </section>
      <NewsletterCTA />
      <Footer/>
    </div>
    </div>
  );
};

export default LandingPageHomePage;
