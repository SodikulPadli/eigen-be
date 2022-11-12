const { petugas } = require('../../models');

exports.addPetugas = async (req, res) => {
  try {
    await petugas.create(req.body);
    res.send({
      status: 'success',
      message: 'Add Petugas finished',
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

exports.getPetugas = async (req, res) => {
  try {
    const data = await petugas.findAll({
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
