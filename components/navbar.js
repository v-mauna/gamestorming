import Link from 'next/link';
const Navbar = () => {
	return (
		<nav>
			<style jsx>
				{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald&family=Quattrocento&display=swap');
        nav {
            margin-bottom: 0;
            width: 100vw;
            height: auto;
            display: block;
            background: black;
          }
          #topNav {
            font-size: 14px;
            list-style: none;
            display: flex;
            margin-top: 0;
            margin-bottom: 0;
            width: 100vw;
            padding: 0;
          }
          li {
            margin: 1em;
            text-align: right;
            letter-spacing: 3px;
            align-content:center;
            justify-content: center;
            font-weight: 800;
          }
          a {
            text-decoration: none;
            text-transform: uppercase;
            color:white;
            font-size: 14px;  
            font-family: 'Oswald',sans-serif;
          }
          a::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: rgba(0,0,0,.7);
            transition .3s;
        }
        a:hover{
          text-decoration: underline;
          transition: 3s ease;
        }
        li:first-child{
          background: red;
          width: 30px;
          height: 30px;
          padding: 20px;
          border-radius: 50%;
          align-content: center;
          justify-content: center;
          text-align: center;
        }
        li:nth-child(2){
          margin-left: 60px;
        }
          }
        `}
			</style>

			<ul id="topNav">
				<li>
					<Link href="/">
						<a title="Home">
							Gamestorming
						</a>
					</Link>{' '}
				</li>
				<li>
					<Link href="/#about">
						<a title="Who We Are">Who We Are</a>
					</Link>
				</li>
				<li>
					<Link href="/#services">
						<a title="Services">Services</a>
					</Link>{' '}
				</li>
				<li>
					<Link href="/contact">
						<a title="Contact">Contact</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
