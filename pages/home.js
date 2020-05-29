import Head from 'next/head'
import Storm from './images/storm.jpg'
import People from './images/people.jpg'
import Sharpies from './images/sharpies.jpg'
import PostIts2 from './images/post-its2.jpg'
import PostIts from './images/post-its.jpg'
import GS from './images/gamestorming3.jpg'
const Home = () => (
  <div className='wrapper'>
    <div className='container'>
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald&family=Quattrocento&family=Sintony&family=Ubuntu:wght@700&display=swap');
          .wrapper {
            display: block;
          }
          .container {
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            font-size: 16px;
            width: 100vw;
            line-height: 2em;
            font-family: 'Oswald', sans-serif;
          }
          main {
            display: flex;
            flex-direction: row;

            background: url(${GS});
            background-size: cover;
            width: 100vw;
            height: 600px;
            background-repeat: no-repeat;
            padding: 0;
            margin: 0;
            margin-bottom: auto;
            box-sizing: border-box;
            animation: slide 30s infinite;
          }
          @keyframes slide {
            0% {
              background-image: url(${Storm});
            }
            25% {
              background-image: url(${Sharpies});
            }
            50% {
              background-image: url(${PostIts});
            }
            75% {
              background-image: url(${People});
            }
          }
          100% {
            background-image: url(${PostIts2});
          }

          .content {
            position: absolute;
            background: rgba(0, 0, 0, 0.2);
            width: 100vw;
            height: 600px;
            justify-content: center;
            align-content: center;
            text-transform: uppercase;
            text-align: center;
          }
          .content p {
            margin-top: 20%;
            color: white;
            font-size: 32px;
            font-family: 'Ubuntu', sans-serif;
          }
          .content a {
            color: white;
            font-size: 12px;
            text-decoration: none;
            background: black;
            padding: 12px;
          }

          .content a:hover {
            color: white;
            background: red;
          }
          section {
            position: relative;
            width: 100%;
            color: black;
            height: 50vh;
          }
          #about {
            margin: 1em;
            font-family: 'Oswald', sans-serif;
            text-transform: uppercase;
            letter-spacing: 2px;
            
          }
          #section2 {
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            text-transform: uppercase;
          }
          #section2 p{
            margin-left: 1em;
            letter-spacing: 2px;
          }
        `}
      </style>
      <Head>
        <script
          src='https://kit.fontawesome.com/6f92a9206c.js'
          crossOrigin='anonymous'
        />
        <meta name='description' content='' />
        <title>GS || Home</title>
      </Head>
      <main>
        <div className='content'>
          <p>content</p>
          <a href='/#about'>Learn More</a>
        </div>
      </main>
      <div>
        <section className='about'>
          <div id='about'>
            <p>About</p>
          </div>
        </section>
        <section id='section2'>
        <p> Services</p>
      </section>
      </div>
    </div>
  </div>
)

export default Home
