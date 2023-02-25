import { BaseComponent } from "../../component.js";

type PropsType = {
  pageNum: number;
  totalPageNum: number;
  changePage: (position: number) => void;
};

export default class PaginationContainer extends BaseComponent<PropsType> {
  initialize(): HTMLElement {
    const pagination = document.createElement("div");
    pagination.setAttribute("class", "footer");
    for (let i = 0; i < this.props.totalPageNum; i++) {
      const btnPagination = document.createElement("button");
      btnPagination.setAttribute("class", "btn-navigation");
      if (this.props.pageNum === i + 1) {
        btnPagination.setAttribute("class", "btn__active");
      }
      btnPagination.innerText = String(i + 1);
      btnPagination.addEventListener("click", () =>
        this.props.changePage(i + 1)
      );
      pagination.append(btnPagination);
    }

    return pagination;
  }
}
