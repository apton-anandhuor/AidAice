import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import heroAnimation from "../assets/images/hero/heroAnimation.svg";
import ftIcon1 from "../assets/images/feature/ftIcon1.png";
import ftIcon2 from "../assets/images/feature/ftIcon2.png";
import ftIcon3 from "../assets/images/feature/ftIcon3.png";
import ftIcon4 from "../assets/images/feature/ftIcon4.png";
import featureAnimation from "../assets/images/feature/featureAnimation.svg";
import featureBgTop from "../assets/images/feature/featureBgTop.svg";
import featureBgBtm from "../assets/images/feature/featureBgBtm.svg";
import apiAnimation from "../assets/images/api/apiAnimation.svg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import pricingBg from "../assets/images/pricing/pricingBg.svg";
import pricingTop from "../assets/images/pricing/pricingTop.svg";
import pricingBtm from "../assets/images/pricing/pricingBtm.svg";
import pricingFree from "../assets/images/pricing/pricingFree.svg";
import pricingPro from "../assets/images/pricing/pricingPro.svg";
import pricingEnterprise from "../assets/images/pricing/pricingEnterprise.svg";
import clientAnimation from "../assets/images/clients/clientsAnimation.svg";


export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <Head>
        <title>AidAice</title>
        <meta name="description" content="Aid Aice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Navbar starts */}
        <nav
          className={`navbar navbar-expand-lg bg-body-tertiary ${styles.customnavbar}`}
        >
          <div className={`container ${styles.navContainer}`}>
            <Link className="navbar-brand" href="#">
              AidAice
            </Link>

            <button
              className={`navbar-toggler ${styles.customNavBarBtn}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-dark navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse navbar-custom ${styles.navItems}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* navbar Ends */}

        {/* Hero starts */}

        <div className={styles.hero}>
          <div class="container text-center">
            <div className="row">
              <div class={`col-lg-6 ${styles.heroContent}`}>
                <h1>Welcome to the future of Customer Support</h1>
                <p>
                  Where all your customer relation problemes were solved by
                  industry leading experts and AI Bots
                </p>
                <button class={`${styles.customBtn} ${styles.btn}`}>
                  Know More
                </button>
              </div>
              <div class="col-lg-6">
                <Image
                  className={styles.heroImage}
                  src={heroAnimation}
                  width="900"
                  height="500"
                  alt="heroAnimation"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero ends */}

        {/* Features starts */}

        <div className={styles.features} id="features">
          <Image
            src={featureBgTop}
            width="1920"
            height="301"
            className={styles.featureBg}
            alt="feature bgTop"
          />
          <div class="container text-center">
            <div class="row">
              <div class={`col-lg-6 ${styles.featureImgContainer}`}>
                <Image
                  src={featureAnimation}
                  width="500"
                  height="500"
                  className={styles.featureImg}
                  alt="feature animation"
                />
              </div>

              <div class={`col-lg-6 ${styles.featureContent}`}>
                <h1>What sets us apart in this field?</h1>

                <div className={styles.featureSet}>
                  <div className="row">
                    <div className="col-sm">
                      <div className={styles.ftSubContent}>
                        <Image
                          src={ftIcon1}
                          width="30"
                          height="30"
                          alt="feature icon"
                        />
                        <h2>Fully Automated Call Bots</h2>
                        <p>
                          Fully automated call bots, also known as IVR
                          (Interactive Voice Response) systems, use pre-recorded
                          audio and natural language processing to interact with
                          customers over the phone.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm">
                      <div className={styles.ftSubContent}>
                        <Image
                          src={ftIcon2}
                          width="30"
                          height="30"
                          alt="feature icon"
                        />
                        <h2>24/7 Assistance</h2>
                        <p>
                          We can handle a variety of tasks, such as routing
                          calls, providing information, and completing
                          transactions, 24/7 without the need for human
                          intervention.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm">
                      <div className={styles.ftSubContent}>
                        <Image
                          src={ftIcon3}
                          width="30"
                          height="30"
                          alt="feature icon"
                        />
                        <h2>Affordable Price</h2>
                        <p>
                          A variety of options are available, including
                          cloud-based solutions and open-source IVR systems,
                          making it easier for businesses of all sizes to find a
                          solution that fits their budget.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm">
                      <div className={styles.ftSubContent}>
                        <Image
                          src={ftIcon4}
                          width="30"
                          height="30"
                          alt="feature icon"
                        />
                        <h2>Fast and Reliable</h2>
                        <p>
                          Our Call bots are designed to be fast and reliable,
                          handling a high volume of calls simultaneously and
                          providing quick, accurate responses to customer
                          inquiries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={featureBgBtm}
            width="1920"
            height="301"
            className={styles.featureBgBtm}
            alt="featureBg btm"
          />
        </div>

        {/* Features ends */}

        {/* API starts */}

        <div className={styles.api}>
          <div class="container text-center">
            <div class="row">
              <div class={`col-lg-6 ${styles.apiContent}`}>
                <h1>How we changing the Industry?</h1>
                <div className={`row ${styles.apiStat}`}>
                  <div className="col">
                    <div ref={ref} className={styles.counter}>
                      {inView ? <CountUp end={150} duration={3} /> : null}M+
                      <p>Api Request from all around the world.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div ref={ref} className={styles.counter}>
                      {inView ? <CountUp end={99} duration={3} /> : null}+
                      <p>Countries and trusted industries.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div ref={ref} className={styles.counter}>
                      {inView ? <CountUp end={120} duration={3} /> : null}M+
                      <p>Hours of call and chat support.</p>
                    </div>
                  </div>
                </div>
                <p className={styles.statSubContent}>
                  This stats means a lot to us. Our call bots are able to
                  quickly retrieve and process large amounts of data, enabling
                  them to provide quick and accurate responses to customer
                  inquiries.{" "}
                </p>
              </div>
              <div class="col-lg-6">
                <Image
                  className={styles.heroImage}
                  src={apiAnimation}
                  width="900"
                  height="500"
                  alt="api animation"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Api ends */}

        {/* Pricing Starts */}
        <div
          className={styles.pricing}
          style={{
            backgroundImage: `url(${pricingBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Image
            src={pricingTop}
            width="1920"
            height="301"
            className={styles.pricingCut}
            alt="feature bgTop"
          />
          <div className={`container ${styles.pricingContainer}`}>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
              <h1 class={`display-4 fw-normal ${styles.pricingHeading}`}>
                Pricing
              </h1>
              <p class={`fs-5 text-muted ${styles.pricingSubHeading}`}>
                We understand the importance of efficient and effective communication, especially
                in today's fast-paced business world.That's why we're proud to offer a comprehensive
                solution to help you streamline your call management with an affordable price range.
              </p>
            </div>

            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Free</h4>
                  </div>
                  <div class="card-body">
                    <Image src={pricingFree} width="150" height="150" alt="pricingFree" />
                    <h1 class="card-title pricing-card-title">
                      $0<small class="text-muted fw-light">/mo</small>
                    </h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>10 users included</li>
                      <li>1 call bot</li>
                      <li>2 chat bot</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      class={`w-100 btn ${styles.customBtn} ${styles.btn}`}
                    >
                      Sign up for free
                    </button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Pro</h4>
                  </div>
                  <div class="card-body">
                    <Image src={pricingPro} width="150" height="150" alt="pricingPro" />
                    <h1 class="card-title pricing-card-title">
                      $15<small class="text-muted fw-light">/mo</small>
                    </h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>20 users included</li>
                      <li>2 call bot</li>
                      <li>5 chat bot</li>
                      <li>10 GB of storage</li>
                      <li>Priority email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      class={`w-100 btn ${styles.customBtn} ${styles.btn}`}
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                  <div
                    class={`card-header py-3 border-primary ${styles.priceCardActive}`}
                  >
                    <h4 class={`my-0 fw-normal`}>Enterprise</h4>
                  </div>
                  <div class="card-body">
                    <Image src={pricingEnterprise} width="150" height="150" alt="pricingEnterprise" />
                    <h1 class="card-title pricing-card-title">
                      $29<small class="text-muted fw-light">/mo</small>
                    </h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>30 users included</li>
                      <li>unlimited call bot</li>
                      <li>unlimited chat bot</li>
                      <li>15 GB of storage</li>
                      <li>Phone & email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      className={`w-100 btn ${styles.customBtn} ${styles.btn}`}
                    >
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={pricingBtm}
            width="1920"
            height="301"
            className={styles.featureBgBtm}
            alt="feature bgTop"
          />
        </div>

        {/* Clients section starts*/}
        <div className={styles.clients}>
          <div class="container text-center">
            <div class="row">
              <div class={`col-lg-6 ${styles.apiContent}`}>
                <h1>Trusted By Popular Companies all over the World.</h1>

                <p className={styles.statSubContent}>
                  We are proud to say that we have built a reputation as a reliable
                  and efficient provider of top-notch automated call bot services, and
                  our clients include some of the biggest and most respected brands in the world.
                  Our commitment to excellence and our ability to consistently deliver results have
                  made us a trusted partner for companies looking to streamline their operations
                  and improve customer engagement.{" "}
                </p>

                <button class={`${styles.customBtn} ${styles.btn}`}>
                  Start with us!
                </button>

              </div>
              <div class="col-lg-6">
                <Image
                  className={styles.heroImage}
                  src={clientAnimation}
                  width="900"
                  height="500"
                  alt="client animation"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Clients section Ends */}

        {/* Footer Starts */}

        <div className={styles.footer}>
          <Image
            src={featureBgTop}
            width="1920"
            height="301"
            className={styles.featureBg}
            alt="feature bgTop"
          />
          <div class="container">
            <footer class="py-5">
              <div class="row">
                <div class="col">
                  <h5>Website</h5>
                  <ul class={`nav flex-column ${styles.footerLinks}`}>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                  </ul>
                </div>

                <div class="col">
                  <h5>Company</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Careers</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Press Release</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Blog</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">API Policy</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Social</a></li>
                  </ul>
                </div>

                <div className={`col ${styles.footerSubscribe}`}>
                  <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                      <label for="newsletter1" class="visually-hidden">Email address</label>
                      <input id="newsletter1" type="text" className={`form-control ${styles.customInput}`} placeholder="Email address" />
                      <button class={`${styles.customBtn} ${styles.btn}`}>
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p className={styles.copyright}>&copy; 2023 Aid Aice, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                  <li class="ms-3"><a class="link-dark" href="#">Twitter</a></li>
                  <li class="ms-3"><a class="link-dark" href="#">Facebook</a></li>
                  <li class="ms-3"><a class="link-dark" href="#">Discord</a></li>
                </ul>
              </div>
            </footer>
          </div>

        </div>

      </main>
    </>
  );
}
