var React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    Container = require('./components/container.react');

var Html = React.createClass({
    render: function () {

        var data = this.props.data;
        var contentHtml = ReactDOMServer.renderToString(<Container {...data}/>);
        var initScript = 'bundle(' + JSON.stringify(data).replace(/script/g, 'scr"+"ipt') + ')';

        return (
            <html lang="ru">
            <head>
                <title>mySurface</title>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
               
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
                <link rel="icon" href="favicon.ico" type="image/x-icon"/>
                {/*Bootstrap*/}
                <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <link href="css/libs/bootstrap.css" rel="stylesheet" media="screen"/>
                {/*       <link href="css/libs/bootstrap-theme.css" rel="stylesheet" media="screen"/>*/}

                <script type="text/javascript" src="js/libs/jquery.js"></script>
                <script type="text/javascript" src="js/libs/bootstrap.min.js"></script>

                {/*Custom styles*/}
                <link href="css/components-style/style.css" rel="stylesheet" media="screen"/>
                <link href="css/components-style/header.css" rel="stylesheet" media="screen"/>
                <link href="css/components-style/footer.css" rel="stylesheet" media="screen"/>

            </head>
            <body className="element">
            <div id="content" dangerouslySetInnerHTML={{__html: contentHtml}}/>
            <script src="/js/bundle.js"></script>
            <script dangerouslySetInnerHTML={{__html: initScript}}/>
            </body>
            </html>
        );
    }
});

module.exports = Html;
