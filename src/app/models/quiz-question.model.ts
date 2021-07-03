export class QuizQuestionModel {
  public active: string;
  public content: string;
  public createdAt: string;
  public id: string;
  public level: string;
  public quizId: string;
  public score: string;
  public type: string;
  public updatedAt: string;

  constructor(
    active: string,
    content: string,
    createdAt: string,
    id: string,
    level: string,
    quizId: string,
    score: string,
    type: string,
    updatedAt: string
  ) {
    this.active = active
    this.content = content
    this.createdAt = createdAt
    this.id = id
    this.level = level
    this.quizId = quizId
    this.score = score
    this.type = type
    this.updatedAt = updatedAt
  }
}
