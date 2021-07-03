export class QuizAnswerModel {
  public active: string;
  public content: string;
  public correct: string;
  public createdAt: string;
  public id: string;
  public questionId: string;
  public quizId: string;
  public updatedAt: string;

  constructor(
    active: string,
    content: string,
    correct: string,
    createdAt: string,
    id: string,
    questionId: string,
    quizId: string,
    updatedAt: string
  ) {
    this.active = active;
    this.content = content;
    this.correct = correct;
    this.createdAt = createdAt;
    this.id = id;
    this.questionId = questionId;
    this.quizId = quizId;
    this.updatedAt = updatedAt;
  }
}
