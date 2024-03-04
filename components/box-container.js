import { useCallback } from "react";
import { useRouter } from "next/router";
import LeftBox from "./left-box";

const BoxContainer = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onButton2Click = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onButton3Click = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <section className="w-full !m-[0] absolute top-[1514px] left-[0px] bg-white flex flex-row flex-wrap items-start justify-center pt-6 px-0 pb-2.5 box-border max-w-full text-center text-5xl text-kuno-red font-footer-bold-text">
      <LeftBox
        culinaryHavensForEveryTas="Culinary havens for every taste and style"
        onButton1Click={onButtonClick}
      />
      <LeftBox
        culinaryHavensForEveryTas="Transform your kitchen into a soulful sanctuary"
        propGap="10px 0px"
        onButton1Click={onButton2Click}
      />
      <div className="w-[366px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-0 px-5 box-border gap-[22px_0px] max-w-full">
        <b className="w-[319px] relative inline-block mq450:text-lgi">
          A space where every meal is a celebration of life and love
        </b>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-0 px-2">
          <button
            className="cursor-pointer py-1.5 px-2 bg-[transparent] w-[93px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
            onClick={onButton3Click}
          >
            <div className="relative text-xs font-footer-bold-text text-sandybrown text-left">
              READ MORE
            </div>
          </button>
        </div>
      </div>
      <div className="w-[326px] flex flex-col items-start justify-center gap-[10px_0px] max-w-full">
        <div className="overflow-hidden flex flex-col items-center justify-start py-0 px-[3px]">
          <b className="w-[319px] relative inline-block mq450:text-lgi">
            <p className="m-0">Sustainable solutions</p>
            <p className="m-0">with energy-efficient features</p>
          </b>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-0 px-2">
          <button
            className="cursor-pointer py-1.5 px-2 bg-[transparent] w-[93px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100 mq450:w-[calc(100%_-_40px)]"
            onClick={onButton1Click}
          >
            <div className="relative text-xs font-footer-bold-text text-sandybrown text-left">
              READ MORE
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoxContainer;
