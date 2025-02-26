// import React from "react";
// import "../../../_dist/ContactFeature.css";
// import ContactUs from "./ContactUs";
// import ContactButton from "../../../components/ContactButton";
// import InstagramIcon from "../../../components/icons/InstagramIcon";
// import EnhaceIcon from "../../../components/icons/EnhaceIcon";
// import DribbleIcon from "../../../components/icons/DribbleIcon";

// const ContactFeature = () => {
//   return (
//     <section className="contact-feature-container">
//       <h1 className="main-title">
//         Reach <br />
//         out <br />
//         anytime!
//       </h1>
//       <div className="contact-content-main">
//         <img src="./images/alaa-contact.svg" alt="ala bahri " />
//         <div className="contact-form-container">
//           <div className="first-section">
//             <div className="contact-titles-section">
//               <h2>Contact</h2>
//               <h1>
//                 Drop me a <br /> message!
//               </h1>
//             </div>
//             <ContactUs />
//           </div>
//           <div className="buttons-section">
//             <ContactButton icon={<InstagramIcon/>} linkurl="https://www.instagram.com/meraki_artstn/?hl=fr"> Instagram</ContactButton>
//             <ContactButton icon={<EnhaceIcon />} linkurl={"string"}>Behance</ContactButton>
//             <ContactButton icon={<DribbleIcon />} linkurl={"string"}>Dribbble</ContactButton>


//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactFeature;



import React from "react";
import "../../../_dist/ContactFeature.css";
import ContactUs from "./ContactUs";
import ContactButton from "../../../components/ContactButton";
import InstagramIcon from "../../../components/icons/InstagramIcon";
import EnhaceIcon from "../../../components/icons/EnhaceIcon";
import DribbleIcon from "../../../components/icons/DribbleIcon";

const ContactFeature = () => {
  return (
    <section className="contact-feature-container">
      <div className="aside-left">
      <h1 className="main-title">
        Reach <br />
        out <br />
        anytime!
      </h1>
      <img src="./images/alaa-contact.svg" alt="ala bahri " />

      </div>
      
      <div className="contact-content-main">
        <div className="contact-form-container">
          <div className="first-section">
            <div className="contact-titles-section">
              <h2>Contact</h2>
              <h1>
                Drop me a <br /> message!
              </h1>
            </div>
            <ContactUs />
          </div>
          <div className="buttons-section">
            <ContactButton icon={<InstagramIcon/>} linkurl="https://www.instagram.com/meraki_artstn/?hl=fr"> Instagram</ContactButton>
            <ContactButton icon={<EnhaceIcon />} linkurl={"string"}>Behance</ContactButton>
            <ContactButton icon={<DribbleIcon />} linkurl={"string"}>Dribbble</ContactButton>


          </div>
        </div>
        {/* <img src="./images/decoration.svg" alt="decoration for contact" /> */}
      </div>
    </section>
  );
};

export default ContactFeature;