

if (true) {
    var nombre="suscribirse";

}

console.log(nombre);

{
    "name": "express",
    "description": "Fast, unopinionated, minimalist web framework",
    "version": "4.18.2",
    "author": "TJ Holowaychuk <tj@vision-media.ca>",
    "contributors": [
      "Aaron Heckmann <aaron.heckmann+github@gmail.com>",
      "Ciaran Jessup <ciaranj@gmail.com>",
      "Douglas Christopher Wilson <doug@somethingdoug.com>",
      "Guillermo Rauch <rauchg@gmail.com>",
      "Jonathan Ong <me@jongleberry.com>",
      "Roman Shtylman <shtylman+expressjs@gmail.com>",
      "Young Jae Sim <hanul@hanul.me>"
    ],
    "license": "MIT",
    "repository": "expressjs/express",
    "homepage": "http://expressjs.com/",
    "keywords": [
      "express",
      "framework",
      "sinatra",
      "web",
      "http",
      "rest",
      "restful",
      "router",
      "app",
      "api"
    ],
    "dependencies": {
      "accepts": "~1.3.8",
      "array-flatten": "1.1.1",
      "body-parser": "1.20.2",
      "content-disposition": "0.5.4",
      "content-type": "~1.0.4",
      "cookie": "0.5.0",
      "cookie-signature": "1.0.6",
      "debug": "2.6.9",
      "depd": "2.0.0",
      "encodeurl": "~1.0.2",
      "escape-html": "~1.0.3",
      "etag": "~1.8.1",
      "finalhandler": "1.2.0",
      "fresh": "0.5.2",
      "http-errors": "2.0.0",
      "merge-descriptors": "1.0.1",
      "methods": "~1.1.2",
      "on-finished": "2.4.1",
      "parseurl": "~1.3.3",
      "path-to-regexp": "0.1.7",
      "proxy-addr": "~2.0.7",
      "qs": "6.11.0",
      "range-parser": "~1.2.1",
      "safe-buffer": "5.2.1",
      "send": "0.18.0",
      "serve-static": "1.15.0",
      "setprototypeof": "1.2.0",
      "statuses": "2.0.1",
      "type-is": "~1.6.18",
      "utils-merge": "1.0.1",
      "vary": "~1.1.2"
    },
    "devDependencies": {
      "after": "0.8.2",
      "connect-redis": "3.4.2",
      "cookie-parser": "1.4.6",
      "cookie-session": "2.0.0",
      "ejs": "3.1.9",
      "eslint": "8.36.0",
      "express-session": "1.17.2",
      "hbs": "4.2.0",
      "marked": "0.7.0",
      "method-override": "3.0.0",
      "mocha": "10.2.0",
      "morgan": "1.10.0",
      "multiparty": "4.2.3",
      "nyc": "15.1.0",
      "pbkdf2-password": "1.2.1",
      "supertest": "6.3.0",
      "vhost": "~3.0.2"
    },
    "engines": {
      "node": ">= 0.10.0"
    },
    "files": [
      "LICENSE",
      "History.md",
      "Readme.md",
      "index.js",
      "lib/"
    ],
    "scripts": {
      "lint": "eslint .",
      "test": "mocha --require test/support/env --reporter spec --bail --check-leaks test/ test/acceptance/",
      "test-ci": "nyc --reporter=lcovonly --reporter=text npm test",
      "test-cov": "nyc --reporter=html --reporter=text npm test",
      "test-tap": "mocha --require test/support/env --reporter tap --check-leaks test/ test/acceptance/"
    }
  }