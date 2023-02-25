export type BookType = {
  id: number;
  title: string;
  category: string;
  author: string;
  publish: string;
};

export type BooksType = {
  books: BookType[];
};
