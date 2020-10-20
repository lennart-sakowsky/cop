import { createElement } from "../ui-framework";

export default function QuestionList() {
  const questionList = createElement("ul", "", document.body);
  const question1 = createElement("li", "Question 1", questionList);
  const question2 = createElement("li", "Question 2", questionList);
  const question3 = createElement("li", "Question 3", questionList);
}
