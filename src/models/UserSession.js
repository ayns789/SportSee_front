import { Component } from 'react';

/* The UserSession class is a subclass of the Component class. It has a constructor that takes a data
object as an argument. The constructor calls the superclass constructor with the data object as an
argument. The constructor then assigns the data object to the data property of the UserSession
instance.
</code> */
class UserSession extends Component {
  constructor(data) {
    super(data);
    this.data = data.data;
  }
}
export default UserSession;
