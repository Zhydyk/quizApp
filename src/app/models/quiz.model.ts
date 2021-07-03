export class QuizModel {
  public content: string;
  public createdAt: string;
  public endsAt: string;
  public hostId: string;
  public id: string;
  public metaTitle: string;
  public published: string;
  public publishedAt: string;
  public score: string;
  public slug: string;
  public startsAt: string;
  public title: string;

  constructor(
    content: string,
    createdAt: string,
    endsAt: string,
    hostId: string,
    id: string,
    metaTitle: string,
    published: string,
    publishedAt: string,
    score: string,
    slug: string,
    startsAt: string,
    title: string
  ) {
    this.content = content;
    this.createdAt = createdAt;
    this.endsAt = endsAt;
    this.hostId = hostId;
    this.id = id;
    this.metaTitle = metaTitle;
    this.published = published;
    this.publishedAt = publishedAt;
    this.score = score;
    this.slug = slug;
    this.startsAt = startsAt;
    this.title = title;
  }
}

