import express from "express";
import Placement from "../models/Placement.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();




router.post(
    "/placement",
    verifyToken,

    async (req, res) => {

        try {

            const placement = await Placement.create({

                userId: req.userId,

                company: req.body.company,

                role: req.body.role,

                status: req.body.status,

                notes: req.body.notes

            });

            res.json(placement);

        } catch (err) {

            console.log(err);

            res.status(500).json({
                error: "Failed"
            });

        }

    }
);



router.get(
    "/placement",
    verifyToken,

    async (req, res) => {

        try {

            const placements = await Placement.find({

                userId: req.userId

            }).sort({

                createdAt: -1

            });

            res.json(placements);

        } catch (err) {

            console.log(err);

            res.status(500).json({
                error: "Failed"
            });

        }

    }
);



router.delete(
    "/placement/:id",
    verifyToken,

    async (req, res) => {

        try {

            await Placement.findOneAndDelete({

                _id: req.params.id,

                userId: req.userId

            });

            res.json({

                success: true

            });

        } catch (err) {

            console.log(err);

            res.status(500).json({

                error: "Failed"

            });

        }

    }
);




router.put(
    "/placement/:id",
    verifyToken,

    async (req, res) => {

        try {

            const updatedPlacement =
                await Placement.findOneAndUpdate(

                    {

                        _id: req.params.id,

                        userId: req.userId

                    },

                    {

                        role: req.body.role,

                        status: req.body.status,

                        notes: req.body.notes

                    },

                    {

                        returnDocument: "after"

                    }

                );

            res.json(updatedPlacement);

        } catch (err) {

            console.log(err);

            res.status(500).json({

                error: "Failed"

            });

        }

    }

);

export default router;