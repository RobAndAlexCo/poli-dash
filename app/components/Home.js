var React = require('react');

var styles = {
  welcome: {
    fontSize: '50px',
    marginBottom: '40px'
  },
  header: {
    fontSize: '30px',
    marginBottom: '40px'
  },
  button: {
    fontSize: '25px'
  }
};


var Home = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <div style={styles.welcome}>Welcome to Poli-Dash</div>
        <div style={styles.header}>News & Info for Things You Actually Care About.</div>
        <button className="btn btn-success" style={styles.button}>Get Started!</button>
      </div>
    )
  }
})

module.exports = Home;
