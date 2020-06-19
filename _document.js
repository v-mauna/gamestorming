import Document, { HTML, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<HTML lang="en">
				<Head>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="description" content="" />
					<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</HTML>
		);
	}
}

export default MyDocument;
