import { useCallback } from "react";

const LetUsHelpYou = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='materialContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className="self-stretch flex flex-col items-center justify-start pt-[27px] px-[27px] pb-14 box-border gap-[83px_0px] max-w-full text-center text-21xl text-kuno-red font-footer-bold-text mq750:gap-[83px_0px] mq750:pt-5 mq750:pb-9 mq750:box-border mq450:gap-[83px_0px]"
      data-scroll-to="letUsHelpYou"
    >
      <h1 className="m-0 w-[1280px] relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-13xl mq450:text-5xl">
        Let us help you create the perfect patio for relaxing, entertaining, and
        making memories with family and friends.
      </h1>
      <div className="w-[1306px] flex flex-row items-center justify-center gap-[0px_23px] max-w-full text-left text-xl mq1150:flex-wrap">
        <div className="w-[629px] flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border min-w-[629px] max-w-full mq750:min-w-full mq1150:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] max-w-full">
            <div className="relative font-medium mq450:text-base">
              PATIOS: YOUR OUTDOOR HAVEN
            </div>
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[16px_0px] max-w-full text-21xl">
              <h1 className="m-0 w-[629px] relative text-inherit font-bold font-inherit inline-block mq1050:text-13xl mq450:text-5xl">
                Ready to transform your outdoor space?
              </h1>
              <div className="w-[601px] lg:w-full relative text-base text-justify inline-block max-w-full">
                Connect with us today to schedule a consultation with our team
                and start planning your dream patio. Whether you're looking to
                create a cozy retreat for quiet evenings at home or an expansive
                entertainment area for hosting family and friends, we're here to
                help you bring your vision to life. Let's make your outdoor
                haven a reality!
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[42px]">
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
        <div className="h-[436px] flex-1 rounded-3xs overflow-hidden flex flex-col items-start justify-start bg-[url('/AdobeStock_58670119.jpeg')] bg-cover bg-no-repeat bg-[top] min-w-[425px] max-w-full mq750:min-w-full">
          
        </div>
      </div>
    </section>
  );
};

export default LetUsHelpYou;
