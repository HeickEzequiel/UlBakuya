import {
  Calendar,
  Phone,
  Mail,
  School,
  User,
  GraduationCap,
  FileText
} from "lucide-react";

function CardUser(props) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row gap-8 items-start">
      <div className="flex-shrink-0">
        <img
          src={props.imagen}
          alt="Foto de perfil"
          className="w-40 h-40 object-cover rounded-full border-4 border-gray-200"
        />
      </div>
      <div className="flex-1 space-y-3">
        <h1 className="text-2xl font-semibold text-gray-800">
          {props.nombre} {props.apellido}
        </h1>

        <div className="flex items-center text-gray-600 gap-2">
          <Calendar className="w-5 h-5" />
          <span>Fecha de nacimiento: {props.fecha_de_nacimiento}</span>
        </div>
        <div className="flex items-center text-gray-600 gap-2">
          <Phone className="w-5 h-5" />
          <span>Teléfono: {props.tel}</span>
        </div>
        <div className="flex items-center text-gray-600 gap-2">
          <Mail className="w-5 h-5" />
          <span>Email: {props.email}</span>
        </div>

        {props.nivel !== "Observador" && (
          <div className="pt-4 border-t border-gray-300 mt-4 space-y-3">
            <div className="flex items-center text-gray-600 gap-2">
              <School className="w-5 h-5" />
              <span>Escuela: {props.escuela}</span>
            </div>
            <div className="flex items-center text-gray-600 gap-2">
              <User className="w-5 h-5" />
              <span>Profesor: {props.profesor}</span>
            </div>
            <div className="flex items-center text-gray-600 gap-2">
              <GraduationCap className="w-5 h-5" />
              <span>Graduación: {props.graduacion}</span>
            </div>
            <div className="flex items-center text-gray-600 gap-2">
              <FileText className="w-5 h-5" />
              <span>Último examen: {props.fecha_de_examen}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardUser;
