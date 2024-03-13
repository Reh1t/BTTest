import { useCallback } from "react";
import CustomFrame from "../components/custom-frame";
import { useRouter } from "next/router";
import PersonalizedServices1 from "../components/personalized-services1";
import PersonalizedServices from "../components/personalized-services";
import DesignInspiration from "../components/design-inspiration";
import CTA1 from "../components/c-t-a1";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const Kitchennn = () => {
  const router = useRouter();

  const onInnovativeDesignTextClick = useCallback(() => {
    router.push("/conceptual-modelling-plannin1");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[3.5rem] px-[0rem] pb-[0rem] box-border  tracking-[normal]">
      <Navbar />
      <CustomFrame />
      <section className="self-stretch bg-white flex flex-row flex-wrap items-start justify-start py-[1.75rem] pr-[4.813rem] pl-[4.875rem] box-border gap-[0.063rem] max-w-full text-left text-[1.5rem] text-kuno-red font-footer-bold-text mq750:pl-[2.438rem] mq750:pr-[2.375rem] mq750:box-border">
        <div className="w-[26.125rem] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[0rem] px-[0.5rem] box-border gap-[1.375rem_0rem] max-w-full">
          <b
            className="self-stretch relative cursor-pointer mq450:text-[1.188rem]"
            onClick={onInnovativeDesignTextClick}
          >{`Innovative Design `}</b>
          <div className="self-stretch relative text-[1rem] text-justify inline-block">
            Embrace the future of kitchen technology with our smart solutions,
            offering convenience, efficiency, and connectivity at your
            fingertips for a modern culinary experience.
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start py-[0rem] px-[0.563rem] box-border gap-[1.125rem_0rem] min-w-[17.813rem] max-w-full">
          <b className="self-stretch relative mq450:text-[1.188rem]">
            Customized Creations
          </b>
          <div className="w-[25.625rem] relative text-[1rem] text-justify inline-block max-w-full">
            Tailored to your unique lifestyle, our kitchens are meticulously
            designed to reflect your personal taste and meet your specific needs
          </div>
        </div>
        <div className="w-[26.625rem] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[0rem] px-[0.5rem] box-border gap-[1.125rem_0rem] max-w-full">
          <b className="self-stretch relative mq450:text-[1.188rem]">
            Timeless Appeal
          </b>
          <div className="self-stretch relative text-[1rem] text-justify inline-block">
            With a focus on classic design elements and enduring aesthetics, our
            kitchens exude timeless charm, promising a space that remains
            stylish and relevant for years to come
          </div>
        </div>
      </section>
      <section className="flex flex-row items-center justify-center pt-[0rem] px-[0rem] pb-[1.688rem] box-border max-w-full">
        <div className="h-full flex-1 relative overflow-hidden max-w-full">
          <img
            className="relative h-full rounded-3xs max-h-full w-[59.5rem] object-cover"
            loading="lazy"
            alt=""
            src="/adobestock-89308963-1-11@2x.png"
          />
        </div>
      </section>
      <PersonalizedServices1 />
      <PersonalizedServices />
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[1.688rem] box-border max-w-full text-center text-[2.5rem] text-kuno-red font-footer-bold-text">
        <h2 className="m-0 w-full relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq1050:text-[2rem] mq450:text-[1.5rem]">
          With our guaranteed service contract, and our quality-ensured
          warranty; you and your family are protected.
        </h2>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2.563rem] box-border w-full mq750:pb-[1.688rem] mq750:box-border">
        <div className="h-[34.363rem] flex-1 relative overflow-hidden w-full">
          <img
            className="absolute h-full rounded-3xs max-h-full w-full object-cover"
            loading="lazy"
            alt=""
            src="/adobestock-89308963-1-1-1@2x.png"
          />
        </div>
      </section>
      <DesignInspiration />
      <CTA1 />
      <Footer/>
    </div>
  );
};

export default Kitchennn;
