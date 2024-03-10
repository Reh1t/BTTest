import { useCallback } from "react";

const DesignProjectStaircase = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='personlizedServices']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="w-full !m-[0] absolute top-[0px] left-[0px] bg-white overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-start py-14 pr-[73px] pl-[67px] box-border gap-[30px_24px] max-w-full text-left text-xl text-kuno-red font-footer-bold-text mq750:pl-[33px] mq750:pr-9 mq750:box-border">
      <div className="w-[622px] flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[16px] min-w-[335px] max-w-full">
        <div className="relative font-medium mq450:text-base">CARPENTRY</div>
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-[16px_0px] text-21xl">
          <h2 className="m-0 w-44 relative text-inherit font-bold font-inherit inline-block mq450:text-5xl mq1050:text-13xl">
            Kitchens
          </h2>
          <b className="relative text-5xl mq450:text-lgi">
            by Building Tradition
          </b>
          <div className="relative text-base text-justify inline-block">
            At Building Tradition, we understand that the kitchen is the heart
            of the home, where cherished memories are made and culinary
            creations come to life. Our team of skilled craftsmen and designers
            work tirelessly to bring your vision to reality, whether you seek a
            modern, sleek aesthetic or a timeless, traditional charm. From
            custom cabinetry to state-of-the-art appliances, we meticulously
            craft every detail to ensure both functionality and beauty. With
            Building Tradition, your dream kitchen is within reach, promising
            not only a space of culinary inspiration but also a gathering place
            for family and friends to create lasting memories.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[49px]">
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
      <div className="h-[436px] w-[654px] rounded-3xs overflow-hidden flex items-center justify-center">
        <div className="w-full h-full bg-[url('/AdobeStock_79176676.jpeg')] bg-cover bg-no-repeat bg-center">
          <img
            className="w-full h-full object-cover"
            alt=""
            src="/AdobeStock_79176676.jpeg"
          />
        </div>
      </div>

    </section>
  );
};

export default DesignProjectStaircase;
