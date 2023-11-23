import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../midleware/catchAsyncErrors";
import OrderModel from "../models/order.model";

//create new ORDER

export const newOrder = CatchAsyncError(async (data: any, res: Response) => {
    const order = await OrderModel.create(data)
    
    res.status(201).json({
        success: true,
        order,
    })
})

// GET All orders

export const getAllOrderService = async (res:Response) => {
    const orders = await OrderModel.find().sort({createdAt: -1})
  
    res.status(201).json({
      success: true,
      orders
    })
  }

