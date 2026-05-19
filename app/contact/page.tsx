import ContactHero from "./components/ContactHero";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactFormSection from "./components/ContactFormSection";
import MapSection from "./components/MapSection";
import SocialMediaSection from "./components/SocialMediaSection";
import CourseCTA from "./components/CourseCTA";
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
          image: "/img/contact/hero-bg.webp",
        }}
      />
      <ContactInfoSection />

      <MapSection />
      {/* <ContactFormSection /> */}
      <SocialMediaSection />
      <CourseCTA />
    </>
  );
};

export default ContactPage;
