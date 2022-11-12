const { member, peminjaman } = require('../../models');

exports.addMember = async (req, res) => {
  try {
    await member.create(req.body);
    res.send({
      status: 'success',
      message: 'Add Member finished',
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

exports.getMembers = async (req, res) => {
  try {
    const members = await member.findAll({
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
    res.send({
      status: 'success',
      data: {
        members,
      },
    });
  } catch (error) {
    res.send({
      status: 'failed',
      message: 'server error',
    });
  }
};
