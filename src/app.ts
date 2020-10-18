import express from "express";
import db from "./db";
import ipMiddleware from "./ipMiddleware";

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3001;
app.get(
  "/",
  ipMiddleware,
  async (req: express.Request, res: express.Response) => {
    try {
      const inserts = await db.query(
        "INSERT into address(address) VALUES($1)",
        [res.locals.clientIp]
      );
    } catch (err) {
      console.log(err.message);
    }

    const results = await db.query("SELECT * FROM address");
    res.json({ yourIp: res.locals.clientIp, oldIpAddress: results.rows });
  }
);
app.listen(port, () => {
  console.log(`Started on ${port} & Mode : ${process.env.NODE_ENV}`);
});
