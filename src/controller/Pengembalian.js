const { peminjaman, pengembalian } = require('../../models');

exports.addPengembalian = async (req, res) => {
  try {
    const { ...data } = req.body;
    const id_pinjam = data.id_pinjam;
    let newData = await pengembalian.findOne({
      include: {
        model: peminjaman,
        as: 'peminjamans',
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt'],
        },
      },
      where: {
        id_pinjam,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    newData = newData.map((item) => {
      return item;
    });
    if (newData) {
      await pengembalian.create(data);
      res.send({
        statu: 'success',
        message: 'Add Pengembalian Success',
      });
    }
  } catch (error) {
    res.send({
      status: 'failed',
      message: 'server error',
    });
  }
};
