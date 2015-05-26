#!/usr/bin/env node
'use strict'
var getStdin = require('get-stdin');
var meow = require('meow');
var double_quotes = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ Double_Quotes <string>',
		'  $ echo <string> | Double_Quotes',
		'',
		'Example',
		'  $ Double_Quotes "I love \'comics\'"',
		'  I love "comics"'
	].join('\n')
});

function init(data) {
	console.log(double_quotes(data));
}

if (process.stdin.isTTY) {
	if (!cli.input[0]) {
		console.error('String required');
		process.exit(1);
	}

	init(cli.input[0]);
} else {
	getStdin(init);
}
