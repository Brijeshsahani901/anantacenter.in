import Counter from "@/src/components/Counter";
import ProssessBar from "@/src/components/ProssessBar";
import Layout from "@/src/layout/Layout";
import { brandListProps, caseStudyProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Index = () => {
  return (
    <Layout footer={1}>
      {/*==================================================*/}
      {/* Start consen slider Area */}
      {/*==================================================*/}

      <div className="case-study-area">
        <div className="container">
          <div className="row case-study-bg align-items-center mb-40 mt-3">
            <div className="col-lg-6 col-md-8">
              <div className="consen-section-title mobile-center white ">
                <h2> We Serve the Best Works</h2>
                <h2>
                  {" "}
                  View <span> Case Studies </span>
                </h2>
              </div>
            </div>
            {/* <div className="col-lg-6 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/portfolio">
                  <a>
                    {" "}
                    All Project <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div> */}
            <div className="case-study-shape">
              <div className="case-shape-thumb bounce-animate4">
                <img src="assets/images/resource/red-dot.png" alt />
              </div>
              <div className="case-shape-thumb1 bounce-animate2">
                <img src="assets/images/resource/all-shape.png" alt />
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper {...caseStudyProps} className="case-study owl-carousel">
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img  style={{ width: '100%', height: '450px', objectFit: 'cover' }} src="https://anantacentre.in/wp-content/uploads/elementor/thumbs/IMG_1770-r6pjouofsp9c52rc9u8apkibxroby58b8odozny7w6.webp" alt="" />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6>Consulting</h6>
                        <h3>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>
                              Data Policy Consulting for Development
                              Organisations
                            </a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img style={{ width: '100%', height: '450px', objectFit: 'cover' }}  src="https://anantacentre.in/wp-content/uploads/elementor/thumbs/IMG_1807-r6pjoxhyd7d73wn8tdg6f1sppxafl8ji92c5fhu1di.webp" alt="" />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6>Consulting</h6>
                        <h3>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>
                              Strategic Planning for Ethical Data Governance
                            </a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img style={{ width: '100%', height: '450px', objectFit: 'cover' }} src="https://anantacentre.in/wp-content/uploads/elementor/thumbs/IMG_1851-r6pjp0bgxph22qj5cwo24j33i2wj8bup9galvbpuuu.webp" alt="" />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6>Consulting</h6>
                        <h3>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>
                              Finance Strategy for Rights-Based Data Management
                            </a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img style={{ width: '100%', height: '450px', objectFit: 'cover' }} src="https://anantacentre.in/wp-content/uploads/elementor/thumbs/IMG_1770-r6pjouofsp9c52rc9u8apkibxroby58b8odozny7w6.webp" alt="" />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6>Consulting</h6>
                        <h3>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Ensuring Informed Consent in Data Collection</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case3.png" alt="" />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6>Consulting</h6>
                        <h3>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Building Capacity for Data Stewardship</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case2.png" alt="" />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6>Consulting</h6>
                        <h3>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Localising Global Data Governance Frameworks</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* <div className="slider-area d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="slider-content">
                <h3> Work With Ananta Care</h3>
                <h1> Innovate Solution For </h1>
                <h1>
                  {" "}
                  Business <span>Success</span>{" "}
                </h1>
                <p>
                  {" "}
                  Monotonectally implement integrated commerce and distributed
                  is conveniently unleash B2B customer service via long
                </p>
              </div>
              <div className="lines pt-20 pb-40">
                <div className="line" />
              </div>
              <div className="banner-buttons">
                <div className="slider-button">
                  <Link legacyBehavior href="/service">
                    <a>
                      {" "}
                      Work Together <i className="bi bi-plus" />{" "}
                    </a>
                  </Link>
                </div>
                <div className="slider-contact-box">
                  <a className="contact-icon" href="tel:+983217690326">
                    <img src="assets/images/slider/call.png" alt="call icon" />
                  </a>
                  <div className="contact-number">
                    <span> Call Everyday </span>
                    <h3>
                      <a href="tel:+983217690326">+98 321 (7690) 326</a>{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 ">
              <div className="slider-thumb">
                <img src="assets/images/slider/hero-img.png" alt />
              </div>
              <div className="video-icon">
                <a
                  className="video-vemo-icon venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                  href="https://youtu.be/BS4TUd7FJSg"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
            <div className="slider-shape">
              <div className="slider-shape-thumb">
                <img src="assets/images/slider/hero-shape.png" alt />
              </div>
              <div className="slider-shape-thumb2">
                <img src="assets/images/slider/hero-shape2.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/*==================================================*/}
      {/*End consen slider Area  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}
    <div className="service-area">
  <div className="container">
    {/* Impact Section Title */}
    <div className="row align-items-center mb-90">
      <div className="col-lg-7 col-md-8 pl-0">
        <div className="consen-section-title mobile-center">
          <h2>Our Impact</h2>
          <h2>
            {" "}
            From <span>Strategic Dialogues & Global Roundtables</span>
          </h2>
        </div>
      </div>
      <div className="col-lg-5 col-md-4">
        <div className="consen-button text-right">
          <Link legacyBehavior href="/impact">
            <a>
              All Impact Activities <i className="bi bi-plus" />
            </a>
          </Link>
        </div>
      </div>
    </div>

    <div className="row">
      {/* Impact Item 1 */}
      <div className="col-lg-3 col-sm-6 p-0">
        <div className="dreamit-service-box">
          <div className="service-box-inner">
            <div className="em-service-icon">
              <img src="assets/images/resource/dialogue-icon.png" alt="" />
            </div>
            <div className="em-service-title">
              <h2>India‑Korea Strategic Dialogue</h2>
            </div>
            <div className="service-number">
              <h1>01</h1>
            </div>
            <div className="em-service-text">
              <p>
                22nd India‑Korea Strategic Dialogue held 27–28 Nov 2023 in Seoul, fostering high‑level bilateral engagement :contentReference.
              </p>
            </div>
            <div className="service-button">
              <Link legacyBehavior href="/impact/india-korea-strategic-dialogue">
                <a>Read More <i className="bi bi-plus" /></a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Item 2 */}
      <div className="col-lg-3 col-sm-6 p-0">
        <div className="dreamit-service-box">
          <div className="service-box-inner">
            <div className="em-service-icon">
              <img src="assets/images/resource/policy-icon.png" alt="" />
            </div>
            <div className="em-service-title">
              <h2>Leadership & Policy Dialogues</h2>
            </div>
            <div className="service-number">
              <h1>02</h1>
            </div>
            <div className="em-service-text">
              <p>
                Non‑partisan forums bringing together thought leaders, diplomats & policymakers on global and domestic challenges :contentReference.
              </p>
            </div>
            <div className="service-button">
              <Link legacyBehavior href="/impact/dialogues">
                <a>Read More <i className="bi bi-plus" /></a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Roundtable 1 */}
      <div className="col-lg-3 col-sm-6 p-0">
        <div className="dreamit-service-box">
          <div className="service-box-inner">
            <div className="em-service-icon">
              <img src="assets/images/resource/roundtable-icon.png" alt="" />
            </div>
            <div className="em-service-title">
              <h2>Doha Peace Agreement 2020</h2>
            </div>
            <div className="service-number">
              <h1>03</h1>
            </div>
            <div className="em-service-text">
              <p>
                Round Table on the 29 Feb 2020 USA‑Taliban peace deal in Doha, and its implications for Afghanistan.
              </p>
            </div>
            <div className="service-button">
              <Link legacyBehavior href="/impact/roundtable-doha">
                <a>Read More <i className="bi bi-plus" /></a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Roundtable 2 */}
      <div className="col-lg-3 col-sm-6 p-0">
        <div className="dreamit-service-box">
          <div className="service-box-inner">
            <div className="em-service-icon">
              <img src="assets/images/resource/roundtable-icon2.png" alt="" />
            </div>
            <div className="em-service-title">
              <h2>EU Envoy Roundtable 2023</h2>
            </div>
            <div className="service-number">
              <h1>04</h1>
            </div>
            <div className="em-service-text">
              <p>
                Roundtable with EU Special Envoy Tomas Niklasson (8–10 Feb 2023) on Afghan developments :contentReference.
              </p>
            </div>
            <div className="service-button">
              <Link legacyBehavior href="/impact/roundtable-eu-envoy">
                <a>Read More <i className="bi bi-plus" /></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/*==================================================*/}
      {/* End consen feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/* <div className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img src="assets/images/about/about.png" alt />
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shape2.png" alt />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title white pb-10">
                <h2> The Fatest Way To Achieve</h2>
                <h2>
                  {" "}
                  Your Business <span> Success </span>
                </h2>
                <p>
                  Continually generate 2.0 communities and client-focused
                  products. In synergize strategic manufactured products whereas
                  levera.
                </p>
              </div>
              <div className="lines style-two pb-15">
                <div className="line" />
              </div>
              <div className="dreamit-icon-title">
                <h4>
                  {" "}
                  We are Since <span>2007 to Present</span> in Sandigo, USA{" "}
                </h4>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span> Credibly reinvent sticky partnerships done </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span>
                      {" "}
                      Distinctively evisculate data superior content.
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span> Monotonectally foster open source </span>
                  </li>
                </ul>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="about-shape-thumb2 bounce-animate4">
              <img src="assets/images/resource/all-shape.png" alt />
            </div>
          </div>
          <div className="row counter-vip">
            <div className="col-lg-12">
              <div className="couter-top-title">
                <h3> Consen Finished this Achivement in 7 Years </h3>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={1372} />
                  </h4>
                  <p>Project Complete</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={23} />
                  </h4>
                  <span>+</span>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={38} />
                  </h4>
                  <span>+</span>
                  <p>Exper Member</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={1372} />
                  </h4>
                  <span>+</span>
                  <p>Satisfactions Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="ceo-cod-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <h2> What Our CEO Says</h2>
                <h2>
                  {" "}
                  About <span> Ananta Centre </span>
                </h2>
                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
                <p className="about-text">
                  “At Ananta Centre, we believe in fostering strategic thought
                  and creating impactful conversations on global challenges
                  through inclusive dialogue.”
                </p>
                <p className="about-text2">
                  Indrani Bagchi brings decades of experience in international
                  affairs. As a journalist, she interpreted India's foreign
                  policy and global trends for leading publications. Now, she
                  channels that insight to build platforms for policy shaping,
                  leadership dialogue, and international cooperation at Ananta
                  Centre.
                </p>
              </div>

              <div className="dreamit-ceo-title">
                <h4> Indrani Bagchi </h4>
                <span>Chief Executive Officer, Ananta Centre</span>
              </div>

              <div className="about-button">
                <Link legacyBehavior href="/testimonial">
                  <a>
                    Clients Review <i className="bi bi-plus" />
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="dreamit-about-thumb1"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src="https://anantacentre.in/wp-content/uploads/2023/01/Indrani-300x300.jpeg"
                  alt="Indrani Bagchi"
                  style={{
                    borderRadius: "50%",
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                    border: "2px solid #00558F", // Optional: Matches dark blue theme
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      {/* <div className="case-study-area">
        <div className="container">
          <div className="row case-study-bg align-items-center mb-40">
            <div className="col-lg-6 col-md-8">
              <div className="consen-section-title mobile-center white ">
                <h2> We Serve the Best Works</h2>
                <h2>
                  {" "}
                  View <span> Case Studies </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/portfolio">
                  <a>
                    {" "}
                    All Project <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="case-study-shape">
              <div className="case-shape-thumb bounce-animate4">
                <img src="assets/images/resource/red-dot.png" alt />
              </div>
              <div className="case-shape-thumb1 bounce-animate2">
                <img src="assets/images/resource/all-shape.png" alt />
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper {...caseStudyProps} className="case-study owl-carousel">
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case2.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Consulting for Business Organizations</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case3.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Strategy and Planning Building Idea</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case1.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Corporate Finance for helpfulness Markets</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case2.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Consulting for Business Organizations</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case3.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Strategy and Planning Building Idea</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case2.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Consulting for Business Organizations</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case3.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Strategy and Planning Building Idea</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen process Area */}
      {/*==================================================*/}
      {/* <div className="process-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="row process-bg">
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>1</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Idea <span> Generate </span>
                      </h3>
                      <p>Appropriately enhance data centered innovation</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>2</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        System <span> Design </span>
                      </h3>
                      <p>Appropriately enhance data centered innovation</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper1">
                    <div className="process-number">
                      <span>3</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        24/7 <span> Support </span>
                      </h3>
                      <p>Appropriately enhance data centered innovation</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper2">
                    <div className="process-number">
                      <span>4</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        Sales <span> Generate </span>
                      </h3>
                      <p>Appropriately enhance data centered innovation</p>
                    </div>
                  </div>
                </div>
                <div className="process-shape">
                  <div className="process-thumb">
                    <img src="assets/images/resource/process-shape.png" alt />
                  </div>
                  <div className="process-thumb1">
                    <img src="assets/images/resource/dreamit-shape.png" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-lg-50">
              <div className="consen-section-title mt-4 mt-lg-0">
                <h2> The Fatest Way To Achieve </h2>
                <h2>
                  {" "}
                  Technology <span> Consulting </span>
                </h2>
              </div>
              <div className="lines style-three pt-30 pb-10">
                <div className="line" />
              </div>
              <div className="dreamit-smart-title">
                <h4>
                  {" "}
                  For Choose <span>Consen</span> Before know who we are?{" "}
                </h4>
                <p>
                  Monotonectally brand worldwide value before in seamless
                  process data Collaboratively initiate strategic expertise
                  after functionalized models in. Synergistically synthesize
                  front-end convergence whereas resource tosynergy.
                  Collaboratively the expedite focused architectures rather than
                  resources. Enthusiastically extensive.
                </p>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    More About <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row pt-50">
            <div className="col-lg-12">
              <div className="dreamits-top-title">
                <h3> More Then 5K+ Brands with work Consen</h3>
              </div>
            </div>
          </div>
          <div className="row pt-30">
            <Swiper {...brandListProps} className="brand-list owl-carousel">
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/allian.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/figma.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/google.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/redit.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/allian.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/figma.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/google.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/redit.png" alt />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End consen process Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Skills Area Css */}
      {/*==================================================*/}
   <div className="skill-area">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Column: Intro & Progress Bar */}
      <div className="col-md-6">
        <div className="extra-animation-div">
          <div className="consen-section-title white">
            <h2>Meet Our Trustees</h2>
            <h2>
              {" "}
              Leadership & Vision <span>Behind Ananta Centre</span>
            </h2>
          </div>
          <div className="lines style-three upper pt-30 pb-10">
            <div className="line" />
          </div>
          <div className="dreamit-smart-title">
            <p className="slill-text">
              Ananta Centre is guided by a distinguished board of trustees — industry leaders, visionaries, and changemakers — working together to foster ethical leadership, dialogue, and public policy.
            </p>
          </div>
        </div>
        <ProssessBar />
      </div>

      {/* Right Column: Trustee Cards */}
      <div className="col-md-6">
        <div className="row trustee-row">
          {/* Rajan Navani */}
          <div className="col-sm-12 trustee-card mb-4">
            <div className="trustee-thumb">
              <img style={{height : "400px"}} src="https://anantacentre.in/wp-content/uploads/elementor/thumbs/rajan-e1712578428192-r22rto12t370e6mhgzx1tsmq2rlahctzamrfm4j9kc.png" alt="Rajan Navani" />
            </div>
            <div className="trustee-info">
              <h4>Rajan Navani</h4>
              <span>Chairman, Ananta Centre & CMD, Jetline Group</span>
            </div>
          </div>
     
        </div>
      </div>
    </div>
  </div>
</div>

      {/*==================================================*/}
      {/* End consen Skill Area Css */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Blog Area */}
      {/*==================================================*/}
      <div className="blog-area blog-new">
        <div className="container">
          <div className="row align-items-center mb-40">
            <div className="col-lg-7 col-md-8">
              <div className="consen-section-title mobile-center">
                <h2> We’re here to share story </h2>
                <h2>
                  {" "}
                  from Latest <span> News </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/blog-grid">
                  <a>
                    {" "}
                    View all Blog <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog1.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> GRAPHIC </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 25, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> Popular Consultants are big Meetup 2023 </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Alex Collins </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog2.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> DEVELOPMENT </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 21, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> How to Increase Business Products Sales </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Julia Moris </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog3.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> DESIGN </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 20, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> Top 10 Most Populars Google Chrome app</a>
                      </Link>
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Amantha </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
