const { DataTypes } = require('sequelize');
const Temperament = require('./Temperament');
const Dog = require('./Dog');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperamentDog', {
    dogId: {
        type: DataTypes.UUID,
        references: {
          model: Dog, // 'Dogs' would also work
          key: 'id'
        }
      },
      temperamentId: {
        type: DataTypes.INTEGER,
        references: {
          model: Temperament, // 'Temperaments' would also work
          key: 'id'
        }
      }
    });
};