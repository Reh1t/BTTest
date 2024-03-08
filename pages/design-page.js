import { useCallback } from "react";
import { useRouter } from "next/router";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const DesignPage = () => {
  const router = useRouter();

  const onMainTextContainerClick = useCallback(() => {
    router.push("/conceptual-modelling-plannin1");
  }, [router]);

  const onDesignText2Click = useCallback(() => {
    router.push("/construction-design");
  }, [router]);

  const onDesignText3Click = useCallback(() => {
    router.push("/construction-management");
  }, [router]);

  const onDesignText4Click = useCallback(() => {
    router.push("/accessible-construction");
  }, [router]);

  const onStaircasesByBuildingClick = useCallback(() => {
    router.push("/staircases-pages");
  }, [router]);

  const onDesignProjectTextClick = useCallback(() => {
    router.push("/construction-design");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/construction-design");
  }, [router]);

  const onPhotoImageClick = useCallback(() => {
    router.push("/staircases-pages");
  }, [router]);

  return (
    <div>
      <Navbar />
    <div className="w-full relative bg-white flex flex-col items-center justify-start tracking-[normal]">
      <section className="self-stretch bg-white flex flex-row flex-wrap items-start justify-between min-h-[731px] max-w-full">
        <header className="w-[1439px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-5 box-border gap-[14px_0px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
          <h1 className="m-0 relative text-inherit font-bold font-inherit">
            Design
          </h1>
          <div className="w-[749px] relative text-xl font-medium text-justify inline-block max-w-full">
            Crafting Success from the Ground Up: Offering Comprehensive
            Modelling, Planning, Construction Design and Management for Every
            Phase of Your Project
          </div>
        </header>
        <div className="h-auto w-full overflow-x-auto flex flex-wrap items-start justify-between py-8 px-4 lg:px-0 lg:pr-16 gap-4 lg:gap-8 max-w-full">
          <Card
            photoPlaceholder="/photo-placeholder1@2x.png"
            conceptual="Conceptual "
            modelling="Modelling"
            aVirtualCanvasForYourDrea="A virtual canvas for your dreams. This step is to determine exactly what you want in your project."
            onLearnMoreClick={onMainTextContainerClick}
          />
          <Card
            photoPlaceholder="/photo-placeholder-11@2x.png"
            conceptual="Construction "
            modelling="Design"
            aVirtualCanvasForYourDrea="Rooted in years of experience, this step is to decide how best to achieve your project goals, considering and analyzing constraints (i.e. budget, local environment, building codes, city/township laws etc.)"
            modellingOverflow="hidden"
            aVirtualCanvasPadding="0px 5px"
            propHeight="unset"
            onLearnMoreClick={onDesignText2Click}
          />
          <Card
            photoPlaceholder="/photo-placeholder-21@2x.png"
            conceptual="Construction"
            modelling="Management"
            aVirtualCanvasForYourDrea="Streamlining your project from start to finish with expert planning, efficient execution, and cost-effective solutions."
            modellingOverflow="hidden"
            aVirtualCanvasPadding="unset"
            propHeight="115px"
            onLearnMoreClick={onDesignText3Click}
          />
          <Card
            photoPlaceholder="/photo-placeholder-31@2x.png"
            conceptual="Accessible"
            modelling="Construction "
            aVirtualCanvasForYourDrea="We don't often think about making our spaces adaptable to life's transitions until it's too late. Why wait for the unexpected to happen when you could plan to be in a space that has lifetime adaptability, for whatever life transitions occur."
            modellingOverflow="hidden"
            aVirtualCanvasPadding="0px 14px 0px 5px"
            propHeight="unset"
            onLearnMoreClick={onDesignText4Click}
          />
        </div>

      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-start justify-start min-h-[526px] max-w-full text-center text-xl text-kuno-red font-footer-bold-text">
        <div className="w-[1440px] overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-center py-[30px] px-5 box-border max-w-full">
          <div className="w-[794px] relative font-medium inline-block shrink-0 max-w-full mq450:text-base">
            Blending revolutionary technology with artistic craftsmanship across
            four specialized sectors to bring your visionary projects to life.
          </div>
        </div>
        <div className="w-[1440px] flex flex-row flex-wrap items-center justify-center min-w-[576px] max-w-full">
          <img
            className="w-[922px] relative max-h-full max-w-full"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-center py-5 px-[67px] box-border gap-[124px_118px] max-w-full text-left text-xl text-kuno-red font-footer-bold-text lg:gap-[124px_118px] lg:pl-[33px] lg:pr-[33px] lg:box-border mq750:gap-[124px_118px]">
        <div className="w-[528px] flex flex-row flex-wrap items-start justify-center gap-[16px] min-h-[249px] max-w-full">
          <div
            className="relative font-medium shrink-0 cursor-pointer mq450:text-base"
            onClick={onStaircasesByBuildingClick}
          >
            Staircases by Building Tradition
          </div>
          <h1
            className="m-0 relative text-21xl font-bold font-inherit shrink-0 cursor-pointer mq450:text-5xl mq1050:text-13xl"
            onClick={onDesignProjectTextClick}
          >
            Design Project
          </h1>
          <div className="w-[528px] relative text-base text-justify inline-block shrink-0 max-w-full">
            Ensure your next build goes smoothly by using our extensive
            experience with staircase design, which is an integral part of our
            conceptual modelling. We also provide pre-finished, ready to
            assemble staircases for your next project.
          </div>
          <div className="w-[528px] overflow-hidden flex flex-row flex-wrap items-start justify-center py-2.5 px-[110px] box-border min-w-[335px] max-w-full text-sandybrown mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div
              className="w-[167px] rounded-mini box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-[5px] cursor-pointer border-[2px] border-solid border-sandybrown"
              onClick={onButtonContainerClick}
            >
              <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block mq450:text-lgi">
                READ MORE
              </h3>
            </div>
          </div>
        </div>
        <img
          className="h-[436px] flex-1 rounded-3xs max-w-full overflow-hidden object-cover min-w-[335px] cursor-pointer"
          loading="lazy"
          alt=""
          src="/photo1@2x.png"
          onClick={onPhotoImageClick}
        />
      </section>
      <Footer />
    </div>
    </div>
  );
};

export default DesignPage;
