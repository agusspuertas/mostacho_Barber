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
          <ul className='text-[#e8d1c1] font-sans font-light  mt-3'>
            <li className='ml-5'>-Chacabuco 232</li>
            <li className='ml-5'>-Godoy Cruz</li>
            <li className='ml-5'>-A una cuadra de la ciclovía</li>
            <a href="https://maps.app.goo.gl/b7ZMAYafwYbdLuae6"><li className='text-blue-400 link hover:text-white mt-4 text-center'>Aquí</li></a>
          </ul>
        </div>

        <div className='flex justify-center items-center  w-[18rem] h-[5rem] ml-7 rounded-xl shadow-lg shadow-gray-400 bg-[#383D42] my-auto transition ease-in-out delay-200 hover:scale-105'>

          <ul className='flex'>
            <a href=""><li className='ml-auto mr-7'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="100" viewBox="0 0 48 48">
              <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
            </svg></li></a>
            <a href=""><li className='mr-7'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 128 128">
              <path fill="#fff" d="M64,123c32.5,0,59-26.5,59-59c0-15.8-6.1-30.6-17.3-41.7C94.6,11.1,79.8,5,64,5C31.5,5,5,31.4,5,64 c0,10.4,2.7,20.5,7.9,29.5l-5.6,20.6c-1.2,4.4,2.8,8.5,7.3,7.3l21.3-5.6C44.4,120.5,54.1,123,64,123L64,123z"></path><path fill="#5bf979" d="M64,111c-7.8,0-15.6-2-22.5-5.7c-1.8-1-3.8-1.5-5.7-1.5c-1,0-2,0.1-3,0.4l-11.2,2.9l2.9-10.5 c0.8-3.1,0.4-6.4-1.2-9.2C19.1,80.3,17,72.2,17,64C17,38,38.1,17,64,17c12.6,0,24.4,4.9,33.3,13.8C106.1,39.6,111,51.4,111,64 C111,89.9,89.9,111,64,111L64,111z"></path><path fill="#444b54" d="M107.9,20.2C96.2,8.5,80.6,2,64,2C29.8,2,2,29.8,2,64c0,10.5,2.6,20.8,7.7,29.9l-5.3,19.4 c-0.9,3.1,0,6.3,2.3,8.6c2.3,2.3,5.5,3.2,8.6,2.4l20.2-5.3c8.8,4.6,18.6,7,28.6,7c34.2,0,62-27.8,62-62 C126,47.5,119.6,31.9,107.9,20.2z M64,120c-9.3,0-18.6-2.4-26.8-6.8c-0.4-0.2-0.9-0.4-1.4-0.4c-0.3,0-0.5,0-0.8,0.1l-21.3,5.6 c-1.5,0.4-2.5-0.4-2.9-0.8c-0.4-0.4-1.2-1.4-0.8-2.9l5.6-20.6c0.2-0.8,0.1-1.6-0.3-2.3C10.5,83.5,8,73.8,8,64C8,33.1,33.1,8,64,8 c15,0,29.1,5.8,39.6,16.4C114.2,35,120.1,49.1,120,64C120,94.9,94.9,120,64,120z"></path><g><path fill="#006475" d="M92.9,85.1c-1.2,3.4-7.2,6.8-10,7c-2.7,0.2-5.2,1.2-17.7-3.7c-15-5.9-24.5-21.3-25.2-22.3c-0.7-1-6-8-6-15.3 c0-7.3,3.8-10.8,5.2-12.3c1.4-1.5,2.9-1.8,3.9-1.8c1,0,2,0,2.8,0c1.1,0,2.2,0.1,3.3,2.5c1.3,2.9,4.2,10.2,4.5,10.9 c0.4,0.7,0.6,1.6,0.1,2.6c-0.5,1-0.7,1.6-1.5,2.5c-0.7,0.9-1.6,1.9-2.2,2.6c-0.7,0.7-1.5,1.5-0.6,3c0.9,1.5,3.8,6.3,8.2,10.2 c5.6,5,10.4,6.6,11.9,7.3c1.5,0.7,2.3,0.6,3.2-0.4c0.9-1,3.7-4.3,4.7-5.8c1-1.5,2-1.2,3.3-0.7c1.4,0.5,8.6,4.1,10.1,4.8 c1.5,0.7,2.5,1.1,2.8,1.7C94.1,78.7,94.1,81.6,92.9,85.1z"></path></g>
            </svg></li></a>
            <a href=""><li className='mr-auto'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 48 48">
              <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
            </svg></li></a>
          </ul>
        </div>

      </article>


      <article className='flex flex-col  m-auto justify-center mt-auto bg-gradient-to-t from-[#E1C9B7] '>
        <p>&copy; 2023 MostachoBarberia - All rights reserved.</p>
        <img className='w-20 m-auto mb-1 mt-1' src="./public/Logo_SoloMostacho.png" alt="Logo_Bigote" />
      </article>


    </section>
  )
}

export default Footer