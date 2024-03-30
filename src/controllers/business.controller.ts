import { Request, Response } from "express";
import TypeBusiness, { typeBusiness } from "../model/typeBusiness";
import Business, { business } from "../model/business";
import { encrypt } from "../helper/password-bcrypts";

const createTypeBusiness = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;
    const create: typeBusiness = await new TypeBusiness({ ...data });
    await create.save();

    res.status(201).send({
      ok: true,
      typeBusiness: create,
      mensaje: "tipo de negocio creado con éxito",
      message: "Type of business created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
      mensaje: "¡Ups! Algo salió mal",
      message: "Ups! Something went wrong",
    });
  }
};

const createBusiness = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;

    const encrypts = await encrypt(data.password);
    data.password = encrypts;

    const create: business = await new Business({ ...data });
    await create.save();

    res.status(201).send({
      ok: true,
      business: create,
      mensaje: "negocio creado con éxito",
      message: "business created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
      mensaje: "¡Ups! Algo salió mal",
      message: "Ups! Something went wrong",
    });
  }
};

const getTypeBusiness = async (req: Request, res: Response) => {
  try {
  
    const getTypeBusiness = await TypeBusiness.find();

    res.status(200).send({
      ok: true,
      Business: getTypeBusiness,
      mensaje: "tipo de negocio creado con éxito",
      message: "Type of business created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
      mensaje: "¡Ups! Algo salió mal",
      message: "Ups! Something went wrong",
    });
  }
};

const getBusinessByTypeBusiness = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const getBusiness = await Business.find({ typeBusiness: id });

    res.status(200).send({
      ok: true,
      Business: getBusiness,
      mensaje: "tipo de negocio creado con éxito",
      message: "Type of business created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
      mensaje: "¡Ups! Algo salió mal",
      message: "Ups! Something went wrong",
    });
  }
};
export {
  createTypeBusiness,
  createBusiness,
  getTypeBusiness,
  getBusinessByTypeBusiness,
};
