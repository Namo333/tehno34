
import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    axios.post('/api/application/', formData)
      .then(response => {
        console.log(response.data);
        // Добавьте здесь код для обработки успешной отправки заявки
      })
      .catch(error => {
        console.log(error);
        // Добавьте здесь код для обработки ошибки при отправке заявки
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>name</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <p>email</p>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <p>text</p>
      <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default ApplicationForm;