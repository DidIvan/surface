var React = require("react"),
    Header = require("../header/header.react"),
    Footer = require("../footer/footer.react"),
    Main = require("../content/main.react");

var Container = React.createClass({
        render: function () {
            return (
                <div className="">
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            )
        }
    })
    ;

module.exports = Container;