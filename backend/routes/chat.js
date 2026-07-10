import express from "express";
import Thread from "../models/Thread.js";
import getGeminiResponse from "../utils/gemini.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

//test
router.post("/test", async(req, res) => {
    try {
        const thread = new Thread({
            threadId: "xyz",
            title: "Testing New Thread2"
        });

        const response = await thread.save();
        res.send(response);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Failed to save in DB"});
    }
});

//Get all threads
router.get("/thread",verifyToken, async(req, res) => {
    try {
        const threads = await Thread.find({
    userId: req.userId
}).sort({updatedAt: -1});
        
        res.json(threads);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Failed to fetch threads"});
    }
});

router.get("/thread/:threadId",verifyToken, async(req, res) => {
     const { threadId } = req.params;

    try {

        const thread = await Thread.findOne({
            threadId,
            userId: req.userId
        });

        if(!thread) {
            return res.status(404).json({
                error: "Thread not found"
            });
        }

        res.json(thread.messages);

    } catch(err) {
        console.log(err);
        res.status(500).json({
            error: "Failed to fetch chat"
        });
    }
});
router.delete("/thread/:threadId", verifyToken,async (req, res) => {
    const {threadId} = req.params;

    try {
        const deletedThread = await Thread.findOneAndDelete({
    threadId,
    userId: req.userId
});
        if(!deletedThread) {
            res.status(404).json({error: "Thread not found"});
        }

        res.status(200).json({success : "Thread deleted successfully"});

    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Failed to delete thread"});
    }
});

router.post("/chat",verifyToken, async(req, res) => {
    const {threadId, message} = req.body;

    if(!threadId || !message) {
    return res.status(400).json({
        error: "missing required fields"
    });
}
    try {
        let thread = await Thread.findOne({
    threadId,
    userId: req.userId
});

        if(!thread) {
            //create a new thread in Db
            thread = new Thread({

    userId: req.userId,

    threadId,

    title: message,

    messages: [
        {
            role: "user",
            content: message
        }
    ]
});
        } else {
            thread.messages.push({role: "user", content: message});
        }

        const assistantReply = await getGeminiResponse(message);

thread.messages.push({
    role: "assistant",
    content: assistantReply || "No response generated"
});        thread.updatedAt = new Date();

        await thread.save();
        res.json({reply: assistantReply});
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "something went wrong"});
    }
});




export default router;