import Breadcumb from "@/src/components/Breadcumb";
import Counter from "@/src/components/Counter";
import Faqs from "@/src/components/Faqs";
import LogoSlider from "@/src/components/LogoSlider";
import Layout from "@/src/layout/Layout";
import { testimonial_list_slider } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
const About = () => {
  return (
    <Layout>
      <Breadcumb pageName={"About Us"} />
      {/* ========================================================= */}
      {/* Start abouts area  */}
      {/* ========================================================= */}
      {/* <div className="abouts_areas">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="singles_abouts_boxs">
                <div className="abouts_thumb">
                  <img src="assets/images/resource/abouts_1.png" alt />
                  <div className="about-inner-content">
                    <div className="abouts_titles">
                      <h3>
                        All in one web solution for your digital business{" "}
                      </h3>
                      <div className="abouts_icons">
                        <a href="#">
                          <i className="fas fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="singles_abouts_boxs">
                <div className="abouts_thumb">
                  <img src="assets/images/resource/abouts_2.png" alt />
                  <div className="abouts_titles upper">
                    <h3>The top best digital agency in new road market usa </h3>
                    <div className="abouts_icons">
                      <a href="#">
                        <i className="fas fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*=================================================*/}
      {/* START  feture-area Section */}
      {/*=================================================*/}
      <div className="feature-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <h5>About Ananta</h5>
                <h2>
                  We Curate Dialogues That Shape{" "}
                  <span>India's Global Role</span>
                </h2>
                <p className="about-text1">
                  These dialogues address not only current concerns but look
                  beyond the horizon to find new realms of development.
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" />
                    <span>
                      20+ years of convening high-level stakeholders from
                      government, industry & media
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />
                    <span>
                      Unique intellectual firepower influencing India’s foreign
                      policy
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />
                    <span>
                      Shaping perspectives through sustained international
                      engagement
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <Tab.Container defaultActiveKey={"t1"}>
                <div className="tab">
                  <Nav as="ul" className="tabs d-flex justify-between">
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t1"}>
                        International Dialogues
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t2"}>
                        Leadership Programmes
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t3"}>
                        Policy Dialogues
                      </Nav.Link>
                    </li>
                  </Nav>

                  <Tab.Content className="tab_content">
                    <Tab.Pane eventKey={"t1"} className="tabs_item">
                      {/* <img
                  src="assets/images/resource/international-dialogue.png"
                  alt="International Dialogues"
                /> */}
                      <ul className="tabs-inner-list">
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Facilitate mutual understanding between global
                            influencers
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Address global challenges through shared insights
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Dialogue-led learning to inform policies at home
                          </span>
                        </li>
                      </ul>
                    </Tab.Pane>

                    {/* Leadership Programmes */}
                    <Tab.Pane eventKey={"t2"} className="tabs_item">
                      {/* <img
                  src="assets/images/resource/leadership-programme.png"
                  alt="Leadership Programmes"
                /> */}
                      <ul className="tabs-inner-list">
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Identify prospective changemakers across sectors
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Nurture values-based leadership through
                            self-reflection
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Equip future leaders with tools to drive impactful
                            change
                          </span>
                        </li>
                      </ul>
                    </Tab.Pane>

                    {/* Policy Dialogues */}
                    <Tab.Pane eventKey={"t3"} className="tabs_item">
                      {/* <img
                  src="assets/images/resource/policy-dialogue.png"
                  alt="Policy Dialogues"
                /> */}
                      <ul className="tabs-inner-list">
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Inclusive platforms for cross-sectoral collaboration
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Generate actionable solutions for social challenges
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Foster innovative thinking around public policy
                          </span>
                        </li>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>

              {/* Optional: Job Status Notice */}
              <div className="mt-4">
                <h5>Application Instructions</h5>
                <p>No open positions currently.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      {/* <div className="testimonial-area">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title white pb-50">
                <h5> Testimonials </h5>
                <h2> Consen Trusted Customers </h2>
                <h2>
                  {" "}
                  Awesome <span> Reviews </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="row">
                <div className="col-6">
                  <div className="testi-counter-box upper">
                    <div className="testi-counter-title">
                      <h3 className="counter"> 1,372 </h3>
                      <span>+</span>
                      <p> Happy Customers </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="testi-counter-box">
                    <div className="testi-counter-title">
                      <h3 className="counter"> 100 </h3>
                      <span>%</span>
                      <p> Satisfaction Rate </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-shape-thumb1 rotateme">
              <img src="assets/images/resource/testimonial-map.png" alt />
            </div>
          </div>
          <div className="row">
            <Swiper
              {...testimonial_list_slider}
              className="testimonial_list owl-carousel"
            >
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi1.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4>Philip Anthorpy</h4>
                        <p>UI Designer</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi3.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Shilpa Shethy </h4>
                        <p> CEO, Founder </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi2.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi3.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Shilpa Shethy </h4>
                        <p> CEO, Founder </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi2.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi1.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4>Philip Anthorpy</h4>
                        <p>UI Designer</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi2.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="testi-shape">
              <div className="testi-shape-thumb">
                <img src="assets/images/resource/all-shape5.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/*  Start  Counter Section */}
      {/*===================================================*/}
      <div className="counter-section style-33 pt-30 pb-80">
        <div className="container">
          <div className="counter-container">
            <div className="row hr pt-40">
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={60} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Member</h4>
                        <h3>Professional</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={70} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Projects</h4>
                        <h3>Completed</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={90} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Client</h4>
                        <h3>Satisfactions</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Team Area */}
      {/*==================================================*/}
      <div className="team_area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title upper text-center pb-60">
                <h5>Experts</h5>
                <h2>
                  {" "}
                  Let’s Meet with Our <span>Experts</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* A K Bhattacharya */}
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img
                    style={{ height: "350px", objectFit: "cover" }}
                    src="https://anantacentre.in/wp-content/uploads/2022/08/A-K-Bhattacharya.jpg"
                    alt="A K Bhattacharya"
                  />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4>A K Bhattacharya</h4>
                    <span>
                      Editorial Director, Business Standard
                      <br />
                      Distinguished Visiting Fellow, Ananta Centre
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambassador Deepak Bhojwani */}
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img
                    style={{ height: "350px", objectFit: "cover" }}
                    src="https://anantaaspencentre.in/wp-content/uploads/2022/09/Ambassador-Deepak-Bhojwani.jpg"
                    alt="Amb. Deepak Bhojwani"
                  />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4>Amb. Deepak Bhojwani</h4>
                    <span>
                      Former Ambassador to Colombia, Venezuela & Cuba
                      <br />
                      Distinguished Visiting Fellow, Ananta Centre
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pramit Pal Chaudhuri */}
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img
                    style={{ height: "350px", objectFit: "cover" }}
                    src="https://anantaaspencentre.in/wp-content/uploads/2022/08/Pramit-Pal-Chaudhuri.jpg"
                    alt="Pramit Pal Chaudhuri"
                  />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4>Pramit Pal Chaudhuri</h4>
                    <span>
                      Former Foreign Editor, Hindustan Times
                      <br />
                      Distinguished Visiting Fellow, Ananta Aspen Centre
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* End consen Team Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  FAQ Section */}
      {/*===================================================*/}
      {/* <div className="faq-sectiions ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title white pb-1 mb-1">
                <h5> process </h5>
                <h2>
                  {" "}
                  Freequently Asked <span> Question </span>
                </h2>
                <p className="study-text1">
                  {" "}
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional.{" "}
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Communicate orthogonal process </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Professionally grow cutting-edge paradigms </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Communicate orthogonal process </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Professionally grow cutting-edge paradigms </span>
                  </li>
                </ul>
              </div>
              <div className="why-choose-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> More About{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-0">
              <div className="tab_container pl-30 pt-20">
                <Faqs />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/*Start  Brand Section */}
      {/*===================================================*/}
      {/* <div className="brand-section">
        <div className="container">
          <div className="row">
            <LogoSlider />
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* Start consen Subscribe Area */}
      {/*==================================================*/}
      <div className="subscribe-area style-two mt-5 mt-sm-0">
        <div className="container">
          <div className="subscribe">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="subscribe-title">
                  <h1>Get your Free Business Consolution</h1>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <a href="tel:09837393403" className="subscribe-icon">
                  <i className="bi bi-telephone-inbound" />
                </a>
                <div className="subscribe-title2">
                  <h1> +98 376 (2890) 100 </h1>
                  <p> example@gmail.com </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Subscribe Area */}
      {/*==================================================*/}
    </Layout>
  );
};
export default About;
