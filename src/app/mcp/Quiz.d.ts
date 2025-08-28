import { FC } from "react";

declare const Quiz: FC<{
  question: string;
  options: string[];
  answer: number;
}>;

export default Quiz;