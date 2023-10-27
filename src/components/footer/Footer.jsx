import React from 'react'

function Footer() {
  return (
    <section id='footer' className=' bg-gradient-to-t from-[#E1C9B7] to-[#F3E9E2] h-72 flex flex-col min-w-full' >

      <article className='h-full flex items-center justify-around'>

        <div className=' border border-gray-600'>
          <h1 className='text-2xl bg-[#383D42] text-[#F5F5F5] text-center font-serif'>Mostacho Barberia</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.2928159974267!2d-68.85213642514675!3d-32.916861070383405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e097c5b4da353%3A0xc286f99f89eddd3f!2sMostacho%20Barberia!5e0!3m2!1ses!2sar!4v1698115979310!5m2!1ses!2sar" width="300" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='w-[20rem] h-[11rem] ml-7 rounded-xl shadow-lg shadow-gray-400 bg-[#383D42] my-auto'>
          <h1 className='text-2xl bg-[#383D42] text-[#F5F5F5] text-center rounded-t-xl font-serif'>Ubicación</h1>
          <ul className='text-[#F3E9E2] mt-3'>
            <li className='ml-5'>-Chacabuco 232</li>
            <li className='ml-5'>-Godoy Cruz</li>
            <li className='ml-5'>-A una cuadra de la ciclovía</li>
            <a href="https://maps.app.goo.gl/b7ZMAYafwYbdLuae6"><li className='text-blue-400 hover:text-white mt-4 text-center'>Aquí📍</li></a>
          </ul>
        </div>

        <div className='w-[20rem] h-[11rem] ml-7 rounded-xl shadow-lg shadow-gray-400 bg-[#383D42] my-auto'>
          <h1 className='text-2xl bg-[#383D42] text-[#F5F5F5] text-center rounded-t-xl font-serif'>Contacto</h1>
        </div>

      </article>


      <article className='flex flex-col  m-auto justify-center mt-auto bg-gradient-to-t from-[#E1C9B7] '>
     
        <img className='w-20 m-auto mb-1 mt-1' src="./public/Logo_SoloMostacho.png" alt="Logo_Bigote" />
      </article>


    </section>
  )
}

export default Footer