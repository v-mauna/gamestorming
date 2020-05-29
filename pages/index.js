import Layout from '../components/layout'
import Home from './home'

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
    background: white;c
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
