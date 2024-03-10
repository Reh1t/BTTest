import { useCallback } from "react";
import { useRouter } from "next/router";

const RenovationDetails = () => {
  const router = useRouter();

  const onAccessibleWashroomsTextClick = useCallback(() => {
    router.push("/accessible-construction");
  }, [router]);

  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center pt-2.5 pb-[45px] pr-7 pl-[34px] box-border gap-[0px_131px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text mq800:gap-[0px_131px] mq800:pt-5 mq800:pb-[29px] mq800:box-border mq450:gap-[0px_131px] mq1350:flex-wrap">
      <div className="w-[575px] overflow-hidden shrink-0 flex flex-row items-start justify-start min-w-[575px] max-w-full mq800:min-w-full mq1350:flex-1">
        <img
          className="h-[521px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover mq1350:flex-1"
          loading="lazy"
          alt=""
          src="/adobestock-565860496-1-1@2x.png"
        />
      </div>
      <div className="w-[652px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[40px_0px] min-w-[652px] max-w-full mq800:gap-[40px_0px] mq800:min-w-full mq1350:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
          <div className="flex flex-col items-start justify-start gap-[1px_0px] max-w-full">
            <h1
              className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq800:text-13xl mq450:text-5xl"
              >
              Accessible washrooms
            </h1>
            <div className="w-[652px] relative text-base text-justify inline-block">
              {" "}
              – Prioritize inclusivity and convenience with our expertly crafted
              accessible washrooms, designed to ensure comfort and ease of use
              for all.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center">
            <button className="cursor-pointer py-1.5 px-2 bg-[transparent] w-[99px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
              onClick={onAccessibleWashroomsTextClick}
              >
              <div className="relative text-xs font-footer-bold-text text-sandybrown cursor-pointer text-left whitespace-nowrap">
                LEARN MORE
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1px_0px] max-w-full">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq800:text-13xl mq450:text-5xl">
            Luxurious Upgrades
          </h1>
          <div className="w-[652px] relative text-base text-justify inline-block">
            {" "}
            – Indulge in a spa-like retreat with our luxurious bathroom
            renovations, where modern amenities and elegant design come together
            to elevate your daily routine.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1px_0px] max-w-full">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq800:text-13xl mq450:text-5xl">
            Functional Elegance
          </h1>
          <div className="w-[652px] relative text-base text-justify inline-block">
            {" "}
            –The perfect blend of functionality and style with our meticulously
            planned bathroom renovations.
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenovationDetails;
