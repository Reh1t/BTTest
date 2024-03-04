import { useCallback } from "react";

const TextFrameCustomHomes = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='theBuildingTraditionProcess']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="w-[1392px] flex flex-row items-center justify-start pt-0 px-5 pb-[47px] box-border gap-[0px_35px] max-w-full text-left text-xl text-kuno-red font-footer-bold-text mq800:gap-[0px_35px] mq800:pb-[31px] mq800:box-border mq1125:flex-wrap">
      <div className="w-[637px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[16px_0px] min-w-[637px] max-w-full shrink-0 mq800:min-w-full mq1125:flex-1">
        <div className="w-[544px] relative font-medium inline-block max-w-full mq450:text-base">
          CARPENTRY
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[16px_0px] max-w-full text-21xl">
          <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq800:text-13xl mq450:text-5xl">
            Custom Homes
          </h2>
          <div className="flex flex-col items-center justify-start gap-[28px_0px] max-w-full text-justify text-base">
            <div className="w-[617px] relative inline-block">{`At Building Tradition, we elevate the art of custom home creation, meticulously turning your dreams into tangible realities. Our approach is deeply collaborative, ensuring that every detail of your vision is understood and brought to life with unparalleled precision and care. Whether it’s transforming an existing space or constructing a bespoke dream home from the foundation up, our expertise is your guarantee. With us, you're not just building a house; you're crafting your future in a space designed for living beautifully. `}</div>
            <div className="w-[133px] flex flex-row items-start justify-start py-0 pr-0 pl-[34px] box-border">
              <button
                className="cursor-pointer py-1.5 pr-[7px] pl-2.5 bg-[transparent] flex-1 rounded-mini overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
                onClick={onButtonClick}
              >
                <div className="relative text-xs font-footer-bold-text text-sandybrown text-left whitespace-nowrap">
                  LEARN MORE
                </div>
              </button>
            </div>
          </div>
        </div>
        <b className="w-[637px] relative text-5xl inline-block text-justify mq450:text-lgi">
          Choose Building Tradition, where your dream home becomes an exquisite
          reality.
        </b>
      </div>
      <div className="h-[590.6px] flex-1 rounded-3xs overflow-hidden flex flex-col items-start justify-start bg-[url('/adobestock-471485886-1-19@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[442px] max-w-full mq800:min-w-full">
        <img
          className="self-stretch h-[590.6px] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
          alt=""
          src="/adobestock-471485886-1-19@2x.png"
        />
      </div>
    </section>
  );
};

export default TextFrameCustomHomes;
