import "dotenv/config.js";
import app from "./app.js";

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening to request on port ${port}`);
});
