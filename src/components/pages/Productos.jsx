import CardUser from '../CardUser/CardUser';
import React, { useState, useEffect } from 'react';
import { lista_prod } from '../productos';

const Productos = () => {
  const [counter, setCounter] = useState(5);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setProducts(lista_prod);
        setLoading(false); 
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='UserSection'>
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          products.map((producto) => (
            <CardUser
              key={producto.id}
              producto={{
                nombre: producto.nombre,
                img: producto.img.default,
                precio: producto.precio,
              }}
            />
          ))
        )}
      </div>
      <div className='CounterSection'>
        <p>{counter}</p>
      </div>
    </div>
  );
};

export default Productos;
