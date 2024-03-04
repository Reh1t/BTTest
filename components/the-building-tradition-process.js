import { useCallback } from "react";
import { useRouter } from "next/router";

const TheBuildingTraditionProcess = () => {
  const router = useRouter();

  const onConceptualModelPlanClick = useCallback(() => {
    router.push("/conceptual-modelling-plannin1");
  }, [router]);

  const onConstructionDesignTextClick = useCallback(() => {
    router.push("/construction-design");
  }, [router]);

  const onFinishingTouchesTextClick = useCallback(() => {
    router.push("/casework-page");
  }, [router]);

  const onReadyToGetClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <section
      className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-21xl text-kuno-red font-footer-bold-text"
      data-scroll-to="theBuildingTraditionProcess"
    >
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[27px] px-5 box-border max-w-full">
        <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq800:text-13xl mq450:text-5xl">
          The Building Tradition Process
        </h2>
      </div>
      <div className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-0 box-border gap-[0px_35px] max-w-full text-5xl mq800:gap-[0px_35px] mq1350:flex-wrap">
        <div className="h-[519px] w-[740px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-2.5 px-5 box-border min-w-[740px] max-w-full mq800:min-w-full mq1350:flex-1">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
            loading="lazy"
            alt=""
            src="/adobestock-107028827-1-1@2x.png"
          />
        </div>
        <div className="w-[693px] flex flex-col items-start justify-start p-5 box-border gap-[20px_0px] min-w-[693px] max-w-full mq800:min-w-full mq1350:flex-1">
          <div className="self-stretch flex flex-col items-center justify-start text-13xl">
            <b className="relative mq800:text-7xl mq450:text-lgi">
              Initial Consultation
            </b>
          </div>
          <div className="w-[636px] flex flex-col items-start justify-start gap-[1px_0px] max-w-full">
            <b
              className="self-stretch relative cursor-pointer mq450:text-lgi"
              onClick={onConceptualModelPlanClick}
            >
              Conceptual Model Plan Package
            </b>
            <div className="relative text-base text-justify">{` – Design & Planning `}</div>
          </div>
          <div className="w-[636px] flex flex-col items-start justify-start gap-[1px_0px] max-w-full">
            <b
              className="relative cursor-pointer mq450:text-lgi"
              onClick={onConstructionDesignTextClick}
            >
              Construction Design
            </b>
            <div className="self-stretch relative text-base text-justify">
              {" "}
              – Detailed planning and 3D modelling to visualize your project
            </div>
          </div>
          <div className="w-[636px] flex flex-col items-start justify-start gap-[1px_0px] max-w-full">
            <b className="relative mq450:text-lgi">Construction Management</b>
            <div className="self-stretch relative text-base text-justify">
              {" "}
              – Precision-led building with regular updates and milestones
            </div>
          </div>
          <div className="w-[642px] flex flex-col items-start justify-start gap-[1px_0px] max-w-full">
            <b className="relative inline-block max-w-full mq450:text-lgi">{`Guaranteed Service Contract `}</b>
            <div className="self-stretch relative text-base whitespace-pre-wrap text-justify">
              {" "}
              –Our guaranteed service contract offers peace of mind and
              reliability
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px_0px]">
            <b
              className="relative cursor-pointer mq450:text-lgi"
              onClick={onFinishingTouchesTextClick}
            >{`Finishing Touches `}</b>
            <div className="self-stretch relative text-base text-justify">
              {" "}
              – Custom interior finishes to make your space truly yours.
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[27px] px-5 box-border max-w-full">
        <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq800:text-13xl mq450:text-5xl">{`Let's Create Something Extraordinary Together `}</h2>
      </div>
      <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start max-w-full">
        <img
          className="w-[906px] relative rounded-xl max-h-full object-cover max-w-full"
          loading="lazy"
          alt=""
          src="/adobestock-575379695-2-1@2x.png"
        />
      </div>
      <footer className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[27px] px-5 box-border max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
        <h2
          className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full cursor-pointer mq800:text-13xl mq450:text-5xl"
          onClick={onReadyToGetClick}
        >
          Ready to get started? Reach out to us now and let's build together!
        </h2>
      </footer>
    </section>
  );
};

export default TheBuildingTraditionProcess;
