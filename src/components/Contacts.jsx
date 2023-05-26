import PropTypes from 'prop-types';

export default function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => {
        return <li key={contact.name}>{Object.values(contact)}</li>;
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
