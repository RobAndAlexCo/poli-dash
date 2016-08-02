var React = require('react');

var Navbar = React.createClass({
  render: function() {
    return(
      <div>This is where the navbar will go</div>
    )
  }
})

module.exports = Navbar;


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
