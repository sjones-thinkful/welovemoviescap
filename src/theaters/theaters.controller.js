const theatersService = require("./theaters.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")


// Middleware



// Methods
async function list(req, res, next) {
  const data = await theatersService.list()
  res.json({ data })
}
          


module.exports = {
  list: asyncErrorBoundary(list),
}