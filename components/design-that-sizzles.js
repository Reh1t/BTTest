import { useCallback } from "react";
import { useRouter } from "next/router";

const DesignThatSizzles = () => {
  const router = useRouter();

  const onAdobeStock8930896311Click = useCallback(() => {
    router.push("/kitchens");
  }, [router]);

  return (
    <section className="self-stretch overflow-hidden flex flex-col items-center justify-start max-w-full text-center text-21xl text-kuno-red font-footer-bold-text">
      <div className="overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 md:px-10">
        <h1 className="m-0 relative font-bold text-5xl md:text-13xl">{`Designs that sizzle, Kitchens that shine`}</h1>
      </div>
      <div className="overflow-hidden flex flex-wrap justify-center py-5 px-5 md:px-20 gap-10 md:gap-20 text-left text-5xl">
        <div className="flex flex-col items-center justify-center gap-5 md:w-1/3">
          <h3 className="m-0 font-bold text-lg md:text-lgi">{`Innovative Design`}</h3>
          <p className="text-base md:w-72">Embrace the future of kitchen technology with our smart solutions, offering convenience, efficiency, and connectivity at your fingertips for a modern culinary experience.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:w-1/3">
          <h3 className="m-0 font-bold text-lg md:text-lgi">Customized Creations</h3>
          <p className="text-base md:w-72">Tailored to your unique lifestyle, our kitchens are meticulously designed to reflect your personal taste and meet your specific needs.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:w-1/3">
          <h3 className="m-0 font-bold text-lg md:text-lgi">Timeless Appeal</h3>
          <p className="text-base md:w-72">With a focus on classic design elements and enduring aesthetics, our kitchens exude timeless charm, promising a space that remains stylish and relevant for years to come.</p>
        </div>
      </div>
      <div className="overflow-hidden flex flex-col items-center justify-start max-w-full">
        <img
          className="w-full md:w-3/4 rounded-3xs cursor-pointer"
          loading="lazy"
          alt=""
          src="/adobestock-89308963-1-1@2x.png"
          onClick={onAdobeStock8930896311Click}
        />
      </div>
    </section>
  );
};

export default DesignThatSizzles;
