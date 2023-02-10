import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import heroAnimation from '../assets/images/hero/heroAnimation.svg'
import ftIcon1 from '../assets/images/feature/ftIcon1.png'
import ftIcon2 from '../assets/images/feature/ftIcon2.png'
import ftIcon3 from '../assets/images/feature/ftIcon3.png'
import ftIcon4 from '../assets/images/feature/ftIcon4.png'
import featureAnimation from '../assets/images/feature/featureAnimation.svg'
import featureBgTop from '../assets/images/feature/featureBgTop.svg'
import featureBgBtm from '../assets/images/feature/featureBgBtm.svg'
import apiAnimation from '../assets/images/api/apiAnimation.svg'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'


export default function Home() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  })

  return (
    <>
      <Head>
        <title>AidAice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {/* Navbar */}

        <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.customnavbar}`}>
          <div className={`container ${styles.navContainer}`}>
            <Link className="navbar-brand" href="#">
              AidAice
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse navbar-custom ${styles.navItems}`} id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
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

        {/* Hero */}

        <div className={styles.hero}>
          <div class="container text-center">
            <div class="row">
              <div class={`col-lg-6 ${styles.heroContent}`}>
                <h1>Welcome to the future of Customer Support</h1>
                <p>Where all your customer relation problemes were solved by industry leading experts and AI Bots</p>
                <button class={`${styles.customBtn} ${styles.btn}`}>Know More</button>
              </div>
              <div class="col-lg-6">
                <Image className={styles.heroImage} src={heroAnimation} width="900" height="500" alt='heroAnimation' />
              </div>
            </div>
          </div>
        </div>

        {/* Features */}

        <div className={styles.features} id="features"> 
          <Image src={featureBgTop} width='1920' height='301' className={styles.featureBg} alt='feature bgTop' />
          <div class="container text-center">
            <div class="row">
              <div class={`col-lg-6 ${styles.featureImgContainer}`}>
                <Image src={featureAnimation} width='500' height='500' className={styles.featureImg} alt="feature animation" />
              </div>

              <div class={`col-lg-6 ${styles.featureContent}`}>
                <h1>What sets us apart in this field?</h1>

                <div className={styles.featureSet}>

                  <div className="row">
                    <div className="col-sm">
                      <div className={styles.ftSubContent}>
                        <Image src={ftIcon1} width='30' height='30' alt='feature icon' />
                        <h2>Fully Automated Call Bots</h2>
                        <p>Fully automated call bots, also known as IVR (Interactive Voice Response)
                          systems, use pre-recorded audio and natural language processing to interact
                          with customers over the phone.</p>
                      </div>
                    </div>

                    <div className="col-sm">
                      <div className={styles.ftSubContent}>
                        <Image src={ftIcon2} width='30' height='30'alt='feature icon' />
                        <h2>24/7 Assistance</h2>
                        <p>We can handle a variety of tasks, such as routing calls, providing information,
                          and completing transactions, 24/7 without the need for human intervention.</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm">
                      <div className={styles.ftSubContent}>
                        <Image src={ftIcon3} width='30' height='30' alt='feature icon' />
                        <h2>Affordable Price</h2>
                        <p>A variety of options are available, including cloud-based solutions and open-source
                          IVR systems, making it easier for businesses of all sizes to find a solution that fits
                          their budget.</p>
                      </div>
                    </div>

                    <div className="col-sm">
                      <div className={styles.ftSubContent}>
                        <Image src={ftIcon4} width='30' height='30' alt='feature icon' />
                        <h2>Fast and Reliable</h2>
                        <p>Our Call bots are designed to be fast and reliable, handling a high volume of calls
                          simultaneously and providing quick, accurate responses to customer inquiries.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <Image src={featureBgBtm} width='1920' height='301' className={styles.featureBgBtm} alt='featureBg btm' />
        </div>

        {/* API */}

        <div className={styles.api}>
          <div class="container text-center">
            <div class="row">
              <div class={`col-lg-6 ${styles.apiContent}`}>
                <h1>How we changing the Industry?</h1>
                <div className={`row ${styles.apiStat}`}>
                  <div className="col">
                    <div ref={ref} className={styles.counter}>
                      {inView ? (
                        <CountUp
                          end={150}
                          duration={3}
                        />
                      ) : null}M+
                      <p>Api Request from all around the world.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div ref={ref} className={styles.counter}>
                      {inView ? (
                        <CountUp
                          end={99}
                          duration={3}
                        />
                      ) : null}+
                      <p>Countries and trusted industries.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div ref={ref} className={styles.counter}>
                      {inView ? (
                        <CountUp
                          end={120}
                          duration={3}
                        />
                      ) : null}M+
                      <p>Hours of call and chat support.</p>
                    </div>
                  </div>
                </div>
                <p className={styles.statSubContent}>This stats means a lot to us. Our call bots are able to quickly retrieve
                  and process large amounts of data, enabling them to provide quick and accurate
                  responses to customer inquiries. </p>
              </div>
              <div class="col-lg-6">
                <Image className={styles.heroImage} src={apiAnimation} width="900" height="500" alt='api animation' />
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
