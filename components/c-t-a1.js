import { useRouter } from "next/router";

const CTA1 = () => {
  const router = useRouter();
  
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <section className="self-stretch bg-sandybrown overflow-hidden flex flex-col items-center justify-start py-[6.938rem] px-[1.25rem] box-border relative gap-[1.5rem_0.625rem] max-w-full text-left text-[4rem] text-kuno-red font-footer-bold-text mq450:pt-[4.5rem] mq450:pb-[4.5rem] mq450:box-border">
      <img
        className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover opacity-[0.3]"
        loading="lazy"
        alt="photo"
        src="/adobestock-89308963-1-1-2@2x.png"
      />
      <div className="w-[74.125rem] flex flex-col items-start justify-start gap-[0.625rem_0rem] max-w-full text-white">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="flex flex-row flex-wrap items-start justify-start max-w-full z-[1]">
            <h1 className="m-0 relative text-inherit font-bold font-inherit mq1050:text-[3.188rem] mq450:text-[2.375rem]">
              Get cooking in style!
            </h1>
          </div>
        </div>
        <b className="self-stretch relative text-[1.5rem] text-center z-[1] mq450:text-[1.188rem]">
          Let's bring your kitchen renovation project to life. Contact us today
          to begin your culinary journey!
        </b>
      </div>
      <div className="w-[74.125rem] flex flex-row items-start justify-center max-w-full">
        <button 
        className="cursor-pointer py-[0.594rem] px-[2.563rem] bg-white rounded-mini overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[2px] border-solid border-sandybrown hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100"
        onClick={() => handleNavigation("./contact")}
        >
          <b className="relative text-[2rem] font-footer-bold-text text-kuno-red text-left">
            CALL US
          </b>
        </button>
      </div>
    </section>
  );
};

export default CTA1;
