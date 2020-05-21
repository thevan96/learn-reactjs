const Success = result => ({
  status: true,
  result
});

const Fail = (err) => ({
  status: false,
  message: err,
});

module.exports = { Success, Fail };
