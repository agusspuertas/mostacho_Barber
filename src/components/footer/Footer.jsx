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
          <h1 className='text-2xl bg-[#383D42] text-[#F5F5F5] text-center rounded-t-xl font-serif'>Ubicación📍</h1>
          <ul className='text-[#F3E9E2] mt-3'>
            <li className='ml-5'>-Chacabuco 232</li>
            <li className='ml-5'>-Godoy Cruz</li>
            <li className='ml-5'>-A una cuadra de la ciclovía</li>
            <a href="https://maps.app.goo.gl/b7ZMAYafwYbdLuae6"><li className='text-blue-400 link hover:text-white mt-4 text-center'>Aquí</li></a>
          </ul>
        </div>

        <div className='w-[20rem] h-[6rem] ml-7 rounded-xl shadow-lg shadow-gray-400 bg-[#383D42] my-auto'>

          <ul className='flex'>
            <a href=""><li><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="100" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg></li></a>
            <a href=""><li></li></a>
            <a href=""><li></li></a>
          </ul>
        </div>

      </article>


      <article className='flex flex-col  m-auto justify-center mt-auto bg-gradient-to-t from-[#E1C9B7] '>
        <p>&copy; 2023 Mostacho.Barberia. Todos los derechos reservados.</p>
        <img className='w-20 m-auto mb-1 mt-1' src="./public/Logo_SoloMostacho.png" alt="Logo_Bigote" />
      </article>


    </section>
  )
}

export default Footer