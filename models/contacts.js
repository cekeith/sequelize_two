'use strict';
module.exports = function(sequelize, DataTypes) {
  var contacts = sequelize.define('contacts', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    number: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        contacts.hasMany(models.stitches,{
          foreignKey: 'stitch_id',
          as: 'stitches'
        })
      }
    }
  });
  return contacts;
};
