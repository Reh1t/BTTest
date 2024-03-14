import { useCallback } from "react";
import { useRouter } from "next/router";
const AccessibleConstruction = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='accessibleSection2']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton1Click = useCallback(() => {
    router.push("/addition-renovations");
  }, [router]);

  const onCallUsClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onButton2Click = useCallback(() => {
    window.open(
      "https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/federal-government-budgets/budget-2022-plan-grow-economy-make-life-more-affordable/home-accessibility-tax-credit.html"
    );
  }, []);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-14 px-0 pb-0 box-border tracking-[normal]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-7 pr-[23px] pl-[49px] box-border max-w-full mq750:pl-6 mq750:box-border">
        <header className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[0px_37px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text mq750:gap-[0px_37px]">
          <div className="flex flex-col items-start justify-start gap-[16px_0px] max-w-full">
            <h1 className="m-0 w-full md:w-[637px] relative text-21xl font-bold font-inherit inline-block max-w-full">{`Accessible Construction`}</h1>
            <div className="w-[544px] relative text-xl font-medium inline-block whitespace-nowrap max-w-full">
              by Building Tradition
            </div>
            <div className="flex flex-col items-center justify-start gap-[28px_0px] text-justify text-base">
              <div className="w-[100%] max-w-[651px] relative inline-block text-base md:text-lg lg:text-xl">
                Building Tradition offers homes designed to grow alongside you and your family, seamlessly adapting to life's transitions. Our Custom Home Additions are designed for lifelong comfort, accessibility, and independence. Our expert team collaborates with clients to create tailored solutions that evolve with their needs, whether accommodating growing families, aging relatives, or individuals with mobility challenges. From seamless integration of accessibility features to prioritizing ease of maintenance and cleanliness, our custom home additions are crafted to enhance quality of life for years to come. Additionally, eligible renovations may qualify for the Home Accessibility Tax Credit (HATC), providing potential savings of up to $10,000 for seniors or individuals with disabilities. Partner with us to redefine your living space and enjoy the peace of mind that comes from living in a home that adapts to you.
              </div>

              <button className="cursor-pointer py-1.5 pr-[7px] pl-2.5 bg-[transparent] w-[99px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
                onClick={onButtonClick}
              >
                <div className="relative text-xs font-footer-bold-text text-sandybrown text-left whitespace-nowrap">
                  LEARN MORE
                </div>
              </button>
            </div>
          </div>
          <div className="h-[468px] flex-1 rounded-3xs overflow-hidden flex flex-col items-start justify-start min-w-[442px] max-w-full mq750:min-w-full">
            <img
              className="self-stretch h-[468px] w-full relative rounded-3xs max-w-full overflow-hidden object-cover"
              alt=""
              src="/photo-placeholder-31@2x.png"
            />
          </div>



        </header>
      </section>
      <section
        className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start pt-[27px] px-0 pb-0 box-border gap-[27px_0px] max-w-full text-center text-21xl text-kuno-red font-footer-bold-text"
        data-scroll-to="accessibleSection2"
      >
        <h1 className="m-0 w-[1035px] relative text-inherit font-bold font-inherit inline-block max-w-full box-border pl-5 pr-5 mq750:text-13xl mq450:text-5xl">
          Your Home, Your Lifelong Companion:Growing with You Through Life's
          Transitions
        </h1>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start max-w-full">
          <img
            className="w-[754px] relative rounded-3xs max-h-full object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/adobestock-278545655-2-1@2x.png"
          />
        </div>
      </section>
      <section className="flex flex-row items-start justify-start py-0 px-5 box-border gap-[0px_18px] max-w-full text-justify text-base text-kuno-red font-footer-bold-text mq1225:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[22px_0px] max-w-full">
          <h3 className="m-0 w-[402px] relative text-5xl font-bold font-inherit text-left inline-block mq450:text-lgi">
            Lifelong Comfort and Independence
          </h3>
          <div className="relative inline-block w-full">
            – Design a home addition that prioritizes comfort, accessibility,
            and independence for lifelong enjoyment
          </div>
          <div className="relative inline-block w-full">
            <p className="m-0">
              – Ensure your living space evolves with your changing needs and
              accommodates growing families, aging relatives, or mobility
              challenges
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[18px_0px] max-w-full">
          <h3 className="m-0 w-[402px] relative text-5xl font-bold font-inherit text-left inline-block mq450:text-lgi">
            Tailored Solutions for Every Stage of Life
          </h3>
          <div className="relative inline-block w-full">
            – Seamlessly integrate accessibility features into your home
            addition to promote independence and ease of movement.
          </div>
          <div className="relative inline-block w-full">
            – Prioritize ease of maintenance and cleanliness to enhance quality
            of life for occupants of all ages and abilities.
          </div>
          <div className="relative inline-block w-full">
            – Seamless incorporation of universal design principles to promote
            inclusivity and functionality
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[18px_0px] max-w-full">
          <h3 className="m-0 w-[402px] relative text-5xl font-bold font-inherit text-left inline-block mq450:text-lgi">
            <p className="m-0">Tailored Accessibility:</p>
            <p className="m-0">{`Washrooms for Comfort and Inclusivity `}</p>
          </h3>
          <div className="relative inline-block w-full">
            – Personalized design approach to ensure washrooms meet individual
            accessibility needs
          </div>
          <div className="relative inline-block w-full">
            – Integration of grab bars, roll-in showers, and adjustable fixtures
            for ease of use
          </div>
          <div className="relative inline-block w-full">
            – Collaboration with clients to create a space that prioritizes
            comfort, safety, and independence
          </div>
        </div>
      </section>
      <section className="w-[1420px] flex flex-row items-center justify-center py-0 px-5 box-border gap-[0px_49px] max-w-full text-left text-xl text-kuno-red font-footer-bold-text mq1225:flex-wrap mq750:gap-[0px_49px]">
        <div className="w-[651px] flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border min-w-[651px] max-w-full mq1225:flex-1 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px_0px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[544px] relative font-medium inline-block shrink-0 max-w-full mq450:text-base">{`Accessible Home Additions `}</div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[16px_0px] max-w-full text-21xl">
              <h1 className="m-0 w-[637px] relative text-inherit font-bold font-inherit inline-block max-w-full mq750:text-13xl mq450:text-5xl">
                Age in Place: Homes Crafted for Lifelong Comfort and Well-Being
              </h1>
              <div className="relative text-base text-justify inline-block">
                Ensure your next build goes smoothly by using our extensive
                experience with staircase design, which is an integral part of
                our conceptual modelling. We also provide pre-finished, ready to
                assemble staircases for your next project.
              </div>
            </div>
            <button
              className="cursor-pointer py-1.5 pr-[7px] pl-2.5 bg-[transparent] w-[99px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
              onClick={onButton1Click}
            >
              <div className="relative text-xs font-footer-bold-text text-sandybrown text-left whitespace-nowrap">
                LEARN MORE
              </div>
            </button>
          </div>
        </div>
        <div className="h-[468px] flex-1 rounded-3xs overflow-hidden flex flex-col items-start justify-start bg-[url('/adobestock-542185006-1-1-1@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[442px] max-w-full mq750:min-w-full">
          <img
            className="self-stretch h-[468px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/adobestock-471485886-1-17@2x.png"
          />
        </div>
      </section>
      <section className="w-[1216px] flex flex-row items-start justify-start pt-0 pb-[19px] pr-[27px] pl-5 box-border max-w-full text-justify text-21xl text-kuno-red font-footer-bold-text">
        <div className="flex-1 flex flex-col items-center justify-start gap-[20px_0px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border max-w-full text-center">
            <h1 className="m-0 relative text-inherit font-bold font-inherit mq750:text-13xl mq450:text-5xl">
              Home Accessibility Tax Credit (HATC) Eligibility
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center pt-0 px-0 pb-[47px] box-border gap-[0px_44px] max-w-full text-xl mq1050:flex-wrap mq750:gap-[0px_44px] mq750:pb-[31px] mq750:box-border">
            <div className="h-[424px] w-[488px] rounded-3xs overflow-hidden shrink-0 flex flex-col items-start justify-start bg-[url('/AdobeStock_296427422.jpeg')] bg-cover bg-no-repeat bg-[top] min-w-[488px] max-w-full mq1050:flex-1 mq750:min-w-full">
              <img
                className="self-stretch h-[424px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/AdobeStock_296427422.jpeg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border min-w-[414px] max-w-full mq750:min-w-full">
              <div className="self-stretch flex flex-col items-center justify-start gap-[32px_0px] mq750:gap-[32px_0px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px]">
                  <div className="relative font-medium inline-block mq450:text-base">
                    Explore potential savings with the Home Accessibility Tax
                    Credit (HATC) for eligible renovations.
                  </div>
                  <div className="relative font-medium inline-block mq450:text-base">
                    Seniors or individuals with disabilities may qualify for up
                    to $10,000 in expenses claimed for renovations that enhance
                    accessibility and safety.
                  </div>
                </div>
                <button
                  className="cursor-pointer py-1.5 pr-[7px] pl-2.5 bg-[transparent] w-[99px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
                  onClick={onButton2Click}
                >
                  <div className="relative text-xs font-footer-bold-text text-sandybrown text-left whitespace-nowrap">
                    LEARN MORE
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-[18px] box-border max-w-full">
            <h1 className="m-0 w-[1140px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq750:text-13xl mq450:text-5xl">
              Transform Your Living Space: Contact us today for a Custom Home
              Addition for Lifelong Comfort and Independence
            </h1>
          </div>
        </div>
      </section>
      <footer className="self-stretch bg-sandybrown overflow-hidden flex flex-col items-center justify-start p-[45px] box-border gap-[30px_0px] max-w-full text-left text-45xl text-kuno-red font-footer-bold-text mq1050:pl-[22px] mq1050:pr-[22px] mq1050:box-border mq750:gap-[30px_0px]">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq750:text-32xl mq450:text-19xl">{`Ready to transform your space? `}</h1>
        <h3 className="m-0 w-[960px] h-14 relative text-5xl whitespace-pre-wrap text-center inline-block max-w-full font-inherit mq450:text-lgi">
          <span className="font-medium">
            With our expertise and dedication, let's bring your home Accessible
            Construction
          </span>
          <b>{` `}</b>
          <span className="font-medium">
            {" "}
            project to life. Contact us today to begin your journey!
          </span>
        </h3>
        <button 
        className="cursor-pointer pt-[7px] px-[7px] pb-2 bg-white w-[212px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-solid border-sandybrown hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
        onClick={onCallUsClick}
        >
          <div className="relative text-17xl font-medium font-footer-bold-text text-kuno-red text-left">
            CALL US
          </div>
        </button>
      </footer>
    </div>
  );
};

export default AccessibleConstruction;
