var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes')

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>Hello PoliDash!</div>
    )
  }
});

ReactDOM.render(
  routes,
  document.getElementById('app')
);
