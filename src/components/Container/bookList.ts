import { BookType, BooksType } from "../../type.js";
import BookItemContainer from "../BookList/bookItemContainer.js";
import CategoryContainer from "../BookList/categoryContainer.js";
import PaginationContainer from "../BookList/paginationContainer.js";
import SearchContainer from "../BookList/searchContainer.js";
import { BaseComponent, createComponent } from "../../component.js";

type PropsType = {
  books: BookType[];
  deleteBook: (bookId: number) => void;
  filterCategory: (category: string) => void;
  searchBookName: (name: string) => void;
};

type StateType = { pageNum: number };

export default class BookList extends BaseComponent<PropsType> {
  state: StateType;
  renderedBookList?: HTMLElement;
  renderedPagination?: HTMLElement;
  constructor(props: PropsType) {
    super(props);
    this.state = {
      pageNum: 1,
    };
  }
  initialize(): HTMLElement {
    const initializeElement: HTMLElement = document.createElement("main");
    initializeElement.setAttribute("class", "main");

    const navigation = document.createElement("nav");
    navigation.setAttribute("class", "nav");

    const sectionCategory = createComponent(CategoryContainer, {
      filterCategory: this.props.filterCategory,
    });

    const sectionSearch = createComponent(SearchContainer, {
      searchBookName: this.props.searchBookName,
    });

    navigation.append(
      sectionCategory! as HTMLElement,
      sectionSearch! as HTMLElement
    );

    const horizon = document.createElement("hr");

    const bookList = this.renderBookList();
    this.renderedBookList = bookList;
    const pagination = this.renderPagination();
    this.renderedPagination = pagination;

    initializeElement.append(
      navigation,
      horizon,
      bookList,
      horizon,
      pagination
    );

    return initializeElement! as HTMLElement;
  }
  changePage(position: number) {
    this.setState({ pageNum: position });
  }
  setState(newState: StateType) {
    this.state = newState;
    this.updater();
  }
  updater() {
    const pagination = this.renderPagination();
    this.renderedPagination.replaceWith(pagination);
    this.renderedPagination = pagination;

    const bookList = this.renderBookList();
    this.renderedBookList.replaceWith(bookList);
    this.renderedBookList = bookList;
  }
  renderPagination() {
    const totalPageNum = Math.ceil(this.props.books.length / 5);
    const pagination = createComponent(PaginationContainer, {
      pageNum: this.state.pageNum,
      totalPageNum,
      changePage: this.changePage.bind(this),
    });
    return pagination;
  }
  renderBookList() {
    const bookList = document.createElement("ul");

    const targetBooks = this.props.books.slice(
      (this.state.pageNum - 1) * 5,
      this.state.pageNum * 5
    );
    targetBooks.forEach((book) => {
      const bookItemConainer = new BookItemContainer({
        book,
        deleteBook: this.props.deleteBook,
      }).initialize();
      bookList.append(bookItemConainer);
    });
    return bookList;
  }
}
