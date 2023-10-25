import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

function Header() {
  return (
    <header className='min-h-min  bg-gradient-to-b from-[#D5B39A] to-[#EDDED4]  grid grid-cols-3 '>

      <section className=''>
        <div className='p-7 mb-2 flex'>
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
        <ScrollLink activeClass='active' spy={true} smooth={true} to="footer"  offset={-70} duration={700}> <p>Contacto</p> </ScrollLink>

        </article>
      </section>
    </header>
  )
}

export default Header