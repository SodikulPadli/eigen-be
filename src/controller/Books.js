const { books, peminjaman } = require('../../models');

exports.addBook = async (req, res) => {
  try {
    await books.create(req.body);
    res.send({
      status: 'success',
      message: 'Add Book finished',
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

exports.getBooks = async (req, res) => {
  try {
    let data = await books.findAll({
      include: {
        model: peminjaman,
        as: 'peminjamans',
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt'],
        },
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    data = data.filter((item) => {
      if (item.peminjamans.length == 0) {
        return item;
      }
    });
    if (data) {
      res.send({
        status: 'success',
        data,
      });
    }
  } catch (error) {
    res.send({
      status: 'failed',
      message: 'server error',
    });
  }
};
