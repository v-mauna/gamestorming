import Head from 'next/head';
import img1 from '../pages/images/gsCharacteristics.jpg'
const About = () => (
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
						height: auto;
						line-height: 2em;
					}

					#about {
						display: flex;
						flex-direction: column;
						flex-wrap: wrap;
						padding: 1em;
						color: #040f16;
						height: auto;
						font-family: 'Lato', sans-serif;
						letter-spacing: 2px;
						margin: 2em 1em 0 4em;
					}
					#about h3 {
						font-family: 'Roboto', sans-serif;
						font-weight: 800;
						text-transform: uppercase;
					}
					#about p {
						width: 100%;
						font-weight: 200;
						font-family: 'Arial',sans-serif;
					}
					#about img{
						justify-content: center;
						align-content: center;
						width: 100%;
						height: 50%;

					}

					
					
				`}
			</style>
			<div>
				<div id="about">
					<h3>About</h3>
					<p>
						Creativity and invention has long been seen as a “black box.” As business people, we don’t
						typically try to understand this process. We fully expect that when designers, inventors, and
						other creative people go into a room with a goal, they will come out with more or less creative
						discoveries and results. Although when we watch them at work, we can observe some combination of
						sketching, animated conversations, messy desks, and drinking. But the fundamental nature of what
						happens in that room remains mostly a mystery....
                    </p>
	
				</div>
				<div>
				</div>
			</div>
		</div>
);

export default About
