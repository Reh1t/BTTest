import { useCallback } from "react";
import { useRouter } from "next/router";

const DesignInspiration = () => {
  const router = useRouter();

  const onCustomCabinetryTextClick = useCallback(() => {
    router.push("/casework-page");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/conceptual-modelling-plannin1");
  }, [router]);

  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[1.125rem] box-border max-w-full text-left text-[2.5rem] text-kuno-red font-footer-bold-text">
      <div className="w-[51.938rem] flex flex-col items-start justify-start gap-[2.688rem_0rem] max-w-full mq450:gap-[1.313rem_0rem]">
        <div className="self-stretch flex flex-row items-start justify-center sm:justify-between pt-[0rem] px-[0rem] pb-[1.438rem] box-border gap-[1.25rem] max-w-full mq1050:flex-wrap">
          <h2
            className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full cursor-pointer mq1050:text-[2rem] mq450:text-[1.5rem]"
            onClick={onCustomCabinetryTextClick}
          >
            Custom cabinetry
          </h2>
          <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-[2rem] mq450:text-[1.5rem]">
            Hidden refrigerators
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[21.625rem] flex flex-col items-center justify-center gap-[0.625rem_0rem] max-w-full">
            <h2 className="m-0 relative text-inherit font-bold font-inherit mq1050:text-[2rem] mq450:text-[1.5rem]">
              <p className="m-0">Conceptual Model</p>
              <p className="m-0">{`Design & Planning`}</p>
            </h2>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] text-[0.75rem] text-sandybrown">
              <div
                className="w-[5.813rem] rounded-mini box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.375rem] px-[0.625rem] cursor-pointer border-[2px] border-solid border-sandybrown"
                onClick={onButtonContainerClick}
              >
                <div className="relative">READ MORE</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-[0rem] px-[1.875rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-center justify-center max-w-full gap-[1.25rem] mq1050:flex-wrap">
            <h2 className="m-0 w-[18.625rem] relative text-inherit font-bold font-inherit inline-block mq1050:text-[2rem] mq450:text-[1.5rem]">
              <p className="m-0">Under-counter</p>
              <p className="m-0">vacuum ports</p>
            </h2>
            <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-[2rem] mq450:text-[1.5rem]">
              Automated lighting
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignInspiration;
