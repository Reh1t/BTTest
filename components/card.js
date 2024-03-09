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
  pageName,
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
    <div className="self-stretch w-[305px] rounded-3xs bg-kuno-greywhite shrink-0 flex flex-col gap-[3px_0px] text-left text-5xl text-kuno-red font-footer-bold-text" style={cardStyle}>
      <div className="self-stretch max-w-full max-h-[305px] overflow-hidden">
        <img className="object-cover w-full h-full" loading="lazy" alt="" src={photoPlaceholder} />
      </div>
      <div className="flex-1">
        <div className="py-0 pr-3.5 pl-[5px] cursor-pointer" onClick={onMainTextContainerClick} style={mainTextStyle}>
          <h3 className="m-0 font-bold mq450:text-lgi" onClick={onDesignText2Click}>
            <p className="m-0">{conceptual}</p>
            <p className="m-0">{modelling}</p>
          </h3>
        </div>
        <div className="py-0 px-[5px] text-justify text-base flex-1">
          <div className="h-[115px] relative overflow-hidden">
            {aVirtualCanvasForYourDrea}
          </div>
        </div>
      </div>
      <div className="py-[7px] px-5 text-xs text-sandybrown cursor-pointer flex items-center justify-center">
        <div className="w-[99px] rounded-mini box-border flex items-center justify-center py-1.5 px-0 gap-[10px] border-[2px] border-solid border-sandybrown">
          <div className="whitespace-nowrap" onClick={() => onLearnMoreClick(pageName)}>LEARN MORE</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
