import { Request, Response } from 'express';
import Gallery, { gallery } from '../model/gallery'


const createGallery = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body

    const create: gallery = await new Gallery({ ...data })
    await create.save()

    res.status(201).send({
      ok: true,
      gallery: create,
      mensaje: "galeria creado con éxito",
      message: "gallery created successfully"
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

const getGalleryBySpecialits = async (req: Request, res: Response) => {
  try {
    const {skip, limit, specialist_id } = req.params
    console.log(skip, limit)
    const getGallery = await Gallery.find({ specialists: specialist_id }).skip(Number(skip)).limit(Number(limit))
    const limite = await Gallery.find({ specialists: specialist_id }).limit(Number(skip))

    res.status(200).send({
      ok: true,
      gallery: getGallery,
      limit:limite,
      mensaje: "Todos la imagenes",
      message: "All imges"
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

const getGalleryByServices = async (req: Request, res: Response) => {
    try {
      const { skip, limit, services_id } = req.params
      const getGallery = await Gallery.find({ services: services_id }).skip(Number(skip)).limit(Number(limit))
      const limite = await Gallery.find({ services: services_id }).limit(Number(skip))
  
      res.status(200).send({
        ok: true,
        gallery: getGallery,
        limit:limite,
        mensaje: "Todos la imagenes",
        message: "All imges"
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

export { createGallery, getGalleryBySpecialits, getGalleryByServices }