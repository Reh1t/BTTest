import { useCallback } from "react";
import { useRouter } from "next/router";

const ConstructionDesign = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='materialAndMethodConsiderat']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton1Click = useCallback(() => {
    router.push("/staircases-pages");
  }, [router]);

  return (
    <div className="pt-44 w-full relative bg-white overflow-hidden flex flex-col items-center justify-start px-0 pb-[30px] box-border gap-[10px_0px] tracking-[normal]">
      <section className="w-[1382px] flex flex-row items-center justify-start pt-0 px-5 pb-[47px] box-border gap-[0px_92px] max-w-full text-left text-5xl text-kuno-red font-footer-bold-text mq750:gap-[0px_92px] mq750:pb-[31px] mq750:box-border mq450:gap-[0px_92px] mq1225:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border min-w-[473px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[20px_0px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
              <h3 className="m-0 relative text-inherit font-normal font-inherit mq450:text-lgi">
                Design
              </h3>
              <h1 className="m-0 w-full md:w-[727px] relative text-21xl font-bold font-inherit inline-block max-w-full mq750:text-13xl mq450:text-5xl">
                <p className="m-0">Mastering Construction Design:</p>
                <p className="m-0">Building Tradition's Signature Approach</p>
              </h1>
              <div className="w-full md:w-[727px] relative text-base text-justify inline-block">
                <p className="m-0">
                  At Building Tradition, we redefine construction design by blending
                  meticulous planning with cutting-edge construction methodologies. Our
                  unique offering extends beyond aesthetic appeal, focusing on strategic
                  material and method selection, innovative solutions to logistical
                  challenges, and the adaptability to implement cost-effective changes.
                </p>
                <p className="m-0">
                  With the added benefit of offering localized, tailor-made expertise to
                  maximize efficiency and reduce costs, Building Tradition is your trusted
                  partner in constructing not just buildings, but legacies. Experience
                  firsthand this unique offering from our team.
                </p>
                <p className="m-0">
                  Embrace the future of construction design with Building Tradition, where
                  innovation meets tradition to save you money and elevate your project.
                </p>
              </div>
            </div>

            <div className="w-[169px] flex flex-row items-start justify-start">
              <button
                className="cursor-pointer py-1.5 pr-[7px] pl-2.5 bg-[transparent] w-[93px] rounded-mini box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
                onClick={onButtonClick}
              >
                <div className="relative text-xs font-footer-bold-text text-sandybrown text-left">
                  READ MORE
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="h-[454px] w-[523px] overflow-hidden shrink-0 flex flex-col items-start justify-start min-w-[523px] max-w-full mq750:min-w-full mq1225:flex-1">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover mq1225:self-stretch mq1225:w-auto"
            loading="lazy"
            alt=""
            src="/adobestock-278545655-2-11@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-7 box-border gap-[27px_0px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
        <h1 className="m-0 w-[987px] relative text-inherit font-bold font-inherit inline-block max-w-full box-border pl-5 pr-5 mq750:text-13xl mq450:text-5xl">
          Beyond Planning - The Art of Construction Design
        </h1>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center max-w-full">
          <img
            className="w-[818px] relative rounded-3xs max-h-full object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/adobestock-278545655-2-12@2x.png"
          />
        </div>
      </section>
      <section className="w-[1280px] flex flex-row flex-wrap items-start justify-start pt-0 px-5 pb-7 box-border gap-[0px_17px] max-w-full text-left text-base text-kuno-red font-footer-bold-text">
        <div className="flex-1 flex flex-col items-start justify-start gap-[18px_0px] min-w-[261px] max-w-full">
          <h3 className="m-0 self-stretch relative text-5xl font-bold font-inherit mq450:text-lgi">
            Innovative Planning and Design
          </h3>
          <div className="w-[346px] relative inline-block max-w-full">
            <p className="m-0">Your vision, our precision</p>
            <p className="m-0">– building excellence together.</p>
          </div>
          <div className="w-[346px] relative inline-block max-w-full">
            <p className="m-0">Beyond aesthetics:</p>
            <p className="m-0">– Shape, finish, and efficiency.</p>
            <p className="m-0">– Tailoring beauty with practicality.</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[18px_0px] max-w-full">
          <h3 className="m-0 w-[402px] relative text-5xl font-bold font-inherit inline-block mq450:text-lgi">{`Strategic Material & Method Selection `}</h3>
          <div className="w-[346px] relative inline-block max-w-full">
            – Optimize costs, enhance efficiency.
          </div>
          <div className="w-[346px] relative inline-block max-w-full">
            – Smart choices for lasting structures.
          </div>
          <div className="w-[346px] relative inline-block max-w-full">
            – Seamless incorporation of universal design principles to promote
            inclusivity and functionality
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[18px_0px] min-w-[261px] max-w-full">
          <h3 className="m-0 self-stretch relative text-5xl font-bold font-inherit mq450:text-lgi">
            Solving Logistical Challenges
          </h3>
          <div className="w-[346px] relative whitespace-pre-wrap inline-block max-w-full">
            – Creative solutions for material delivery anywhere.
          </div>
          <div className="w-[346px] relative inline-block max-w-full">
            – Adaptable to site-specific constraints and considerations.
          </div>
        </div>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-center py-14 px-[67px] box-border gap-[0px_1px] max-w-full text-left text-xl text-kuno-red font-footer-bold-text mq750:py-9 mq750:px-[33px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[423px] max-w-full mq750:min-w-full">
          <div className="relative mq450:text-base">
            Staircases by Building Tradition
          </div>
          <h1 className="m-0 relative text-21xl font-bold font-inherit mq750:text-13xl mq450:text-5xl">
            Design Project
          </h1>
          <div className="w-[544px] relative text-base text-justify inline-block max-w-full">
            Ensure your next build goes smoothly by using our extensive
            experience with staircase design, which is an integral part of our
            conceptual modelling. We also provide pre-finished, ready to
            assemble staircases for your next project.
          </div>
          <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-3 px-5">
            <button
              className="cursor-pointer py-1.5 px-[9px] bg-[transparent] w-[93px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
              onClick={onButton1Click}
            >
              <div className="relative text-xs font-footer-bold-text text-sandybrown text-left">
                READ MORE
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-start justify-start min-w-[425px] max-w-full mq750:min-w-full">
          <img
            className="self-stretch h-[436px] relative max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/photo1@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[27px] box-border max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
        <div
          className="flex-1 flex flex-col items-center justify-center gap-[10px_0px] max-w-full"
          data-scroll-to="materialAndMethodConsiderat"
        >
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[27px] px-5 box-border max-w-full">
            <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq750:text-13xl mq450:text-5xl">
              Material and Method Consideration: A Strategic Choice
            </h1>
          </div>
          <div className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center lg:justify-start py-2.5 px-0 box-border gap-[0px_100px] max-w-full text-5xl mq750:gap-[0px_100px] mq450:gap-[0px_100px] mq1225:flex-wrap">
            <div className="w-[615px] rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-end py-0 px-5 box-border min-w-[615px] max-w-full mq750:min-w-full mq1225:flex-1">
              <img
                className="h-[444px] flex-1 relative max-w-full overflow-hidden object-cover mq1225:flex-1"
                loading="lazy"
                alt=""
                src="/bath5-11@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start p-5 box-border gap-8 max-w-full">
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <h3 className="m-0 text-inherit font-bold font-inherit">
                  Cost Saving Innovations
                </h3>
                <div className="text-base text-justify">
                  <p className="m-0">
                    – Leveraging the latest in efficient building methods
                  </p>
                  <p className="m-0">
                    – Reducing costs with smarter construction strategies
                  </p>
                </div>
              </div>
              <div className="w-full  flex flex-col items-start justify-start gap-1">
                <h3 className="m-0 text-inherit font-bold font-inherit">
                  Material Optimization
                </h3>
                <div className="text-base text-justify">
                  <p className="m-0">
                    – Selecting cost-effective materials without sacrificing quality
                  </p>
                  <p className="m-0">
                    – Tailored material choices for budget-friendly solutions
                  </p>
                </div>
              </div>
              <div className="w-full  flex flex-col items-start justify-start gap-1">
                <h3 className="m-0 text-inherit font-bold font-inherit">
                  Local Expertise, Global Standards
                </h3>
                <div className="text-base text-justify">
                  <p className="m-0">
                    – Custom methods and materials for your area.
                  </p>
                  <p className="m-0">
                    – Maximize local efficiency, minimize expenses.
                  </p>
                </div>
              </div>
              <div className="w-full  flex flex-col items-start justify-start gap-1">
                <h3 className="m-0 text-inherit font-bold font-inherit">
                  Expertise meets Innovation
                </h3>
                <div className="text-base text-justify">
                  <p className="m-0">
                    – Experience and innovation in every design
                  </p>
                  <p className="m-0">
                    – Cutting-edge techniques, tailored to you
                  </p>
                </div>
              </div>
              <div className="w-full  flex flex-col items-start justify-start gap-1">
                <h3 className="m-0 text-inherit font-bold font-inherit">
                  Efficiency without Compromise
                </h3>
                <div className="text-base text-justify">
                  <p className="m-0">
                    – Cost-effective, without cutting corners.
                  </p>
                  <p className="m-0"> – Quality and value in every detail.</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-start pt-0 px-5 pb-[17px] box-border gap-[30px_0px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq750:text-13xl mq450:text-5xl">
          Unveiling the Future of Construction with Building Tradition
        </h1>
        <div className="w-full md:w-[75%] lg:w-[80%] xl:w-[50%] relative text-base text-justify">
          At Building Tradition, we redefine construction design by blending meticulous planning with cutting-edge construction methodologies. Our unique service extends beyond aesthetic appeal, focusing on strategic material and method selection, innovative solutions to logistical challenges, and the adaptability to implement cost-effective changes. With the added benefit of offering localized, tailor-made expertise to maximize efficiency and reduce costs, Building Tradition is your trusted partner in constructing not just buildings, but legacies. Embrace the future of construction design with Building Tradition, where innovation meets tradition to save you money and elevate your project.
        </div>

      </section>
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-center max-w-full">
        <img
          className="w-[818px] relative rounded-3xs max-h-full object-cover max-w-full"
          alt=""
          src="/adobestock-278545655-2-1-1@2x.png"
        />
      </section>
    </div>
  );
};

export default ConstructionDesign;
