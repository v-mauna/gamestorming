import Layout from '../components/layout'
import Home from './home'
/* possible colors
gray e5e5e5
white faf9f9
*/

const Index = () => (
  <Layout>
    <div>
      <Home />
    </div>

    <style jsx global>{`
  html,
  body {
    display: flex;
    flex-direction: column;
    background: #f4f4f6;
    color: black;
  }
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  }
`}</style>
  </Layout>
)

export default Index
