import { BaseComponent } from "../../component.js";

type PropsType = {
  searchBookName: (category: string) => void;
};

export default class CategoryContainer extends BaseComponent<PropsType> {
  initialize(): HTMLElement {
    const sectionSearch = document.createElement("form");
    sectionSearch.setAttribute("class", "search-container");

    const inputSearch = document.createElement("input");
    inputSearch.setAttribute("class", "search-book-name");
    inputSearch.setAttribute("type", "text");
    inputSearch.setAttribute("placeholder", "도서 제목");

    const submitSearch = document.createElement("input");
    submitSearch.setAttribute("class", "search-button");
    submitSearch.setAttribute("type", "submit");
    submitSearch.setAttribute("value", "검색");

    submitSearch.addEventListener("click", (e) => {
      e.preventDefault();
      this.props.searchBookName(inputSearch.value);
    });

    sectionSearch.append(inputSearch, submitSearch);

    return sectionSearch;
  }
}
