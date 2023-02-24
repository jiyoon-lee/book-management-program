import { BookType } from "../../type.js";

class BookItemContainer {
  constructor(private props: BookType) {}
  initialize() {
    const bookItem = document.createElement("li");
    bookItem.setAttribute("class", "book-item");

    const bookInfo = document.createElement("div");
    bookInfo.setAttribute("class", "book-info");

    const headingTitle = document.createElement("h2");
    headingTitle.innerText = this.props.title;

    const headingAuthor = document.createElement("h3");
    headingAuthor.innerText = this.props.author;

    bookInfo.append(headingTitle, headingAuthor);

    const bookAction = document.createElement("div");
    bookAction.setAttribute("class", "book-action");

    const deleteButton = document.createElement("input");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.setAttribute("type", "submit");
    deleteButton.setAttribute("value", "삭제");

    bookAction.appendChild(deleteButton);

    bookItem.append(bookInfo, bookAction);
    return bookItem;
  }
}

export default BookItemContainer;
