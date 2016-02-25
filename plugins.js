/**
 * @constructor
 */
com.greensock.plugins.BezierPlugin = function()
{
};

/**
 * @param {Array} values
 * @param {number=} curviness
 * @param {boolean=} quadratic
 * @param {string=} correlate
 * @param {*=} prepend
 * @param {boolean=} calcDifs
 * @returns {*}
 */
com.greensock.plugins.BezierPlugin.bezierThrough = function(values, curviness, quadratic, correlate, prepend, calcDifs)
{
};

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @returns {Array}
 */
com.greensock.plugins.BezierPlugin.cubicToQuadratic = function(a, b, c, d)
{
};

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {*}
 */
com.greensock.plugins.BezierPlugin.quadraticToCubic = function(a, b, c)
{
};

/**
 * @constructor
 */
com.greensock.plugins.CSSRulePlugin = function()
{
};

/**
 * @param {string} selector
 * @returns {*}
 */
com.greensock.plugins.CSSRulePlugin.getRule = function(selector)
{
};

/**
 * @constructor
 */
com.greensock.plugins.ThrowPropsPlugin = function()
{
};

/**
 * @type {number}
 */
com.greensock.plugins.ThrowPropsPlugin.defaultResistance;

/**
 * @param {number} velocity
 * @param {*} ease
 * @param {number} duration
 * @param {number=} checkPoint
 * @returns {number}
 */
com.greensock.plugins.ThrowPropsPlugin.calculateChange = function(velocity, ease, duration, checkPoint)
{
};

/**
 * @param {number} start
 * @param {number} end
 * @param {number} velocity
 * @param {*} ease
 * @param {number=} checkPoint
 * @returns {number}
 */
com.greensock.plugins.ThrowPropsPlugin.calculateDuration = function(start, end, velocity, ease, checkPoint)
{
};

/**
 * @param {Object} target
 * @param {Object} vars
 * @param {number=} maxDuration
 * @param {number=} minDuration
 * @param {number=} overshootTolerance
 * @returns {number}
 */
com.greensock.plugins.ThrowPropsPlugin.calculateTweenDuration = function(target, vars, maxDuration, minDuration, overshootTolerance)
{
};

/**
 * @param {Object} target
 * @param {string} prop
 * @returns {number}
 */
com.greensock.plugins.ThrowPropsPlugin.getVelocity = function(target, prop)
{
};

/**
 * @param {Object} target
 * @param {string=} prop
 * @returns {boolean}
 */
com.greensock.plugins.ThrowPropsPlugin.isTracking = function(target, prop)
{
};

/**
 * @param {Object} target
 * @param {Object} vars
 * @param {number=} maxDuration
 * @param {number=} minDuration
 * @param {number=} overshootTolerance
 * @returns {com.greensock.TweenLite}
 */
com.greensock.plugins.ThrowPropsPlugin.to = function(target, vars, maxDuration, minDuration, overshootTolerance)
{
};

/**
 * @param {Object} target
 * @param {string} props
 * @param {string} type
 * @returns {com.greensock.utils.VelocityTracker}
 */
com.greensock.plugins.ThrowPropsPlugin.track = function(target, props, type)
{
};

/**
 * @param {Object} target
 * @param {string=} props
 */
com.greensock.plugins.ThrowPropsPlugin.untrack = function(target, props)
{
};