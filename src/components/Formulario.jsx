import { useState } from "react";
import Error from "./Error";

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

  const [error, setError] = useState(false)
  const {ciudad, pais} = busqueda

  const handleChange = e =>{
       setBusqueda({
           ...busqueda,
           [e.target.name] : e.target.value
       })
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(ciudad.trim() === '' || pais.trim() === '') {
        setError(true)
        return
    }
    setError(false)
    setConsultar(true)

}


  return (
    <form
         onSubmit={handleSubmit}
    >
          {error ? <Error mensaje="Todos los campos son requeridos" /> : null }

         <div className="input-field col s12">
             <input
                 type="text"
                 name="ciudad"
                 id="ciudad"  
                 value={ciudad} 
                 onChange={handleChange}
             />
             <label htmlFor="ciudad">Ciudad:</label>
         </div>

         <div className="input-field col s12">
              <select
                 name="pais"
                 id="pais"
                 value={pais}
                 onChange={handleChange}
              >
                 <option value="">--- Seleccione un país ---</option>
                 <option value="HN">Honduras</option>
                 <option value="US">Estados Unidos</option>
                 <option value="DE">Alemania</option>
                 <option value="UK">Reino Unido</option>
                 <option value="CR">Costa Rica</option>
                 <option value="ES">España</option>
                 <option value="CA">Canadá</option>
                 <option value="MX">México</option>
              </select>
              <label htmlFor="pais">País:</label>
         </div>

         <div className="input-field col s12">
                <input  
                 type="submit"
                 value="Buscar Clima"
                 className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
         </div>
    </form>
  )
};

export default Formulario;
