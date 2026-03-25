import ContactHero from "./components/ContactHero";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactFormSection from "./components/ContactFormSection";
const ContactPage = () => {
  return (
    <>
      <ContactHero
        data={{
          title: {
            normal: "Contact the Office of",
            italic: "International Affairs",
          },
          description:
            "Reach out to our team for admissions support, partnerships, and international student enquiries.",
          breadcrumb: ["Home", "Contact"],
          image: "/img/contact-hero.jpg",
        }}
      />
      <ContactInfoSection />
      <ContactFormSection />
    </>
  );
};

export default ContactPage;
