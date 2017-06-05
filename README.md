# Angular TDD

This repository exists primarily to get you started quickly with learning and prototyping in Angular. It's been extended with testing support so you can start writing tests immediately.

## Prerequisites

Node.js and npm are essential to Angular development.

<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.

**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

The `npm start` command first compiles the application,
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## Testing

This repo has both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

### Unit Tests
TypeScript unit-tests are usually in the `app` folder. Their filenames must end in `.spec`.

Look for the example `spc/unit/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick.

### End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `app` folder.
Their filenames must end in `.e2e-spec.ts`.

Look for the example `spec/e2e/app.e2e-spec.ts`.
Add more `.e2e-spec.js` files as you wish (although one usually suffices for small projects);
we configured protractor to find them.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the Http-Server at `localhost:8080`
and launches protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.

### Automated Testing

This is where the rubber hits the road.  Writing new tests before new functionality
and running those tests as part of a TDD pattern are all well and good.  But the
first time that your customer compains of a bug, and you respond with "It works
on my machine", you lose.

This is why automated testing is so important.

There is a serious problem with Angular2.  Because it's pretty new, many of the 
tools we used for pure JavaSctipt testing no longer work in an Angular world.  
What does work is the Chrome browser.  That's a bit of a shame, because the standard
way of executing unit tests before, with PhantomJS remains a little out of reach as
of the time that this project is being committed.  PhantomJS was great, because it worked
without requiring a graphical user interface for the browser, and made lots of unit testing
go really fast.

There are also problems with getting FireFox and other browsers working with Protractor
as of this date.  The code leaves open the door to simply adding more browsers to `protractor.config.js`,
but that is left to the reader for now.

This project has a `.travis.yml` file, and does in fact automate testing on 
Travis CI at https://travis-ci.org/hdeiner/angular2-tdd.  If automated testing can be
done on Travis CI, it can be done in any of the more local CI servers even easier.

