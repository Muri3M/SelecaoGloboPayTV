import { Router } from "express";
import { Request, Response } from "express";
import fetch from "isomorphic-fetch";
import myDataSource from "./../database";
import Brother from "../models/Brother";

const routes = Router();

routes.post("/brother/:name", async function (req: Request, res: Response) {
  res.header("Access-Control-Allow-Origin", "*");

  const brotherExists = await myDataSource.getRepository(Brother).findOneBy({
    name: req.body.name,
  });
  if (brotherExists === null) {
    const brother = myDataSource
      .getRepository(Brother)
      .create({ name: req.params.name, votes: 0, votesPerHour: [] });
    const results = await myDataSource.getRepository(Brother).save(brother);
    return res.send(results);
  }
  return res.send("Brother already exists on elimination");
});

routes.get("/brother/:name", async function (req: Request, res: Response) {
  const results = await myDataSource.getRepository(Brother).findOneBy({
    name: req.params.name,
  });
  if (results !== null) {
    return res.send(results);
  }
  return res.sendStatus(404);
});

routes.post(
  "/vote/:name/:recaptcha",
  async function (req: Request, res: Response) {
    const now = new Date();
    res.header("Access-Control-Allow-Origin", "*");
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.params.recaptcha}`;

    await fetch(url, {
      method: "post",
    })
      .then((response) => response.json())
      .then((google_response) => {
        if (google_response.success != true) {
          return res.status(400);
        }
      })
      .catch((error) => {
        return res.json({ error });
      });
    const brother = await myDataSource.getRepository(Brother).findOneBy({
      name: req.params.name,
    });
    if (brother !== null) {
      brother.votes++;
      let votesIndex = -1;
      if (brother.votesPerHour.length > 0) {
        votesIndex = brother.votesPerHour.findIndex(
          (votesPerHour) =>
            votesPerHour.day === `${now.getDate()}/${now.getMonth() + 1}` &&
            votesPerHour.hour === now.getHours(),
        );
      }

      if (votesIndex !== -1) {
        brother.votesPerHour[votesIndex].votes++;
      } else {
        brother.votesPerHour.push({
          day: `${now.getDate()}/${now.getMonth() + 1}`,
          hour: now.getHours(),
          votes: 1,
        });
      }
      const results = await myDataSource.getRepository(Brother).save(brother);
      return res.send(results);
    } else {
      return res.sendStatus(400);
    }
  },
);

routes.get("/results", async function (req: Request, res: Response) {
  const brothers = await myDataSource.getRepository(Brother).find();
  res.header("Access-Control-Allow-Origin", "*");
  res.json(brothers.sort((a, b) => a.name.localeCompare(b.name)));
});

export default routes;
