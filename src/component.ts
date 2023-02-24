export abstract class BaseComponent {
  props?: {};
  lastRendered?: HTMLElement;
  constructor(props: {}) {
    this.props = props;
  }
  protected abstract render(): void;
  protected updater() {
    const rendered = this.render()! as HTMLElement;
    (this.lastRendered! as HTMLElement).replaceWith(rendered);
    this.lastRendered = rendered;
  }
  initialize() {}
}
