// exports callback functions
exports.getAllUsers = (req, res) => {
  //console.log(res.JSON());
  try {
    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
