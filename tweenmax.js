/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @constructor
 * @extends {com.greensock.TweenLite}
 */
com.greensock.TweenMax = function(target, duration, vars)
{
};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.TweenMax.prototype.repeat = function(value)
{
};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.TweenMax.prototype.repeatDelay = function(value)
{
};

/**
 * @param {Object} vars
 * @param {boolean=} resetDuration
 * @returns {com.greensock.TweenMax}
 */
com.greensock.TweenMax.prototype.updateTo = function(vars, resetDuration)
{
};

/**
 * @param {boolean=} value
 * @returns {boolean}
 */
com.greensock.TweenMax.prototype.yoyo = function(value)
{
};

/**
 * @type {Object}
 */
com.greensock.TweenMax.ticker;

/**
 * @param {number} delay
 * @param {Function} callback
 * @param {Array=} params
 * @param {*=} scope
 * @param {boolean=} useFrames
 * @returns {com.greensock.TweenMax}
 */
com.greensock.TweenMax.delayedCall = function(delay, callback, params, scope, useFrames)
{
};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @returns {com.greensock.TweenMax}
 */
com.greensock.TweenMax.from = function(target, duration, vars)
{
};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @returns {com.greensock.TweenMax}
 */
com.greensock.TweenMax.fromTo = function(target, duration, fromVars, toVars)
{
};

/**
 * @param {boolean} includeTimelines
 * @returns {Array}
 */
com.greensock.TweenMax.getAllTweens = function(includeTimelines)
{
};

/**
 * @param {*} target
 * @param {boolean=} onlyActive
 * @returns {Array}
 */
com.greensock.TweenMax.getTweensOf = function(target, onlyActive)
{
};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.TweenMax.globalTimeScale = function(value)
{
};

/**
 * @param {Object} target
 * @returns {boolean}
 */
com.greensock.TweenMax.isTweening = function(target)
{
};

/**
 * @param {boolean=} complete
 * @param {boolean=} tweens
 * @param {boolean=} delayedCalls
 * @param {boolean=} timelines
 */
com.greensock.TweenMax.killAll = function(complete, tweens, delayedCalls, timelines)
{
};

/**
 * @param {Object} parent
 * @param {boolean=} complete
 */
com.greensock.TweenMax.killChildTweensOf = function(parent, complete)
{
};

/**
 * @param {Function} func
 */
com.greensock.TweenMax.killDelayedCallsTo = function(func)
{
};

/**
 * @param {*} target
 * @param {Object=} vars
 */
com.greensock.TweenMax.killTweensOf = function(target, vars)
{
};

/**
 * @param {Number} threshold
 * @param {Number} adjustedLag
 */
com.greensock.TweenMax.lagSmoothing = function(threshold, adjustedLag)
{
};

/**
 * @param {boolean=} tweens
 * @param {boolean=} delayedCalls
 * @param {boolean=} timelines
 * @deprecated
 */
com.greensock.TweenMax.pauseAll = function(tweens, delayedCalls, timelines)
{
};

/**
 * @param {boolean=} tweens
 * @param {boolean=} delayedCalls
 * @param {boolean=} timelines
 * @deprecated
 */
com.greensock.TweenMax.resumeAll = function(tweens, delayedCalls, timelines)
{
};

/**
 * @param {Object} target
 * @param {Object} vars
 * @returns {com.greensock.TweenMax}
 */
com.greensock.TweenMax.set = function(target, vars)
{
};

/**
 * @param {Array} targets
 * @param {number} duration
 * @param {Object} vars
 * @param {number=} stagger
 * @param {Function=} onCompleteAll
 * @param {Array=} onCompleteAllParams
 * @param {*=} onCompleteAllScope
 * @returns {Array}
 */
com.greensock.TweenMax.staggerFrom = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope)
{
};

/**
 * @param {Array} targets
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @param {number=} stagger
 * @param {Function=} onCompleteAll
 * @param {Array=} onCompleteAllParams
 * @param {*=} onCompleteAllScope
 * @returns {Array}
 */
com.greensock.TweenMax.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope)
{
};

/**
 * @param {Array} targets
 * @param {number} duration
 * @param {Object} vars
 * @param {number=} stagger
 * @param {Function=} onCompleteAll
 * @param {Array=} onCompleteAllParams
 * @param {*=} onCompleteAllScope
 * @returns {Array}
 */
com.greensock.TweenMax.staggerTo = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope)
{
};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @returns {com.greensock.TweenMax}
 */
com.greensock.TweenMax.to = function(target, duration, vars)
{
};