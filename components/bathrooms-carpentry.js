import { useCallback } from "react";
import { useRouter } from "next/router";

const BathroomsCarpentry = () => {
  const router = useRouter();

  const onPhotoImageClick = useCallback(() => {
    router.push("/bathrooms");
  }, [router]);
  
  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center py-[30px] px-[67px] box-border gap-[0px_250px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text mq750:gap-[0px_250px] mq450:gap-[0px_250px] mq450:pt-5 mq450:pb-5 mq450:box-border mq1275:flex-wrap mq1275:gap-[0px_250px] mq1275:pl-[33px] mq1275:pr-[33px] mq1275:box-border">
      <div className="w-[420px] flex flex-col items-start justify-start gap-[16px_0px] min-w-[420px] max-w-full mq750:min-w-full mq1275:w-full mq1275:flex-1">
        <div className="relative text-xl font-medium mq450:text-base">
          Carpentry
        </div>
        <h1 className="m-0 w-[406px] relative text-inherit font-bold font-inherit inline-block max-w-full mq750:text-13xl mq450:text-5xl">
          <p className="m-0">Bathrooms</p>
          <p className="m-0">by Building Tradition</p>
        </h1>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-2.5 px-5">
          <button className="cursor-pointer py-1.5 px-[9px] bg-[transparent] w-[99px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100">
            <div className="relative text-xs font-footer-bold-text text-sandybrown text-left whitespace-nowrap"
            onClick={() => handleNavigation("./contact")}
            >
              LEARN MORE
            </div>
          </button>
        </div>
        <h1 className="m-0 relative text-inherit font-bold font-inherit mq750:text-13xl mq450:text-5xl">
          Dream. Design. Bathe.
        </h1>
      </div>
      <div className="large-screen-image-container">
        <img
          className="w-[466px] h-[488px] lg:h-auto rounded-3xs max-h-full overflow-hidden shrink-0 object-cover cursor-pointer"
          loading="lazy"
          alt=""
          src="/photo@2x.png"
          onClick={onPhotoImageClick}
        />
      </div>
    </section>
    
  );
};

export default BathroomsCarpentry;
