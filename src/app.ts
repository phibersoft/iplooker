import express from "express";

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3001;
app.get("/", (req: express.Request, res: express.Response) =>
  res.json({ hello: "World!" })
);
app.listen(port, () => {
  console.log(`Started on ${port} & Mode : ${process.env.NODE_ENV}`);
});
