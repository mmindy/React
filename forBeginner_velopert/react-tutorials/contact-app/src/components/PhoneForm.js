import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name : '',
    phone : ''
  }

  _handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  _handleSubmit = (e) => {
    e.preventDefault(); // submit버튼 클릭 시, 새로고침 방지
    this.props.onCreate({
      name : this.state.name,
      phone : this.state.phone
    })
    // === this.props.onCreate(this.state);

    this.setState({
      name : "",
      state : ""
    })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input 
          name = 'name' 
          placeholder='이름' 
          onChange={this._handleChange} 
          value={this.state.name} 
        />
        <input 
          name = 'phone' 
          placeholder='전화번호' 
          onChange={this._handleChange} 
          value={this.state.phone} 
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default PhoneForm;