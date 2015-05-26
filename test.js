'use strict'
var assert = require('assert');
var double_quotes = require('./');

it('should convert matching single-quotes to double-quotes', function()
{
  assert.equal(double_quotes(''), '');
	assert.equal(double_quotes('foo'), 'foo');
	assert.equal(double_quotes('\'\''), '""');
	assert.equal(double_quotes('""'), '""');
	assert.equal(double_quotes('\'foo\''), '"foo"');
	assert.equal(double_quotes('"foo"'), '"foo"');
	assert.equal(double_quotes('bar "foo" baz'), 'bar "foo" baz');
	assert.equal(double_quotes('\'bar\' "foo" \'baz\''), '"bar" "foo" "baz"');
	assert.equal(double_quotes('\\\'foo\\\''), '"foo"');
	assert.equal(double_quotes('{\'a\':\'<a href=\\\'addr\\\'>\'}'), JSON.stringify({'a': '<a href=\'addr\'>'}));
	assert.equal(double_quotes('{\'a\':\'aa\\n<a href=\\\'addr\\\'>\'}'), JSON.stringify({'a': 'aa\n<a href=\'addr\'>'}));
	assert.equal(double_quotes(JSON.stringify({'a': 'b""c' })), '{"a":"b\\\"\\\"c"}');
});
