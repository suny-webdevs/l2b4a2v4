import { NextFunction, Request, Response } from "express"

const handleError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong",
    success: false,
    error: err,
    stack: err.stack || undefined,
  })
}
