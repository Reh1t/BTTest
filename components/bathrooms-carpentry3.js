import { useCallback } from "react";

const BathroomsCarpentry3 = () => {
  const onButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homeAccessibilityTaxCredit']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-between py-14 pr-[70px] pl-[130px] box-border max-w-full gap-[20px] text-left text-5xl text-kuno-red font-footer-bold-text mq1225:flex-wrap mq750:pl-[65px] mq750:pr-[35px] mq750:box-border mq450:pl-5 mq450:pt-9 mq450:pb-9 mq450:box-border">
      <div className="w-[420px] flex flex-col items-start justify-start gap-[16px_0px] min-w-[420px] max-w-full mq1225:flex-1 mq750:min-w-full">
        <div className="relative mq450:text-lgi">Carpentry</div>
        <b className="w-[406px] relative text-21xl inline-block max-w-full mq750:text-13xl mq450:text-5xl">
          <p className="m-0">Bathrooms</p>
          <p className="m-0">by Building Tradition</p>
        </b>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-2.5 px-5 text-sandybrown">
          <div
            className="w-[181px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center py-1.5 px-[5px] cursor-pointer border-[2px] border-solid border-sandybrown"
            onClick={onButtonContainerClick}
          >
            <b className="w-[167px] relative inline-block whitespace-nowrap mq450:text-lgi">
              LEARN MORE
            </b>
          </div>
        </div>
        <b className="relative text-21xl mq750:text-13xl mq450:text-5xl">
          Dream. Design. Bathe.
        </b>
      </div>
      <div className="h-[311px] w-[595px] overflow-hidden shrink-0 flex flex-col items-start justify-start min-w-[595px] max-w-full mq1225:flex-1 mq1050:min-w-full">
        <img
          className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover mq1225:self-stretch mq1225:w-auto"
          alt=""
          src="/adobestock-471485886-1-11@2x.png"
        />
      </div>
    </section>
  );
};

export default BathroomsCarpentry3;
