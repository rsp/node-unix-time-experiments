'use strict';

const [ { log: l }, { DateTime: { fromMillis: m } } ] = [ console, require('luxon') ];

for (let i = 0; i < 17; i++) {
  for (let j of [1, 2, 5]) {
    l(`${j}e${i<10?0:''}${i} | ${j * 10 ** i} | ${m(j * 10 ** i)} | ${m(1000 * j * 10 ** i)}`);
  }
}
