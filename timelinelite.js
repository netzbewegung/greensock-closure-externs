/**
 * @param {Object=} vars
 * @constructor
 * @extends {com.greensock.core.SimpleTimeline}
 */
com.greensock.TimelineLite = function(vars)
{
};

/**
 * @param {string} label
 * @param {string|number=} position
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.addLabel = function(label, position)
{
};

/**
 * @param {(string|number)=} position
 * @param {Function=} callback
 * @param {Array=} params
 * @param {*=} scope
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.addPause = function(position, callback, params, scope)
{
};

/**
 * @param {Function} callback
 * @param {Array=} params
 * @param {*=} scope
 * @param {(string|number)=} position
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.call = function(callback, params, scope, position)
{
};

/**
 * @param {boolean=} labels
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.clear = function(labels)
{
};

com.greensock.TimelineLite.prototype.stop = function()
{
};

/**
 * @param {Object|Array.<Object>} target
 * @param {number} duration
 * @param {Object} vars
 * @param {(string|number)=} position
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.from = function(target, duration, vars, position)
{
};

/**
 * @param {Object|Array.<Object>} target
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @param {(string|number)=} position
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.fromTo = function(target, duration, fromVars, toVars, position)
{
};

/**
 * @param {boolean=} nested
 * @param {boolean=} tweens
 * @param {boolean=} timelines
 * @param {number=} ignoreBeforeTime
 * @returns {Array}
 */
com.greensock.TimelineLite.prototype.getChildren = function(nested, tweens, timelines, ignoreBeforeTime)
{
};

/**
 * @param {string} label
 * @return {number}
 */
com.greensock.TimelineLite.prototype.getLabelTime = function(label)
{
};

/**
 * @param {Object} target
 * @param {boolean=} nested
 * @returns {Array}
 */
com.greensock.TimelineLite.prototype.getTweensOf = function(target, nested)
{
};

/**
 * @returns {com.greensock.core.Animation}
 */
com.greensock.TimelineLite.prototype.recent = function()
{
};

/**
 * @param {*} value
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.remove = function(value)
{
};

/**
 * @param {string} label
 * @returns {*}
 */
com.greensock.TimelineLite.prototype.removeLabel = function(label)
{
};

/**
 * @param {Object} target
 * @param {Object} vars
 * @param {(string|number)=} position
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.set = function(target, vars, position)
{
};

/**
 * @param {number} amount
 * @param {boolean=} adjustLabels
 * @param {number=} ignoreBeforeTime
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime)
{
};

/**
 * @param {Array} targets
 * @param {number} duration
 * @param {Object} vars
 * @param {number=} stagger
 * @param {(string|number)=} position
 * @param {Function=} onCompleteAll
 * @param {Array=} onCompleteAllParams
 * @param {*=} onCompleteScope
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteScope)
{
};

/**
 * @param {Array} targets
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @param {number=} stagger
 * @param {(string|number)=} position
 * @param {Function=} onCompleteAll
 * @param {Array=} onCompleteAllParams
 * @param {*=} onCompleteScope
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteScope)
{
};

/**
 * @param {Array} targets
 * @param {number} duration
 * @param {Object} vars
 * @param {number=} stagger
 * @param {(string|number)=} position
 * @param {Function=} onCompleteAll
 * @param {Array=} onCompleteAllParams
 * @param {*=} onCompleteScope
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteScope)
{
};

/**
 * @param {Object|Array.<Object>} target
 * @param {number} duration
 * @param {Object} vars
 * @param {(string|number)=} position
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.to = function(target, duration, vars, position)
{
};

/**
 * @returns {boolean}
 */
com.greensock.TimelineLite.prototype.useFrames = function()
{
};

/**
 * @param {Object=} vars
 * @param {boolean=} omitDelayedCalls
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.exportRoot = function(vars, omitDelayedCalls)
{
};