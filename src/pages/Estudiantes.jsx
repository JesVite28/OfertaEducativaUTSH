import React, { useEffect, useState } from 'react';
import './../styles/Lista_estudiante.css';
import Header from './../components/Header';
import Footer from './../components/Footer';
import EstudiantesData from './../data/Estudiantes.json';

const Estudiantes = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const sortedStudents = EstudiantesData.sort((a, b) => (a.status === 'Inactive' ? -1 : 1));
    setStudents(sortedStudents);
    setFilteredStudents(sortedStudents);
  }, []);

  const handleShowModal = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setShowModal(false);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    if (value === 'All') {
      setFilteredStudents(students);
    } else {
      setFilteredStudents(students.filter(student => student.status === value));
    }
  };

  return (
    <>
      <div className="container-list mt-5">
        <h2 className="text-center mb-4">Lista de Estudiantes</h2>
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Matrícula</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>
                  <div className="d-flex align-items-end">
                    Estado
                    <button className="btn btn-list btn-secondary btn-sm ms-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"> 
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li><button className="dropdown-item" onClick={() => handleFilterChange('All')}>Todos</button></li>
                      <li><button className="dropdown-item" onClick={() => handleFilterChange('active')}>Active</button></li>
                      <li><button className="dropdown-item" onClick={() => handleFilterChange('Inactive')}>Inactive</button></li>
                    </ul>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index} className={student.status === 'Inactive' ? 'table-danger' : ''}>
                  <td>
                    <button className='btn-verMas' onClick={() => handleShowModal(student)}>
                      <i className="bi bi-file-earmark-medical"></i>
                    </button>
                    {student.matricula}
                  </td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />

      {selectedStudent && (
        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Información del Estudiante</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p><strong>Matrícula:</strong> {selectedStudent.matricula}</p>
                <p><strong>Nombre:</strong> {selectedStudent.name}</p>
                <p><strong>Edad:</strong> {selectedStudent.age}</p>
                <p><strong>Estado:</strong> {selectedStudent.status}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Estudiantes;

