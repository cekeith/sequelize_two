'use strict';
module.exports = function(sequelize, DataTypes) {
  var stitches = sequelize.define('stitches', {
    stitch_id: DataTypes.INTEGER,
    stitchfriend: DataTypes.STRING
  }, {
    classMethods: {
        associate: function(models) {
          stitches.belongsTo(models.contacts,{
            foreignKey: 'stitch_id',
            onDelete: 'CASCADE'
          })
      }
    }
  });
  return stitches;
};
