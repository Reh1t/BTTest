import { useCallback } from "react";
import { useRouter } from "next/router";

const AscentToEleganceWhereSta = () => {
  const router = useRouter();

  const onStaircaseByDesignClick = useCallback(() => {
    router.push("/staircases-pages");
  }, [router]);

  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-2.5 box-border max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-[214px] mq750:pl-[107px] mq750:pr-[107px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <h1 className="m-0 relative text-inherit font-bold font-inherit mq750:text-13xl mq450:text-5xl">
          Ascent to Elegance : Where Staircases Meet Artistry
        </h1>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-2.5 px-[70px] box-border gap-[0px_45px] max-w-full text-xl mq750:gap-[0px_45px] mq1275:flex-wrap mq1275:pl-[35px] mq1275:pr-[35px] mq1275:box-border">
        <div className="w-[565 px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-0 box-border gap-[14px_0px] max-w-full mq750:min-w-full mq1275:flex-1">
          <div className="relative font-medium mq450:text-base">
            Building Service
          </div>
          <h1
            className="m-0 self-stretch relative text-21xl font-bold font-inherit cursor-pointer mq750:text-13xl mq450:text-5xl"
            onClick={onStaircaseByDesignClick}
          >
            Staircase by Design
          </h1>
          <div className="w-[565px] relative text-base inline-block">
            <p className="m-0">
              Collaborate with Building Tradition, where partnering with us
              means more than just innovative staircase solutions
            </p>
            <p className="m-0">– it's a commitment to crafting your vision.</p>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start p-2.5">
            <button className="cursor-pointer py-1.5 px-[9px] bg-[transparent] w-[99px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100">
              <div className="relative text-xs font-footer-bold-text text-sandybrown text-left whitespace-nowrap">
                LEARN MORE
              </div>
            </button>
          </div>
        </div>
        <img
          className="w-[604px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1275:flex-1"
          loading="lazy"
          alt=""
          src="/photo-holder@2x.png"
        />
      </div>
    </section>
  );
};

export default AscentToEleganceWhereSta;
