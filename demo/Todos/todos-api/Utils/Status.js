const Success = data => ({
  status: true,
  data
});

const Fail = (err) => ({
  status: false,
  message: `Error: ${err}`,
});

module.exports = { Success, Fail };
