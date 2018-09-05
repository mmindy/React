var h1 = React.createElement('h1', null, 'Hello World!!!');

class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'h1', 
      null, 
      'Hello ' + this.props.frameworkName + ' World!!!'
    );
  }
}

ReactDOM.render(
  React.createElement(
    'div', 
    null, 
    React.createElement(HelloWorld, {
      id : 'ember',
      frameworkName : 'Ember.js',
      title : 'ember title'
    }), 
    React.createElement(HelloWorld, {
      id : 'backbone',
      frameworkName : 'Backbone.js',
      title : 'backbone title'
    }), 
    React.createElement(HelloWorld, {
      id : 'angular',
      frameworkName : 'Angular.js',
      title : 'angular title'
    })
  ),
  document.querySelector('#content')
)