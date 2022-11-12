'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peminjaman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      peminjaman.belongsTo(models.books, {
        as: 'books',
        foreignKey: {
          name: 'id',
        },
      });
      peminjaman.belongsTo(models.member, {
        as: 'members',
        foreignKey: {
          name: 'id',
        },
      });
      peminjaman.belongsTo(models.petugas, {
        as: 'petugas',
        foreignKey: {
          name: 'id',
        },
      });
    }
  }
  peminjaman.init(
    {
      id_book: DataTypes.INTEGER,
      id_member: DataTypes.INTEGER,
      id_petugas: DataTypes.INTEGER,
      tgl_pinjam: DataTypes.DATE,
      tgl_kembali: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'peminjaman',
    }
  );
  return peminjaman;
};
