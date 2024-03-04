import { useCallback } from "react";

const LinksHolderFrame = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='letUsHelpYou']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="w-[1346px] flex flex-col items-start justify-start pt-0 px-5 pb-[27px] box-border max-w-full text-left text-xl text-kuno-red font-footer-bold-text">
      <div className="self-stretch flex flex-row items-start justify-start gap-[0px_108px] max-w-full mq750:gap-[0px_108px] mq450:gap-[0px_108px] mq1150:flex-wrap">
        <div className="w-[544px] flex flex-col items-start justify-start pt-[62px] px-0 pb-0 box-border min-w-[544px] max-w-full mq750:pt-10 mq750:box-border mq750:min-w-full mq1150:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[158px_0px] mq750:gap-[158px_0px] mq450:gap-[158px_0px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px_0px]">
              <div className="relative font-medium mq450:text-base">
                CARPENTRY
              </div>
              <h1 className="m-0 relative text-21xl font-bold font-inherit mq1050:text-13xl mq450:text-5xl">{`DECKS & PATIOS`}</h1>
              <div className="self-stretch flex flex-col items-center justify-start gap-[22px_0px] text-justify text-base">
                <div className="w-[544px] relative inline-block">
                  <p className="m-0">
                    At Building Tradition, we specialize in creating stunning
                    decks that seamlessly blend with your home's architecture
                    while providing the perfect space for relaxation and
                    entertainment. Our deck construction services are tailored
                    to your needs, ensuring a result that exceeds your
                    expectations.
                  </p>
                  <p className="m-0">
                    We understand that your patio is more than just an outdoor
                    space – it's an extension of your home where memories are
                    made. That's why we offer expert patio design and
                    installation services to help you create the perfect outdoor
                    retreat.
                  </p>
                </div>
                <div className="w-[200px] flex flex-row items-start justify-end">
                  <button
                    className="cursor-pointer py-1.5 pr-[7px] pl-2.5 bg-[transparent] w-[93px] rounded-mini box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
                    onClick={onButtonClick}
                  >
                    <div className="relative text-xs font-footer-bold-text text-sandybrown text-left">
                      READ MORE
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[3px]">
              <div className="relative font-medium mq450:text-base">
                CUSTOM DECK DESIGNS
              </div>
            </div>
          </div>
        </div>
        <div className="h-[436px] flex-1 rounded-3xs overflow-hidden flex flex-col items-start justify-start bg-[url('/adobestock-471485886-1-13@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[425px] max-w-full mq750:min-w-full">
          <img
            className="self-stretch h-[436px] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/adobestock-471485886-1-13@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-1 box-border max-w-full text-21xl">
        <h1 className="m-0 relative text-inherit font-bold font-inherit mq1050:text-13xl mq450:text-5xl">
          Create your perfect outdoor retreat
        </h1>
      </div>
    </section>
  );
};

export default LinksHolderFrame;
