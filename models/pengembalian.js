'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pengembalian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pengembalian.belongsTo(models.peminjaman, {
        as: 'peminjamans',
        foreignKey: {
          name: 'id',
        },
      });
      pengembalian.belongsTo(models.member, {
        as: 'members',
        foreignKey: {
          name: 'id',
        },
      });
    }
  }
  pengembalian.init(
    {
      id_pinjam: DataTypes.INTEGER,
      denda: DataTypes.INTEGER,
      tgl_pengembalian: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'pengembalian',
    }
  );
  return pengembalian;
};
