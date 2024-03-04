const RightBox = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-0 box-border max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
      <div className="flex-1 bg-white flex flex-row items-start justify-center py-7 px-5 box-border [row-gap:20px] max-w-full mq1350:flex-wrap">
        <div className="w-[418px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[22px_0px] max-w-full">
          <h2 className="m-0 w-[402px] relative text-inherit font-bold font-inherit inline-block max-w-full mq800:text-13xl mq450:text-5xl">
            Tailored Design Process
          </h2>
          <div className="flex flex-row items-start justify-start py-0 pr-3 pl-0 box-border max-w-full text-justify text-5xl">
            <div className="w-[390px] relative inline-block shrink-0 max-w-full mq450:text-lgi">
              Every home is a reflection of your unique taste and lifestyle.
            </div>
          </div>
        </div>
        <div className="w-[420px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[18px_0px] max-w-full">
          <h2 className="m-0 w-[402px] relative text-inherit font-bold font-inherit inline-block max-w-full mq800:text-13xl mq450:text-5xl">
            Expert Craftsmanship
          </h2>
          <div className="flex flex-row items-start justify-start py-0 pr-[19px] pl-0 box-border max-w-full text-justify text-5xl">
            <div className="w-[383px] relative inline-block shrink-0 max-w-full mq450:text-lgi">
              With decades of experience, our builders bring unmatched skill to
              every project.
            </div>
          </div>
        </div>
        <div className="w-[418px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[18px_0px] max-w-full">
          <h2 className="m-0 w-[402px] relative text-inherit font-bold font-inherit inline-block max-w-full mq800:text-13xl mq450:text-5xl">
            Transparent Communication
          </h2>
          <div className="flex flex-row items-start justify-start py-0 pr-6 pl-0 box-border max-w-full text-justify text-5xl">
            <div className="w-[378px] relative inline-block shrink-0 max-w-full mq450:text-lgi">
              Stay informed and involved at every stage of your home's
              development.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightBox;
