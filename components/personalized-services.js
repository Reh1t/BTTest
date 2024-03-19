const PersonalizedServices = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.688rem] box-border max-w-full text-left text-[1.5rem] text-kuno-red font-footer-bold-text">
      <div
        className="flex-1 bg-white overflow-hidden flex flex-row flex-wrap items-start justify-start py-[3.5rem] pr-[3.75rem] pl-[3.5rem] box-border gap-[8.125rem_7.875rem] max-w-full lg:gap-[8.125rem_3.938rem] lg:pl-[1.75rem] lg:pr-[1.875rem] lg:box-border mq750:gap-[0rem] mq750:pt-[2.25rem] mq750:pb-[2.25rem] mq750:box-border mq450:gap-[1rem]"
        data-scroll-to="personlizedServicesContainer"
      >
        <img
          className="flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover min-w-[20.938rem]"
          loading="lazy"
          alt=""
          src="/photo-11@2x.png"
        />
        <div className="w-[34rem] flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full">
            <div className="relative inline-block max-w-full mq450:text-[1.188rem]">
              COMMITMENT GUARANTEED
            </div>
            <h2 className="m-0 relative text-[2.5rem] font-bold font-inherit inline-block max-w-full mq1050:text-[2rem] mq450:text-[1.5rem]">
              Personalized Service
            </h2>
            <div className="w-[31.188rem] relative text-[1rem] inline-block max-w-full">
              From initial consultation to final installation, our dedicated
              team provides personalized attention and expertise, guiding you
              through every step of the journey to achieve your dream kitchen
              vision.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedServices;