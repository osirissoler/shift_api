import { Request, Response } from "express";
import Favorite, { favorite } from "../model/favorite";

const createFovorite = async (req: Request, res: Response) => {
  try {
    const { business, user, isFavorite } = req.body;
    let findFavorite;

    findFavorite = await Favorite.findOne({ business, user });
    if (!findFavorite) {
      const create: favorite = await new Favorite({ business, user });
      await create.save();
      return res.status(201).json({
        ok: true,
        mensaje: "crearlo con exito",
        message: "business created successfully",
      });
    } else {
      await Favorite.findByIdAndUpdate(
        findFavorite._id,
        { isFavorite: !isFavorite },
        { new: true }
      );
      return res.status(200).json({
        ok: true,
        mensaje: "favorito update",
        message: "business created successfully",
      });
    }

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


const getFovorite = async (req, res: Response) => {
  try {

    const { isFavorite} = req.params
    const favorite = await Favorite.find({isFavorite, user:req.user._id}).populate({ path: 'business', populate:{path: 'typeBusiness'}})
    
    res.status(200).send({
      ok: true,
      favorite,
      mensaje: "todo los negocios",
      message: "Type of business created successfully"
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

const getMyFavoriteBusiness = async (req: Request, res: Response) => {
  try {
    const { business, user} = req.params
    const favorite = await Favorite.findOne({business, user})
    if(!favorite){
      return res.status(200).send({ ok: false, isFavorite:false})
    }

    res.status(200).send({
      ok: true,
      favorite,
      mensaje: "todo los negocios",
      message: "Type of business created successfully"
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

export { createFovorite, getFovorite, getMyFavoriteBusiness };
