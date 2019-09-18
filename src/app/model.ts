export class QuestionsObject {
  category: string;
  // tslint:disable-next-line: variable-name
  correct_answer: string;
  difficulty: string;
  // tslint:disable-next-line: variable-name
  incorrect_answers: string[];
  question: string;
  randomOptions: string[];
  type: string;
}
export class ResponseObject {
  // tslint:disable-next-line: variable-name
  response_code: number;
  results: QuestionsObject [];
}
