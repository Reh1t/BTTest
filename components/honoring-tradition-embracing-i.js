import CardWithoutButton from "./card-without-button";

const HonoringTraditionEmbracingI = () => {
  return (
    <section className="flex flex-col items-center justify-center max-w-full text-center text-21xl text-kuno-red font-footer-bold-text">
      <div className="py-5 px-5 md:px-40 sm:px-5 box-border max-w-full">
        <h1 className="relative text-inherit font-bold font-inherit max-w-full md:text-13xl sm:text-5xl">Honoring tradition, embracing innovation</h1>
      </div>
      <div className="flex flex-wrap justify-center py-0 px-5 md:pr-10 md:pl-10 sm:pr-5 sm:pl-5 box-border gap-5 max-w-full">
        <CardWithoutButton
          photoPlaceholder="/photo-placeholder-4@2x.png"
          design="Sunroom Extensions"
          aVirtualCanvasForYourDrea="Looking to add on to your home to increase productivity zones or perhaps to create an outdoor oasis? Our custom home additions are the perfect solution for you"
        />
        <CardWithoutButton
          photoPlaceholder="/photo-placeholder-5@2x.png"
          design="Kitchen Renovations"
          aVirtualCanvasForYourDrea="Create a space where cooking and gathering become a joyous experience for the whole family"
        />
        <CardWithoutButton
          photoPlaceholder="/photo-placeholder-6@2x.png"
          design="House Additions"
          aVirtualCanvasForYourDrea="Extend the comfort and longevity of your cherished home with a tailored addition, designed to meet your current and future needs"
        />
      </div>
      <div className="bg-white flex items-center justify-center py-5 px-5 md:p-5">
        <button className="py-1.5 px-9 bg-transparent rounded-mini border-2 border-solid border-sandybrown hover:bg-chocolate-200 hover:border-chocolate-100">
          <div className="text-xs font-footer-bold-text text-sandybrown whitespace-nowrap">
            LEARN MORE
          </div>
        </button>
      </div>
    </section>
  );
};

export default HonoringTraditionEmbracingI;
