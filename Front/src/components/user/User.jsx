function User() {
  return (
    <div>
        <div className='relative flex items-center bg-blue-400 p-4 w-full '>
            <div className="absolute left-12">
                <button className='block mt-4 left-10 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Manual del practicante</button>
                <button className='block mt-4 left-10 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Examenes</button>
                <button className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Torneos</button>
                <button className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Seminarios</button>
                <button className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Clases Especiales</button>
            </div>
        </div>
    </div>
  )
}
export default User