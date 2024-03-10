const BathroomsCarpentry2 = () => {
  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-between py-14 px-[67px] box-border max-w-full gap-[20px] text-left text-21xl text-kuno-red font-footer-bold-text lg:pl-[33px] lg:pr-[33px] lg:box-border mq750:pt-9 mq750:pb-9 mq750:box-border">
      <div className="flex flex-col items-start justify-start gap-[24px_0px] max-w-full">
        <div className="flex flex-col items-start justify-start gap-[10px_0px]">
          <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-5xl mq1050:text-13xl">
            Cabinetry
          </h1>
          <div className="w-full max-w-[600px] relative text-base text-justify">
            <p className="m-0">
              Experience the epitome of personalized luxury with our custom cabinetry,
              meticulously crafted to complement your unique style and elevate the functionality
              of your living spaces. Whether you desire sleek modern designs or timeless classics,
              our custom cabinetry solutions offer unparalleled versatility to suit your every need.
            </p>
          </div>

        </div>
        <div className="w-[358px] flex flex-col items-start justify-start gap-[10px_0px] max-w-full text-xl">
          <b className="w-[338px] relative inline-block max-w-full mq450:text-base">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li>{`Material Selections and Finishes `}</li>
            </ul>
          </b>
          <b className="self-stretch relative mq450:text-base">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li>Collaboration with Design Experts</li>
            </ul>
          </b>
          <b className="w-[237px] relative inline-block mq450:text-base">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li>Sustainable Solutions</li>
            </ul>
          </b>
          <b className="w-[329px] relative inline-block max-w-full mq450:text-base">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li>Integration with Existing Decor</li>
            </ul>
          </b>
          <b className="w-[342px] relative inline-block max-w-full mq450:text-base">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li>Built-In Lighting and Accessories</li>
            </ul>
          </b>
        </div>
      </div>
      <img
        className="w-[654px] max-h-full overflow-hidden shrink-0 object-cover max-w-full"
        loading="lazy"
        alt=""
        src="/photo1@2x.png"
      />
    </section>
  );
};

export default BathroomsCarpentry2;
