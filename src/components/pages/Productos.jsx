import CardUser from '../CardUser/CardUser';
import { useState, useEffect } from 'react';
import { lista_prod } from '../productos';

const Productos = () => {
    const [counter, setCounter] = useState(5); 
    const [products, setProducts] = useState([]); 

    useEffect(() => {
      setProducts(lista_prod);
    }, [])
    
  return ( 
    <div>   
     <div className='UserSection'>
       {products.map(producto => <CardUser producto={producto} />)}
         </div>
         <div className='CounterSection'>
          <p>
            {counter}
          </p>
         </div>
            
    </div>
  )
}

export default Productos