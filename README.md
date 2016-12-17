# Web Starter Kit (Beta)

> A boilerplate for Vanilla, Lodash, ReactiveX, Material, Firebase, Gulp, Rollup, PostCSS, and Babel.

[![Build Status](https://travis-ci.org/Shyam-Chen/Web-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Web-Starter-Kit)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Web-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Web-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Web-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Web-Starter-Kit?type=dev)

[Live Demo](https://test-1498d.firebaseapp.com/)

This seed repository provides the following features:
* ---------- **Primary Key** ----------
* [x] Pure HTML/CSS/JavaScript coding.
* [x] Functional/Reactive programming.
* [x] Material design components.
* [x] Back-end cloud services.
* [x] Single-page application.
* [x] Internationalization and localization.
* [x] Data visualization.
* ---------- **Dev Tools** ----------
* [x] Build system with Gulp.
* [x] Module bundler with Rollup.
* [x] Future CSS features with PostCSS.
* [x] Next generation JavaScript with Babel.
* [x] Development server with BrowserSync.
* ---------- **Test Tools** ----------
* [x] HTML static code analyzer with HTMLHint.
* [x] CSS static code analyzer with StyleLint.
* [x] JavaScript static code analyzer with ESLint.
* [x] Testing framework with Jasmine.
* [x] Unit tests with Karma.
* [x] End-to-end tests with Protractor.
* ---------- **Environment** ----------
* [x] Operating system with Linux.
* [x] Text editor with Atom.
* [x] Version control with Git.
* [x] Fast and deterministic builds with Yarn.
* [x] Containers with Docker.
* [x] Continuous integration with Travis.

## TODO List
* Service Workers
* Web App Manifest
* Migrate from `page.js` to `universal-router`
* ...

## Known Issues
* Firebase hosting SEO
* Import Firebase `v3.6.x`
* Import Firebase only the features

## Browser Support
* IE (10+)
* Edge
* Safari (8+)
* Firefox
* Chrome
* Opera

## PageSpeed Insights
* Mobile - 89 / 100
* Desktop - 95 / 100

## Getting Started

1) Clone this Boilerplate
```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Web-Starter-Kit.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2) Install Dependencies
```bash
$ yarn install
```

3) Run the Application
```bash
$ yarn start
```

4) Stay up-to-date
```bash
$ git remote add upstream https://github.com/Shyam-Chen/Web-Starter-Kit.git
$ git pull upstream master
```

## Using Docker

1) Build the Image
```bash
$ docker build -t Web-Starter-Kit .
```

2) Run the Container
```bash
$ docker run -it -p 3000:3000 --name app Web-Starter-Kit
```

3) Just Compose
```bash
$ docker-compose up
```

## Other Commands

```bash
$ yarn run dev
$ yarn run dev-watch

$ yarn run test
$ yarn run test-watch

$ yarn run prod
$ yarn run e2e

$ yarn run clean
$ yarn run reset
$ yarn run reinstall
```
