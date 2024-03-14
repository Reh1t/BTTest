import { useCallback } from "react";
import { useRouter } from "next/router";
import CardWithoutButton1 from "./card-without-button1";

const HonoringMessage = () => {
  const router = useRouter();

  const onCardWithoutButton1Click = useCallback(() => {
    router.push("/kitchens");
  }, [router]);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[29px] box-border max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
      <div className="flex-1 bg-white overflow-hidden flex flex-col items-start justify-start max-w-full">
        <div className="overflow-hidden flex flex-row items-center justify-center py-10 px-[326px] mq800:pl-[163px] mq800:pr-[163px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <h1 className="m-0 relative text-inherit font-bold font-inherit mq800:text-13xl mq450:text-5xl">{`Honoring tradition, embracing innovation `}</h1>
        </div>
        <div className="self-stretch overflow-hidden grid flex-row items-start justify-start py-6 px-[139px] box-border gap-[0px_60px] max-w-full grid-cols-[repeat(3,_minmax(260px,_1fr))] text-5xl mq800:gap-[0px_60px] mq800:py-5 mq800:px-[69px] mq800:box-border mq800:grid-cols-[minmax(260px,_1fr)] mq1150:justify-center mq1150:grid-cols-[repeat(2,_minmax(260px,_451px))] mq450:gap-[0px_60px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <CardWithoutButton1
            photoPlaceholder="/photo-placeholder-4@2x.png"
            design="Sunroom Extentions"
            aVirtualCanvasForYourDrea="Looking to add on to your home to increase productivity zones or perhaps to create an outdoor oasis? Our custom home additions are the perfect solution for you"
          />
          <CardWithoutButton1
            photoPlaceholder="/photo-placeholder-5@2x.png"
            design="Kitchen Renovations "
            aVirtualCanvasForYourDrea="Create a space where cooking and gathering become a joyous experience for the whole family"
            onCardWithoutButton1Click={onCardWithoutButton1Click}
            className="cursor-pointer"
          />
          <CardWithoutButton1
            photoPlaceholder="/photo-placeholder-6@2x.png"
            design="House Additions"
            aVirtualCanvasForYourDrea="Extend the comfort and longevity of your cherished home with a tailored addition, designed to meet your current and future needs"
          />
        </div>
      </div>
    </section>
  );
};

export default HonoringMessage;
