const DesignCard = ({
  photoPlaceholder,
  design,
  aVirtualCanvasForYourDrea,
  navigateTo, // New prop for navigation
}) => {
  // Function to handle navigation
  const handleNavigation = () => {
    if (navigateTo) {
      window.location.href = navigateTo; // Directly navigate to the URL
    }
  };

  return (
    <div className="self-stretch w-[305px] rounded-3xs bg-kuno-greywhite overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[3px_0px] text-left text-5xl text-kuno-red font-footer-bold-text">
      <img
        className="self-stretch h-[285px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={photoPlaceholder}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[5px]">
        <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit mq450:text-lgi">
          {design}
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-[5px] text-justify text-base">
        <div className="h-[115px] w-[285px] relative whitespace-pre-wrap inline-block shrink-0">
          {aVirtualCanvasForYourDrea}
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-end py-[7px] px-5 text-xs text-sandybrown">
        {/* "Learn more" button with navigation */}
        <div
          className="max-w-[99px] rounded-mini box-border flex flex-row items-center justify-center py-1.5 px-2 gap-[10px] border-[2px] border-solid border-sandybrown"
          onClick={handleNavigation} // Click event handler
        >
          <div className="relative whitespace-nowrap">LEARN MORE</div>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
