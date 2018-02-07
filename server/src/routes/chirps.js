import express from "express";
import cors from "cors";
import store from "../db";

const router = express.Router();


router.get("/:id?", (req, res) => {
  let id = req.params.id;
  if (id) {
    store.GetChirp(id).then(results => {
      res.send(results)
    })
  } else {
    store.GetChirps().then(results => {
      res.send(results);
    });
  }
  // console.log(res)
});

router.post("/", (req, res) => {
  store.CreateChirp(1, `${req.body.text}`, 'school');
  // console.log("req.body = ", req.body.text);
  // console.log("req.body = ", req.body);
  //   console.log('req.body.text = ', req.body.text)
  res.status(200);
  res.redirect("/");
});

router.put("/:id?", (req, res) => {
  let id = req.params.id;
  store.UpdateChirp(id, req.body.text);
  // console.log(id);
  // console.log(req.body.text);
  res.status(200);
  res.redirect("/");
});

router.delete("/:id?", (req, res) => {
  let id = req.params.id;
  store.DeleteChirp(id);
  res.status(200);
  res.redirect("/");
});

export default router;
