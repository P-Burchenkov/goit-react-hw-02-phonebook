import { Component } from 'react';
import Contacts from './Contacts';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = evt => {
    this.setState({ name: evt.currentTarget.value });
  };

  addContact = evt => {
    evt.preventDefault();
    console.log(this.state);
    this.setState(prevState => {
      this.state.contacts.push(prevState.name);
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <form onSubmit={this.addContact}>
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
