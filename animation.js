/**
 * @param {number=} duration
 * @param {Object=} vars
 * @constructor
 */
com.greensock.core.Animation = function(duration, vars)
{
};

/**
 * @type {*}
 */
com.greensock.core.Animation.prototype.data;

/**
 * @const {com.greensock.core.SimpleTimeline}
 */
com.greensock.core.Animation.prototype.timeline;

/**
 * @type {Object}
 */
com.greensock.core.Animation.prototype.vars;

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.core.Animation.prototype.delay = function(value)
{
};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.core.Animation.prototype.duration = function(value)
{
};

/**
 * @param {string} type
 * @param {Function=} callback
 * @param {Array=} params
 * @param {*=} scope
 * @returns {*}
 */
com.greensock.core.Animation.prototype.eventCallback = function(type, callback, params, scope)
{
};

com.greensock.core.Animation.prototype.invalidate = function()
{
};

/**
 * @returns {boolean}
 */
com.greensock.core.Animation.prototype.isActive = function()
{
};

/**
 * @param {Object=} vars
 * @param {Object=} object
 */
com.greensock.core.Animation.prototype.kill = function(vars, object)
{
};

/**
 * @param {(number|string)=} atTime
 * @param {boolean=} supressEvents
 */
com.greensock.core.Animation.prototype.pause = function(atTime, supressEvents)
{
};

/**
 * @param {boolean=} value
 * @returns {boolean}
 */
com.greensock.core.Animation.prototype.paused = function(value)
{
};

/**
 * @param {(number|string)=} from
 * @param {boolean=} suppressEvents
 */
com.greensock.core.Animation.prototype.play = function(from, suppressEvents)
{
};

/**
 * @param {number=} value
 * @param {boolean=} suppressEvents
 * @returns {number}
 */
com.greensock.core.Animation.prototype.progress = function(value, suppressEvents)
{
};

/**
 * @param {boolean=} includeDelay
 * @param {boolean=} suppressEvents
 */
com.greensock.core.Animation.prototype.restart = function(includeDelay, suppressEvents)
{
};

/**
 * @param {(number|string)=} from
 * @param {boolean=} suppressEvents
 */
com.greensock.core.Animation.prototype.resume = function(from, suppressEvents)
{
};

/**
 * @param {(number|string)=} from
 * @param {boolean=} suppressEvents
 */
com.greensock.core.Animation.prototype.reverse = function(from, suppressEvents)
{
};

/**
 * @param {boolean=} value
 * @returns {boolean}
 */
com.greensock.core.Animation.prototype.reversed = function(value)
{
};

/**
 * @param {(number|string)=} time
 * @param {boolean=} suppressEvents
 */
com.greensock.core.Animation.prototype.seek = function(time, suppressEvents)
{
};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.core.Animation.prototype.startTime = function(value)
{
};

/**
 * @param {boolean=} includeRepeats
 * @returns {number}
 */
com.greensock.core.Animation.prototype.endTime = function(includeRepeats)
{
};

/**
 * @param {number=} value
 * @param {boolean=} suppressEvents
 * @returns {number}
 */
com.greensock.core.Animation.prototype.time = function(value, suppressEvents)
{
};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.core.Animation.prototype.timeScale = function(value)
{
};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.core.Animation.prototype.totalDuration = function(value)
{
};

/**
 * @param {number=} value
 * @param {boolean=} suppressEvents
 * @returns {number}
 */
com.greensock.core.Animation.prototype.totalProgress = function(value, suppressEvents)
{
};

/**
 * @param {number=} time
 * @param {boolean=} suppressEvents
 * @returns {number}
 */
com.greensock.core.Animation.prototype.totalTime = function(time, suppressEvents)
{
};