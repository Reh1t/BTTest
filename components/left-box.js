import { useMemo } from "react";

const LeftBox = ({ culinaryHavensForEveryTas, propGap, onButton1Click }) => {
  const leftBoxStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className="w-[326px] flex flex-col items-center justify-start max-w-full text-center text-5xl text-kuno-red font-footer-bold-text"
      style={leftBoxStyle}
    >
      <div className="overflow-hidden flex flex-col items-center justify-start py-0 px-[3px]">
        <b className="w-[319px] relative inline-block mq450:text-lgi">
          {culinaryHavensForEveryTas}
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
  );
};

export default LeftBox;
