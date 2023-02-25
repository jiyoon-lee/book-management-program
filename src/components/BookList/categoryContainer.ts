import { BaseComponent } from "../../component.js";

type PropsType = {
  filterCategory: (category: string) => void;
};

export default class CategoryContainer extends BaseComponent<PropsType> {
  initialize(): HTMLElement {
    const sectionCategory = document.createElement("section");

    const categoryTotal = document.createElement("button");
    categoryTotal.setAttribute("class", "btn-category");
    categoryTotal.innerText = "전체";

    categoryTotal.addEventListener("click", () =>
      this.props.filterCategory("")
    );

    const categoryNovel = document.createElement("button");
    categoryNovel.setAttribute("class", "btn-category");
    categoryNovel.innerText = "소설";

    categoryNovel.addEventListener("click", () =>
      this.props.filterCategory("novel")
    );

    const categoryEssay = document.createElement("button");
    categoryEssay.setAttribute("class", "btn-category");
    categoryEssay.innerText = "시/에세이";

    categoryEssay.addEventListener("click", () =>
      this.props.filterCategory("essay")
    );

    const categoryHuman = document.createElement("button");
    categoryHuman.setAttribute("class", "btn-category");
    categoryHuman.innerText = "인문";

    categoryHuman.addEventListener("click", () =>
      this.props.filterCategory("human")
    );

    sectionCategory.append(
      categoryTotal,
      categoryNovel,
      categoryEssay,
      categoryHuman
    );

    return sectionCategory;
  }
}
