import { BaseComponent } from "../../component.js";
import { BookType } from "../../type.js";

type PropsType = {
  addBook: (book: BookType) => void;
};

export default class InputBook extends BaseComponent<PropsType> {
  initialize() {
    const initializeElement = document.createElement("header");
    initializeElement.setAttribute("class", "header");

    const container = document.createElement("div");
    container.setAttribute("class", "container");

    initializeElement.appendChild(container);

    const pageTitle = document.createElement("div");
    pageTitle.setAttribute("class", "page-title");

    const titleHeading = document.createElement("h1");
    titleHeading.innerHTML = "도서 관리<br />프로그램";

    pageTitle.appendChild(titleHeading);

    const addInputTop = document.createElement("div");
    addInputTop.setAttribute("class", "add-input-top");

    const addInputTitle = document.createElement("input");
    addInputTitle.setAttribute("type", "text");
    addInputTitle.setAttribute("class", "add-input add-input-title");
    addInputTitle.setAttribute("id", "bookName");
    addInputTitle.setAttribute("placeholder", "도서 제목");

    const addInputCategory = document.createElement("select");
    addInputCategory.setAttribute("id", "bookCategory");
    addInputCategory.setAttribute("class", "add-input add-input-category");
    addInputCategory.innerHTML = `
    <option value="">카테고리</option>
    <option value="novel">소설</option>
    <option value="essay">시/에세이</option>
    <option value="human">인문</option>
    `;

    addInputTop.append(addInputTitle, addInputCategory);

    const addInputbottom = document.createElement("div");
    addInputbottom.setAttribute("class", "add-input-bottom");

    const addInputAuthor = document.createElement("input");
    addInputAuthor.setAttribute("placeholder", "저자");
    addInputAuthor.setAttribute("id", "bookAuthor");
    addInputAuthor.setAttribute("type", "text");
    addInputAuthor.setAttribute("class", "add-input add-input-author");

    const addInputPublish = document.createElement("input");
    addInputPublish.setAttribute("placeholder", "발행연도");
    addInputPublish.setAttribute("id", "bookPublish");
    addInputPublish.setAttribute("type", "number");
    addInputPublish.setAttribute("class", "add-input add-input-publish");

    addInputbottom.append(addInputAuthor, addInputPublish);

    const addButton = document.createElement("input");
    addButton.setAttribute("class", "add-button");
    addButton.setAttribute("type", "submit");
    addButton.setAttribute("value", "등록");

    addButton.addEventListener("click", () => {
      const title = addInputTitle.value;
      const category = addInputCategory.value;
      const author = addInputAuthor.value;
      const publish = addInputPublish.value;
      const book = {
        title,
        category,
        author,
        publish,
      };
      this.props.addBook(book);
    });

    container.append(pageTitle, addInputTop, addInputbottom, addButton);
    return initializeElement;
  }
}
