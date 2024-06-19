import React, { useState } from 'react';

const ProductForm = () => {
    const [titulo, setTitulo] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ titulo, precio, descripcion }),
            });
            if (response.ok) {
                console.log('Producto creado exitosamente');
                // Lógica adicional después de crear el producto
            } else {
                console.error('Error al crear el producto');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Título:</label>
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
            <br />
            <label>Precio:</label>
            <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
            <br />
            <label>Descripción:</label>
            <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
            <br />
            <button type="submit">Crear Producto</button>
        </form>
    );
};

export default ProductForm;
