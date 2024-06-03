export default function Forms({handleChange, handleSubmit, datos}) {
    
    return(
        <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={datos.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Edad:</label>
          <input type="number" name="edad" value={datos.edad} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={datos.email} onChange={handleChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
      </div>
    )
}