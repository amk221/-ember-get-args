import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FeatureComponent extends Component {
  get isActive() {
    return this.args.activeFeature === this;
  }

  @action
  handleInsert() {
    this.args.onInsert(this);
  }

  @action
  handleMouseEnter() {
    this.args.onActivate(this);
  }
}
