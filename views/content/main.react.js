var React = require("react");

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <main>
                    <section className="athletes">
                        <div className="connection"></div>
                        <div className="collaboration"></div>
                        <div className="growth"></div>
                    </section>
                </main>
            </div>
        )
    }
});

module.exports = Main;