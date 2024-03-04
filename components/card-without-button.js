const CardWithoutButton = ({
  photoPlaceholder,
  design,
  aVirtualCanvasForYourDrea,
}) => {
  return (
    <div className="w-[347px] rounded-3xs bg-kuno-greywhite overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[10px_0px] max-w-full text-left text-5xl text-kuno-red font-footer-bold-text">
      <img
        className="self-stretch h-[285px] relative max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={photoPlaceholder}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
        <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-lgi">
          {design}
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-[5px] text-base">
        <div className="h-[114px] w-[306px] relative inline-block shrink-0">
          {aVirtualCanvasForYourDrea}
        </div>
      </div>
    </div>
  );
};

export default CardWithoutButton;
