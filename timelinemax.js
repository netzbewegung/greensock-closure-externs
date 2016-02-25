/**
 * @param {Object=} vars
 * @constructor
 * @extends {com.greensock.TimelineLite}
 */
com.greensock.TimelineMax = function(vars)
{
};

/**
 * @param {Function} callback
 * @param {string|number} position
 * @param {Array=} params
 * @param {*=} scope
 */
com.greensock.TimelineMax.prototype.addCallback = function(callback, position, params, scope)
{
};

/**
 * @param {string=} value
 * @returns {string}
 */
com.greensock.TimelineMax.prototype.currentLabel = function(value)
{
};

/**
 * @param {boolean=} nested
 * @param {boolean=} tweens
 * @param {boolean=} timelines
 * @returns {Array}
 */
com.greensock.TimelineMax.prototype.getActive = function(nested, tweens, timelines)
{
};

/**
 * @param {number=} time
 * @returns {string}
 */
com.greensock.TimelineMax.prototype.getLabelAfter = function(time)
{
};

/**
 * @param {number=} time
 * @returns {string}
 */
com.greensock.TimelineMax.prototype.getLabelBefore = function(time)
{
};

/**
 * @returns {Array}
 */
com.greensock.TimelineMax.prototype.getLabelsArray = function()
{
};

/**
 * @param {Function} callback
 * @param {(string|number)=} timeOrLabel
 * @returns {com.greensock.TimelineMax}
 */
com.greensock.TimelineMax.prototype.removeCallback = function(callback, timeOrLabel)
{
};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.TimelineMax.prototype.repeat = function(value)
{
};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.TimelineMax.prototype.repeatDelay = function(value)
{
};

/**
 * @param {(string|number)=} fromPosition
 * @param {(string|number)=} toPosition
 * @param {Object=} vars
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TimelineMax.prototype.tweenFromTo = function(fromPosition, toPosition, vars)
{
};

/**
 * @param {string|number} position
 * @param {Object=} vars
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TimelineMax.prototype.tweenTo = function(position, vars)
{
};

/**
 * @param {boolean=} value
 * @returns {boolean}
 */
com.greensock.TimelineMax.prototype.yoyo = function(value)
{
};

/**
 * @param {Object=} vars
 * @param {boolean=} omitDelayedCalls
 * @returns {com.greensock.TimelineMax}
 */
com.greensock.TimelineMax.exportRoot = function(vars, omitDelayedCalls)
{
};