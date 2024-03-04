import { useCallback } from "react";
import { useRouter } from "next/router";

const HiddenRefrigeratorsCustomCa = () => {
  const router = useRouter();

  const onInnovativeDesignTextClick = useCallback(() => {
    router.push("/conceptual-modelling-plannin1");
  }, [router]);

  return (
    <section className="w-full !m-[0] absolute top-[548px] left-[0px] flex flex-col items-start justify-start max-w-full text-center text-21xl text-kuno-red font-footer-bold-text">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-start justify-center py-[27px] px-20 box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
          <h2 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-5xl mq1050:text-13xl">
            Designs that sizzle, Kitchens that shine
          </h2>
        </div>
        <div className="self-stretch bg-white flex flex-row flex-wrap items-start justify-center py-7 pr-[77px] pl-[78px] box-border max-w-full text-left text-5xl mq750:pl-[39px] mq750:pr-[38px] mq750:box-border">
          <div className="w-[418px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-2 box-border gap-[22px_0px] max-w-full">
            <b
              className="self-stretch relative cursor-pointer mq450:text-lgi"
              onClick={onInnovativeDesignTextClick}
            >{`Innovative Design `}</b>
            <div className="w-[402px] relative text-base text-justify inline-block">
              Embrace the future of kitchen technology with our smart solutions,
              offering convenience, efficiency, and connectivity at your
              fingertips for a modern culinary experience.
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start py-0 px-[9px] box-border gap-[18px_0px] min-w-[179px] max-w-full ml-[-3px]">
            <b className="self-stretch relative mq450:text-lgi">
              Customized Creations
            </b>
            <div className="w-[410px] relative text-base text-justify inline-block max-w-full">
              Tailored to your unique lifestyle, our kitchens are meticulously
              designed to reflect your personal taste and meet your specific
              needs
            </div>
          </div>
          <div className="w-[426px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-2 box-border gap-[18px_0px] max-w-full ml-[-3px]">
            <b className="self-stretch relative mq450:text-lgi">
              Timeless Appeal
            </b>
            <div className="w-[410px] relative text-base text-justify inline-block">
              With a focus on classic design elements and enduring aesthetics,
              our kitchens exude timeless charm, promising a space that remains
              stylish and relevant for years to come
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center max-w-full">
        <img
          className="w-[952px] relative rounded-3xs max-h-full object-cover max-w-full"
          loading="lazy"
          alt=""
          src="/adobestock-89308963-1-11@2x.png"
        />
      </div>
    </section>
  );
};

export default HiddenRefrigeratorsCustomCa;
