import { useMemo } from "react";

const Card = ({
  photoPlaceholder,
  conceptual,
  modelling,
  aVirtualCanvasForYourDrea,
  modellingOverflow,
  aVirtualCanvasPadding,
  propHeight,
  onMainTextContainerClick,
  onDesignText2Click,
  onLearnMoreClick,
  pageName, // New prop to pass the page name dynamically
}) => {
  const cardStyle = useMemo(() => {
    return {
      overflow: modellingOverflow,
    };
  }, [modellingOverflow]);

  const mainTextStyle = useMemo(() => {
    return {
      padding: aVirtualCanvasPadding,
    };
  }, [aVirtualCanvasPadding]);

  const aVirtualCanvasStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="self-stretch w-[305px] rounded-3xs bg-kuno-greywhite shrink-0 flex flex-col items-center justify-start gap-[3px_0px] text-left text-5xl text-kuno-red font-footer-bold-text"
      style={cardStyle}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={photoPlaceholder}
      />
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[5px] cursor-pointer"
        onClick={onMainTextContainerClick}
        style={mainTextStyle}
      >
        <h3
          className="m-0 flex-1 relative text-inherit font-bold font-inherit mq450:text-lgi"
          onClick={onDesignText2Click}
        >
          <p className="m-0">{conceptual}</p>
          <p className="m-0">{modelling}</p>
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-[5px] text-justify text-base">
        <div
          className="h-[115px] w-[285px] relative inline-block shrink-0"
          style={aVirtualCanvasStyle}
        >
          {aVirtualCanvasForYourDrea}
        </div>
      </div>
      <div
        className="self-stretch overflow-hidden flex flex-col items-center justify-end py-[7px] px-5 text-xs text-sandybrown cursor-pointer"
        onClick={() => onLearnMoreClick(pageName)} // Pass pageName to onLearnMoreClick
      >
        <div className="w-[99px] rounded-mini box-border flex flex-row items-center justify-center py-1.5 px-0 gap-[10px] border-[2px] border-solid border-sandybrown">
          <div className="relative whitespace-nowrap">LEARN MORE</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
