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
            <title>Universal React server bundle</title>
        </head>
        <body>
        <div id="app" dangerouslySetInnerHTML={{__html: reactHtml}}/>
        <script src="./public/server.bundle.js"></script>
        </body>
        </html>);
    }
};

module.exports = IndexHtml;