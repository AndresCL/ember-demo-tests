import { moduleFor, test } from 'ember-qunit';

moduleFor('model:some-thing', 'Unit | some thing', {
  unit: true
});

// Unit Test for model

// Test One: Our model changes it value?
test('should correctly concat foo', function(assert) {
  const someThing = this.subject();
  someThing.set('foo', 'baz');

  assert.equal(someThing.get('computedFoo'), 'computed baz');
});