import { useCallback } from "react";
import { useRouter } from "next/router";

const AboutUs = () => {
  const router = useRouter();

  const onContactUsNowClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start max-w-full">
        <header className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[27px] px-5 box-border gap-[6px_0px] max-w-full text-left text-21xl text-kuno-red font-footer-bold-text">
          <h1 className="m-0 h-[46px] relative text-inherit font-bold font-inherit inline-block whitespace-nowrap">
            About Us
          </h1>
          <h1 className="m-0 relative text-13xl font-normal font-inherit inline-block whitespace-nowrap max-w-full">{`Where Craftsmanship Meets Excellence `}</h1>
        </header>
        <div className="w-[1280px] h-[538px] rounded-3xs overflow-hidden shrink-0 flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/adobestock-278545655-2-2@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-12 px-5 box-border max-w-full text-justify text-base text-kuno-red font-footer-bold-text mq450:pt-[31px] mq450:pb-[31px] mq450:box-border">
        <div className="w-[1240px] flex flex-col items-start justify-start gap-[24px_0px] max-w-full">
          <div className="h-[54px] relative inline-block">
            <p className="m-0">
              Welcome to Building Tradition, where craftsmanship meets
              excellence. Established in 2006, we began as a small contracting
              team driven by a passion for quality workmanship. Today, we're a
              leading general contracting company specializing in residential
              and commercial projects, including custom staircases,
            </p>
            <p className="m-0">casework, cabinetry, and more.</p>
          </div>
          <div className="self-stretch h-9 relative inline-block">
            What sets us apart is our extensive network of trade experts and our
            focus on conceptual design. With these tools, we tackle every job
            with unique expertise, saving our clients time, money, and energy.
          </div>
          <div className="self-stretch h-9 relative inline-block">
            We collaborate with trusted industry professionals to deliver
            outstanding results, blending traditional craftsmanship with
            innovative solutions. At Building Tradition, we prioritize
            excellence in every service, from consultation to execution.
          </div>
          <div className="relative whitespace-pre-wrap">
            Your satisfaction is our top priority. Whether you're starting a new
            construction project or renovating your space, count on us as your
            trusted partner for high-quality work.
          </div>
          <b className="relative text-xl inline-block max-w-full mq450:text-base">
            Reach out today, and let's discuss how we can help you achieve your
            project goals.
          </b>
        </div>
      </section>
      <footer className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center py-2.5 px-5 text-center text-21xl text-kuno-red font-footer-bold-text">
        <h1
          className="m-0 h-[46px] relative text-inherit font-bold font-inherit inline-block cursor-pointer mq450:text-5xl mq750:text-13xl"
          onClick={onContactUsNowClick}
        >{`Contact Us Now! `}</h1>
      </footer>
    </div>
  );
};

export default AboutUs;
