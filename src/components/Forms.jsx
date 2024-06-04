export default function Forms({handleChange, handleSubmit, data}) {
    
    return(
        <div className="form-container">
      <h2>Formulario con Hooks</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name
          <input type="text" name="firstName" value={data.firsName} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>Last Name
          <input type="text" name="lastName" value={data.lastName} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>Email
          <input type="email" name="email" value={data.email} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>Password
          <input type="password" name="password" value={data.password} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>Confirm your password
          <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={handleChange} />
          </label>
        </div>
      </form>
        <button type="submit">Enviar</button>
      </div>
    )
}