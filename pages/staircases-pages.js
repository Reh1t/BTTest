import { useCallback } from "react";
import { useRouter } from "next/router";
import OpenRiserStaircases from "../components/open-riser-staircases";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import StairCaseHeroSection from "../components/staircaseHerosection";
const StaircasesPages = () => {
  const router = useRouter();

  const onTextBoxContainerClick = useCallback(() => {
    router.push("/conceptual-modelling-plannin1");
  }, [router]);

  const onEmbarkOnAClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Navbar />
      <StairCaseHeroSection/>
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center py-14 px-[49px] box-border gap-[0px_36px] max-w-full text-left text-xl text-kuno-red font-footer-bold-text mq825:gap-[0px_36px] mq825:pt-9 mq825:pb-9 mq825:box-border mq1425:flex-wrap mq1425:pl-6 mq1425:pr-6 mq1425:box-border">
        <div className="w-[572px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-3 px-3.5 box-border gap-[140px_0px] min-w-[572px] max-w-full mq825:gap-[140px_0px] mq825:min-w-full mq450:gap-[140px_0px] mq1425:flex-1">
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] max-w-full cursor-pointer"
            onClick={onTextBoxContainerClick}
          >
            <div className="self-stretch relative font-medium mq450:text-base">
              BUILDINGS SERVICE
            </div>
            <b className="relative text-21xl inline-block max-w-full mq825:text-13xl mq450:text-5xl">
              Staircases by Design
            </b>
            <div className="w-full relative text-base whitespace-pre-wrap text-justify inline-block">
              Collaborate with Building Tradition, where partnering with us
              means more than just innovative staircase solutions – it's a
              commitment to crafting your vision.
            </div>
          </div>
          <div className="relative text-base">SERVICE OVERVIEW</div>
        </div>
        <div className="h-[436px] w-[654px] overflow-hidden shrink-0 flex flex-col items-start justify-start min-w-[654px] max-w-full mq825:min-w-full mq1425:flex-1">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover mq1425:self-stretch mq1425:w-auto"
            loading="lazy"
            alt=""
            src="/Stairrcase.jpeg"
          />
        </div>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start max-w-full text-justify text-13xl text-kuno-red font-footer-bold-text">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-7 px-[92px] box-border max-w-full gap-[20px] mq825:pl-[23px] mq825:pr-[23px] mq825:box-border mq1425:flex-wrap mq1425:pl-[46px] mq1425:pr-[46px] mq1425:box-border">
          <b className="w-[641px] relative inline-block shrink-0 max-w-full mq825:text-7xl mq450:text-lgi">
            <p className="m-0">{`Crafting integrated staircase `}</p>
            <p className="m-0">solutions to ascend to lasting excellence.</p>
          </b>
          <div className="w-[580px] relative text-5xl inline-block shrink-0 min-w-[580px] max-w-full mq825:min-w-full mq450:text-lgi mq1425:flex-1">
            Elevate your space with our expertly crafted custom staircases,
            where design meets functionality to create a unique ascent tailored
            to your vision, ensuring smarter, more collaborative design
            practices for elevated success.
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/adobestock-639370636-31-1@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 box-border max-w-full text-center text-21xl text-kuno-red font-footer-bold-text">
        <b className="w-[622px] relative inline-block max-w-full box-border pl-5 pr-5 mq825:text-13xl mq450:text-5xl">
          <p className="m-0">Ascent to elegance:</p>
          <p className="m-0">where staircases meet artistry</p>
        </b>
      </section>
      <OpenRiserStaircases
        frame25="/frame-25@2x.png"
        openRiserStaircases="Open Riser Staircases "
        elevateYourHomeWithOurExq="Elevate your home with our exquisite open riser staircases, where modern design meets timeless elegance. Our thoughtfully
        crafted staircases not only create a striking visual impact but
also invite natural light to dance through, seamlessly blending
innovation and sophistication in every step."
      />
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center py-[3px] px-[67px] box-border gap-[0px_145px] min-h-[702px] max-w-full text-left text-5xl text-kuno-red font-footer-bold-text lg:flex-wrap mq825:gap-[0px_145px] mq825:pl-[33px] mq825:pr-[33px] mq825:box-border mq450:gap-[0px_145px]">
        <div className="flex flex-col items-start justify-start py-5 px-0 box-border gap-[19px_0px] min-w-[508px] max-w-full lg:flex-1 mq825:min-w-full">
          <div className="relative font-medium mq450:text-lgi">{`CUSTOMIZABLE OPTIONS `}</div>
          <b className="relative text-21xl inline-block max-w-full mq825:text-13xl mq450:text-5xl">{`Closed Riser Staircases `}</b>
          <div className="w-full relative text-base text-justify inline-block">
            Meticulously crafted, these designs seamlessly merge classic
            elegance with modern functionality. Enjoy enhanced stability and
            privacy with each step, while natural light adds warmth and allure
            to your ascent. Discover the perfect fusion of style and
            practicality, elevating your living space with our exquisite closed
            riser staircases.
          </div>
        </div>
        <img
          className="h-[592px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover min-w-[600px] mq825:min-w-full"
          loading="lazy"
          alt=""
          src="/frame-25-1@2x.png"
        />
      </section>
      <OpenRiserStaircases
        frame25="/frame-25-2@2x.png"
        openRiserStaircases="Outdoor Staircases "
        elevateYourHomeWithOurExq="Transform your outdoor space with our stunning outdoor staircases. Crafted with durability and aesthetics in mind, these staircases seamlessly blend into your landscape while providing safe and stylish access to different levels. Designed to withstand the elements, our outdoor staircases combine practicality with elegance, enhancing the beauty and functionality of your outdoor living area.Elevate your outdoor experience with our exquisite outdoor staircases, perfect for adding a touch of sophistication to any setting."
      />
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full text-center text-21xl text-kuno-red font-footer-bold-text mq825:pb-[39px] mq825:box-border mq450:pb-[25px] mq450:box-border">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[50px] px-[100px] mq825:pl-[50px] mq825:pr-[50px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <b className="relative mq825:text-13xl mq450:text-5xl">
            Apartment Building Staircases
          </b>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center py-8 px-[120px] box-border gap-[52px_80px] min-h-[580px] max-w-full mq825:gap-[52px_80px] mq825:pl-[30px] mq825:pr-[30px] mq825:box-border mq450:gap-[52px_80px] mq1425:pl-[60px] mq1425:pr-[60px] mq1425:box-border">
          <img
            className="w-[504px] relative rounded-3xs max-h-full overflow-hidden shrink-0 object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/frame-29@2x.png"
          />
          <img
            className="w-[504px] relative rounded-3xs max-h-full overflow-hidden shrink-0 object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/frame-30@2x.png"
          />
          <img
            className="w-[504px] relative rounded-3xs max-h-full overflow-hidden shrink-0 object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/frame-32@2x.png"
          />
          <img
            className="w-[504px] relative rounded-3xs max-h-full overflow-hidden shrink-0 object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/frame-31@2x.png"
          />
        </div>
      </section>
      <footer className="self-stretch bg-sandybrown overflow-hidden flex flex-col items-center justify-center py-[38px] px-5 box-border max-w-full text-left text-45xl text-white font-footer-bold-text">
        <h2
          className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full cursor-pointer mq825:text-32xl mq450:text-19xl"
          onClick={onEmbarkOnAClick}
        >
          <p className="m-0">Embark on a staircase journey with us —</p>
          <p className="m-0">are you ready to create one together ?</p>
        </h2>
      </footer>
      <Footer />
    </div>
  );
};

export default StaircasesPages;
