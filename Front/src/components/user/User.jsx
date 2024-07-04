import { Link } from "react-router-dom"

function User() {
  return (
    <div>
        <div className='relative flex items-center bg-transparent p-4 w-full left-72 mt-6'>
            <div className="absolute left-52">
                <button className='block mt-4 left-10 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/manual'>Manual del practicante</Link></button>
                <button className='block mt-4 left-10 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/examenes'>Examenes</Link></button>
                <button className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/torneos'>Torneos</Link></button>
                <button className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/seminarios'>Seminarios</Link></button>
                <button className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/clasesespeciales'>Clases Especiales</Link></button>
            </div>
        </div>
    </div>
  )
}
export default User