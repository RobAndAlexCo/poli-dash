var React = require('react');
var Link = require('react-router').Link;

var Navbar = React.createClass({
  render: function() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">PoliDash</a>
          </div>
          <ul className="nav navbar-nav">
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
          </ul>
        </div>
      </nav>
    )
  }
})

module.exports = Navbar;


/*
<div>
  <span style={styles.space}>Navbar will eventually be here...</span>
  <Link to='/' style={styles.space}>
    <button className="btn btn-primary">Home</button>
  </Link>
  <Link to='/about' style={styles.space}>
    <button className="btn btn-primary">About</button>
  </Link>
</div>
*/

/* Bootstrap navbar code
<div className="navbar navbar-default navbar-fixed-top">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapseNav">
        <span className="sr-only">Toggle Dropdown<span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand">PoliDash</a>
    </div>
    <div className="collapse navbar-collapse" id="collapseNav" role="navigation">
      <ul className="nav navbar-nav navbar-right">
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
  </div>
</div>
*/
