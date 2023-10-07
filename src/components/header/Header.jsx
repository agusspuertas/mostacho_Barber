import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'

function Header() {
  return (
    <header className='min-h-min bg-[#F5F5F5] grid grid-cols-3 '>

      <section className=''>
        <div className='p-6 flex'>
          <img className='w-60 drop-shadow-2xl justify-around' src="./public/Logo_MostachoBarber.png" alt="logo" />
           </div>
      </section>

      <section className='col-span-2 flex justify-around items-center'>
        <article>
        <LinkRouter to={'/'} > <p>Inicio</p> </LinkRouter>
        </article>

        <article>
        <LinkRouter to={'/'} > <p>Turnos</p> </LinkRouter>
        </article>

        <article>
        <LinkRouter to={'/'} > <p>Contacto</p> </LinkRouter>

        </article>
      </section>
    </header>
  )
}

export default Header