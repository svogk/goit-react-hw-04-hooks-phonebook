import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

function ContactForm({ onAddContact, onCheckContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isValidateForm = validateForm(name, number);
    if (!isValidateForm) {
      reset();
      return;
    }
    onAddContact({ id: uuidv4(), name, number });
    reset();
  };

  const validateForm = (name, number) => {
    if (!name.trim() || !number.trim()) {
      alert('Для добавления контакта заполните поля Name и Number');
      return false;
    }
    return onCheckContact(name);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="">
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            placeholder="Введите имя контакта"
            onChange={handleChange}
            autoFocus
          />
        </label>
        <label htmlFor="">
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            placeholder="Введите номер контакта"
            onChange={handleChange}
          />
        </label>
        <button>Add contact</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
  onCheckContact: PropTypes.func,
};

export default ContactForm;
