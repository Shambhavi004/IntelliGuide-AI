import express from "express";
import verifyToken from "../middleware/auth.js";
import getGeminiResponse from "../utils/gemini.js";

const router = express.Router();

router.post(
    "/company-prep",
    verifyToken,

    async(req, res) => {

        try{

            const { company, role } = req.body;

            const prompt = `
You are an expert placement mentor.

Generate a COMPLETE preparation strategy for:

Company: ${company}
Role: ${role}

Include:

1. Important DSA topics
2. Core CS subjects required
3. Development skills needed
4. Best resources
5. Important projects to build
6. Interview rounds
7. Resume expectations
8. Common mistakes students make
9. 30-day preparation roadmap
10. Final preparation tips

Make the response structured and easy to read.
`;

            const response = await getGeminiResponse(prompt);

            res.json({
                response
            });

        }catch(err){

            console.log(err);

            res.status(500).json({
                error: "Failed to generate preparation plan"
            });
        }
    }
);

export default router;