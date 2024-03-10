const ContactForm = () => {
  return (
      <form className="w-[576px] sm:w-[100%] max-w-full mx-auto rounded-[50px] bg-white shadow-[0px_141px_200px_-80px_rgba(25,_58,_75,_0.3)] flex flex-col items-center justify-start py-5 pr-1 pl-8 gap-20">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[29px] pl-0 box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-21xl font-bold font-footer-bold-text text-left inline-block max-w-full mq450:text-5xl mq750:text-13xl">
              <span className="text-kuno-red">{`Get in `}</span>
              <span className="text-sandybrown">touch</span>
              <span className="text-kuno-red">{` `}</span>
            </h1>
          </div>
          <div className="self-stretch relative text-base font-footer-bold-text text-kuno-red text-left">
            Bring your amazing imagination into reality by getting in touch with
            us.
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[29px] pl-0 box-border max-w-full">
            <div className="flex flex-col items-start justify-start gap-[10px_0px] max-w-full">
              <div className="overflow-hidden flex flex-row items-end justify-center pt-3 px-0 pb-0 box-border max-w-full">
                <div className="h-[43px] w-[516px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
                  <div className="mb-[-23px] w-[548px] flex flex-row items-start justify-start pt-0 pb-9 pr-8 pl-0 box-border max-w-[106%] shrink-0">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[11px_0px] max-w-full">
                      <input
                        className="w-full [border:none] [outline:none] font-footer-bold-text text-base bg-[transparent] self-stretch h-[18px] relative text-input-text text-left flex items-center min-w-[250px]"
                        placeholder="First name"
                        type="text"
                      />
                      <div className="self-stretch h-px relative bg-grey-line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-end justify-center pt-3 px-0 pb-0 box-border max-w-full">
                <div className="h-[42px] w-[516px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
                  <div className="mb-[-24px] w-[548px] flex flex-row items-start justify-start pt-0 pb-9 pr-8 pl-0 box-border max-w-[106%] shrink-0">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[11px_0px] max-w-full">
                      <input
                        className="w-full [border:none] [outline:none] font-footer-bold-text text-base bg-[transparent] self-stretch h-[18px] relative text-input-text text-left flex items-center min-w-[250px]"
                        placeholder="Last name"
                        type="text"
                      />
                      <div className="self-stretch h-px relative bg-grey-line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-end justify-center pt-3 px-0 pb-0 box-border max-w-full">
                <div className="h-[42px] w-[516px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
                  <div className="mb-[-24px] w-[548px] flex flex-row items-start justify-start pt-0 pb-9 pr-8 pl-0 box-border max-w-[106%] shrink-0">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[11px_0px] max-w-full">
                      <input
                        className="w-full [border:none] [outline:none] font-footer-bold-text text-base bg-[transparent] self-stretch h-[18px] relative text-input-text text-left flex items-center min-w-[250px]"
                        placeholder="City"
                        type="text"
                      />
                      <div className="self-stretch h-px relative bg-grey-line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-end justify-center pt-3 px-0 pb-0 box-border max-w-full">
                <div className="h-11 w-[516px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
                  <div className="mb-[-22px] w-[548px] flex flex-row items-start justify-start pt-0 pb-9 pr-8 pl-0 box-border max-w-[106%] shrink-0">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[11px_0px] max-w-full">
                      <input
                        className="w-full [border:none] [outline:none] font-footer-bold-text text-base bg-[transparent] self-stretch h-[18px] relative text-input-text text-left flex items-center min-w-[250px]"
                        placeholder="Contact Phone"
                        type="text"
                      />
                      <div className="self-stretch h-px relative bg-grey-line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-end justify-center pt-3 px-0 pb-0 box-border max-w-full">
                <div className="h-[43px] w-[516px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
                  <div className="mb-[-23px] w-[548px] flex flex-row items-start justify-start pt-0 pb-9 pr-8 pl-0 box-border max-w-[106%] shrink-0">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[11px_0px] max-w-full">
                      <input
                        className="w-full [border:none] [outline:none] font-footer-bold-text text-base bg-[transparent] self-stretch h-[18px] relative text-input-text text-left flex items-center min-w-[250px]"
                        placeholder="E-mail"
                        type="text"
                      />
                      <div className="self-stretch h-px relative bg-grey-line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-end justify-center pt-3 px-0 pb-0 box-border max-w-full">
                <div className="h-[50px] w-[516px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
                  <div className="mb-[-16px] w-[548px] flex flex-row items-start justify-start pt-0 pb-9 pr-8 pl-0 box-border max-w-[106%] shrink-0">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[11px_0px] max-w-full">
                      <input
                        className="w-full [border:none] [outline:none] font-footer-bold-text text-base bg-[transparent] self-stretch h-[18px] relative text-input-text text-left flex items-center min-w-[250px]"
                        placeholder="Project Details"
                        type="text"
                      />
                      <div className="self-stretch h-px relative bg-grey-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[29px] pl-0 box-border max-w-full">
            <button className="cursor-pointer [border:none] p-4 bg-dodgerblue-200 flex-1 rounded-3xs overflow-hidden flex flex-row items-center justify-center box-border max-w-full hover:bg-dodgerblue-100">
              <div className="w-[134px] relative text-xl font-medium font-footer-bold-text text-white text-center flex items-center justify-center shrink-0 mq450:text-base">
                Submit
              </div>
            </button>
          </div>
        </form>
  );
};

export default ContactForm;

