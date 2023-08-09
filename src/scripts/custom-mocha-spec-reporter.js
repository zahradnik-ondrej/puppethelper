'use strict'

const mocha = require('mocha')

/**
 * @module Spec
 */
/**
 * Module dependencies.
 */

const chalk = require('chalk');

let Base = mocha.reporters.base
const {
    EVENT_RUN_BEGIN,
    EVENT_RUN_END,
    EVENT_SUITE_BEGIN,
    EVENT_SUITE_END,
    EVENT_TEST_FAIL,
    EVENT_TEST_PASS,
    EVENT_TEST_PENDING,
} = mocha.Runner.constants
//let inherits = require('../utils').inherits
let color = Base.color

function customEpilogue() {
    const stats = this.stats;

    Base.consoleLog();

    const totalSeconds = Math.round(stats.duration / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedDuration = minutes > 0
        ? `${minutes}m ${seconds}s`
        : `${seconds}s`;

    if (stats.passes) {
        Base.consoleLog(
            color('bright pass', ' ') +
            color('green', ' %d passing') +
            color('light', ` (${formattedDuration})`),
            stats.passes
        );
    }

    if (stats.failures) {
        Base.consoleLog(
            color('fail', '  %d failing'),
            stats.failures
        );
    }

    if (stats.pending) {
        Base.consoleLog(
            color('pending', '  %d skipped'),
            stats.pending
        );
    }
}

/**
 * Expose `Spec`.
 */

exports = module.exports = Spec;

/**
 * Constructs a new `Spec` reporter instance.
 *
 * @public
 * @class
 * @memberof Mocha.reporters
 * @extends Mocha.reporters.Base
 * @param {Runner} runner - Instance triggers reporter actions.
 * @param {Object} [options] - runner options
 */
function Spec(runner, options) {
    Base.call(this, runner, options);

    let self = this;
    let indents = 0;
    let n = 0;

    function indent() {
        return Array(indents).join('  ');
    }

    function i(i) {
        return ('  ' * i)
    }

    runner.on(EVENT_SUITE_BEGIN, function (suite) {
        ++indents;
        Base.consoleLog(color('suite', '%s%s'), indent(), suite.title);
    });

    runner.on(EVENT_SUITE_END, function () {
        --indents;
        if (indents === 1) {
            Base.consoleLog();
        }
    });

    runner.on(EVENT_TEST_PENDING, function (test) {
        let fmt = indent() + color('pending', '  - %s');
        Base.consoleLog(fmt, test.title);
    });

    runner.on(EVENT_TEST_PASS, function (test) {
        let fmt;
        let minutes = Math.floor(test.duration / 60000);
        let seconds = Math.floor((test.duration % 60000) / 1000);

        if (test.duration < 1000) {
            fmt =
                indent() +
                color('checkmark', '  ' + Base.symbols.ok) +
                color('pass', ' %s');
            Base.consoleLog(fmt, test.title);
        } else if (test.duration >= 1000) {
            if (minutes >= 1) {
                fmt =
                    indent() +
                    color('checkmark', '  ' + Base.symbols.ok) +
                    color('pass', ' %s') +
                    color(test.speed, ' (%dm %ds)');
                Base.consoleLog(fmt, test.title, minutes, seconds);
            } else {
                fmt =
                    indent() +
                    color('checkmark', '  ' + Base.symbols.ok) +
                    color('pass', ' %s') +
                    color(test.speed, ' (%ds)');
                Base.consoleLog(fmt, test.title, seconds);
            }
        }
    });

    runner.on(EVENT_TEST_FAIL, function (test, err) {
        const formattedTestTitle = chalk.red(test.title);
        const formattedErrorName = chalk.bold(chalk.red(err.name));
        const formattedErrorMessage = chalk.reset(chalk.red(err.message));
        if (err.name === 'AssertionError') {
            Base.consoleLog(indent() + `  ${chalk.red(++n + ')')} ${formattedTestTitle}: ${formattedErrorName}`);
            Base.consoleLog(chalk.green(indent() + `    + expected: ${err.expected}`));
            Base.consoleLog(chalk.red(indent() + `    - actual:   ${err.actual}`));
            Base.consoleLog();
        } else if (err.name === 'TimeoutError' || err.name === 'MiscError' || err.name === 'SelectorNotFound') {
            Base.consoleLog(indent() + `  ${chalk.red(++n + ')')} ${formattedTestTitle}: ${formattedErrorName}: ${formattedErrorMessage}`);
        } else {
            Base.consoleLog(indent() + `  ${chalk.red(++n + ')')} ${chalk.red(formattedTestTitle + ': ' + err.toString())}`);
            Base.consoleLog(chalk.gray(indent() + err.stack.split('\n').slice(1).join('\n')));
        }
    });

    runner.on(EVENT_RUN_END, function () {
        customEpilogue.call(self);
    });
}

const util = require('util');
util.inherits(Spec, Base);

/**
 * Inherit from `Base.prototype`.
 */
//inherits(Spec, Base);

Spec.description = 'hierarchical & verbose [default]';
