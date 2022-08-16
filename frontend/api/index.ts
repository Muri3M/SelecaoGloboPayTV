import axios from "axios";
import Brother from "../models/Brother";

const api = axios.create({
  baseURL: "/api",
});

export async function CheckResults(): Promise<Brother[]> {
  let results: Brother[] = [];
  await api
    .get("/results")
    .then((response) => {
      results = response.data;
    })
    .catch((error) => {
      console.log("Ocorreu o erro:", error);
    });
  return results;
}

export async function Vote(name: string): Promise<Brother[]> {
  let results: Brother[] = [];
  await api
    .post(`/vote/${name}`)
    .then(async () => {
      await api
        .get("/results")
        .then((response) => {
          results = response.data;
        })
        .catch((error) => {
          console.log("Ocorreu o erro:", error);
        });
    })
    .catch((error) => {
      console.log("Ocorreu o erro:", error);
    });

  return results;
}
