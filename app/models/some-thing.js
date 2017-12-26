import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  foo: 'bar',

  computedFoo: computed('foo', function() {
    const foo = this.get('foo');

    return `computed ${foo}`;
  })
});