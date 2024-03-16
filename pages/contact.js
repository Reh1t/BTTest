import ContacUsHeroSection from "../components/contactusherosection";
import ContactForm from "../components/contactform";

const Contact = () => {
  return (
    <div className="container pt-40">
      <ContacUsHeroSection />
      <div className="bg-white pt-5 pb-10">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
