import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        is_seller: string;
      };
    }
  }
}
