const PhotoFrame = () => {
  return (
    <section className="w-[1322px] flex flex-row items-center justify-start pt-0 px-5 pb-5 box-border gap-[0px_13px] max-w-full text-left text-5xl text-kuno-red font-footer-bold-text mq1150:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border min-w-[423px] max-w-full mq800:min-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[28px_0px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] max-w-full">
            <h3 className="m-0 relative text-inherit font-normal font-inherit mq450:text-lgi">
              Carpentry
            </h3>
            <h1 className="m-0 w-[637px] relative text-21xl font-bold font-inherit inline-block max-w-full mq800:text-13xl mq450:text-5xl">{`Addition &
Renovations`}</h1>
            <div className="w-[651px] relative text-base inline-block">
              Crafting your dream home from concept to completion with expert
              precision and attention to detail
            </div>
          </div>
          <button className="cursor-pointer py-1.5 pr-[7px] pl-2.5 bg-[transparent] w-[99px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100">
            <div className="relative text-xs font-footer-bold-text text-sandybrown text-left whitespace-nowrap">
              LEARN MORE
            </div>
          </button>
        </div>
      </div>
      <div className="h-[431px] w-[618px] rounded-3xs overflow-hidden shrink-0 flex flex-col items-start justify-start bg-[url('/adobestock-471485886-1-12@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[618px] max-w-full mq800:min-w-full mq1150:flex-1">
        <img
          className="self-stretch h-[430px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover hidden"
          alt=""
          src="/adobestock-471485886-1-12@2x.png"
        />
      </div>
    </section>
  );
};

export default PhotoFrame;
