/**
 * @constructor
 */
com.greensock.utils.VelocityTracker = function()
{
};

/**
 * @type {Object}
 */
com.greensock.utils.VelocityTracker.prototype.target;

/**
 * @param {string} prop
 * @param {string=} type
 */
com.greensock.utils.VelocityTracker.prototype.addProp = function(prop, type)
{
};

/**
 * @param {string} prop
 * @returns {number}
 */
com.greensock.utils.VelocityTracker.prototype.getVelocity = function(prop)
{
};

/**
 * @param {string} prop
 * @returns {boolean}
 */
com.greensock.utils.VelocityTracker.prototype.isTrackingProp = function(prop)
{
};

/**
 * @param {string} prop
 */
com.greensock.utils.VelocityTracker.prototype.removeProp = function(prop)
{
};

/**
 * @param {Object} target
 * @returns {com.greensock.utils.VelocityTracker}
 */
com.greensock.utils.VelocityTracker.getByTarget = function(target)
{
};

/**
 * @param {Object} target
 * @param {string=} prop
 * @returns {boolean}
 */
com.greensock.utils.VelocityTracker.isTracking = function(target, prop)
{
};

/**
 * @param {Object} target
 * @param {string=} props
 * @param {string=} type
 * @returns {com.greensock.utils.VelocityTracker}
 */
com.greensock.utils.VelocityTracker.track = function(target, props, type)
{
};

/**
 * @param {Object} target
 * @param {string=} props
 */
com.greensock.utils.VelocityTracker.untrack = function(target, props)
{
};