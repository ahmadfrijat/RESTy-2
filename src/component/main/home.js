import React, { Component } from 'react';
import { If, Then, Else } from '../if'; //'react-if'
import Modal from '../model';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <section>
        <If condition={this.state.isOpen}>
          <Then>
            <Modal title="Pop Up" close={this.toggleModal}>
              <div>THis is my dynamic Modal!</div>
            </Modal>
          </Then>
          <Else>
            <button onClick={this.toggleModal}>Open Modal</button>
          </Else>
        </If>
      </section>
    );
  }
}
export default Home;