import DesignProjectStaircase from "../components/design-project-staircase";
import HiddenRefrigeratorsCustomCa from "../components/hidden-refrigerators-custom-ca";
import BoxContainer from "../components/box-container";
import FrameComponent from "../components/frame-component";
import CTA from "../components/c-t-a";

const Kitchens = () => {
  return (
    <div className="w-full h-[3772px] relative bg-white overflow-hidden flex flex-row flex-wrap items-start justify-start tracking-[normal]">
      <DesignProjectStaircase />
      <HiddenRefrigeratorsCustomCa />
      <section className="w-[1440px] !m-[0] absolute top-[1414px] left-[0px] bg-white overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-center p-[27px] box-border max-w-full text-center text-21xl text-kuno-red font-footer-bold-text">
        <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-5xl mq1050:text-13xl">
          Ignite your passion for cooking and creativity
        </h2>
      </section>
      <BoxContainer />
      <section
        className="w-full !m-[0] absolute top-[1680px] left-[0px] bg-white overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-start py-14 pr-[62px] pl-14 box-border gap-[130px_124px] max-w-full text-left text-5xl text-kuno-red font-footer-bold-text lg:gap-[130px_124px] lg:pl-7 lg:pr-[31px] lg:box-border mq450:gap-[130px_124px] mq750:gap-[130px_124px]"
        data-scroll-to="personlizedServices"
      >
        <div className="h-[436px] flex-1 rounded-3xs overflow-hidden flex flex-col items-start justify-start bg-[url('/adobestock-471485886-1-15@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[335px] max-w-full">
          <img
            className="self-stretch h-[436px] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/adobestock-471485886-1-15@2x.png"
          />
        </div>
        <div className="h-40 w-[544px] flex flex-row flex-wrap items-start justify-start relative gap-[16px] max-w-full">
          <div className="absolute !m-[0] top-[0px] left-[0px] mq450:text-lgi">
            COMMITMENT GUARANTEED
          </div>
          <h2 className="!m-[0] absolute top-[44px] left-[0px] text-21xl font-bold font-inherit mq450:text-5xl mq1050:text-13xl">
            Personalized Service
          </h2>
          <div className="w-[499px] absolute !m-[0] top-[106px] left-[0px] text-base inline-block">
            From initial consultation to final installation, our dedicated team
            provides personalized attention and expertise, guiding you through
            every step of the journey to achieve your dream kitchen vision.
          </div>
        </div>
      </section>
      <section className="h-[696px] w-full !m-[0] absolute top-[2228px] left-[0px] flex flex-row flex-wrap items-start justify-start max-w-full text-center text-21xl text-kuno-red font-footer-bold-text">
        <div className="w-[1440px] !m-[0] absolute top-[0px] left-[0px] bg-white overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-center py-[27px] pr-[21px] pl-5 box-border max-w-full">
          <h2 className="m-0 w-[1205px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-5xl mq1050:text-13xl">
            With our guaranteed service contract, and our quality-ensured
            warranty; you and your family are protected.
          </h2>
        </div>
        <div className="w-[1440px] !m-[0] absolute top-[146px] left-[0px] overflow-hidden flex flex-row flex-wrap items-center justify-center max-w-full">
          <img
            className="w-[1000px] relative rounded-3xs max-h-full object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/adobestock-89308963-1-1-1@2x.png"
          />
        </div>
      </section>
      <FrameComponent />
      <CTA />
    </div>
  );
};

export default Kitchens;
