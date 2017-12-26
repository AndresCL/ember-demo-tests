import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Home');

// Acceptance Test for Home

// Test One: Does it loads home?
test('visiting /home', function(assert) {
  visit('/home');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});

// Test Two: Does it adds a new person?
test('should add new person', function(assert) {
  visit('/scientists');
  fillIn('#newPerson', 'John Doe');
  click('#sbmt');
  andThen(() => assert.equal(find('ul li:last').text(), 'John Doe'));
});
