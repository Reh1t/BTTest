const OpenRiserStaircases = ({
  frame25,
  openRiserStaircases,
  elevateYourHomeWithOurExq,
}) => {
  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center py-[3px] px-[67px] box-border gap-[0px_145px] min-h-[702px] max-w-full text-left text-5xl text-kuno-red font-footer-bold-text lg:flex-wrap mq825:gap-[0px_145px] mq825:pl-[33px] mq825:pr-[33px] mq825:box-border mq450:gap-[0px_145px]">
      <img
        className="h-[592px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover min-w-[600px] mq825:min-w-full"
        loading="lazy"
        alt=""
        src={frame25}
      />
      <div className="flex flex-col items-start justify-start py-5 px-0 box-border gap-[19px_0px] min-w-[508px] max-w-full lg:flex-1 mq825:min-w-full">
        <div className="relative font-medium mq450:text-lgi">{`CUSTOMIZABLE OPTIONS `}</div>
        <b className="relative text-21xl inline-block max-w-full mq825:text-13xl mq450:text-5xl">
          {openRiserStaircases}
        </b>
        <div className="w-full relative text-base text-justify inline-block">
          {elevateYourHomeWithOurExq}
        </div>
      </div>
    </section>
  );
};

export default OpenRiserStaircases;
