const app = require("./app")
const port = process.env.API_PORT || 5001;

(async () => {
  app.listen(port, () => {
    console.log(`api has started on port ${port}`)
  })
})()

module.exports = app