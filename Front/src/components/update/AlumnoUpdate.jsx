import { useState, useEffect } from 'react';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import UserNav from '../usernav/UserNav';
import userStore from '../../store/loginStore';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFetchAlumno } from '../../hooks/useAlumnos';
import { useFetchProfes } from '../../hooks/useProfesor';
import { useFetchEscuelas } from '../../hooks/useEscuela';
import CardImagen from '../cards/CardImagen';
import api from '../../api/ubk';
import { uploadImage } from '../../services/cloudinaryService';

function AlumnoUpdate() {
  const isLogged = userStore((state) => state.isLogged);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: alumno, isLoading, error } = useFetchAlumno(id);
  const { data: profesores = [] } = useFetchProfes();
  const { data: escuelas = [] } = useFetchEscuelas();

  const [alumnoData, setAlumnoData] = useState({
    nombre: '',
    apellido: '',
    imagen: '',
    fecha_de_nacimiento: '',
    escuela: [],
    graduacion: '',
    fecha_de_examen: '',
    profesor: [],
    estado: 'Activo'
  });

  const [ file, setFile ] = useState(null)

  useEffect(() => {
    if (alumno) {
      setAlumnoData({
        nombre: alumno.nombre || '',
        apellido: alumno.apellido || '',
        imagen: alumno.imagen || '',
        fecha_de_nacimiento: alumno.fecha_de_nacimiento || '',
        escuela: alumno.escuelas?.map((e) => e.id) || [],
        graduacion: alumno.graduacion || '',
        fecha_de_examen: alumno.fecha_de_examen || '',
        profesor: alumno.profesores?.map((p) => p.id) || [],
        estado: alumno.estado || 'Activo'
      });
    }
  }, [alumno]);

  if (!isLogged) return <p>Debes iniciar sesión como administrador</p>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const updateAlumno = async (alumnoData) => {
    try {
      const response = await api.put(`/updatealumno/${id}`, alumnoData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        alert('Alumno actualizado');
        navigate(`/alumno/${id}`);
      } else {
        alert('Algo salió mal :(');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud');
      alert('Error al actualizar el alumno');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAlumnoData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)   
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const urlImage = await uploadImage(file)
      const success = await updateAlumno ({ ...alumnoData, imagen: urlImage})
      if(success){
        navigate(`/alumno/${id}`)
      }
    } catch (error) {
      console.error("Error al realizar la solicitud", error);
    };
  };

  return (
    <div>
      <Nav />
      <UserNav />
      <div>
        <CardImagen imagen={alumno.imagen} />

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Editar Alumno</h2>

          <div className="flex flex-col mb-4">
              <label
                htmlFor="profileImage"
                className="mb-2 text-sm font-semibold text-gray-800">
                Foto de perfil
              </label>

              <div className="relative flex items-center justify-between w-full border border-gray-300 rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="w-full cursor-pointer opacity-0 absolute inset-0 z-10"
                />

                <span className="px-4 py-2 text-gray-500 text-sm truncate">
                  Seleccioná una imagen...
                </span>

                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-none hover:bg-blue-700 transition-colors duration-200">
                    Elegir archivo
                </button>
              </div>
            </div>

          {[
            { label: 'Nombre', name: 'nombre', placeholder: alumno.nombre },
            { label: 'Apellido', name: 'apellido', placeholder: alumno.apellido },
            { label: 'Fecha de nacimiento', name: 'fecha_de_nacimiento', placeholder: alumno.fecha_de_nacimiento },
            { label: 'Graduación', name: 'graduacion', placeholder: alumno.graduacion },
            { label: 'Fecha de examen', name: 'fecha_de_examen', placeholder: alumno.fecha_de_examen },
            { label: 'Estado', name: 'estado', placeholder: alumno.estado }
          ].map(({ label, name, placeholder }) => (
            <div key={name}>
              <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type="text"
                id={name}
                name={name}
                value={alumnoData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Escuelas</label>
            <select
              name="escuela"
              multiple
              value={alumnoData.escuela}
              onChange={(e) => {
                const values = Array.from(e.target.selectedOptions, (opt) => opt.value);
                setAlumnoData((prev) => ({ ...prev, escuela: values }));
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {escuelas.map((esc) => (
                <option key={esc.id} value={esc.id}>
                  {esc.nombre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Profesores</label>
            <div className="grid grid-cols-2 gap-2">
              {profesores.map((prof) => (
                <label key={prof.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={prof.id}
                    checked={alumnoData.profesor.includes(prof.id)}
                    onChange={(e) => {
                      const value = e.target.value;
                      setAlumnoData((prev) => ({
                        ...prev,
                        profesor: e.target.checked
                          ? [...prev.profesor, value]
                          : prev.profesor.filter((id) => id !== value)
                      }));
                    }}
                  />
                  {prof.nombre} {prof.apellido}
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Actualizar Alumno
            </button>
            <Link to="/pc_alumnos">
              <button
                type="button"
                className="bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                🡸 Volver
              </button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AlumnoUpdate;
