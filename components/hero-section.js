import DesignCard from "./design-card";

const HeroSection = () => {

  return (
    <section className="flex flex-col items-start justify-start max-w-full text-left text-5xl text-kuno-red font-footer-bold-text">
      <header className="overflow-hidden flex flex-col items-center justify-start py-5 px-5 lg:px-20 box-border gap-5 max-w-full text-center text-xl lg:text-5xl text-kuno-red font-footer-bold-text">
        <h1>Pioneering Innovation, Crafting Excellence</h1>
        <div className="text-font">
          <p className="m-0">
            Blending revolutionary technology with artistic craftsmanship across four specialized sectors to bring your visionary projects to life.
          </p>
        </div>
      </header>
      <div className="flex flex-wrap justify-start py-6 pr-6 pl-6 box-border gap-6 md:gap-10 max-w-full">
        <DesignCard
          photoPlaceholder="/photo-placeholder@2x.png"
          design="Design"
          aVirtualCanvasForYourDrea="A virtual canvas for your dreams. Efficient planning that saves you both time and money"
          navigateTo="/design-page" // Example path to navigate to
        />
        <DesignCard
          photoPlaceholder="/photo-placeholder-1@2x.png"
          design="Carpentry"
          aVirtualCanvasForYourDrea="From residential construction to general contracting, we excel in turning aspirations into reality"
          navigateTo="/carpentry-page" // Example path to navigate to
        />
        <DesignCard
          photoPlaceholder="/photo-placeholder-2@2x.png"
          design="Staircases"
          aVirtualCanvasForYourDrea="Elevate your space with our industry-leading staircases"
          navigateTo="/staircases-page" // Example path to navigate to
        />
        <DesignCard
          photoPlaceholder="/photo-placeholder-3@2x.png"
          design="Casework"
          aVirtualCanvasForYourDrea="Excellence in our approach to cabinetry, casework, closets and millwork"
          navigateTo="/casework-page" // Example path to navigate to
        />
      </div>
    </section>
  );
};

export default HeroSection;
