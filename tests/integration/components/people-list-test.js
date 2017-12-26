import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('people-list', 'Integration | Component | people list', {
  integration: true
});

// Integration test for People List

// Test One: UI Should change UL Colors
test('should change colors', function(assert) {
  assert.expect(2);

  // set the outer context to red
  this.set('colorValue', 'red');

  this.render(hbs`{{people-list colorName=colorValue}}`);

  assert.equal(this.$('ul').attr('class'), 'red', 'starts as red');

  this.set('colorValue', 'blue');

  assert.equal(this.$('ul').attr('class'), 'blue', 'updates to blue');

});