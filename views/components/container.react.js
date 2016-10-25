var React = require("react"),
    Header = require("../header/header.react"),
    Footer = require("../footer/footer.react");

var Container = React.createClass({
        render: function () {
            return (
                <div className="">
                    <Header/>
                    <h1>Hello World!</h1>
                    <Footer/>
                </div>
            )
        }
    })
    ;

module.exports = Container;