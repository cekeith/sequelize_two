'use strict';
module.exports = function(sequelize, DataTypes) {
  var contacts = sequelize.define('contacts', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    number: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        contacts.hasMany(models.bitches,{
          foreignKey: 'bitch_id',
          as: 'bitches'
        })
      }
    }
  });
  return contacts;
};
