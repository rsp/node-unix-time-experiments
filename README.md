JavaScript and Unix Epoch Timestamp Experiments
=
Experiments with the Unix epoch timestamps and JavaScript
to visualize what values correspond to what dates,
for both seconds and milliseconds.

Results
-

Num | Num | Interpreted as milliseconds | Interpreted as seconds
----|-----|-----------------------------|-----------------------
1e00 | 1 | 1970-01-01T01:00:00.001+01:00 | 1970-01-01T01:00:01.000+01:00
1e01 | 10 | 1970-01-01T01:00:00.010+01:00 | 1970-01-01T01:00:10.000+01:00
1e02 | 100 | 1970-01-01T01:00:00.100+01:00 | 1970-01-01T01:01:40.000+01:00
1e03 | 1000 | 1970-01-01T01:00:01.000+01:00 | 1970-01-01T01:16:40.000+01:00
1e04 | 10000 | 1970-01-01T01:00:10.000+01:00 | 1970-01-01T03:46:40.000+01:00
1e05 | 100000 | 1970-01-01T01:01:40.000+01:00 | 1970-01-02T04:46:40.000+01:00
1e06 | 1000000 | 1970-01-01T01:16:40.000+01:00 | 1970-01-12T14:46:40.000+01:00
1e07 | 10000000 | 1970-01-01T03:46:40.000+01:00 | 1970-04-26T18:46:40.000+01:00
1e08 | 100000000 | 1970-01-02T04:46:40.000+01:00 | 1973-03-03T10:46:40.000+01:00
1e09 | 1000000000 | 1970-01-12T14:46:40.000+01:00 | 2001-09-09T03:46:40.000+02:00
1e10 | 10000000000 | 1970-04-26T18:46:40.000+01:00 | 2286-11-20T18:46:40.000+01:00
1e11 | 100000000000 | 1973-03-03T10:46:40.000+01:00 | 5138-11-16T10:46:40.000+01:00
1e12 | 1000000000000 | 2001-09-09T03:46:40.000+02:00 | 33658-09-27T03:46:40.000+02:00
1e13 | 10000000000000 | 2286-11-20T18:46:40.000+01:00 | 0NaN-NaN-NaNTNaN:NaN:NaN.NaN-NaN:NaN
1e14 | 100000000000000 | 5138-11-16T10:46:40.000+01:00 | 0NaN-NaN-NaNTNaN:NaN:NaN.NaN-NaN:NaN
1e15 | 1000000000000000 | 33658-09-27T03:46:40.000+02:00 | 0NaN-NaN-NaNTNaN:NaN:NaN.NaN-NaN:NaN
1e16 | 10000000000000000 | 0NaN-NaN-NaNTNaN:NaN:NaN.NaN-NaN:NaN | 0NaN-NaN-NaNTNaN:NaN:NaN.NaN-NaN:NaN


Issues
-
For any bug reports or feature requests please
[post an issue on GitHub][issues-url].

Author
-
[**Rafał Pocztarski**](https://pocztarski.com/)
<br/>
[![Follow on GitHub][github-follow-img]][github-follow-url]
[![Follow on Twitter][twitter-follow-img]][twitter-follow-url]
<br/>
[![Follow on Stack Exchange][stackexchange-img]][stackoverflow-url]

License
-
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.

[npm-url]: https://www.npmjs.com/package/unix-time-experiments
[github-url]: https://github.com/rsp/node-unix-time-experiments
[readme-url]: https://github.com/rsp/node-unix-time-experiments#readme
[issues-url]: https://github.com/rsp/node-unix-time-experiments/issues
[license-url]: https://github.com/rsp/node-unix-time-experiments/blob/master/LICENSE.md
[travis-url]: https://travis-ci.org/rsp/node-unix-time-experiments
[travis-img]: https://travis-ci.org/rsp/node-unix-time-experiments.svg?branch=master
[snyk-url]: https://snyk.io/test/github/rsp/node-unix-time-experiments
[snyk-img]: https://snyk.io/test/github/rsp/node-unix-time-experiments/badge.svg
[david-url]: https://david-dm.org/rsp/node-unix-time-experiments
[david-img]: https://david-dm.org/rsp/node-unix-time-experiments/status.svg
[install-img]: https://nodei.co/npm/unix-time-experiments.png?compact=true
[downloads-img]: https://img.shields.io/npm/dt/unix-time-experiments.svg
[license-img]: https://img.shields.io/npm/l/unix-time-experiments.svg
[stats-url]: http://npm-stat.com/charts.html?package=unix-time-experiments
[github-follow-url]: https://github.com/rsp
[github-follow-img]: https://img.shields.io/github/followers/rsp.svg?style=social&logo=github&label=Follow
[twitter-follow-url]: https://twitter.com/intent/follow?screen_name=pocztarski
[twitter-follow-img]: https://img.shields.io/twitter/follow/pocztarski.svg?style=social&logo=twitter&label=Follow
[stackoverflow-url]: https://stackoverflow.com/users/613198/rsp
[stackexchange-url]: https://stackexchange.com/users/303952/rsp
[stackexchange-img]: https://stackexchange.com/users/flair/303952.png
