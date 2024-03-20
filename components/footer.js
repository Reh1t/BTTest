import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="w-full bg-sandybrown" style={{ fontFamily: "ubuntu" }}>
      <footer className="bg-sandybrown text-white py-10 px-4 md:py-16 md:px-8 lg:px-12 xl:px-16">
        <div className="container mx-auto flex flex-wrap justify-between items-start gap-6 md:flex-col md:items-center md:text-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-lgi  cursor-pointer" onClick={() => handleNavigation("/design-page")}>Designs</h2>
            <ul className="text-base md:text-lg  cursor-pointer">
              <li onClick={() => handleNavigation("/conceptual-modelling-plannin1")}>Conceptual Modelling</li>
              <li onClick={() => handleNavigation("/conceptual-modelling-plannin1")}>Planning</li>
              <li onClick={() => handleNavigation("/construction-design")}>Construction Design</li>
              <li onClick={() => handleNavigation("/construction-management")}>Construction Management</li>
              <li onClick={() => handleNavigation("/accessible-construction")}>Accessible Construction</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lgi cursor-pointer" onClick={() => handleNavigation("/carpentry-page")}>Carpentry</h2>
            <ul className="text-base md:text-lg cursor-pointer">
              <li onClick={() => handleNavigation("/custom-homes")}>Custom Homes</li>
              <li onClick={() => handleNavigation("/addition-renovations")}>Additions</li>
              <li onClick={() => handleNavigation("/addition-renovations")}>Renovations</li>
              <li onClick={() => handleNavigation("/kitchens")}>Kitchens</li>
              <li onClick={() => handleNavigation("/bathrooms")}>Bathrooms</li>
              <li onClick={() => handleNavigation("/accessible-construction")}>Accessible Construction</li>
              <li onClick={() => handleNavigation("/carpentry-page")}>Trim</li>
              <li onClick={() => handleNavigation("/d-e-c-k-s-p-a-t-i-o-s")}>Decks & Patios</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lgi cursor-pointer" onClick={() => handleNavigation("/staircases-pages")}>Staircases</h2>
            <ul className="text-base md:text-lg cursor-pointer">
              <li onClick={() => handleNavigation("/staircases-pages")}>Open Riser</li>
              <li onClick={() => handleNavigation("/staircases-pages")}>Closed Riser</li>
              <li onClick={() => handleNavigation("/staircases-pages")}>Retrofit</li>
              <li onClick={() => handleNavigation("/staircases-pages")}>Exterior</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lgi cursor-pointer" onClick={() => handleNavigation("/casework-page")}>Casework</h2>
            <ul className="text-base md:text-lg cursor-pointer">
              <li onClick={() => handleNavigation("/casework-page")}>Cabinetry</li>
              <li onClick={() => handleNavigation("/casework-page")}>Closets</li>
              <li onClick={() => handleNavigation("/casework-page")}>Display Cases</li>
              <li onClick={() => handleNavigation("/casework-page")}>Custom Millwork</li>
              <li onClick={() => handleNavigation("/casework-page")}>Inlays & Decal</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 cursor-pointer" onClick={() => handleNavigation("/")}>
          <img
            className="h-12 mx-auto"
            loading="lazy"
            alt=""
            src="/bt-logo-2024-long@2x.png"
          />
        </div>
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-6 mt-8 md:flex-col md:text-center">
          <p className="text-lgi">Copyright © Building Tradition 2024</p>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-[url('/phonecall-1@3x.png')] bg-cover bg-no-repeat"></div>
            <p className="text-lgi">613-703-6840</p>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-[url('/email-1@3x.png')] bg-cover bg-no-repeat"></div>
            <p className="text-lgi whitespace-nowrap">info@buildingtradition.ca</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;