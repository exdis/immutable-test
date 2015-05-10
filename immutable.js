'use strict';

// Immutable.js
var List = require('immutable').List;

var immList = List();
console.time('immutable');
for (let i = 0; i < 1000000; i++) {
    immList.push(i);
}
console.timeEnd('immutable');

// Mori
var mori = require('mori');

var moriVec = mori.vector();
console.time('mori');
for (let i = 0; i < 1000000; i++) {
    mori.conj(moriVec, i);
}
console.timeEnd('mori');

// Seamless-Immutable & RamdaJS
var seamlessImmutable = require('seamless-immutable');
var _ = require('ramda');

var seamlessArr = seamlessImmutable([]);
console.time('seamless-immutable');
for (let i = 0; i < 1000000; i++) {
    _.append(i, seamlessArr);
}
console.timeEnd('seamless-immutable');
