import React, { useState } from 'react';

const Formulario = () => {
    return (
      <form>
        <h2>Agrega tus ghastos aqui</h2>

        <div className="campo">
          <label htmlFor="">Nombre Gasto</label>
          <input 
            type="text"
            className="u-full-width"
            placeholder="Ej. Tranporte"
          />
        </div>

        <div className="campo">
          <label htmlFor="">Cantidad Gasto</label>
          <input 
            type="numbre"
            className="u-full-width"
            placeholder="Ej. 300"
          />
        </div>

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
        />
      </form>
    );
}

export default Formulario;