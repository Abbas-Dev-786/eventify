require("dotenv").config({});

const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(process.env.DATABASE_URL, { autoIndex: true })
  .then(() => console.log("DB Connected Successfully ✅"))
  .catch((err) => console.log(`DB Error : ${err.message} ❌`));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening to request on port ${port}`);
});
