const validations = (inputs) => {
  const msg = [];

  /*   const regexNum = /^[1-9]\d*$/; */
  const regexName = /^[a-zA-Z\s]{3,}$/;
  /* const regexName = /^[a-zA-Z]+$/; */
  /*   const regexName2 = /\w{3,}/; */ console.log(inputs);
/*   console.log(inputs); */
  /*
    Number(inputs.life_max) <= 1 &&
      Number(inputs.life_min) >= Number(inputs.life_max)
  ); */
  //*Valida nombre
  if (!regexName.test(inputs.name)) {
    msg.name = "Debe tener al menos 3 letras y no contener numeros";
  }
  //*Valida criado por
  if (!regexName.test(inputs.bred_for)) {
    msg.bred_for = "Debe tener al menos 3 letras y no contener numeros";
  }
  //* altura MIN
  if (Number(inputs.height_min) <= 1) {
    msg.height_min = "Debe ser un nro mayor a 0";
  }
  //! altura MAX

  if (Number(inputs.height_max) <= Number(inputs.height_min)) {
    msg.height_max = "Debe ser un nro mayor a la altura menor";
  }
  //* PESO Min
  if (Number(inputs.weight_min) <= 1) {
    msg.weight_min = "Debe ser un nro mayor a 0";
  }
  //! PESO Max

  if (Number(inputs.weight_max) <= Number(inputs.weight_min)) {
    msg.weight_max = "Debe ser un nro mayor al peso menor";
  }
  //* valida life spam min
  if (Number(inputs.life_min) <= 1) {
    msg.life_min = "Debe ser un nro mayor a 0";
  }
  //! valida life spam max
  if (Number(inputs.life_min) >= Number(inputs.life_max)) {
    msg.life_max = "Debe ser un nro mayor al promedio de vida menor";
  }
  return msg;
};

export default validations;
