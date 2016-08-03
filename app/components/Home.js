var React = require('react');
var FontAwesome = require('react-fontawesome');


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
    fontSize: '25px',
    margin: '0 auto',
    marginBottom: '30px',
    display: 'block',
  },
  icon: {
    color: 'purple',
    display: 'inline-block'
  }
};


var Home = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <div style={styles.welcome}>Welcome to Poli-Dash</div>
        <div style={styles.header}>News & Info for Things You Actually Care About.</div>
        <button className="btn btn-primary" style={styles.button}>Get Started!</button>
        <FontAwesome className='col-xs-4' name='info-circle' size='5x' style={styles.icon}/>
        <FontAwesome className='col-xs-4' name='smile-o' size='5x' style={styles.icon}/>
        <FontAwesome className='col-xs-4' name='globe' size='5x' style={styles.icon}/>

      </div>
    )
  }
})

module.exports = Home;
