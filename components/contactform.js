import { handleFormSubmit } from "./handleFormSubmit";

const ContactForm = () => {
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-[480px] sm:w-[100%] max-w-full mx-auto rounded-[30px] bg-white shadow-[0px_100px_150px_-50px_rgba(25,_58,_75,_0.3)] flex flex-col items-center justify-start py-4 pr-1 pl-6 gap-4"
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[20px] pl-0 box-border max-w-full">
        <h1 className="m-0 flex-1 relative text-15xl font-bold font-footer-bold-text text-left inline-block max-w-full mq450:text-4xl mq750:text-10xl">
          <span className="text-kuno-red">{`Get in `}</span>
          <span className="text-sandybrown">touch</span>
          <span className="text-kuno-red">{` `}</span>
        </h1>
      </div>
      <div className="self-stretch relative text-base font-footer-bold-text text-kuno-red text-left">
        Bring your amazing imagination into reality by getting in touch with us.
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[20px] pl-0 box-border max-w-full max-h-full">
        <div className="flex flex-col items-start justify-start gap-4 max-w-full">
          <div className="overflow-hidden flex flex-row items-end justify-center pt-2 px-0 pb-0 box-border max-w-full">
            <div className="h-[35px] w-[420px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
              <div className="mb-[-20px] w-[440px] flex flex-row items-start justify-start pt-0 pb-7 pr-6 pl-0 box-border max-w-[106%] shrink-0">
                <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
                  <input
                    className="w-full  font-footer-bold-text text-base [border:none] [outline:none] bg-[transparent] self-stretch h-[18px] relative text-left flex items-center min-w-[250px]"
                    placeholder="Enter your first name"
                    type="text"
                    id="first_name"
                    required
                  />
                  <div className="self-stretch h-px relative bg-grey-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-end justify-center pt-2 px-0 pb-0 box-border max-w-full">
            <div className="h-[35px] w-[420px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
              <div className="mb-[-20px] w-[440px] flex flex-row items-start justify-start pt-0 pb-7 pr-6 pl-0 box-border max-w-[106%] shrink-0">
                <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
                  <input
                    className="w-full  font-footer-bold-text text-base [border:none] [outline:none] bg-[transparent] self-stretch h-[18px] relative text-left flex items-center min-w-[250px]"
                    placeholder="Enter your last name"
                    type="text"
                    id="last_name"
                    required
                  />
                  <div className="self-stretch h-px relative bg-grey-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-end justify-center pt-2 px-0 pb-0 box-border max-w-full">
            <div className="h-[35px] w-[420px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
              <div className="mb-[-20px] w-[440px] flex flex-row items-start justify-start pt-0 pb-7 pr-6 pl-0 box-border max-w-[106%] shrink-0">
                <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
                  <input
                    className="w-full  font-footer-bold-text text-base [border:none] [outline:none] bg-[transparent] self-stretch h-[18px] relative text-left flex items-center min-w-[250px]"
                    placeholder="Enter your city name"
                    type="text"
                    id="city"
                    required
                  />
                  <div className="self-stretch h-px relative bg-grey-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-end justify-center pt-2 px-0 pb-0 box-border max-w-full">
            <div className="h-[35px] w-[420px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
              <div className="mb-[-20px] w-[440px] flex flex-row items-start justify-start pt-0 pb-7 pr-6 pl-0 box-border max-w-[106%] shrink-0">
                <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
                  <div className="w-full flex items-center">
                    <span className="font-footer-bold-text text-base text-left flex items-center">
                      +1
                    </span>
                    <input
                      className="w-full font-footer-bold-text text-base [border:none] [outline:none] bg-[transparent] self-stretch h-[18px] relative text-left flex items-center min-w-[250px] ml-2"
                      placeholder="Enter your contact number"
                      type="tel"
                      pattern="\d{10}"
                      id="phone"
                      required
                    />
                  </div>
                  <div className="self-stretch h-px relative bg-grey-line" />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden flex flex-row items-end justify-center pt-2 px-0 pb-0 box-border max-w-full">
            <div className="h-[35px] w-[420px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
              <div className="mb-[-20px] w-[440px] flex flex-row items-start justify-start pt-0 pb-7 pr-6 pl-0 box-border max-w-[106%] shrink-0">
                <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
                  <input
                    className="w-full  font-footer-bold-text [border:none] [outline:none] text-base bg-[transparent] self-stretch h-[18px] relative text-left flex items-center min-w-[250px]"
                    placeholder="Enter your e-mail"
                    type="email"
                    id="email"
                    required
                  />
                  <div className="self-stretch h-px relative bg-grey-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-end justify-center pt-2 px-0 pb-0 box-border max-w-full">
            <div className="h-[100px] w-[420px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
              <div className="mb-[-20px] w-[440px] flex flex-row items-start justify-start pt-0 pb-7 pr-6 pl-0 box-border max-w-[106%] shrink-0">
                <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
                  <textarea
                    className="w-[420px] h-auto border-solid font-footer-bold-text text-base bg-[transparent] self-stretch relative text-left flex items-start min-w-[250px]"
                    placeholder="Enter your project details"
                    id="project_details"
                    required
                  ></textarea>
                  <div className="self-stretch h-px relative bg-grey-line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[20px] pl-0 box-border max-w-full">
        <button className="cursor-pointer p-3 bg-dodgerblue-200 flex-1 rounded-3xs overflow-hidden flex flex-row items-center justify-center box-border max-w-full hover:bg-dodgerblue-100">
          <div className="w-[120px] relative text-lg font-medium font-footer-bold-text text-white text-center flex items-center justify-center shrink-0 mq450:text-base">
            Submit
          </div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
