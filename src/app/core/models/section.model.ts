export interface Section {
  _id?: string;
  title: string;
  level: "bac" | "licence" | "master" | "doctorat";
  createdAt?: Date;
}
