import { useCallback } from "react";
import { useRouter } from "next/router";
import AutomatedLighting from "./automated-lighting";

const PersonalizedServices1 = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onButton2Click = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onButton3Click = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.625rem] pr-[4.438rem] pl-[4.469rem] box-border max-w-full text-center text-[2.5rem] text-kuno-red font-footer-bold-text mq750:pl-[2.188rem] mq750:pr-[2.188rem] mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[3.188rem_0rem] max-w-full mq750:gap-[1.563rem_0rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
          <h2 className="m-0 w-[53.875rem] relative text-inherit font-bold font-inherit inline-block mq1050:text-[2rem] mq450:text-[1.5rem]">
            Ignite your passion for cooking and creativity
          </h2>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-5 text-[1.5rem]">
          <AutomatedLighting
            culinaryHavensForEveryTas="Culinary havens for every taste and style"
            onButton1Click={onButtonClick}
          />
          <AutomatedLighting
            culinaryHavensForEveryTas="Transform your kitchen into a soulful sanctuary"
            propMinWidth="15.813rem"
            propGap="0.625rem 0rem"
            propPadding="0.375rem 0.563rem"
            onButton1Click={onButton2Click}
          />
          <AutomatedLighting
            culinaryHavensForEveryTas="A space where every meal is a celebration of life and love"
            propMinWidth="14.938rem"
            propGap="1.375rem 0rem"
            propPadding="0.375rem 0.625rem"
            onButton1Click={onButton3Click}
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem_0rem] min-w-[14.938rem] max-w-[19.938rem]">
            <b className="self-stretch relative mq450:text-[1.188rem]">
              <p className="m-0">Sustainable solutions</p>
              <p className="m-0">with energy-efficient features</p>
            </b>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] text-left text-[0.75rem] text-sandybrown">
              <div
                className="w-[5.813rem] rounded-mini box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.375rem] px-[0.625rem] cursor-pointer border-[2px] border-solid border-sandybrown"
                onClick={onButtonContainerClick}
              >
                <div className="relative">READ MORE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedServices1;
