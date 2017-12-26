import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  // Actions
  actions: {
    showPerson(person) {
      alert(person);
    },
    // Adding a new person to the list
    addPerson() {
      this.people.pushObject(this.personName);
    },
    // Updating person's list color
    updateColor(color) {
      this.colorName = color;
    }
  },
  // Computed class color
  style: computed('colorName', function() {
    const colorName = this.get('colorName');
    return `color: ${colorName}`;
  })
});
