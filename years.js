'use strict';

const [{ log: l }, { DateTime: { fromISO: f } }] = [console, require('luxon')];

const u = n => `${n}-01-01T00Z`;
const e = n => n.toExponential(0).replace('+', '');

for (let i = 1970; i < 2200; i+=10) {
  l(`${i}-01-01 | ${e(+f(u(i)))} | ${e(f(u(i))/1000)} | ${+f(u(i))} | ${f(u(i))/1000}`);
}
