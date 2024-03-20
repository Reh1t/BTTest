import { useCallback } from "react";
import { useRouter } from "next/router";
import CaseworkHeroSection from "../components/casework-hero-section";
import BathroomsCarpentry2 from "../components/bathrooms-carpentry2";
import BathroomsCarpentry1 from "../components/bathrooms-carpentry1";
const CaseworkPage = () => {
  const router = useRouter();

  const onGetStartedTodayClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onContactUsNowClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onLearnMoreClick = useCallback(() => {
    router.push("/contact");
  }, [router]);



  return (
    <div className="pt-40 w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <CaseworkHeroSection />
      <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-center py-14 pr-[73px] pl-[67px] box-border gap-[50px_102px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text lg:gap-[50px_102px] lg:pl-[33px] lg:pr-9 lg:box-border mq750:gap-[50px_102px] mq750:pt-9 mq750:pb-9 mq750:box-border">
        <div className="max-w-[544px] flex flex-col items-start justify-start gap-[16px_0px] md:max-w-full">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-5xl mq1050:text-13xl">
            Custom Casework
          </h1>
          <div className="h-36 relative text-base text-justify inline-block">
            <p className="m-0 whitespace-pre-wrap">
              Transform your home into a haven of order and sophistication with
              our tailored storage options that cater your unique needs and
              aesthetic preferences. Explore endless possibilities in optimizing space and decluttering
              your surroundings, as we turn your vision into reality with our
              expert craftsmanship and personalized touch. Elevate your lifestyle with Cabinets, Closets and More -where
              every inch of space is a masterpiece waiting to be unveiled.
            </p>
          </div>
        </div>
        <img
          className="h-[436px] flex-1 max-w-full overflow-hidden object-cover min-w-[335px]"
          loading="lazy"
          alt=""
          src="/AdobeStock_249599480.jpeg"
        />
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-center py-14 pr-[73px] pl-[67px] box-border gap-[50px_69px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text lg:gap-[50px_69px] lg:pl-[33px] lg:pr-9 lg:box-border mq750:gap-[50px_69px] mq750:pt-9 mq750:pb-9 mq750:box-border">
        <img
          className="h-[436px] flex-1 max-w-full overflow-hidden object-cover min-w-[335px]"
          loading="lazy"
          alt=""
          src="/AdobeStock_159043954.jpeg"
        />
        <div class="flex flex-col items-start justify-start gap-[16px_0px] max-w-full">
          <h1 class="m-0 w-full max-w-[577px] relative text-inherit font-bold font-inherit inline-block mq450:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Experience the pinnacle of craftsmanship
          </h1>
          <div class="w-full max-w-[544px] relative text-base text-justify inline-block">
            With our customizable casework, showcase your hobbies, your loved ones, and your style, turning functional storage into personalized expressions that resonate with the heart of your home. Whether it’s a treasured coin collectors’ display, a beloved pets’ photos or simply a valued keepsake or cherished belonging, display it beautifully with our tailorable casework and/or cabinetry.
          </div>
        </div>

      </section>
      <section className="bg-white overflow-hidden flex flex-row flex-wrap items-start justify-center py-14 pr-[73px] pl-[67px] box-border gap-[50px_48px] max-w-full mq750:gap-[50px_48px] mq750:py-9 mq750:pr-9 mq750:pl-[33px] mq750:box-border">
        <div className="h-[418px] w-[626px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full">
          <img
            className="w-[654px] h-[436px] relative object-cover max-w-[104%] shrink-0"
            loading="lazy"
            alt=""
            src="/AdobeStock_638975788.jpeg"
          />
        </div>
        <div className="h-[418px] w-[626px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full">
          <img
            className="w-[654px] h-[436px] relative object-cover max-w-[104%] shrink-0"
            loading="lazy"
            alt=""
            src="/AdobeStock_159044048.jpeg"
          />
        </div>
      </section>
      <section className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-between py-2.5 pr-[105px] pl-[97px] box-border max-w-full gap-[20px] text-justify text-xl text-kuno-red font-footer-bold-text mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-12 mq750:pr-[52px] mq750:box-border">
        <div className="w-full md:w-[685px] flex flex-col md:flex-row items-start md:items-end justify-end pt-[33px] md:pt-0 px-0 pb-0 box-border relative gap-[0px_10px] max-w-full">
          <div className="font-medium inline-block md:static md:right-[16px] mq450:text-base">
            WOODEN MARVELS
          </div>
          <h1 className="m-0 w-full md:w-[565px] relative text-21xl md:text-5xl font-bold font-inherit text-left md:text-right inline-block shrink-0 max-w-full">
            Millwork, Inlays & Decals
          </h1>
        </div>
        <div className="flex justify-center w-full md:w-auto">
          <button
            className="cursor-pointer pt-[15px] pb-4 pr-[38px] pl-[42px] bg-[transparent] w-[188px] rounded-mini box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
            onClick={onLearnMoreClick}
          >
            <div className="relative text-base font-footer-bold-text text-sandybrown text-left whitespace-nowrap">
              LEARN MORE
            </div>
          </button>
        </div>
      </section>



      <section className="bg-white overflow-hidden flex flex-row flex-wrap items-start justify-start py-14 pr-[73px] pl-[67px] box-border gap-[50px_48px] max-w-full mq750:gap-[50px_48px] mq750:py-9 mq750:pr-9 mq750:pl-[33px] mq750:box-border">
        <div className="h-[418px] w-[626px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full">
          <img
            className="w-[654px] h-[436px] relative object-cover max-w-[104%] shrink-0"
            loading="lazy"
            alt=""
            src="/AdobeStock_103563184.jpg"
          />
        </div>
        <div className="h-[418px] w-[626px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full">
          <img
            className="w-[654px] h-[436px] relative object-cover max-w-[104%] shrink-0"
            loading="lazy"
            alt=""
            src="/AdobeStock_666830706.jpeg"
          />
        </div>
      </section>
      <BathroomsCarpentry2 />
      <BathroomsCarpentry1 />
      <footer className="self-stretch bg-sandybrown overflow-hidden flex flex-row flex-wrap items-center justify-start py-[38px] pr-[215px] pl-[205px] box-border gap-[22px_17.95px] max-w-full text-center text-45xl text-white font-footer-bold-text mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[102px] mq750:pr-[107px] mq750:box-border">
        <h1
          className="m-0 w-[328px] relative text-inherit font-bold font-inherit inline-block min-w-[131px] max-w-full cursor-pointer mq450:text-19xl mq1050:text-32xl"
          onClick={onGetStartedTodayClick}
        >
          Get Started Today
        </h1>
        <b className="w-[328px] relative text-5xl inline-block min-w-[131px] max-w-full mq450:text-lgi">
          Contact with us today to start on your dream projects.
        </b>
        <button className="cursor-pointer py-2.5 px-1.5 bg-[transparent] rounded-3xs box-border flex flex-row items-center justify-center whitespace-nowrap max-w-full border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
          <b
            className="relative text-21xl font-footer-bold-text text-white text-center cursor-pointer"
            onClick={onContactUsNowClick}
          >{`Contact Us Now! `}</b>
        </button>
      </footer>
    </div>
  );
};

export default CaseworkPage;
