import React from 'react'
import ReactDOM from 'react-dom'

let User = React.createClass({
  render: function () {

    let twitter = (this.props.twitter) ? this.renderTwitter(this.props.twitter) : null;

    return <div>{this.props.name}: </div>

  },

  renderTwitter: function(twitter) {
    return <a href={'http://twitter.com/' + twitter}>Twitter</a>
  }

})

// App is the props parent component
let App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{this.props.foo}</h1>
        {/*This is the props child component*/}
        <User name="Joe Blow" twitter="realdonaldtrump"/>
        <User name="Lloyd Garrison" twitter="lloydtheandroid"/>
        <User name="Kevin Bacon"/>
      </div>
    )
  }
});

ReactDOM.render(<App foo="hello world"/>, document.getElementById('root'))
