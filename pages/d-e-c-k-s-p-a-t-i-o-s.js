import LinksHolderFrame from "../components/links-holder-frame";
import LetUsHelpYou from "../components/let-us-help-you";
import Material from "../components/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const DECKSPATIOS = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-14 px-0 pb-2.5 box-border tracking-[normal]">
      <Navbar />
      <LinksHolderFrame />
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-0 box-border gap-[0px_131px] max-w-full text-left text-5xl text-kuno-red font-footer-bold-text mq750:gap-[0px_131px] mq450:gap-[0px_131px] mq1150:flex-wrap">
        <div className="w-[615px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-5 box-border min-w-[615px] max-w-full mq750:min-w-full mq1150:flex-1">
          <img
            className="h-[487px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover mq1150:flex-1"
            loading="lazy"
            alt=""
            src="/adobestock-565860496-1-11@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-start p-5 box-border gap-y-5 min-w-[450px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-y-5 w-full sm:w-[80%] lg:w-full">
            <div>
              <h3 className="m-0 font-bold text-lg sm:text-xl lg:text-2xl">
                Tailored Patio Solutions
              </h3>
              <div className="text-base">
                From cozy corners to spacious entertaining areas, choose from a variety of materials and finishes to suit your style.
              </div>
            </div>
            <div>
              <h3 className="m-0 font-bold text-lg sm:text-xl lg:text-2xl">
                Quality Materials & Craftsmanship
              </h3>
              <div className="text-base">
                Using premium materials, our skilled craftsmen deliver exceptional results that stand the test of time.
              </div>
            </div>
            <div>
              <h3 className="m-0 font-bold text-lg sm:text-xl lg:text-2xl">
                Built-In Features
              </h3>
              <div className="text-base">
                Enhance functionality and beauty with custom seating, planters, lighting, and much more.
              </div>
            </div>
            <div>
              <h3 className="m-0 font-bold text-lg sm:text-xl lg:text-2xl">
                Custom Features
              </h3>
              <div className="text-base">
                Elevate your patio with fire pits, outdoor kitchens, pergolas, and more, creating an outdoor space as unique as you are.
              </div>
            </div>
          </div>
        </div>

      </section>
      <LetUsHelpYou />
      <Material />
      <section className="flex flex-col items-center justify-start py-0 px-5 box-border gap-[20px_0px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-13xl mq450:text-5xl">
          Quality Craftsmanship, Lasting Results
        </h1>
        <footer className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative text-base font-footer-bold-text text-kuno-red text-justify">
          At Building Tradition we take pride in our attention to detail and
          commitment to quality craftsmanship. Using only the highest quality
          materials and industry-leading techniques, our skilled artisans will bring
          your patio vision to life with precision and care. The result? A stunning
          outdoor space that you'll enjoy for years to come.
        </footer>
      </section>
      <Footer />
    </div>
  );
};

export default DECKSPATIOS;
