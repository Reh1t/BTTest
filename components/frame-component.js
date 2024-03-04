import { useCallback } from "react";
import { useRouter } from "next/router";

const FrameComponent = () => {
  const router = useRouter();

  const onCustomCabinetryTextClick = useCallback(() => {
    router.push("/casework-page");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/conceptual-modelling-plannin1");
  }, [router]);

  return (
    <section className="w-full !m-[0] absolute top-[2923.8px] left-[0px] flex flex-row flex-wrap items-center justify-center min-h-[434px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
      <div className="w-[1440px] bg-white overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-center py-[41px] px-[37px] box-border gap-[100px] max-w-full mq450:gap-[100px] mq1050:gap-[100px]">
        <h2
          className="m-0 relative text-inherit font-bold font-inherit cursor-pointer mq450:text-5xl mq1050:text-13xl"
          onClick={onCustomCabinetryTextClick}
        >
          Custom cabinetry
        </h2>
        <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-5xl mq1050:text-13xl">
          Hidden refrigerators
        </h2>
      </div>
      <div className="w-[1440px] bg-white overflow-hidden flex flex-row flex-wrap items-center justify-center py-[25px] px-0 box-border min-w-[576px] max-w-full">
        <div className="flex flex-col items-center justify-start py-0 px-5 box-border gap-[10px_0px] max-w-full">
          <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-5xl mq1050:text-13xl">
            <p className="m-0">Conceptual Model</p>
            <p className="m-0">{`Design & Planning`}</p>
          </h2>
          <button
            className="cursor-pointer py-1.5 px-[9px] bg-[transparent] w-[93px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
            onClick={onButtonClick}
          >
            <div className="relative text-xs font-footer-bold-text text-sandybrown text-left">
              READ MORE
            </div>
          </button>
        </div>
      </div>
      <div className="w-[1440px] bg-white overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-center py-[18px] px-0 box-border gap-[100px] max-w-full mq450:gap-[100px] mq1050:gap-[100px]">
        <h2 className="m-0 w-[338px] relative text-inherit font-bold font-inherit inline-block max-w-full box-border pl-5 pr-5 mq450:text-5xl mq1050:text-13xl">
          <p className="m-0">Under-counter</p>
          <p className="m-0">vacuum ports</p>
        </h2>
        <h2 className="m-0 w-[413px] relative text-inherit font-bold font-inherit inline-block max-w-full box-border pl-5 pr-5 mq450:text-5xl mq1050:text-13xl">
          Automated lighting
        </h2>
      </div>
    </section>
  );
};

export default FrameComponent;
