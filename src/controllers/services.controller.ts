import { Request, Response } from 'express';
import Services, { services } from '../model/services'


const createService = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body

    const create: services = await new Services({ ...data })
    await create.save()

    res.status(201).send({
      ok: true,
      services: create,
      mensaje: "servicio creado con éxito",
      message: "services created successfully"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
      mensaje: "¡Ups! Algo salió mal",
      message: "Ups! Something went wrong",
    });
  }
}

const getServiceBySpecialist = async (req: Request, res: Response) => {
  try {
    const { specialist_id } = req.params
    const getServices = await Services.find({ specialists: specialist_id })

    res.status(201).send({
      ok: true,
      services: getServices,
      mensaje: "Todos los servicios",
      message: "All services"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
      mensaje: "¡Ups! Algo salió mal",
      message: "Ups! Something went wrong",
    });
  }
}

export { createService, getServiceBySpecialist }