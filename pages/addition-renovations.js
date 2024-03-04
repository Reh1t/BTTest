import PhotoFrame from "../components/photo-frame";
import HonoringMessage from "../components/honoring-message";
import RenovationDetails from "../components/renovation-details";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const AdditionRenovations = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-5 px-0 pb-0 box-border tracking-[normal]">
<Navbar />
      <PhotoFrame />
      <HonoringMessage />
      <section className="w-[1320px] flex flex-row items-start justify-start pt-0 px-5 pb-[29px] box-border max-w-full text-left text-5xl text-kuno-red font-footer-bold-text">
        <div className="flex flex-col items-start justify-start max-w-full">
          <h3 className="m-0 relative text-inherit font-normal font-inherit mq450:text-lgi">
            Carpentry
          </h3>
          <h1 className="m-0 relative text-21xl font-bold font-inherit mq800:text-13xl mq450:text-5xl">{`Bathroom Renovations `}</h1>
        </div>
      </section>
      <RenovationDetails />
      <footer className="self-stretch bg-sandybrown overflow-hidden flex flex-col items-center justify-start py-[45px] pr-[21px] pl-5 box-border gap-[30px_0px] max-w-full text-left text-45xl text-kuno-red font-footer-bold-text">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq800:text-32xl mq450:text-19xl">{`Ready to transform your space? `}</h1>
        <h3 className="m-0 w-[960px] relative text-5xl font-medium font-inherit text-center inline-block max-w-full mq450:text-lgi">
          With our expertise and dedication, let's bring your home addition or
          renovation project to life. Contact us today to begin your journey!
        </h3>
        <button className="cursor-pointer pt-[7px] px-[7px] pb-2 bg-white w-[212px] rounded-mini box-border overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-solid border-sandybrown hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100">
          <div className="relative text-17xl font-medium font-footer-bold-text text-kuno-red text-left">
            CALL US
          </div>
        </button>
      </footer>
<Footer/>
    </div>
  );
};

export default AdditionRenovations;
