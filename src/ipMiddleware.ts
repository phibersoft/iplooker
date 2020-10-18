import requestIp from "request-ip";
import express from "express";

export default function ipMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const clientIp = requestIp.getClientIp(req);
  res.locals = { clientIp };
  next();
}
