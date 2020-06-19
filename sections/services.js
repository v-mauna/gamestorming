import Head from 'next/head';
import image1 from '../pages/images/scShot4.png';
import image2 from '../pages/images/drawingAtTable.jpg';
import image3 from '../pages/images/ladiesGroup.jpg';
const Services = () => (
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
                    line-height: 1.5em;
                    background: red;
				}

				#services {
					display: flex;
					flex-direction: column;
					flex-wrap: wrap;
					padding: 1em;
					color: #eee;
					height: auto;
					font-family: 'Lato', sans-serif;
					letter-spacing: 2px;
                    margin: 2em 1em 0 4em;
                    animation: slide-left 2s;
                }

                @keyframes slide-left{
                    from {
                      margin-left: 100%;
                      width: 100%; 
                    }
                    to{
                      margin-left: 0%;
                      width: 100%;
                    }
                    }
                }
				#services h3 {
					font-family: 'Roboto', sans-serif;
                    font-weight: 800;
                    color: white;
                    border-bottom: 1px solid white;
					text-transform: uppercase;
				}
				#services p {
                    width: 100%;
                    color: white;
					font-weight: 200;
					font-family: 'Arial', sans-serif;
				}
				.images {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					align-content: center;
				}

				.images img {
					width: 282.3px;
					padding: 1em;
				}
			`}
		</style>
			<div id="services">
				<h3>Services</h3>
				<p>
					Aliquip minim veniam minim do in eu consequat aute voluptate. Ullamco tempor proident cillum aliquip
					nisi dolore adipisicing enim consectetur in commodo consectetur commodo minim. Commodo proident et
					sint ea duis. Ullamco dolore reprehenderit pariatur sit proident esse. Dolore cillum commodo
					adipisicing nulla amet aute aliqua sint.
				</p>
				<div className="images">
					<img src={image1} />
					<img src={image2} />
					<img src={image3} />
				</div>
			</div>
			<div />
		</div>
);

export default Services;
