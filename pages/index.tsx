import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { SiGithub, SiLinkedin } from 'react-icons/si'
import { IoBagSharp } from 'react-icons/io5'
import imageFace from '../assets/profile.png'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.container}>
        <div className={styles.container__myprofile}>
          <Image
            width={400}
            height={400}
            className={styles.myface}
            src={imageFace}
            alt={'my-face'}
          />
          <div className={styles.container__info}>
            <div>
              <h1 className={styles.myName}>Jean Pierre Huaman Gomez</h1>
              <span className={styles.flag}>Full Stack Developer</span>
            </div>
            <div className={styles.contact__data}>
              <p>
                <strong>Correo:</strong> jeanpier.dev@outlook.com
              </p>
              <p>
                <strong>Tel:</strong> +51 935797308
              </p>
              <p>
                <strong>Ciudad:</strong> Lima - Perú
              </p>
            </div>
            <div className={styles.container__icons}>
              <a
                href='https://github.com/JeanPierHG'
                target={'_blank'}
                rel={'noreferrer'}>
                <SiGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/jeanpierdev/'
                target={'_blank'}
                rel={'noreferrer'}>
                <SiLinkedin />
              </a>
              <a
                href='https://myportfolio-jean.vercel.app/'
                target={'_blank'}
                rel={'noreferrer'}>
                <IoBagSharp />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.container__data}>
          <div className={styles.container__skills}>
            <h2>Tech Skills</h2>
            <div className={styles.container__tech}>
              <div>
                <h3>Front-end</h3>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Framer-Motion</li>
                  <li>MaterialUI</li>
                  <li>NextUI</li>
                </ul>
              </div>
              <div>
                <h3>Back-end</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>Mongodb</li>
                </ul>
              </div>
              <div>
                <h3>Tools</h3>
                <ul>
                  <li>Visual Studio Code</li>
                  <li>Linux</li>
                  <li>Docker</li>
                  <li>Git & Github</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.container__history}>
            <h2>Experienca Laboral</h2>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
