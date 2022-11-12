'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      petugas.hasMany(models.peminjaman, {
        as: 'peminjamans',
        foreignKey: {
          name: 'id_petugas',
        },
      });
      petugas.hasMany(models.pengembalian, {
        as: 'pengembalians',
        foreignKey: {
          name: 'id_petugas',
        },
      });
    }
  }
  petugas.init(
    {
      name: DataTypes.STRING,
      jabatan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'petugas',
    }
  );
  return petugas;
};
