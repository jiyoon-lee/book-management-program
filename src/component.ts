export interface Component {
  setState: () => void;
  initialize: () => void;
  render: () => void;
  updater: () => void;
}

type ComponentCostructor<T> = {
  new (props: T): Component;
};

export class BaseComponent<T> implements Component {
  protected props: T;
  constructor(props: T) {
    this.props = props;
  }
  setState() {}
  initialize() {}
  render() {}
  updater() {}
}

export function createComponent<T>(
  ComponentConstructor: ComponentCostructor<T>,
  props: T
) {
  const component = new ComponentConstructor(props);
  return component.initialize();
}
