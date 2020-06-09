import Link from 'next/link'
const Navbar = () => {
  return (
    <nav>
      <style jsx>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Oswald&family=Quattrocento&display=swap');
        nav {
            margin-bottom: 0;
            width: 100vw;
            height: 70px;
            display: block;
            background: black;
          }
          #topNav {
            font-size: 14px;
            list-style: none;
            display: flex;
            margin-top: 0;
            width: 100vw;
            padding: 0;
          }
          #name {
            margin: 1em ;
            letter-spacing: 2px;
            font-style: bold;
            font-family: 'Oswald', sans-serif;
            text-transform: uppercase;
            text-align: left;
            font-size: 18px;
            font-weight: 800;
            justify-content: left;
            align-content: left;
          }
          #logo{
              height: 90px;
              padding-right: 50vw;

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
          color: red;
          text-decoration: underline;
          transition: 3s ease;
        }
          }
        `}
      </style>

      <ul id='topNav'>
        <li>
          <Link href='/'>
            <a id='name' title='Home'>
              Gamestorming
            </a>
          </Link>{' '}
        </li>
        <li>
          <Link href='/about'>
            <a title='Who We Are'>
              Who We Are
            </a>
          </Link>
        </li>
        <li>
          <Link href='/publications'>
            <a title='Services'>
              Services
            </a>
          </Link>{' '}
        </li>
        <li>
          <Link href='/contact'>
            <a title='Contact'>
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
