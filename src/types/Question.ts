import { Answer } from "./Answer";

export type Question = {
  Id: number,
  Detail: string,
  CorrectAnswer: string,
  Answers: Answer[],
  Answered: boolean,
}