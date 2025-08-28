import React, { useState } from 'react';

const SimpleForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '' });

  const validate = () => {
    const newErrors = { name: '', email: '' };

    if (!name.trim()) {
      newErrors.name = 'Trường này là bắt buộc';
    }

    const emailRegex = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
    if (!email.trim()) {
      newErrors.email = 'Trường này là bắt buộc';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Gửi thành công!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="simple-form">
      <div>
        <label>Họ tên:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validate}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validate}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <button type="submit" disabled={!!errors.name || !!errors.email}>
        Gửi
      </button>
    </form>
  );
};

export default SimpleForm;
