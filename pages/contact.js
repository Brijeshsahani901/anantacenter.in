import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
const Contact = () => {
  return (
   <Layout>
  <Breadcumb pageName={"Contact Us"} />

  <div className="contact-us pt-90 pb-90">
    <div className="container">
      <div className="row">
        {/* Contact Form */}
        <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
          <div className="contact_from_box">
            <div className="contact_title pb-4">
              <h3>Get In Touch</h3>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              method="POST"
              id="dreamit-form"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="form_box mb-30">
                    <input type="text" name="name" placeholder="Name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form_box mb-30">
                    <input type="email" name="email" placeholder="Email Address" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form_box mb-30">
                    <input type="text" name="phone" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form_box mb-30">
                    <input type="text" name="web" placeholder="Website" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form_box mb-30">
                    <textarea
                      name="message"
                      cols={30}
                      rows={10}
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="quote_button">
                    <button className="btn" type="submit">
                      <i className="bi bi-gear" /> Submit Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div id="status" />
          </div>
        </div>

        {/* Contact Details */}
        <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
          <div className="cda-content-area">
            <div className="cda-single-content d-flex">
              <div className="cda-icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div className="cda-content-inner">
                <h4>Headquarters</h4>
                <p>
                  The Ravi Shankar Centre<br />
                  7, Dr Jose P Rizal Marg<br />
                  Chanakyapuri, New Delhi, Delhi 110021
                </p>
              </div>
            </div>

            <div className="cda-single-content hr d-flex">
              <div className="cda-icon">
                <i className="fas fa-envelope" />
              </div>
              <div className="cda-content-inner">
                <h4>Email</h4>
                <p>admin@anantacentre.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Google Map of Ananta Centre */}
  <div className="map-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.134072316285!2d77.18199147539689!3d28.593566875684854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2c12d95cd75%3A0x5e0a10e446b4d5e!2sAnanta%20Centre!5e0!3m2!1sen!2sin!4v1718738508457!5m2!1sen!2sin"
            width="100%"
            height={350}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</Layout>

  );
};
export default Contact;
