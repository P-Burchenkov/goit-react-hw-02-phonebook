import PropTypes from 'prop-types';

export default function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => {
        return <li key={contact}>{contact}</li>;
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
};
