import Head from 'next/head'
import Storm from './images/storm.jpg'
import People from './images/people.jpg'
import Sharpies from './images/sharpies.jpg'
import PostIts2 from './images/post-its2.jpg'
import Question from './images/question.jpg'

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
            box-sizing: border-box;
            font-size: 16px;
            width: 100vw;
            line-height: 2em;
            justify-content: center
            margin-bottom: 5%;
          }
          main{
            display: flex;
            flex-direction: row;
            background: black;
            color: white;
            background-size: contain;
            width: 50vw;
            height: 50vh;
            background-repeat: no-repeat;
            padding: 0;
            margin: 0;
            margin-bottom: auto;
            box-sizing: border-box;
            animation-name: animate;
            animation-duration: 20s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite; 
            animation-play-state: running;
            animation-timing-function: ease-in-out;
          }
           @keyframes animate{
            0%{
              background-image: url(${Storm});
            }
            25%{
              background-image: url(${Sharpies});
            }
            50%{
              background-image: url(${Question});
            }
            75%{
              background-image: url(${People});
            }
            }
            100%{
              background-image: url(${PostIts2});
            }
          section{
            position: relative;
            width: 50vw;
            background: black;
            color: white;
            height: 50vh;
          }
          .section{
            margin: 1em;
            font-family: 'Ubuntu',sans-serif;
            text-transform: uppercase;
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
        <div id='about'/>
      </main>
      <section>
      <div className='section'>
      <p> Section One</p>
      </div>
      </section>
    </div>
  </div>
)

export default Home
