var React = require("react"),
    Athletes = require("./content/athletes.react"),
    Players = require("./content/players.react"),
    Beactive = require("./content/be_active"),
    Find_contact = require("./content/Find_contact");

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <main>
                    <Athletes/>
                    <Players/>
                    <Beactive/>
                    <Find_contact/>
                </main>
            </div>
        )
    }
});

module.exports = Main;