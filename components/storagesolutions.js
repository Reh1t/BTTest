import { useCallback } from "react";
import { useRouter } from "next/router";

const StorageSolutions = () => {
    const router = useRouter();

  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center relative gap-5 max-w-full text-center text-5xl text-white font-footer-bold-text">
      <div className="w-full h-full relative flex flex-col items-center justify-end bg-cover bg-no-repeat bg-top" style={{backgroundImage: "url('/photo-and-text@3x.png')"}}>
        <h1 className="m-0 text-inherit font-bold font-inherit text-shadow-[0px_4px_10px_rgba(0,_0,_0,_0.65)] cursor-pointer">
          <p className="m-0">Cabinets, Closets,</p>
          <p className="m-0">Casework & More</p>
          <p className="m-0">Storage Solutions</p>
        </h1>
        <button className="cursor-pointer py-2 px-4 bg-transparent rounded-md border-2 border-white mt-5">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default StorageSolutions;
