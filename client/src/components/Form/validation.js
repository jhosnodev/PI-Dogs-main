const validations = (inputs) => {
  const msg = [];



  const regexNum = /[^0]+$/;
  /*   const regexNum = /^[1-9]\d*$/; */
  const regexName = /^[a-zA-Z\s]{3,}$/;
  /* const regexName = /^[a-zA-Z]+$/; */
  /*   const regexName2 = /\w{3,}/; */
  //*Valida nombre
  if (!regexName.test(inputs.name)) {
    msg.name = "Debe tener al menos 3 letras y no contener numeros";
  }
  //*Valida criado por
  if (!regexName.test(inputs.bred_for)) {
    msg.bred_for = "Debe tener al menos 3 letras y no contener numeros";
  }
  //* altura MIN
  if (!regexNum.test(inputs.height_min)) {
    msg.height_min = "Debe ser un nro mayor a 0";
  }
  //! altura MAX
  if (!regexNum.test(inputs.height_max) && parseInt(inputs.height_max) > parseInt(inputs.height_min)) {
    msg.height_max = "Debe ser un nro mayor al mínimo";
  }
  //* PESO Min
  if (!regexNum.test(inputs.weight_min)) {
    msg.weight_min = "Debe ser un nro mayor a 0";
  }
  //! PESO Max
  if (!regexNum.test(inputs.weight_max) && parseInt(inputs.weight_max) > parseInt(inputs.weight_min)) {
    msg.weight_max = "Debe ser un nro mayor al mínimo";
  }
  //* valida life spam min
  if (!regexNum.test(inputs.life_min)) {
    msg.life_min = "Debe ser un nro mayor a 0";
  }
  //! valida life spam max
  if (!regexNum.test(inputs.life_max) && parseInt(inputs.life_max) > parseInt(inputs.life_min)) {
    msg.life_max = "Debe ser un nro mayor al mínimo";
  }
  return msg;
};

export default validations;
