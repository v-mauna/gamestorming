import Document, { HTML, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <HTML lang='en'>
        <Head>
          <script
            src='https://kit.fontawesome.com/6f92a9206c.js'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:ital,wght@1,300&family=Raleway&display=swap'
            rel='stylesheet'
          />

          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
          <meta name='description' content=''></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </HTML>
    )
  }
}

export default MyDocument
