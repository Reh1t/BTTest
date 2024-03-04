const Footer = () => {
  return (
    <div className="w-[1440px] bg-white flex flex-col items-center justify-start pt-0 px-0 pb-[30px] box-border gap-[30px_0px] tracking-[normal] text-left text-5xl text-kuno-red font-footer-bold-text">
      <footer className="self-stretch bg-sandybrown overflow-hidden flex flex-col items-center justify-start pt-10 px-0 pb-0 box-border gap-[76px_0px] max-w-full text-left text-5xl text-kuno-red font-footer-bold-text mq450:gap-[76px_0px] mq725:gap-[76px_0px]">
        <div className="w-[1098px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
          <div className="w-[950px] flex flex-row items-start justify-between max-w-full gap-[20px] mq975:flex-wrap">
            <div className="w-[657px] flex flex-row items-start justify-start gap-[0px_22px] max-w-full mq725:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[34px_0px] min-w-[248px] mq725:flex-1">
                <b className="relative mq450:text-lgi">Designs</b>
                <div className="flex flex-col items-start justify-start gap-[11px_0px] text-xl">
                  <div className="relative font-medium mq450:text-base">
                    Conceptual Modelling
                  </div>
                  <div className="relative font-medium mq450:text-base">
                    Planning
                  </div>
                  <div className="relative font-medium mq450:text-base">
                    Construction Design
                  </div>
                  <div className="relative font-medium mq450:text-base">
                    Construction Management
                  </div>
                  <div className="relative font-medium mq450:text-base">
                    Accessible Construction
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[0px_39px] min-w-[252px] max-w-full mq450:flex-wrap mq450:gap-[0px_39px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[34px_0px] min-w-[150px]">
                  <b className="relative mq450:text-lgi">Carpentry</b>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[11px_0px] text-xl">
                    <div className="relative font-medium mq450:text-base">
                      Custome Homes
                    </div>
                    <div className="relative font-medium mq450:text-base">
                      Additions
                    </div>
                    <div className="relative font-medium mq450:text-base">
                      Renovations
                    </div>
                    <div className="relative font-medium mq450:text-base">
                      Kitchens
                    </div>
                    <div className="relative font-medium mq450:text-base">
                      Bathrooms
                    </div>
                    <div className="relative font-medium mq450:text-base">
                      Accessible Constructions
                    </div>
                    <div className="relative font-medium mq450:text-base">
                      Trim
                    </div>
                    <div className="relative font-medium mq450:text-base">{`Decks & Patios`}</div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[34px_0px] min-w-[117px] mq450:flex-1">
                  <b className="relative mq450:text-lgi">Staircases</b>
                  <div className="flex flex-col items-start justify-start gap-[11px_0px] text-xl">
                    <div className="relative font-medium mq450:text-base">
                      Open Riser
                    </div>
                    <div className="relative font-medium mq450:text-base">
                      Closed Riser
                    </div>
                    <div className="relative font-medium mq450:text-base">
                      Retrofit
                    </div>
                    <div className="relative font-medium mq450:text-base">
                      Exterior
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[34px_0px]">
              <b className="relative mq450:text-lgi">Casework</b>
              <div className="flex flex-col items-start justify-start gap-[11px_0px] text-xl">
                <div className="relative font-medium mq450:text-base">
                  Cabinetry
                </div>
                <div className="relative font-medium mq450:text-base">
                  Closets
                </div>
                <div className="relative font-medium mq450:text-base">
                  Display Cases
                </div>
                <div className="relative font-medium mq450:text-base">
                  Custom Milwork
                </div>
                <div className="relative font-medium mq450:text-base">{`Inlays & Decal`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1272px] h-[51px] relative max-w-full">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[20px] max-h-full w-[200px] object-cover"
            loading="lazy"
            alt=""
            src="/bt-logo-2024-long@2x.png"
          />
        </div>
      </footer>
      <div className="w-[1180px] flex flex-row items-center justify-between py-0 px-5 box-border max-w-full gap-[20px] mq1025:flex-wrap">
        <b className="relative inline-block max-w-full mq450:text-lgi">{`Copyright © Building Tradition 2024 `}</b>
        <div className="flex flex-row items-start justify-start gap-[0px_10px]">
          <div className="h-[30px] w-[30px] relative bg-[url('/phonecall-1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <b className="relative mq450:text-lgi">613-703-6840</b>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0px_10px] max-w-full">
          <div className="h-[30px] w-[30px] relative bg-[url('/email-1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <b className="relative whitespace-nowrap mq450:text-lgi">
            info@buildingtradition.ca
          </b>
        </div>
      </div>
    </div>
  );
};

export default Footer;
