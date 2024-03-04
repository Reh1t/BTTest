import { useMemo } from "react";

const Card1 = ({
  photoPlaceholder,
  design,
  aVirtualCanvasForYourDrea,
  buttonFrameLeft,
  buttonFrameTop,
  lEARNMOREAlignSelf,
  lEARNMOREPadding,
  propFlex,
}) => {
  const card1Style = useMemo(() => {
    return {
      left: buttonFrameLeft,
      top: buttonFrameTop,
    };
  }, [buttonFrameLeft, buttonFrameTop]);

  const mainText1Style = useMemo(() => {
    return {
      alignSelf: lEARNMOREAlignSelf,
      padding: lEARNMOREPadding,
    };
  }, [lEARNMOREAlignSelf, lEARNMOREPadding]);

  const designStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className="absolute top-[193px] left-[54px] rounded-3xs bg-kuno-greywhite w-[305px] h-[503px] overflow-hidden flex flex-col items-center justify-start gap-[3px_0px] text-left text-5xl text-kuno-red font-footer-bold-text"
      style={card1Style}
    >
      <img
        className="self-stretch h-[285px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={photoPlaceholder}
      />
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[5px]"
        style={mainText1Style}
      >
        <h3
          className="m-0 flex-1 relative text-inherit font-bold font-inherit mq450:text-lgi"
          style={designStyle}
        >
          {design}
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-[5px] text-justify text-base">
        <div className="h-[115px] w-[285px] relative inline-block shrink-0">
          {aVirtualCanvasForYourDrea}
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-end py-[7px] px-5 text-xs text-sandybrown">
        <div className="w-[99px] rounded-mini box-border flex flex-row items-center justify-between py-1.5 px-0 gap-[10px] border-[2px] border-solid border-sandybrown">
          <div className="relative whitespace-nowrap">LEARN MORE</div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
