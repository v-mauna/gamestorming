import Head from 'next/head';
import GS from './images/sketch5.jpg';
import About from '../sections/about'
import Services from '../sections/services'
const Home = () => (
	<div className="wrapper">
		<div className="container">
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
            flex-wrap: wrap;
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
					.content {
						width: 100vw;
						display: flex;
            padding: 0;
            padding: 1em;
            flex-wrap: wrap;
						flex-direction: column;
						height: 600px;
						text-transform: uppercase;
						text-align: center;
						justify-content: center;
						align-content: center;
						background: rgba(0, 0, 0, .3);
					}
					#name {
						color: white;
						font-size: 50px;
						letter-spacing: 3px;
						font-weight: 800;
						text-transform: uppercase;
						font-family: 'Ubuntu', sans-serif;
					}
					.content p {
						font-family: 'Arial', sans-serif;
						font-size: 18px;
						color: white;
						text-transform: lowercase;
					}
					.content a {
						color: white;
						font-size: 12px;
						width: 100px;
						text-align: center;
						align-content: center;
						justify-content: center;
						text-decoration: none;
						background: black;
						padding: 12px;
					}

					.content a:hover {
						color: white;
						background: red;
					}

					#break {
						height: 20px;
					}
				`}
			</style>
			<Head>
				<script src="https://kit.fontawesome.com/6f92a9206c.js" crossOrigin="anonymous" />
				<meta name="description" content="" />
				<title>Gamestorming - Home</title>
			</Head>
			<header>
				<div className="content">
					<p id="name">
						Gamestorming
						<br />
						<p>
							a set of co-creation tools used by innovators around the world.
							<div id="break" />
							<a href="/#about">Learn More</a>
						</p>
					</p>
				</div>
			</header>
			<div id='about'>
        <About/>
				<div id='services'>
				<Services/>
				</div>
			</div>
		</div>
	</div>
);

export default Home;
