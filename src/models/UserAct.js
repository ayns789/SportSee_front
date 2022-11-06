import { Component } from 'react';

/* The UserAct class is a component that takes in data and sets it to the data property. */
class UserAct extends Component {
  constructor(data) {
    super(data);
    this.data = data.data;
  }
}
export default UserAct;
