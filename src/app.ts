import InputBook from "./components/Container/inputBook.js";
import BookList from "./components/Container/bookList.js";
import { BookType, BooksType } from "./type.js";
class App {
  state: BooksType;
  rendered?: HTMLElement;
  constructor(private rootElement: HTMLElement) {
    this.initialize();
    this.state = {
      books: [],
    };
  }
  setState(newState: BooksType) {
    this.state = newState;
    this.updater();
  }
  addBook(book: BookType) {
    this.setState({ books: [...this.state.books, book] });
  }
  initialize() {
    const inputBook = new InputBook({
      addBook: this.addBook.bind(this),
    });
    const insertBookContainer = inputBook.initialize();

    const bookListContainer = this.renderBookListContainer();
    this.rendered = bookListContainer;
    this.rootElement.innerHTML = "";
    this.rootElement.append(insertBookContainer, bookListContainer);
  }
  updater() {
    const render = this.renderBookListContainer()! as HTMLElement;
    (this.rendered! as HTMLElement).replaceWith(render);
    this.rendered = render;
  }
  renderBookListContainer() {
    const bookList = new BookList(this.state);
    return bookList.initialize();
  }
}

new App(document.querySelector(".app")! as HTMLElement);
