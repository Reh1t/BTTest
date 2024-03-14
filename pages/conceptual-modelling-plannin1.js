import { useCallback } from "react";
import { useRouter } from "next/router";

const ConceptualModellingPlannin1 = () => {
  const router = useRouter();

  const onTheConceptualModelClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <div className="pt-32 w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-center py-5 px-0 box-border max-w-full [row-gap:20px] text-left text-5xl text-kuno-red font-footer-bold-text">
        <div className="flex-1 flex flex-col items-start justify-start py-0 pl-5 pr-5 box-border gap-[16px_0px] min-w-[462px] max-w-full mq750:min-w-full">
          <h3 className="m-0 relative text-inherit font-normal font-inherit mq450:text-lgi">
            Design
          </h3>
          <h1 className="m-0 w-full md:w-[637px] relative text-21xl font-bold font-inherit inline-block max-w-full mq750:text-13xl mq450:text-5xl">
            <p className="m-0">Conceptual Modelling</p>
            <p className="m-0">{` & Planning`}</p>
          </h1>
          <div className="w-full md:w-[623px] relative text-base text-justify max-w-full">
            Embark on your renovation or new build project with confidence by leveraging Building Tradition's Conceptual Model Plan Package. Our service offers a comprehensive approach to project planning, combining expertise, personalized consultations, and detailed model plans to bring your vision to life. From initial consultation to final draft plans, we prioritize your needs and ensure a collaborative environment to refine ideas and make informed decisions. With our support, you'll save time, money, and resources, ultimately achieving a streamlined and perfect planning stage for your dream project.
          </div>

          <h3
            className="m-0 w-full md:w-[623px] relative text-inherit text-orangered text-justify inline-block max-w-full cursor-pointer font-inherit mq450:text-lgi"
            onClick={onTheConceptualModelClick}
          >
            <p className="m-0">
              <span className="font-footer-bold-text">{`The `}</span>
              <b className="font-footer-bold-text">Conceptual Model Plan</b>
              <span></span>
            </p>
            <p className="m-0">
              by Building Tradition is the solution you need! Is The Solution
              You Need!
            </p>
          </h3>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start py-0 px-5 box-border min-w-[468px] max-w-full mq750:min-w-full">
          <img
            className="self-stretch h-[590.6px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/photo-placeholder1@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start max-w-full text-center text-21xl text-kuno-red font-footer-bold-text">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[30px] px-5 box-border max-w-full">
          <h1 className="m-0 w-[794px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq750:text-13xl mq450:text-5xl">
            Benefits of Choosing Building Tradition
          </h1>
        </div>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center pt-2.5 pb-[45px] pr-7 pl-[34px] box-border gap-[0px_91px] max-w-full text-left text-5xl text-kuno-red font-footer-bold-text lg:flex-wrap lg:justify-center mq750:gap-[0px_91px] mq450:gap-[0px_91px] mq450:pt-5 mq450:pb-[29px] mq450:box-border">
        <div className="h-[374px] w-[559px] overflow-hidden shrink-0 flex flex-col items-center justify-center relative gap-[10px_0px] min-w-[559px] max-w-full lg:flex-1 mq750:min-w-full">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover lg:self-stretch lg:w-auto"
            alt=""
            src="/design-conceptual-1@2x.png"
          />
          <img
            className="w-[310px] h-[245px] absolute !m-[0] top-[calc(50%_-_122.5px)] left-[calc(50%_-_154.5px)] z-[1]"
            loading="lazy"
            alt=""
            src="/vector2.svg"
          />
        </div>
        <div className="w-[504px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[8px_0px] min-w-[504px] max-w-full lg:flex-1 mq750:min-w-full">
          <h3 className="m-0 w-[337px] relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-lgi">
            <ul className="m-0 font-inherit text-inherit pl-8">
              <li>Personalized Consultation</li>
            </ul>
          </h3>
          <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-lgi">
            <ul className="m-0 font-inherit text-inherit pl-8">
              <li>{`Continuous Support & 
Expert Guidance`}</li>
            </ul>
          </h3>
          <h3 className="m-0 w-[312px] relative text-inherit font-bold font-inherit inline-block mq450:text-lgi">
            <ul className="m-0 font-inherit text-inherit pl-8">
              <li>Confidence in Execution</li>
            </ul>
          </h3>
          <h3 className="m-0 w-[382px] relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-lgi">
            <ul className="m-0 font-inherit text-inherit pl-8">
              <li>Decades of Industry Expertise</li>
            </ul>
          </h3>
        </div>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center py-0 px-[19px] box-border gap-[0px_44px] min-h-[658px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text lg:flex-wrap lg:justify-center mq750:gap-[0px_44px]">
        <div className="w-[697px] flex flex-col items-center justify-center p-5 box-border min-w-[697px] max-w-full lg:flex-1 mq1050:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-[3px] box-border gap-[16px_0px] max-w-full">
            <h1 className="m-0 w-[637px] relative text-inherit font-bold font-inherit inline-block max-w-full mq750:text-13xl mq450:text-5xl">
              BLUEPRINT YOUR VISION
            </h1>
            <div className="self-stretch relative text-base text-justify">
              <p className="m-0">
                Embark on your renovation or new build project with confidence
                by
              </p>
              <p className="m-0">{`Tailored Conceptual Modelling & Planning for Precision-Driven Project Outcomes`}</p>
            </div>
          </div>
          <div className="w-[645px] h-[366.6px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-[78px] box-border max-w-full mq750:pl-[39px] mq750:pr-[39px] mq750:box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
              loading="lazy"
              alt=""
              src="/modelplanspage2-1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 box-border max-w-full text-5xl">
            <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-lgi">
              Experience the Building Tradition difference!
            </h3>
          </div>
          <div className="self-stretch h-[69px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-0 px-[34px] box-border">
            <img
              className="w-[301px] flex-1 relative max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/modelplanspage2-1-1@2x.png"
            />
          </div>
        </div>
        <div className="h-[621px] w-[491px] flex flex-col items-center justify-center p-5 box-border min-w-[491px] max-w-full lg:flex-1 mq750:min-w-full">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full lg:self-stretch lg:w-auto"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[27px] px-5 box-border max-w-full">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq750:text-13xl mq450:text-5xl">
            What our Conceptual Model Plan Package Includes:
          </h1>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center max-w-full">
          <img
            className="w-[780px] relative rounded-3xs max-h-full object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/adobestock-278545655-2-11@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch bg-white flex flex-row flex-wrap items-start justify-start py-6 px-[60px] box-border max-w-full [row-gap:20px] text-left text-base text-kuno-red font-footer-bold-text mq750:pl-[30px] mq750:pr-[30px] mq750:box-border">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start py-0 px-2 box-border gap-[22px_0px] min-w-[241px] max-w-full">
          <h3 className="m-0 w-[389px] relative text-5xl font-bold font-inherit inline-block max-w-[110%] shrink-0 mq450:text-lgi">
            In-Home/On Site Consultation
          </h3>
          <div className="w-[307px] relative inline-block">
            – Collaborative brainstorming session to discuss project ideas
          </div>
          <div className="w-[308px] relative inline-block">
            – Detailed measurements and gathering of necessary project details
          </div>
          <div className="w-[308px] relative inline-block">
            – Ensuring all questions and concerns are addressed
          </div>
        </div>
        <div className="w-[318px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-[9px] box-border gap-[18px_0px]">
          <h3 className="m-0 w-[311px] relative text-5xl font-bold font-inherit inline-block mq450:text-lgi">{`Model Drafts & Estimates`}</h3>
          <div className="w-[299px] relative inline-block">
            – Detailed breakdown of pricing for better understanding and
            confidence
          </div>
          <div className="w-[299px] relative inline-block">
            – Opportunity for revisions and adjustments based on initial
            feedback
          </div>
        </div>
        <div className="w-[315px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-1.5 box-border gap-[18px_0px]">
          <h3 className="m-0 self-stretch relative text-5xl font-bold font-inherit mq450:text-lgi">
            Follow-Up Model Sessions
          </h3>
          <div className="w-[310px] relative inline-block">
            – Phone consultations for ongoing support
          </div>
          <div className="w-[307px] relative inline-block">
            – Refinement of ideas and making necessary adjustments
          </div>
          <div className="w-[308px] relative inline-block">
            – Ensuring project vision remains on track throughout the process
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start py-0 px-2 gap-[18px_0px]">
          <h3 className="m-0 w-[309px] relative text-5xl font-bold font-inherit whitespace-pre-wrap inline-block mq450:text-lgi">
            Final Set of Plans
          </h3>
          <div className="w-[308px] relative inline-block">
            – Revised estimates and material schedules for accurate quoting and
            planning
          </div>
          <div className="w-[308px] relative inline-block">
            – Lifelike 3D representations for visualizing the end result
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConceptualModellingPlannin1;
