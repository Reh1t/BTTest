import { useCallback } from "react";

const CustomFrame = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='personlizedServicesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[4.188rem] pb-[1.688rem] box-border max-w-full text-left text-[1.25rem] text-kuno-red font-footer-bold-text mq750:pl-[2.063rem] mq750:pr-[2.063rem] mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[5.188rem_0rem] max-w-full mq750:gap-[2.563rem_0rem] mq450:gap-[1.313rem_0rem]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_1.875rem] max-w-full lg:flex-wrap">
          <div className="w-[38.875rem] flex flex-col items-start justify-start pt-[2.531rem] px-[0rem] pb-[0rem] box-border min-w-[38.875rem] max-w-full lg:flex-1 mq1050:min-w-full mq450:pt-[1.625rem] mq450:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem_0rem]">
              <div className="relative font-medium mq450:text-[1rem]">
                CARPENTRY
              </div>
              <h2 className="m-0 w-[11rem] relative text-[2.5rem] font-bold font-inherit inline-block mq1050:text-[2rem] mq450:text-[1.5rem]">
                Kitchens
              </h2>
              <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.75rem] gap-[1rem_0rem] text-[1.5rem]">
                <b className="relative mq450:text-[1.188rem]">
                  by Building Tradition
                </b>
                <div className="self-stretch h-[9rem] relative text-[1rem] text-justify inline-block">
                  At Building Tradition, we understand that the kitchen is the
                  heart of the home, where cherished memories are made and
                  culinary creations come to life. Our team of skilled craftsmen
                  and designers work tirelessly to bring your vision to reality,
                  whether you seek a modern, sleek aesthetic or a timeless,
                  traditional charm. From custom cabinetry to state-of-the-art
                  appliances, we meticulously craft every detail to ensure both
                  functionality and beauty. With Building Tradition, your dream
                  kitchen is within reach, promising not only a space of
                  culinary inspiration but also a gathering place for family and
                  friends to create lasting memories.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[3.063rem]">
                <button
                  className="cursor-pointer py-[0.375rem] px-[0.563rem] bg-[transparent] w-[5.813rem] rounded-mini box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
                  onClick={onButtonClick}
                >
                  <div className="relative text-[0.75rem] font-footer-bold-text text-sandybrown text-left">
                    READ MORE
                  </div>
                </button>
              </div>
            </div>
          </div>
          <img
            className="h-[27.25rem] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover min-w-[26.563rem] mq750:min-w-full"
            loading="lazy"
            alt=""
            src="/photo3@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.813rem] box-border max-w-full text-center text-[2.5rem]">
          <h2 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-[2rem] mq450:text-[1.5rem]">
            Designs that sizzle, Kitchens that shine
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CustomFrame;
