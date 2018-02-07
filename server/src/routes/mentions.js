import { Router } from "express";
import cors from "cors";
import store from "../db";

const router = Router();


router.get("/:userid", (req, res) => {
  let id = req.params.userid;
    store.GetMentions(id).then(results => {
      res.send(results);
    });
  // console.log(res)
});

export default router;