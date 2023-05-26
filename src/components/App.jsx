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
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  addContact = evt => {
    evt.preventDefault();
    this.setState(prevState => {
      const { contacts } = this.state;
      const data = { name: prevState.name, number: prevState.number };
      for (let i = 0; i < contacts.length; i += 1) {
        console.log(contacts[i].number);
        if (data.number === contacts[i].number) {
          console.log('ooops');
          return;
        }
      }
      contacts.push(data);
    });
    // this.setState(prevState => {
    //   const { contacts } = this.state;
    //   const data = { name: prevState.name, number: prevState.number };
    //   contacts.push(data);
    // });
    this.reset();
  };

  compareNumbers = () => {};

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <form onSubmit={this.addContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
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
