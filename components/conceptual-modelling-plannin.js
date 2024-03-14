import { useCallback } from "react";
import { useRouter } from "next/router";

const ConceptualModellingPlannin = () => {
  const router = useRouter();

  const onDesignConceptual1Click = useCallback(() => {
    router.push("/design-page");
  }, [router]);

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start p-5 box-border gap-[10px_0px] max-w-full">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq750:text-13xl mq450:text-5xl">{`Design: Conceptual Modelling & Planning`}</h1>
        <button className="cursor-pointer py-1.5 px-2 bg-[transparent] w-[99px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100">
          <div className="relative text-xs font-footer-bold-text text-sandybrown text-left whitespace-nowrap"
          onClick={() => handleNavigation("./contact")}
          >
            LEARN MORE
          </div>
        </button>
      </div>
      <div className="self-stretch h-[404px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-0 px-5 box-border max-w-full">
        <img
          className="w-[886px] relative rounded-3xs max-h-full object-cover max-w-full cursor-pointer"
          alt=""
          src="/design-conceptual-1@2x.png"
          onClick={onDesignConceptual1Click}
        />
        <img
          className="w-[344px] relative max-h-full max-w-full z-[1] mt-[-339px]"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
    </section>
  );
};

export default ConceptualModellingPlannin;
