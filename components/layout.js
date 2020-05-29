import Navbar from './navbar'
import Head from 'next/head'

const Layout = props => (
  <div>
    <Head>
      <title>Gamestorming</title>
    </Head>
    <Navbar />
    <div className="container">
    {props.children}
    </div>
  </div>
)

export default Layout
