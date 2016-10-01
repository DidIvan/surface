var React = require("react");

var Header = React.createClass({
    componentDidMount: function () {
    },
    render: function () {
        return (
            <header id="header">
                <div className="container">
                    <div className="header-top">
                        <a className="logo" href="#"><img src="../../img/logo.png" alt="logo"/></a>
                        <p className="right">for athlets and coaches</p>
                    </div>
                    <div className="header-center">
                        <p className="p_left">BE RECRUITED</p>
                        <p className="p_right">PLAY COLLEGE SPORTS</p>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">FOOTBALL</a></li>
                        <li><a href="#">BASKETBALL</a></li>
                        <li><a href="#">BASEBALL</a></li>
                        <li><a href="#">SOCCER</a></li>
                        <li><a href="#">ICE HOCKEY</a></li>
                    </ul>
                </div>
            </header>

        )
    }
});

module.exports = Header;