import Head from 'next/head'
import Storm from './images/storm.jpg'
import People from './images/people.jpg'
import Sharpies from './images/sharpies.jpg'
import Lightbulb from './images/lightbulb.jpg'
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
          header {
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
            justify-content: center;
            align-content: center;
            text-transform: uppercase;
            text-align: center;
            align-self: center;
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
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            position: relative;
            margin: 1em;
            font-family: 'Oswald', sans-serif;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 4em;
          }
          #about h3{
            margin-left: 3.5em;
          }
          #about p {
            width: 50%;
            position: absolute;
            margin-top: 4em;
            margin-left: 4em;
          }
          #about img {
            position: absolute;
            width: 30%;
            left: 60%;
            margin-top: 4em;
          }
          #services {
            position: relative;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            overflow-wrap: normal;
            width: 100%;
            margin-top: 4em;
            margin-bottom: 4em;
            text-transform: uppercase;
          }
          #services p{
            margin-left:4em;
            letter-spacing: 2px;
            color: #333;
            width: 50%;
          }
          #services h3{
            margin-left: 3.5em;
            letter-spacing: 2px;
            color: #333;

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
      <header>
        <div className='content'>
          <p>content</p>
          <a href='/#about'>Learn More</a>
        </div>
      </header>
      <div lang='en'>
        <section className='about'>
          <div id='about'>
            <h3>About</h3>
            <img src={Lightbulb} />
            <p>
              Ullamco esse id minim mollit pariatur velit fugiat elit dolor
              veniam elit Lorem tempor enim. Tempor labore irure esse eiusmod
              sunt sint minim eu. Sunt eiusmod qui et do tempor velit occaecat
              dolore. Magna sint incididunt ea consectetur eiusmod
              reprehenderit. Esse excepteur ea ut ullamco culpa excepteur
              eiusmod Lorem est nulla dolor dolor. Nostrud do voluptate ut
              fugiat aliqua adipisicing.
            </p>
          </div>
        </section>
        <div>
          <div id='services'>
            <h3> Services</h3>
            <p>
              Tempor veniam minim dolore aute ea et do ea nulla id duis. Ea
              consectetur consectetur Lorem nulla eiusmod et. Fugiat aliqua ea
              minim laborum laborum ut exercitation minim qui. Aute elit dolor
              magna qui incididunt consequat tempor in consectetur sunt quis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
