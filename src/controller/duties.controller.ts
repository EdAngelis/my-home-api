import { Request, Response } from "express";
import { response } from "../types/response-body.type";
import {
  findMany,
  createMany,
  create,
  findOne,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
} from "../repository/duties.repo";

import dudiesInitialData from "../models/dutiess.model";
import { DutiesType } from "../types";

const getDuties = async (req: Request, res: Response) => {
  const query = req.query;

  try {
    const data = await findMany(query);
    if (!data) return response(res, 404, { message: "Duties not found", data });

    return response(res, 200, { message: "All Duties", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const getDuty = async (req: Request, res: Response) => {
  try {
    const data = await findOne(req.params.id);

    if (!data) return response(res, 404, { message: "Duty not found", data });

    return response(res, 200, { message: "Duty found", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const createDuty = async (req: Request, res: Response) => {
  try {
    const data = await create(req.body);

    return response(res, 200, { message: "Duty created", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const createDuties = async (req: Request, res: Response) => {
  const duties = dudiesInitialData;
  try {
    const data = await createMany(dudiesInitialData);

    if (!data)
      return response(res, 500, {
        message: "Problem creating the duties",
        data,
      });

    return response(res, 200, { message: "Duties created", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const updateDuty = async (req: Request, res: Response) => {
  try {
    const data = await updateOne(req.params.id, req.body);

    if (!data) return response(res, 404, { message: "Duty not found", data });

    return response(res, 200, { message: "Duty updated", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const updateDuties = async (req: Request, res: Response) => {
  const query = req.query;
  const toUpdate = req.body;

  try {
    const data = await updateMany(query, toUpdate);
    if (!data) return response(res, 404, { message: "Duties not found", data });

    return response(res, 200, { message: "Duties Updated", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const deleteDuty = async (req: Request, res: Response) => {
  const _id = req.params.id;
  try {
    const data = await deleteOne(_id);

    if (!data) return response(res, 404, { message: "Duty not found", data });

    return response(res, 200, { message: "Duty deleted", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const deleteDuties = async (req: Request, res: Response) => {
  const query = req.query;

  try {
    const data = await deleteMany(query);
    if (!data) return response(res, 404, { message: "Duties not found", data });

    return response(res, 200, { message: "Duties Deleted", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

export {
  getDuties,
  createDuties,
  createDuty,
  getDuty,
  updateDuty,
  updateDuties,
  deleteDuty,
  deleteDuties,
};
