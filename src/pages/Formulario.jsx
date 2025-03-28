import React, { useState } from 'react';
import '../styles/formulario.css';
import Swal from 'sweetalert2';

const Formulario = () => {
  const [formData, setFormData] = useState({
    matricula: '',
    nombre: '',
    carrera: '',
    fechaNacimiento: '',
    sexo: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target; // Obtener el nombre y valor del campo
    // Actualizar el estado del formulario con los nuevos valores
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.matricula) formErrors.matricula= 'El campo Matrícula es requerido';
    if (!formData.nombre) formErrors.nombre = 'EL campo Nombre es requerido';
    if (!formData.carrera) formErrors.carrera = 'El campo Carrera es requerido';
    if (!formData.fechaNacimiento) formErrors.fechaNacimiento = 'EL campo Fecha de nacimiento es requerido';
    if (!formData.sexo) formErrors.sexo = 'El campo Sexo es requerido';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que el formulario se envíe por el método GET
    const formErrors = validate(); // Validar los datos del formulario
    // Si no hay errores en el formulario, se envía la información al servidor
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/data', { 
          method: 'POST',  
          headers: { 
            'Content-Type': 'application/json' // Tipo de contenido que se enviará
          },
          body: JSON.stringify(formData) // Datos que se enviarán al servidor
        });
        const result = await response.json(); // Convertir la respuesta a JSON
        // Limpiar los campos del formulario y los errores
        console.log('Data saved:', result);
        setFormData({
          matricula: '',
          nombre: '',
          carrera: '',
          fechaNacimiento: '',
          sexo: ''
        });
        Swal.fire({
          title: "Datos guardados exitosamente!",
          icon: "success",
          confirmButtonText: "Aceptar"
        });
      } catch (error) {
        console.error('Error saving data:', error);
        Swal.fire({
          title: "Error al guardar los datos",
          icon: "error",
          confirmButtonText: "Aceptar"
        });
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleCancel = () => {
    setFormData({
      matricula: '',
      nombre: '',
      carrera: '',
      fechaNacimiento: '',
      sexo: ''
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="container-form mt-4">
      <div className="mb-3">
        <label htmlFor="matricula" className="form-label">Matrícula</label>
        <input
          type="text"
          className="form-control"
          id="matricula"
          name="matricula"
          value={formData.matricula}
          onChange={handleChange}
        />
        {errors.matricula && <div className="text-danger">{errors.matricula}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <div className="text-danger">{errors.nombre}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="carrera" className="form-label">Carrera</label>
        <select
          className="form-select"
          id="carrera"
          name="carrera"
          value={formData.carrera}
          onChange={handleChange}
        >
          <option value="">Seleccione una carrera</option>
          <option value="Desarrollo de Software Multiplataforma">Desarrollo de Software Multiplataforma</option>
          <option value="Infraestructura de redes digitales">Infraestructura de redes digitales</option>
          <option value="Mecatronica">Mecatronica</option>
        </select>
        {errors.carrera && <div className="text-danger">{errors.carrera}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento</label>
        <input
          type="date"
          className="form-control"
          id="fechaNacimiento"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
        />
        {errors.fechaNacimiento && <div className="text-danger">{errors.fechaNacimiento}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="sexo" className="form-label">Sexo</label>
        <select
          className="form-select"
          id="sexo"
          name="sexo"
          value={formData.sexo}
          onChange={handleChange}
        >
          <option value="">Seleccione un sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
        {errors.sexo && <div className="text-danger">{errors.sexo}</div>}
      </div>
      <button type="submit" className="btn btn-primary me-2">Aceptar</button>
    </form>
  );
};

export default Formulario;
