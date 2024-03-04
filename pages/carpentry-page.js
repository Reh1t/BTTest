import Card1 from "../components/card1";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const CarpentryPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start tracking-[normal] text-left text-21xl text-kuno-red font-footer-bold-text">
<Navbar />
      <div className="w-[1440px] h-[1322px] relative bg-white overflow-x-auto shrink-0 max-w-full">
        <header className="w-[1439px] overflow-hidden flex flex-col items-center justify-between p-5 box-border min-h-[152px] max-w-full text-left text-xl text-kuno-red font-footer-bold-text">
          <h1 className="m-0 relative text-21xl font-bold font-inherit">
            Carpentry
          </h1>
          <div className="relative font-medium whitespace-nowrap">
            by Building Tradition
          </div>
          <div className="w-[791px] h-[23px] relative font-medium inline-block shrink-0 max-w-full">
            Crafting Success from the Ground Up: Offering Comprehensive
            Modelling, Planning, Construction Design and Management for Every
            Phase of Your Project
          </div>
        </header>
        <Card1
          photoPlaceholder="/photo-placeholder2@2x.png"
          design="Design"
          aVirtualCanvasForYourDrea="Crafting your dream home from concept to completion with expert precision and attention to detail"
          />
        <Card1
          photoPlaceholder="/photo-placeholder-12@2x.png"
          design={`Additions & Renovations`}
          aVirtualCanvasForYourDrea="Expand your living space seamlessly with custom-built additions tailored to your unique needs"
          buttonFrameLeft="396px"
          buttonFrameTop="193px"
          lEARNMOREAlignSelf="unset"
          lEARNMOREPadding="0px 14px 0px 5px"
          propFlex="unset"
          />
        <Card1
          photoPlaceholder="/photo-placeholder-22@2x.png"
          design="Kitchens "
          aVirtualCanvasForYourDrea="Elevating the heart of your home with bespoke kitchen designs that blend functionality and style."
          buttonFrameLeft="738px"
          buttonFrameTop="193px"
          lEARNMOREAlignSelf="stretch"
          lEARNMOREPadding="0px 19px 0px 0px"
          propFlex="1"
          />
        <Card1
          photoPlaceholder="/photo-placeholder-32@2x.png"
          design="Washrooms"
          aVirtualCanvasForYourDrea="Transforming your bathrooms into luxurious retreats with personalized designs and accessible features."
          buttonFrameLeft="1080px"
          buttonFrameTop="193px"
          lEARNMOREAlignSelf="stretch"
          lEARNMOREPadding="0px 14px 0px 5px"
          propFlex="1"
          />
        <Card1
          photoPlaceholder="/photo-placeholder-41@2x.png"
          design="Accessible Construction"
          aVirtualCanvasForYourDrea="Creating safe and inclusive living environments with expertly crafted accessibility solutions."
          buttonFrameLeft="54px"
          buttonFrameTop="778px"
          lEARNMOREAlignSelf="stretch"
          lEARNMOREPadding="0px 14px 0px 5px"
          propFlex="1"
        />
        <Card1
          photoPlaceholder="/photo-placeholder-51@2x.png"
          design="Trim Work"
          aVirtualCanvasForYourDrea="Adding the perfect finishing touches to your space with exquisite trim and molding installations."
          buttonFrameLeft="396px"
          buttonFrameTop="778px"
          lEARNMOREAlignSelf="stretch"
          lEARNMOREPadding="0px 14px 0px 5px"
          propFlex="1"
        />
        <Card1
          photoPlaceholder="/photo-placeholder-61@2x.png"
          design={`Decks & Patios`}
          aVirtualCanvasForYourDrea="Enhancing your outdoor living experience with beautifully designed and expertly constructed decks and patios."
          buttonFrameLeft="738px"
          buttonFrameTop="778px"
          lEARNMOREAlignSelf="stretch"
          lEARNMOREPadding="0px 19px 0px 0px"
          propFlex="1"
        />
        <div className="absolute top-[778px] left-[1080px] rounded-3xs bg-kuno-greywhite w-[305px] h-[503px] overflow-hidden flex flex-col items-center justify-start gap-[3px_0px]">
          <div className="self-stretch h-[285px] relative shrink-0 flex items-center justify-center">
            <img
              className="self-stretch h-full max-w-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[0px] w-full [transform:scale(1.07)]"
              alt=""
              src="/photo-placeholder-7@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[5px]">
            <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit mq450:text-5xl mq925:text-13xl">{`& Much More!`}</h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-[5px] text-justify text-base">
            <div className="h-[115px] w-[285px] relative inline-block shrink-0">{`Ask us about how we can help your with your unique project needs! `}</div>
          </div>
          <div className="self-stretch overflow-hidden hidden flex-col items-center justify-start py-[7px] px-5 text-xs text-sandybrown">
            <div className="w-[99px] rounded-mini box-border flex flex-row items-center justify-between py-1.5 px-0 gap-[10px] border-[2px] border-solid border-sandybrown">
              <div className="h-3.5 relative inline-block whitespace-nowrap">
                LEARN MORE
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center gap-[5px_0px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[41px] px-5 box-border gap-[28px_0px] max-w-full">
          <h1 className="m-0 w-[1244px] relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-5xl mq925:text-13xl">
            Elevate every aspect of your living space with our comprehensive
            carpentry services
          </h1>
          <div className="w-[1245px] h-[23px] relative text-base text-justify inline-block shrink-0 max-w-full">
            From custom home construction to accessible renovations, we
            specialize in creating environments that seamlessly blend
            functionality and aesthetics, ensuring your space reflects your
            lifestyle and exceeds your expectations.
          </div>
        </div>
        <div className="w-[926px] h-[513px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/adobestock-349643745-1-1@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-end justify-start max-w-full text-left text-base text-kuno-red font-footer-bold-text">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 px-20 box-border min-h-[144px] max-w-full text-21xl mq950:pl-10 mq950:pr-10 mq950:box-border">
          <h1 className="m-0 w-[779px] relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-5xl mq925:text-13xl">
            <p className="m-0">Elevate Your Home with Shoe Moulding:</p>
            <p className="m-0">The Perfect Blend of Style and Function</p>
          </h1>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border max-w-full">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[29px] px-20 box-border max-w-full mq925:pl-10 mq925:pr-10 mq925:box-border">
            <div className="flex-1 relative inline-block max-w-full">
              Have you ever heard of shoe moulding? It’s a simple yet incredibly
              versatile addition to your home's trim that adds class, style,
              beauty, and function.
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-center py-[13px] px-20 box-border max-w-full z-[1] mt-[-10px] text-justify mq925:pl-10 mq925:pr-10 mq925:box-border">
            <div className="w-[1275px] relative inline-block shrink-0 max-w-full">
              Shoe moulding is a small piece of trim that sits at the bottom of
              your baseboard, offering protection from various elements like
              shoes, furniture legs, and even the vacuum cleaner. It not only
              enhances the aesthetic appeal of your space but also serves a
              practical purpose in safeguarding your walls and baseboards from
              daily wear and tear.
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[640px] rounded-3xs overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-full">
            <img
              className="h-[396px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/shoemoulding-1@2x.png"
              />
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[30px_0px] max-w-full text-justify">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-center justify-center max-w-full">
              <div className="flex flex-row items-center justify-center py-5 px-[30px] box-border max-w-full">
                <div className="w-[1275px] relative inline-block shrink-0 max-w-full">
                  What makes shoe moulding even more appealing is its ease of
                  installation. Depending on the material you choose, it can be
                  a simple do-it-yourself project. You can cut it with garden
                  shears or, for a more precise fit, try your hand at coping
                  with a coping saw.
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-[85px] pl-20 box-border max-w-full mq450:pr-5 mq450:box-border mq925:pl-10 mq925:pr-[42px] mq925:box-border">
              <div className="w-[1275px] relative inline-block shrink-0 max-w-full">
                If you're interested in learning more about how to install shoe
                moulding, be sure to sign up for our newsletter. You'll be the
                first to know when we release our how-to video, guiding you
                through the process step by step.
              </div>
            </div>
          </div>
          <footer className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[15px] pr-[84px] pl-20 text-left text-5xl text-kuno-red font-footer-bold-text mq450:pr-5 mq450:box-border mq925:pl-10 mq925:pr-[42px] mq925:box-border">
            <h3 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lgi">
              Elevate the look and functionality of your home with shoe moulding
              – a small detail that makes a big difference.
            </h3>
          </footer>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CarpentryPage;
