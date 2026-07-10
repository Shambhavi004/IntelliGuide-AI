import express from "express";
import multer from "multer";
import fs from "fs";

import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

import verifyToken from "../middleware/auth.js";
import getGeminiResponse from "../utils/gemini.js";

const router = express.Router();

const upload = multer({
    dest: "uploads/"
});

router.post(
    "/resume-review",
    verifyToken,
    upload.single("resume"),

    async (req, res) => {

        try {

            const dataBuffer = new Uint8Array(
                fs.readFileSync(req.file.path)
            );

            const pdf = await pdfjsLib.getDocument({
                data: dataBuffer
            }).promise;

            let resumeText = "";

            for(let i = 1; i <= pdf.numPages; i++){

                const page = await pdf.getPage(i);

                const textContent = await page.getTextContent();

                const pageText = textContent.items
                    .map(item => item.str)
                    .join(" ");

                resumeText += pageText + "\n";
            }

            const prompt = `
You are a brutally honest resume reviewer.

Analyze this resume and provide:

1. ATS Score out of 100
2. Biggest strengths
3. Biggest weaknesses
4. Missing skills
5. Resume formatting feedback
6. Best role suited for
7. Final brutally honest verdict

Resume:
${resumeText}
`;

            const review = await getGeminiResponse(prompt);

            fs.unlinkSync(req.file.path);

            res.json({ review });

        } catch (err) {

            console.log(err);

            res.status(500).json({
                error: "Resume analysis failed"
            });
        }
    }
);

export default router;