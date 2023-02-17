export interface Component {
  attachTo(parent: HTMLElement, position: InsertPosition): void;
}

export class BaseComponent implements Component {
  element: HTMLElement;
  constructor(el: string) {
    this.element = document.createElement("template");
    this.element.innerHTML = el;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = "beforeend") {
    parent.insertAdjacentElement(position, this.element);
  }
}
