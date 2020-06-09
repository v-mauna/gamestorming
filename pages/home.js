import Head from 'next/head'
import Storm from './images/storm.jpg'
import People from './images/people.jpg'
import Sharpies from './images/sharpies.jpg'
import Characteristics from './images/gsCharacteristics.jpg'
import Stickies from './images/Stickies.jpg'
import PostIts2 from './images/post-its2.jpg'
import PostIts from './images/post-its.jpg'
import GS from './images/gamestorming3.jpg'
const Home = () => (
  <div className='wrapper'>
    <div className='container'>
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Roboto:wght@100;400&family=Lato&family=Ubuntu:wght@700&display=swap');
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
          }
          header {
            display: flex;
            flex-direction: column;
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
              background-image: url(${Stickies});
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
            100% {
            background-image: url(${Characteristics});
          }
        }

          .content {
            width: 100vw;
            display: flex;
            padding: 0;
            flex-direction: column;
            height: 600px;
            margin: auto;
            text-transform: uppercase;
            text-align: center;
          }
          .content p {
            color: white;
            margin: auto;
            font-size: 32px;
            text-transform: uppercase;
            font-family: 'Ubuntu', sans-serif;
          }
          .content a {
            color: white;
            font-size: 12px;
            width: 100px;
            margin: auto;
            text-decoration: none;
            background: black;
            padding: 12px;
          }

          .content a:hover {
            color: white;
            background: red;
          }
          #about {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            padding: 1em;
            color: #040f16;
            height: 50%;
            font-family: 'Lato', sans-serif;
            letter-spacing: 2px;
            margin: 4em 1em 0 4em;
          }
          #about h3 {
            font-family: 'Roboto',sans-serif;
            font-weight: 800;
            text-transform: uppercase;
          }
          #about p {
            width: 50%;
            font-family: 'DM Serif Display', serif;
          }
          #about img {
            position: absolute;
            width: 500px;
            left: 60%;
            margin-top: 4em;
          }
          #services {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            padding: 1em;
            color: #040f16;
            height: 100%;
            font-family: 'DM Serif Display', serif;
            letter-spacing: 2px;
            margin: 4em;
          }
          #services p {
            letter-spacing: 2px;
            width: 50%;
          }
          #services h3 {
            text-transform: uppercase;
            font-family: 'Roboto', sans-serif;
            font-weight: 800;
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
      <header>
        <div className='content'>
          <p>
            content
            <br />
            <a href='/#about'>Learn More</a>
          </p>
        </div>
      </header>
      <div>
        <div id='about'>
          <h3>About</h3>
          <br />
          <img src='https://live.staticflickr.com/6005/5981296201_8cf6b3facb_c.jpg' />
          <p>
            Ullamco esse id minim mollit pariatur velit fugiat elit dolor veniam
            elit Lorem tempor enim. Tempor labore irure esse eiusmod sunt sint
            minim eu. Sunt eiusmod qui et do tempor velit occaecat dolore. Magna
            sint incididunt ea consectetur eiusmod reprehenderit. Esse excepteur
            ea ut ullamco culpa excepteur eiusmod Lorem est nulla dolor dolor.
            Nostrud do voluptate ut fugiat aliqua adipisicing.
          </p>
        </div>
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
