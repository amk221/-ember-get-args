import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FeaturesComponent extends Component {
  @tracked features = [];
  @tracked activeFeature;

  @action
  handleInsertElement() {
    this.activateFeatureAtIndex(0);
  }

  @action
  activateFeatureAtIndex(index) {
    this.activateFeature(this.features[index]);
  }

  @action
  activateFeature(feature) {
    this.activeFeature = feature;
  }

  @action
  registerFeature(feature) {
    const { features } = this;

    features.push(feature);

    this.features = features;
  }
}
