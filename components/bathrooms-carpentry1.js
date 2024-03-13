import { useCallback } from "react";
import { useRouter } from "next/router";

const BathroomsCarpentry1 = () => {
  const router = useRouter();

  const onLearnMoreClick = useCallback(() => {
    router.push("/contact");
  }, [router]);


  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-between py-14 px-[67px] box-border gap-[20px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text lg:pl-[33px] lg:pr-[33px] lg:box-border mq750:pt-9 mq750:pb-9 mq750:box-border">
      <img
        className="w-[654px] max-h-full overflow-hidden shrink-0 object-cover max-w-full"
        loading="lazy"
        alt=""
        src="/AdobeStock_685495513 (3).jpeg"
      />
      <div className="w-[600px] flex flex-col items-start justify-start gap-[16px_0px] max-w-full">
        <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-5xl mq1050:text-13xl">
          Closet Solutions
        </h1>
        <div className="relative text-base text-justify inline-block">
          Tailored to your unique preferences and lifestyle, our custom
          solutions redefine the way you store and showcase your wardrobe. From
          maximizing space efficiency to integrating personalized storage
          features, our expert designers ensure every inch of your closet
          reflects functionality and elegance. Say goodbye to clutter and hello
          to effortless organization as our custom closets elevate your home
          with unparalleled style and sophistication.
        </div>
        <div className="self-stretch flex flex-col items-center justify-center">
          <button 
          className="cursor-pointer py-1.5 px-2 bg-[transparent] w-[99px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
          onClick={onLearnMoreClick}
          >
            <div className="relative text-xs font-footer-bold-text text-sandybrown text-left whitespace-nowrap">
              LEARN MORE
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BathroomsCarpentry1;
