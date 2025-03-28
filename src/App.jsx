import './App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import db from '../db.json'
import Oferta from './pages/Oferta'
import Formulario from './pages/Formulario'
import Estudiantes from './pages/Estudiantes'
import Header from './components/Header'

function App() {
  const [credentials, setCredentials] = useState({ matricula: '', nombre: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = db.data.find(user => user.matricula === credentials.matricula && user.nombre === credentials.nombre);
    if (user) {
      navigate('/oferta');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className='container-principal'>
            <div className="container-header-sesion">
              <h1 className="title-sesion">Iniciar Sesión</h1>
            </div>
            <div className="container-sesion mt-5">
              <form onSubmit={handleSubmit} className="card p-4">
                <div className="mb-3">
                  <label className="form-label">Matrícula</label>
                  <input type="text" name="matricula" value={credentials.matricula} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" name="nombre" value={credentials.nombre} onChange={handleChange} className="form-control" />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                <div className="mt-3">
                  <p>¿No tienes cuenta? <a href="/formulario">Regístrate</a></p>
                </div>
              </form>
            </div>
          </div>
        } />
        <Route path="/oferta" element={<><Header /><Oferta /></>} />
        <Route path="/formulario" element={<><Header /><Formulario /></>} />
        <Route path="/estudiantes" element={<><Header /><Estudiantes /></>} />
      </Routes>
    </>
  )
}

export default App;
