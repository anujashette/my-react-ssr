import Header from "./HomeComponents/Header";

const React = require('react');
const ReactDOMServer = require('react-dom/server');

class HomeHtml extends React.Component {
    render() {
        const reactHtml = ReactDOMServer.renderToString(<Header/>);
        return (
            <html>
            <head>
            <meta httpEquiv ="Content-Type" content="text/css" charSet="utf-8"/>
                <base href="/"/>
            <title>BookEventZ</title>
            <link
                rel="stylesheet"
                href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"
            />
            <link
                rel="stylesheet"
                content="text/css"
                href="../style/header.css"
            />
            </head>
                <body>
                    <div id="app" dangerouslySetInnerHTML={{__html: reactHtml}}/>
                </body>
            </html>
        );
    }
};

module.exports = HomeHtml;