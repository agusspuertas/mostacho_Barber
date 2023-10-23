import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Formulario = () => {

  const selectRef = useRef();

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

      <button className='bg-gray-300 w-content p-1 px-3 font-bold mx-auto rounded-2xl' onClick={handleOpen}>Pedí tu Turno</button>

      {open && (
        <div className='m-auto h-[61vh] w-[32vw] my-5 bg-gray-200 flex flex-col rounded-2xl'>

          {/* PRIMER FORMULARIO */}

          {step === 1 && (
            <div>
              <h1 className='text-center font-bold text-2xl'> Servicio y Peluquero </h1>
              <form className='flex flex-col'>

                {/* PELUQUERO */}

                <div className='flex flex-col'>
                  <label className='mt-10 ml-5 mb-2' For="BarberSelect">Peluquero:</label>

                  <select ref={selectRef} className='w-3/6 mx-8' name="barbers" id="Select1">

                    <option value="" hidden >Seleccione un peluquero</option>
                    <option value="1">Eric Mota</option>
                    <option value="2">Miguel Fanta</option>
                    <option value="3">Emi Lucon</option>

                  </select>
                </div>

                {/* SERVICIO */}

                <div className='flex flex-col'>
                  <label className='mt-20 ml-5 mb-2' For="ServisSelect">Servicio:</label>

                  <select ref={selectRef} className='w-3/6 mx-8' name="servis" id="Select2">

                    <option value="" hidden >Seleccione el Servicio </option>
                    <option value="1">Corte de Pelo</option>
                    <option value="2">Corte de Pelo y Barba</option>
                    <option value="3">Color</option>

                  </select>
                </div>
              </form>
            </div>
          )}

          {/* SEGUNDO FORMULARIO */}

          {step === 2 && (
            <div className='flex flex-col'>
              <h1 className='text-center font-bold text-2xl'> Fecha y Hora </h1>
              <section className='flex flex-col'>
                <label className=' ml-5 mt-10 ' For="ServisSelect">Seleccione el Día:</label>
                <div className='ml-16 mt-2'>
                  <DatePicker
                    showIcon
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="p-2 border w-[9vw]  border-gray-400 rounded focus:outline-none focus:border-blue-500"
                  />

                </div>
                <label className=' ml-5 mt-10 ' For="ServisSelect">Seleccione la Hora:</label>

                <select ref={selectRef} className='w-[9vw] ml-16 mt-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500' name="servis" id="Select2">

                  <option value="" hidden>Elíge la Hora</option>
                  <option value="manzana">13:00</option>
                  <option value="plátano">13:45</option>
                  <option value="naranja">14:30</option>
                  <option value="uva">15:15</option>
                  <option value="fresa">16:00</option>

                </select>

              </section>
            </div>
          )}

          {/* TERCER FORMULARIO */}

          {step === 3 && (
            <div style={{ backgroundColor: 'yellow', width: '50px', height: '50px', color: 'white', textAlign: 'center' }}>
              3
            </div>
          )}

          {/* BOTON DE SIGUIENTE Y CANCELAR */}

          <div className='flex justify-center mt-auto mb-2'>
            <button className='bg-red-400 w-2/5 justify-center rounded-2xl mx-3' onClick={handleCancel} >Cancelar</button>

            <button className='bg-blue-400 w-2/5 justify-center rounded-2xl mx-3' onClick={handleNext} >Sigueinte</button>
          </div>
        </div>
      )}
    </div>

  );

};

export default Formulario;
