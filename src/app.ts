import InputBook from "./components/Container/inputBook.js";
import BookList from "./components/Container/bookList.js";
import { BookType, BooksType } from "./type.js";
import { createComponent } from "./component.js";
import bookData from "../assets/bookData.json" assert { type: "json" };

class App {
  state: BooksType;
  rendered?: HTMLElement;
  constructor(private rootElement: HTMLElement) {
    this.state = {
      books: bookData,
    };
    this.initialize();
  }
  setState(newState: BooksType) {
    this.state = newState;
    this.updater();
  }
  initialize() {
    const inputBook = createComponent(InputBook, {
      addBook: this.addBook.bind(this),
    });

    const bookList = this.render();
    this.rendered = bookList! as HTMLElement;

    this.rootElement.append(
      inputBook! as HTMLElement,
      bookList! as HTMLElement
    );
  }
  updater(bookList?: BookType[]) {
    const render = this.render(bookList)! as HTMLElement;
    (this.rendered! as HTMLElement).replaceWith(render);
    this.rendered = render;
  }
  render(bookList?: BookType[]) {
    return createComponent(BookList, {
      books: bookList || this.state.books,
      deleteBook: this.deleteBook.bind(this),
      filterCategory: this.filterCategory.bind(this),
      searchBookName: this.searchBookName.bind(this),
    });
  }
  // 도서 추가
  addBook(book: BookType) {
    console.log("addBook");
    this.setState({
      books: [
        ...this.state.books,
        { ...book, id: this.state.books.length + 1 },
      ],
    });
  }
  // 도서 삭제
  deleteBook(bookId: number) {
    const newBooks = this.state.books.filter((book) => book.id !== bookId);
    this.setState({ books: newBooks });
  }
  // 카테고리 정렬
  filterCategory(category: string = "") {
    const filterBooks = category
      ? this.state.books.filter((book) => book.category === category)
      : this.state.books;
    this.updater(filterBooks);
  }
  // 검색기능
  searchBookName(name: string = "") {
    const searchBooks = name
      ? this.state.books.filter((book) => {
          if (book.title.search(name) > -1) return true;
          else return false;
        })
      : this.state.books;
    this.updater(searchBooks);
  }
  // 페이지네이션
}

new App(document.querySelector(".app")! as HTMLElement);
