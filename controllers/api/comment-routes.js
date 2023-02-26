const router=require("express").Router();
const {Comment, Post, User} = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll({});
        if(commentData.length > 0) {
            res.status(404).json({message: "No comments found"});
            return;
        } 
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            where: { id: req.params.id },
        });
        if(commentData.length > 0) {
            res.status(404).json({message: `No comments found with this id = ${req.params.id}`});
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", withAuth, async (req, res) => {
    try {
        const updatedComment = await Comment.update(
            {
                comment_text: req.body.comment_text,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (!updatedComment) {
            res.status(404).json({ message: `No comment found with this id ${req.params.ed} !` });
            return;
        }
        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
        const deletedComment = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!deletedComment) {
            res.status(404).json({ message: `No comment found with this id ${req.params.id} !` });
            return;
        }
        res.status(200).json(deletedComment);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;