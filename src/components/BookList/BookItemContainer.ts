import { BookType } from "../../type.js";
import { BaseComponent } from "../../component.js";

type ProsType = {
  book: BookType;
  deleteBook: (bookId: number) => void;
};

class BookItemContainer extends BaseComponent<ProsType> {
  initialize() {
    const bookItem = document.createElement("li");
    bookItem.setAttribute("class", "book-item");

    const bookInfo = document.createElement("div");
    bookInfo.setAttribute("class", "book-info");

    const headingTitle = document.createElement("h2");
    headingTitle.innerText = this.props.book.title;

    const headingAuthor = document.createElement("h3");
    headingAuthor.innerText =
      this.props.book.author + " | " + this.props.book.publish;

    bookInfo.append(headingTitle, headingAuthor);

    const bookAction = document.createElement("div");
    bookAction.setAttribute("class", "book-action");

    const deleteButton = document.createElement("input");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.setAttribute("type", "submit");
    deleteButton.setAttribute("value", "삭제");

    deleteButton.addEventListener("click", () =>
      this.props.deleteBook(this.props.book.id)
    );

    bookAction.appendChild(deleteButton);

    bookItem.append(bookInfo, bookAction);
    return bookItem;
  }
}

export default BookItemContainer;
