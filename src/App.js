import { useState } from 'react';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import useLocalStorage from './hooks/useLocalStorage';

import initialContacts from './data/contacts.json';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const handleAddNewContact = newContact => {
    setContacts([...contacts, newContact]);
  };

  const handleCheckContact = name => {
    const isExistContact = !!contacts.find(contact => contact.name === name);
    if (isExistContact) {
      alert('Контакт с таким именем уже существует!');
    }
    return !isExistContact;
  };

  const handleDeleteContact = id =>
    setContacts(contacts.filter(contact => contact.id !== id));

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const getVisibleContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const visibleContacts = getVisibleContact();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        onAddContact={handleAddNewContact}
        onCheckContact={handleCheckContact}
      />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilter} />
      <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
