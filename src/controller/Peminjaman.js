const { peminjaman, member, books, petugas } = require('../../models');

exports.addPeminjaman = async (req, res) => {
  try {
    const { ...data } = req.body;
    const validBook = data.id_book;
    const validMember = data.id_member;

    const isValidMember = await peminjaman.findAll({
      where: {
        id_member: validMember,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    const findData = await peminjaman.findOne({
      where: {
        id_book: validBook,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (isValidMember.length == 2) {
      res.send({
        status: 'failed',
        message: 'Hanya bisa meminjam 2 buku',
      });
    } else if (findData) {
      res.send({
        status: 'failed',
        message: 'buku sudah di pinjam',
      });
    } else {
      await peminjaman.create(data);
      res.send({
        statu: 'success',
        message: 'Add Peminjaman Success',
      });
    }
  } catch (error) {
    res.send({
      status: 'failed',
      message: 'server error',
    });
  }
};

exports.getAllPeminjaman = async (req, res) => {
  try {
    let data = await peminjaman.findAll({
      include: {
        model: books,
        as: 'books',
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt'],
        },
      },
      include: {
        model: member,
        as: 'members',
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt'],
        },
      },
      include: {
        model: petugas,
        as: 'petugas',
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt'],
        },
      },

      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.send({
      status: 'success',
      data,
    });
  } catch (error) {
    res.send({
      status: 'failed',
      message: 'server error',
    });
  }
};
