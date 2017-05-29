const React = require('react');
const ReactDOM = require('react-dom');
const main = require('./main')();

const req = require('superagent');

main.initConnection();

var MessageBox = React.createClass({
  render: function(){
    var name = this.props.name;
    var message = this.props.message;
    return (<div><h1> Hello again {name}</h1><p>{message}</p></div>)
  }
});

var FormInput = React.createClass({
  formHandler: function(e){
    e.preventDefault();
    if(this.refs.name.value.length>0) {
      var name = this.refs.name.value;
      this.refs.name.value = '';
      this.props.onNewName(name);
      main.getSocket.emit('name', {hello: 'from '+name});
    }
    if(this.refs.message.value.length>0) {
      var message = this.refs.message.value;
      this.refs.message.value = '';
      this.props.onNewMessage(message);
    }
  },
  render: function(){
    return (
      <form onSubmit={this.formHandler}>
        <input type='text' ref='name' placeholder='enter message' /><br/>
        <textarea type='text' ref='message' placeholder='enter message'></textarea>
        <button>Ok</button>
      </form>)
  }
});

var Main = React.createClass({
  getDefaultProps: function(){
    return {name : 'Staffan',message : 'What a splendid morning'}
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  updateName: function(newName) {
    this.setState(
      {
        name: newName
      }
    )
  },
  updateMessage: function(newMessage) {
    this.setState(
      {
        message: newMessage
      }
    )
  },
  render: function(){
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <MessageBox name={name} message={message}/>
        <FormInput onNewName={this.updateName} onNewMessage={this.updateMessage}/>
      </div>)
  }
});


ReactDOM.render(
  <Main />,
  document.getElementById('app')
);