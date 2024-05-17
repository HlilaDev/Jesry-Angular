export interface Video {
    _id?: string;
    title: string;
    description?: string;
    course: string;
    section: string[];
    author: string;
    likes?: number;
    tags?: string[];
    url: string;
    date?: Date;
  }
  
