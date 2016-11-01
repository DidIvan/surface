var React = require("react"),
    Athletes = require("./content/athletes.react"),
    Players = require("./content/players.react");

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <main>
                    <Athletes/>
                    <Players/>
                </main>
            </div>
        )
    }
});

module.exports = Main;