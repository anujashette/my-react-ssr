import App from "./sampleComponent/app";

const React = require('react');
const ReactDOMServer = require('react-dom/server');

class IndexHtml extends React.Component {
    render() {
        const reactHtml = ReactDOMServer.renderToString(
                <App />
          );
        return (
        <html>
        <head>
            <link
                rel="stylesheet"
                content="text/css"
                href="/dist/css/header.css"
            />
            <title>Universal React server bundle</title>
        </head>
        <body>
        <div id="app" dangerouslySetInnerHTML={{__html: reactHtml}}/>

        <script src="/dist/server.bundle.js"></script>
        </body>
        </html>);
    }
};

module.exports = IndexHtml;