import React from 'react';
import Head from 'next/head';
import styles from '../styles/LandingPage.module.css';

const LandingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>AI Solutions | Exploring AI for Future Innovations</title>
        <meta name="description" content="AI-powered solutions for your needs" />
        <meta name="keywords" content="AI, Artificial Intelligence, Technology, Future" />
        <meta property="og:title" content="AI Solutions" />
        <meta property="og:description" content="Exploring AI-powered solutions and innovations" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <h1>AI Solutions</h1>
          </div>
          <nav className={styles.nav}>
            <a href="#company" aria-label="Company Information">Company</a>
            <a href="#products" aria-label="Our Products">Products</a>
            <a href="#frameworks" aria-label="AI Frameworks">Frameworks</a>
            <a href="#solutions" aria-label="AI Solutions">Solutions</a>
            <a href="#partners" aria-label="Our Partners">Partners</a>
            <a href="#contact" aria-label="Contact Us">Contact Us</a>
          </nav>
        </header>
        <main className={styles.main}>
          <div className={styles.contentContainer}>
            <div className={styles.leftContent}>
              <h1 className={styles.mainHeading}>Exploring AI</h1>
              <p>Innovations, Technological Advancements, AI in Everyday Life</p>
              <p>Future Prospects, Challenges and Solutions, Global Impact</p>
              <button className={styles.roundButton}>Learn More</button>
            </div>
            <div className={styles.rightImage}>
              <img src="/AIimage.png" alt="Depiction of AI in a futuristic city" />
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.leftContent}>
              <h2 className={styles.mainHeading}>The Future of AI</h2>
              <p>As AI continues to evolve, its impact on various industries is becoming more profound. From healthcare to finance, AI-driven technologies are revolutionizing the way we live and work.</p>
              <p>Understanding these advancements helps us prepare for a future where AI plays a central role in our daily lives.</p>
              <button className={styles.roundButton}>Learn More</button>

            </div>
            <div className={styles.rightImage}>
              <img src="/AIimagepic.png" alt="AI's impact on the future" />
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.leftContent}>
              <h2 className={styles.mainHeading}>The Future of AI</h2>
              <p>As AI continues to evolve, its impact on various industries is becoming more profound. From healthcare to finance, AI-driven technologies are revolutionizing the way we live and work.</p>
              <p>Understanding these advancements helps us prepare for a future where AI plays a central role in our daily lives.</p>
              <button className={styles.roundButton}>Learn More</button>

            </div>
            <div className={styles.rightImage}>
              <img src="/AIimagepic.png" alt="AI's impact on the future" />
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.leftContent}>
              <h2 className={styles.mainHeading}>The Future of AI</h2>
              <p>As AI continues to evolve, its impact on various industries is becoming more profound. From healthcare to finance, AI-driven technologies are revolutionizing the way we live and work.</p>
              <p>Understanding these advancements helps us prepare for a future where AI plays a central role in our daily lives.</p>
              <button className={styles.roundButton}>Learn More</button>

            </div>
            <div className={styles.rightImage}>
              <img src="/AIimagepic.png" alt="AI's impact on the future" />
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.leftContent}>
              <h2 className={styles.mainHeading}>The Future of AI</h2>
              <p>As AI continues to evolve, its impact on various industries is becoming more profound. From healthcare to finance, AI-driven technologies are revolutionizing the way we live and work.</p>
              <p>Understanding these advancements helps us prepare for a future where AI plays a central role in our daily lives.</p>
              <button className={styles.roundButton}>Learn More</button>

            </div>
            <div className={styles.rightImage}>
              <img src="/AIimagepic.png" alt="AI's impact on the future" />
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.leftContent}>
              <h2 className={styles.mainHeading}>The Future of AI</h2>
              <p>As AI continues to evolve, its impact on various industries is becoming more profound. From healthcare to finance, AI-driven technologies are revolutionizing the way we live and work.</p>
              <p>Understanding these advancements helps us prepare for a future where AI plays a central role in our daily lives.</p>
              <button className={styles.roundButton}>Learn More</button>

            </div>
            <div className={styles.rightImage}>
              <img src="/AIimagepic.png" alt="AI's impact on the future" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LandingPage;

