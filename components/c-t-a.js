const CTA = () => {
  return (
    <section className="w-full !m-[0] absolute top-[3357.8px] left-[0px] bg-sandybrown overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start max-w-full text-left text-45xl text-kuno-red font-footer-bold-text">
      <img
        className="h-[414px] flex-1 relative max-w-full overflow-hidden object-cover"
        loading="lazy"
        alt=""
        src="/adobestock-89308963-1-1-2@2x.png"
      />
      <div className="w-[1186px] !m-[0] absolute top-[calc(50%_-_96px)] left-[calc(50%_-_593px)] flex flex-row flex-wrap items-start justify-center gap-[24px] min-h-[192px] max-w-full z-[1]">
        <div className="w-[1185px] flex flex-row flex-wrap items-start justify-center gap-[10px] min-h-[112px] max-w-full">
          <div className="flex flex-row flex-wrap items-center justify-start py-0 px-5 box-border max-w-full">
            <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-19xl mq1050:text-32xl">
              Get cooking in style!
            </h1>
          </div>
          <div className="w-[1186px] flex flex-row flex-wrap items-center justify-start max-w-full text-center text-5xl">
            <b className="flex-1 relative inline-block max-w-full mq450:text-lgi">
              Let's bring your kitchen renovation project to life. Contact us
              today to begin your culinary journey!
            </b>
          </div>
        </div>
        <div className="w-[1186px] flex flex-row flex-wrap items-start justify-center min-w-[474px] max-w-full">
          <button className="cursor-pointer py-1.5 px-3 bg-white h-14 w-[216px] rounded-mini box-border overflow-hidden shrink-0 flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-solid border-sandybrown hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100 mq450:w-[calc(100%_-_40px)]">
            <b className="w-[170px] relative text-13xl inline-block font-footer-bold-text text-kuno-red text-left box-border pl-5 pr-5">
              CALL US
            </b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
