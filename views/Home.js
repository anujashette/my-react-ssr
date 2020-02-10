import Header from "./HomeComponents/Header";

const React = require('react');
const ReactDOMServer = require('react-dom/server');

class Home extends React.Component {
    render() {
        const reactHtml = ReactDOMServer.renderToString(<Header/>);
        return (
            <html>
            <head>
            <meta httpEquiv ="Content-Type" content="text/html" charSet="utf-8"/>
                <base href="/"/>
            <title>BookEventZ</title>
            <link
                rel="stylesheet"
                href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"
            />
            <link
                rel="stylesheet"
                content="text/css"
                href="/dist/css/header.css"
            />
            </head>
                <body>
                    <div id="app" dangerouslySetInnerHTML={{__html: reactHtml}}/>
                    <script src="/dist/bundle/client.bundle.js"></script>
                </body>
            </html>
        );
    }
};

module.exports = Home;