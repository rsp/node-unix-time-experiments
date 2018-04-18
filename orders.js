'use strict';

const [ { log: l }, { DateTime: { fromMillis: m } } ] = [ console, require('luxon') ];

for (let i = 0; i < 17; i++) {
  l(`1e${i<10?0:''}${i} | ${10 ** i} | ${m(10 ** i)} | ${m(1000 * 10 ** i)}`);
}
