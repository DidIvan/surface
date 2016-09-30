var React = require("react");

var Header = React.createClass({
    componentDidMount: function () {
    },
    render: function () {
        return (

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <img alt="Brand" src="..."/>
                        </a>
                    </div>
                </div>
            </nav>

        )
    }
});

module.exports = Header;