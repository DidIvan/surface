var React = require("react");

var Header = React.createClass({
    componentDidMount: function () {
    },
    render: function () {
        return (
            <header id="header">
                <div className="container container_header">
                    <div className="header-top">
                        <a className="logo" href="#"><img src="../../img/logo.png" alt="logo"/></a>
                        <p className="right">for athlets and coaches</p>
                    </div>
                    <div className="header-center row">
                        <p className="p_left">BE RECRUITED</p>
                        <p className="p_right">PLAY COLLEGE SPORTS</p>
                    </div>
                    <div className="row">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">FOOTBALL</a></li>
                            <li><a href="#">BASKETBALL</a></li>
                            <li><a href="#">BASEBALL</a></li>
                            <li><a href="#">SOCCER</a></li>
                            <li><a href="#">ICE HOCKEY</a></li>
                        </ul>
                    </div>
                    <div className="row buttons">
                        <a href="#" className="button button_1"></a>
                        <a href="#" className="button button_2"></a>
                    </div>
                </div>
            </header>

        )
    }
});

module.exports = Header;