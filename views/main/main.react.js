var React = require("react"),
    Athletes = require("./content/athletes.react"),
    Players = require("./content/players.react"),
    Beactive = require("./content/be_active");

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <main>
                    <Athletes/>
                    <Players/>
                    <Beactive/>
                </main>
            </div>
        )
    }
});

module.exports = Main;