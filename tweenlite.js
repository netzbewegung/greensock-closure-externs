/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @constructor
 * @extends {com.greensock.core.Animation}
 */
com.greensock.TweenLite = function(target, duration, vars)
{
};

/**
 * @const {Object}
 */
com.greensock.TweenLite.prototype.target;

/**
 * @type {com.greensock.easing.Ease}
 */
com.greensock.TweenLite.defaultEase;

/**
 * @type {string}
 */
com.greensock.TweenLite.defaultOverwrite;

/**
 * @type {Function}
 */
com.greensock.TweenLite.onOverwrite;

/**
 * @type {*}
 */
com.greensock.TweenLite.selector;

/**
 * @type {Object}
 */
com.greensock.TweenLite.ticker;

/**
 * @param {boolean} value
 */
com.greensock.TweenLite.ticker.useRAF = function(value)
{
};

/**
 * @param {number} delay
 * @param {Function} callback
 * @param {Array=} params
 * @param {*=} scope
 * @param {boolean=} useFrames
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TweenLite.delayedCall = function(delay, callback, params, scope, useFrames)
{
};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TweenLite.from = function(target, duration, vars)
{
};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TweenLite.fromTo = function(target, duration, fromVars, toVars)
{
};

/**
 * @param {*} target
 * @param {boolean=} onlyActive
 * @returns {Array}
 */
com.greensock.TweenLite.getTweensOf = function(target, onlyActive)
{
};

/**
 * @param {Function} func
 */
com.greensock.TweenLite.killDelayedCallsTo = function(func)
{
};

/**
 * @param {*} target
 * @param {boolean=} onlyActive
 * @param {Object=} vars
 */
com.greensock.TweenLite.killTweensOf = function(target, onlyActive, vars)
{
};

/**
 * @param {number} threshold
 * @param {number} adjustedLag
 */
com.greensock.TweenLite.lagSmoothing = function(threshold, adjustedLag)
{
};

com.greensock.TweenLite.render = function()
{
};

/**
 * @param {Object} target
 * @param {Object} vars
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TweenLite.set = function(target, vars)
{
};

/**
 * @param {Object|string} target
 * @param {number} duration
 * @param {Object} vars
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TweenLite.to = function(target, duration, vars)
{
};