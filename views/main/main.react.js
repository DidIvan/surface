var React = require("react"),
    Athletes = require("./content/athletes.react"),
    Players = require("./content/players.react"),
    Be_active = require("./content/be_active"),
    Find_contact = require("./content/Find_contact"),
    Work_it = require("./content/work_it");

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <main>
                    <Athletes/>
                    <Players/>
                    <Be_active/>
                    <Find_contact/>
                    <Work_it/>
                </main>
            </div>
        )
    }
});

module.exports = Main;