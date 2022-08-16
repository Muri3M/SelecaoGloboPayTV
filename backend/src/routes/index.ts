import { Router } from "express";
import { Request, Response } from "express";
import myDataSource from "./../database";
import Brother from "../models/Brother";

const routes = Router();

routes.post("/brother", async function (req: Request, res: Response) {
  const brotherExists = await myDataSource.getRepository(Brother).findOneBy({
    name: req.body.name,
  });
  if (brotherExists === null) {
    const brother = myDataSource.getRepository(Brother).create(req.body);
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
  return res.send("Not existing brother");
});

routes.post("/vote/:name", async function (req: Request, res: Response) {
  const now = new Date();
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
    return (
      res.header("Access-Control-Allow-Origin", "http://localhost:3000"),
      res.send(results)
    );
  } else {
    return (
      res.header("Access-Control-Allow-Origin", "http://localhost:3000"),
      res.send("Not existing brother to vote")
    );
  }
});

routes.get("/results", async function (req: Request, res: Response) {
  const brothers = await myDataSource.getRepository(Brother).find();
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json(brothers.sort((a, b) => a.name.localeCompare(b.name)));
});

export default routes;
