import { Component } from 'react';

/* It's a class that extends the Component class and has a constructor that takes a data object as a
parameter. 

The constructor then calls the super method, passing in the data object. 

The constructor then sets the data property of the class to the data object. */
class UserPerf extends Component {
  constructor(data) {
    super(data);
    this.data = data.data;
  }
}
export default UserPerf;
