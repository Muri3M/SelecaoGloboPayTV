import axios from "axios";
import Brother from "../models/Brother";

const api = axios.create({
  baseURL: "http://localhost:3333",
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

export async function CreateSampleVoting(): Promise<Brother[]> {
  await api.post("/brother/Claudia").catch((error) => {
    console.log("Ocorreu o erro:", error);
  });
  await api.post("/brother/Marcelo").catch((error) => {
    console.log("Ocorreu o erro:", error);
  });
  return CheckResults();
}

export async function Vote(
  name: string,
  recaptcha: string
): Promise<Brother[] | string> {
  let results: Brother[] = [];
  let error = "";
  await api
    .post(`/vote/${name}/${recaptcha}`)
    .then(async () => {
      await api
        .get("/results")
        .then((response) => {
          results = response.data;
        })
        .catch((e) => {
          e = e.code;
        });
    })
    .catch((e) => {
      error = e.code;
    });

  if (error !== "") {
    return error;
  }

  return results;
}
