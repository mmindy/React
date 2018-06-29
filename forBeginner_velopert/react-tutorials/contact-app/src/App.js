import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 0;
  
  state = {
    information :[] // 전화번호 데이터를 넣을 배열
  }

  _handleCrate = (data) => {
    const { information } = this.state;
    this.setState({
      information : information.concat({
        ...data,
        id : this.id++
      })
    })

    /*
    // === assign으로 data와 id 합침($에서 extends와 비슷한 개념)
    this.setState({
      information : information.concat(Object.assign({}, data, {
        id : this.id++
      }))
    })
    */
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this._handleCrate}/>
        <PhoneInfoList data={this.state.information} />
      </div>
    );
  }
}

export default App;
