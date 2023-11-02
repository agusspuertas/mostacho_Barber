import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Formulario = () => {


  const selectRef = useRef();

  //PAGINA ANTERIOR DEL FORMULARIO

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  // REACT DATEPICKER

  const [startDate, setStartDate] = useState(new Date())

  //ABRIR FORMULARIO DE PEDIR TURNO
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const handleOpen = () => {
    setOpen(true);
    setStep(1);
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  const handleCancel = () => {
    setOpen(false);
    selectRef.current.value = "";
  }

  return (

    <div className='flex flex-col '>

      {/* PEDIR TURNO BOTON */}

      <button className='bg-[#383D42]  text-white w-content p-1 px-3 font-bold mx-auto rounded-2xl delay-100 hover:text-blue-400 hover:scale-105   ' onClick={handleOpen}>Pedí tu Turno</button>

      {open && (
        <form className='min-w-full md:min-w-min md:py-7 md:px-24 m-auto min-h-fit my-5 shadow-lg shadow-gray-600 bg-[#383D42] flex flex-col place-items-center rounded-2xl'>

          {/* PRIMER FORMULARIO */}

          {step === 1 && (
            <div className='flex flex-col h-[23rem]'>
              <h1 className='text-center text-white font-bold text-2xl'> Servicio y Peluquero </h1>
              <div className='flex flex-col'>

                {/* PELUQUERO */}

                <div className='flex flex-col'>
                  <label className='mt-10 mb-2 text-white' For="BarberSelect">Peluquero:</label>

                  <select ref={selectRef} className='mr-auto text-lg max-w-min bg-[#383D42] p-1.5 border border-gray-400 rounded  ring-1 ring-inset ring-gray-300 focus:outline-none focus:border-blue-500' name="barbers" id="Select1">

                    <option value="" hidden >Seleccione un peluquero</option>
                    <option value="1">Eric Mota</option>
                    <option value="2">Miguel Fanta</option>
                    <option value="3">Emi Lucon</option>

                  </select>
                </div>

                {/* SERVICIO */}

                <div className='flex flex-col'>
                  <label className='mt-20 mb-2 text-white' For="ServisSelect">Servicio:</label>

                  <select ref={selectRef} className='mr-auto text-lg max-w-min bg-[#383D42] p-1.5 border border-gray-400 rounded  ring-1 ring-inset ring-gray-300 focus:outline-none focus:border-blue-500'>

                    <option value="" hidden >Seleccione el servicio </option>
                    <option value="1">Corte de Pelo</option>
                    <option value="2">Corte de Pelo y Barba</option>
                    <option value="3">Color</option>

                  </select>
                </div>
              </div>

              <div className='flex justify-center mt-auto mb-3 text-white'>
                <button className='bg-red-400 w-2/5 justify-center rounded-2xl mx-3' onClick={handleCancel} >Cancelar</button>
                <button className='bg-blue-400 w-2/5 justify-center rounded-2xl mx-3' onClick={handleNext} >Siguinte</button>
              </div>

            </div>
          )}

          {/* SEGUNDO FORMULARIO */}

          {step === 2 && (
            <div className='flex flex-col h-[23rem] min-w-full place-items-center'>
              <section className='flex w-full'>
                <button className="btn-xs hover:bg-gray-100 w-8 h-8 absolute bg-gray-200 text-left mt-1 ml-5 btn-circle " onClick={handlePrev}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.071 5L7.70708 11.364C7.31656 11.7545 7.31656 12.3877 7.70708 12.7782L14.071 19.1421" stroke="#000000" strokeLinecap="round"></path> </g></svg>
                </button>
                  <h1 className='m-auto font-bold text-2xl text-white'> Fecha y Hora </h1>
              </section>
              <section className='flex flex-col'>
                <label className='mt-10 text-white' For="ServisSelect">Seleccione el Día:</label>
                <div className='mr-auto mt-2'>
                  <DatePicker
                    showIcon
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="p-1.5 border max-w-min border-gray-400 rounded  ring-1 ring-inset ring-gray-300 focus:outline-none focus:border-blue-500"
                  />

                </div>
                <label className='mt-10 text-white' For="ServisSelect">Seleccione la Hora:</label>

                <select ref={selectRef} className='text-lg max-w-min mr-auto mt-2 border border-gray-400  ring-1 ring-inset ring-gray-300 bg-[#383D42] rounded focus:outline-none focus:border-blue-500 p-1.5' name="servis" id="Select2">

                  <option value="" hidden>Elíge la Hora</option>
                  <option value="hora1">13:00</option>
                  <option value="hora2">13:45</option>
                  <option value="hora3">14:30</option>
                  <option value="hora4">15:15</option>
                  <option value="hora5">16:00</option>

                </select>
              </section>
              <div className='flex justify-center mt-auto mb-3 text-white'>
                <button className='bg-red-400 w-2/5 justify-center rounded-2xl mx-3 px-2' onClick={handleCancel} >Cancelar</button>
                <button className='bg-blue-400 w-2/5 justify-center rounded-2xl mx-3 px-2' onClick={handleNext} >Siguinte</button>
              </div>
            </div>
          )}

          {/* TERCER FORMULARIO */}

          {step === 3 && (

            <div className='flex flex-col h-[23rem] min-w-full place-items-center'>
             <section className='flex w-full'>
                <button className="btn-xs hover:bg-gray-100 w-8 h-8 absolute bg-gray-200 text-left mt-1 ml-5 btn-circle" onClick={handlePrev}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.071 5L7.70708 11.364C7.31656 11.7545 7.31656 12.3877 7.70708 12.7782L14.071 19.1421" stroke="#000000" strokeLinecap="round"></path> </g></svg>
                </button>
                  <h1 className='m-auto font-bold text-2xl text-white'> Tu Información </h1>
              </section>

            <section className='flex flex-col max-w-min'>
              <label className="block text-sm mr-auto mt-5 font-medium text-white"> Nombre: </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Ingrese su nombre"
                  required
                  className="block text-lg max-w-min rounded-md border-0 px-2 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                />
              </div>


              <label className="block text-sm mr-auto mt-5 font-medium text-white"> Apellido: </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="apellido"
                  placeholder="Ingrese su apellido"
                  required
                  className="block text-lg max-w-min rounded-md border-0 px-2 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                />
              </div>

              <label className="block text-sm mr-auto mt-5 font-medium text-white"> Correo electrónico: </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Ingrese su email"
                  required
                  className="text-lg max-w-min block  rounded-md border-0 px-2 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  "
                />
              </div>
            </section>



              <div className='flex justify-center mt-auto mb-3 text-center text-white'>
                <button className='bg-red-400 w-2/5 justify-center rounded-2xl mx-3 px-2' onClick={handleCancel} >Cancelar</button>
                <button className='bg-blue-400 w-2/5 justify-center rounded-2xl mx-3 px-2' type="submit"> Enviar </button>
              </div>

            </div>
          )}
        </form>
      )}
    </div>

  );

};

export default Formulario;
