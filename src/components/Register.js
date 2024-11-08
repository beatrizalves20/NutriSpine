import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para criar um novo usuário
        console.log("Registering:", formData);
    };

    return (
        <div>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" name="name" onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" onChange={handleChange} required />

                <label>Senha:</label>
                <input type="password" name="password" onChange={handleChange} required />

                <label>Confirmar Senha:</label>
                <input type="password" name="confirmPassword" onChange={handleChange} required />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default Register;