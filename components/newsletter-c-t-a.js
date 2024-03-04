const NewsletterCTA = () => {
  return (
    <footer className="self-stretch bg-kuno-red overflow-hidden flex flex-row flex-wrap items-center justify-center py-20 px-[58px] box-border gap-[0px_80px] max-w-full text-left text-21xl text-kuno-greywhite font-text-regular-normal mq750:gap-[0px_80px] mq750:pl-[29px] mq750:pr-[29px] mq750:box-border mq450:gap-[0px_80px]">
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] min-w-[475px] max-w-full mq750:min-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq750:text-13xl mq750:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
          Stay in loop with us.
        </h1>
        <div className="self-stretch relative text-lg leading-[150%]">
          Keep up to date with our new products, services and anything else you
          might have missed.
        </div>
      </div>
      <div className="w-[513px] flex flex-col items-start justify-start gap-[16px_0px] max-w-full text-xs">
        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px] max-w-full mq750:flex-wrap">
          <div className="flex-1 rounded-8xs bg-kuno-red box-border flex flex-row items-center justify-start py-3 pr-[13px] pl-[11px] min-w-[268px] max-w-full border-[1px] border-solid border-kuno-greywhite">
            <input
              className="w-full [border:none] [outline:none] font-text-regular-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-kuno-greywhite text-left inline-block min-w-[233px] max-w-full"
              placeholder="Enter your email"
              type="text"
            />
          </div>
          <button className="cursor-pointer py-1.5 px-2.5 bg-[transparent] h-12 w-[84px] rounded-mini box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-sandybrown hover:bg-chocolate-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate-100">
            <b className="relative text-base font-footer-bold-text text-sandybrown text-left whitespace-nowrap">
              Sign up
            </b>
          </button>
        </div>
        <div className="self-stretch relative leading-[150%]">
          {`By clicking Sign Up you're confirming that you agree with our `}
          <span className="[text-decoration:underline]">
            Terms and Conditions
          </span>
          .
        </div>
      </div>
    </footer>
  );
};

export default NewsletterCTA;
