import { useMemo } from "react";

const AutomatedLighting = ({
  culinaryHavensForEveryTas,
  propMinWidth,
  propGap,
  propPadding,
  onButton1Click,
}) => {
  const automatedLightingStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      gap: propGap,
    };
  }, [propMinWidth, propGap]);

  const buttonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start min-w-[14.938rem] max-w-[19.938rem] text-center text-[1.5rem] text-kuno-red font-footer-bold-text"
      style={automatedLightingStyle}
    >
      <b className="self-stretch relative mq450:text-[1.188rem]">
        {culinaryHavensForEveryTas}
      </b>
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
        <button
          className="cursor-pointer py-[0.375rem] px-[0.563rem] bg-[transparent] w-[5.813rem] rounded-mini box-border overflow-hidden shrink-0 flex flex-row items-start justify-start z-[1] border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
          onClick={onButton1Click}
          style={buttonStyle}
        >
          <div className="relative text-[0.75rem] font-footer-bold-text text-sandybrown text-left">
            READ MORE
          </div>
        </button>
      </div>
    </div>
  );
};

export default AutomatedLighting;
