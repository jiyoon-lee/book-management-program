import { BooksType } from "../../type.js";
import BookItemContainer from "../BookList/BookItemContainer.js";

export default class BookList {
  constructor(private props: BooksType) {}
  initialize() {
    const initializeElement = document.createElement("main");
    initializeElement.setAttribute("class", "main");
    initializeElement.innerHTML = `
      <nav class="nav">
        <section>
          <button class="btn-category">전체</button>
          <button class="btn-category">소설</button>
          <button class="btn-category">시/에세이</button>
          <button class="btn-category">인문</button>
        </section>
        <section>
          <select name="" id="" class="select-book-status">
            <option value="">전체</option>
            <option value="">비대여</option>
          </select>
          <input
            type="text"
            placeholder="도서 제목"
            class="search-book-name"
          />
        </section>
      </nav>
      <hr />
      <ul>
      ${
        this.props.books &&
        this.props.books.map((book) => new BookItemContainer(book))
      }
      </ul>
      <hr />
      <div class="content"></div>
      <footer class="footer">
        <button class="btn-navigation">1</button>
        <button class="btn-navigation">1</button>
        <button class="btn-navigation">1</button>
      </footer>
    `;
    return initializeElement;
  }
}
