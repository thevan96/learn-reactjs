const Success = (result) => ({
  status: true,
  result,
});

const Fail = (err) => ({
  status: false,
  message: err,
});

const Error = (err) => ({
  status: "error",
  error: err,
});

module.exports = { Success, Fail, Error };
