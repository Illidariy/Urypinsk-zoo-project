const React = require("react");


function Layout({title, children}) {
    return(
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/styles/bootstrap.min.css"></link>
            <link rel="stylesheet" href="/styles/style.css"></link>
            <script defer src='js/client.js'></script>
            <title>{title}</title>
        </head>
        <body>
            {children}
        </body>
        </html>
    )

}

module.exports = Layout;
