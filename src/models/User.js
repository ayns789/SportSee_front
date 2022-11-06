import { Component } from 'react';

/* The User class extends the Component class and has a constructor that takes a data object as an
argument. The constructor then calls the super method on the Component class and passes the data
object to it. The constructor then sets the data property of the User class to the data object.
</code> */
class User extends Component {
  constructor(data) {
    super(data);
    this.data = data.data;
  }
}
export default User;
