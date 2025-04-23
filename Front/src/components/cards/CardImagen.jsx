function CardImagen(props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 w-full max-w-md mx-auto hover:shadow-xl transition-shadow">
        <img 
          src={props.imagen}
          className="w-full h-48 object-contain rounded-xl border border-black mb-4"/>
    </div>
  )
}

export default CardImagen