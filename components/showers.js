import { useCallback } from "react";
import { useRouter } from "next/router";

const Showers = () => {
  const router = useRouter();

  const onPhotoImageClick = useCallback(() => {
    router.push("/bathrooms");
  }, [router]);

  return (
    <section className="self-stretch bg-white overflow-hidden flex lg:flex-col md:flex-row items-center justify-center py-2.5 pr-7 pl-[34px] box-border gap-[0px_131px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text md:flex-wrap md:gap-[0px_131px]">
      <img
        className="w-[466px] h-[488px] rounded-3xs max-h-full overflow-hidden shrink-0 object-cover cursor-pointer md:order-last"
        loading="lazy"
        alt=""
        src="/photo-1@2x.png"
        onClick={onPhotoImageClick}
      />
      <div className="flex flex-col items-start justify-start gap-[28px_0px] max-w-full md:py-5 md:px-0 md:w-[50%]">
        <h1 className="m-0 relative text-inherit font-bold font-inherit md:text-5xl">
          Steam Room Showers
        </h1>
        <div className="relative text-base">
          Indulge in the Ultimate Relaxation
        </div>
        <h1 className="m-0 relative text-inherit font-bold font-inherit md:text-5xl">
          Accessible washrooms
        </h1>
        <div className="relative text-base">
          Inclusive Designs for Every Need
        </div>
        <h1 className="m-0 relative text-inherit font-bold font-inherit md:text-5xl">
          Bathroom additions
        </h1>
        <div className="relative text-base inline-block max-w-full">
          Expand Your Comfort with Seamless Additions
        </div>
        <h1 className="m-0 relative text-inherit font-bold font-inherit md:text-5xl">
          Sustainable solutions
        </h1>
        <div className="relative text-base">Energy Efficiency & Eco-Friendliness</div>
      </div>
    </section>
  );
};

export default Showers;
