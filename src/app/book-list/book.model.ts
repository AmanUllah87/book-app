export interface Book {
  id: number;
  name: string;
  author: string;
  publishedYear: string;
  rating: number;
  publisher: Partial<Publisher>;
  category: string;
  description: string;
}

export interface Publisher {
  publisherName: string;
  publisherType: string;
}
