import ContacUsHeroSection from "../components/contactusherosection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactform";

const Contact = () => {
  return (
    <div className="container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <ContacUsHeroSection />
      <div className="bg-white pt-5 pb-10">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
