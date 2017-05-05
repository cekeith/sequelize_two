'use strict';
module.exports = function(sequelize, DataTypes) {
  var bitches = sequelize.define('bitches', {
    bitch_id: DataTypes.INTEGER,
    bitchfriend: DataTypes.STRING
  }, {
    classMethods: {
        associate: function(models) {
          bitches.belongsTo(models.contacts,{
            foreignKey: 'bitch_id',
            onDelete: 'CASCADE'
          })
      }
    }
  });
  return bitches;
};
