import TextFrameCustomHomes from "../components/text-frame-custom-homes";
import RightBox from "../components/right-box";
import TheBuildingTraditionProcess from "../components/the-building-tradition-process";

const CustomHomes = () => {
  return (
    <div className="pt-40 w-full relative bg-white overflow-hidden flex flex-col items-center justify-start px-0 pb-0 box-border gap-[10px_0px] tracking-[normal] text-left text-21xl text-kuno-red font-footer-bold-text">
      <TextFrameCustomHomes />
      <div className="flex flex-col items-center justify-start pt-0 px-5 pb-[17px] box-border max-w-full">
        <h2 className="m-0 relative text-inherit font-bold font-inherit mq800:text-13xl mq450:text-5xl">
          Why Choose Us?
        </h2>
        <h2 className="m-0 relative text-inherit font-normal font-inherit mq800:text-13xl mq450:text-5xl">
          Excellence in Custom Home Building
        </h2>
      </div>
      <section className="self-stretch h-[517px] overflow-hidden shrink-0 flex flex-col items-center justify-center bg-[url('/adobestock-137322111-3-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden"
          alt=""
          src="/adobestock-137322111-3-1@2x.png"
        />
      </section>
      <RightBox />
      <TheBuildingTraditionProcess />
    </div>
  );
};

export default CustomHomes;
