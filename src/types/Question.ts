import { Answer } from "./Answer";

export type Question = {
  id: number,
  detail: string,
  correctAnswer: string,
  answers: Answer[],
  answered: boolean,
}