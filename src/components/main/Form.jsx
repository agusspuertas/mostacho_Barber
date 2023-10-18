import React, { useState, useEffect } from 'react';

const Formulario = () => {
  //   const [etapa, setEtapa] = useState(1);

  //   const obtenerColorEtapa = () => {
  //     switch (etapa) {
  //       case 1:
  //         return 'lightblue'; // Color para la primera etapa (nombre)
  //       case 2:
  //         return 'lightgreen'; // Color para la segunda etapa (edad)
  //       case 3:
  //         return 'lightcoral'; // Color para la tercera etapa (correo electrónico)
  //       default:
  //         return 'white';
  //     }
  //   };

  //   const obtenerContenidoEtapa = () => {
  //     switch (etapa) {
  //       case 1:
  //         return (
  //           <div>
  //             <p>Ingrese su nombre:</p>
  //             <input type="text" placeholder="Nombre" />
  //             <button onClick={() => setEtapa(etapa + 1)}>Siguiente</button>
  //           </div>
  //         );
  //       case 2:
  //         return (
  //           <div>
  //             <p>Ingrese su edad:</p>
  //             <input type="number" placeholder="Edad" />
  //             <button onClick={() => setEtapa(etapa + 1)}>Siguiente</button>
  //           </div>
  //         );
  //       case 3:
  //         return (
  //           <div>
  //             <p>Ingrese su correo electrónico:</p>
  //             <input type="email" placeholder="Correo electrónico" />
  //             <button onClick={() => setEtapa(9999)}>{etapa === 3 ? 'Finalizar' : 'Siguiente'}</button>
  //           </div>
  //         );
  //       default:
  //         return null;
  //     }
  //   };

  //   return (
  //     <div style={{ backgroundColor: obtenerColorEtapa(), padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
  //       {obtenerContenidoEtapa()}
  //     </div>
  //   );

  const [viewForm, setViewForm] = useState(false);
  const handleShowViewForm = () => {
      setViewForm(!viewForm);
  }

  return (
    <section className='flex flex-col '>
      <div>
      <button className='bg-gray-300 w-full justify-center rounded-2xl' onClick={handleShowViewForm} >Pedí tu Turno</button>
      </div>
      {viewForm && (
        <div className='m-auto h-[61vh] w-[32vw] my-5 bg-gray-200  rounded-2xl'>
            <h1 className='text-center font-bold text-2xl'> Servicio y Peluquero </h1>
            <form className='flex flex-col'>

        {/* PELUQUERO */}

            <div className='flex flex-col'>
              <label className='mt-10 ml-5 mb-2' For="BarberSelect">Peluquero:</label>

              <select className='w-3/6 mx-8' name="barbers" id="BarbersSelect">
              
                <option value=""disabled >Seleccione un peluquero</option>
                <option value="1">Eric Mota</option>
                <option value="2">Miguel Fanta</option>
                <option value="3">Emi Lucon</option>

              </select>
              </div>

              {/* SERVICIO */}

              <div className='flex flex-col'>
              <label className='mt-20 ml-5 mb-2' For="ServisSelect">Servicio:</label>

              <select className='w-3/6 mx-8' name="servis" id="ServiSelect">
              
                <option value=""disabled >Seleccione el Servicio </option>
                <option value="1">Corte de Pelo</option>
                <option value="2">Corte de Pelo y Barba</option>
                <option value="3">Color</option>

              </select>
              </div>
            </form>
        </div>
      )}
    </section>
  );

};

export default Formulario;
