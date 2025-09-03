function CardEvento(props) {

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 w-full max-w-xl mx-auto hover:shadow-xl transition-shadow">
          <img
            src={props.imagen}
            alt="Foto del evento"
            className="w-full h-64 object-contain rounded-xl border border-black mb-6"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {props.tipo_de_evento}
          </h1>
          <p className="text-gray-600 mb-1"><span className="font-medium">Club:</span> {props.club}</p>
          <p className="text-gray-600 mb-1"><span className="font-medium">Direccion:</span> {props.direccion}</p>
          <p className="text-gray-600 mb-1"><span className="font-medium">Fecha del evento:</span> {props.fecha_del_evento}</p>
          <div className="text-gray-600 mb-1"><span className="font-medium">Horarios:</span> <ul className="list-disc list-inside text-gray-600 ml-4">{props.horarios.map((horario, index)=>(
            <li key={index}>{horario}</li>
          ))}</ul></div>
          <p className="text-gray-600"><span className="font-medium">Estado:</span> {props.estado}</p>
        </div>
      );
}

export default CardEvento