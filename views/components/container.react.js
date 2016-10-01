var React = require("react"),
    Header = require("../header/header.react");

var Container = React.createClass({
        render: function () {
            return (
                <div className="">
                    <Header/>
                    <h1>Hello World!</h1>
                </div>
            )
        }
    })
    ;

module.exports = Container;