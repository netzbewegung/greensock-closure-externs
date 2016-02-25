/**
 * @param {Object=} vars
 * @constructor
 * @extends {com.greensock.core.Animation}
 */
com.greensock.core.SimpleTimeline = function(vars)
{
};

/**
 * @type {boolean}
 */
com.greensock.core.SimpleTimeline.prototype.autoRemoveChildren;

/**
 * @type {boolean}
 */
com.greensock.core.SimpleTimeline.prototype.smoothChildTiming;

/**
 * @param {*} child
 * @param {(number|string)=} position
 * @param {string=} align
 * @param {number=} stagger
 * @returns {com.greensock.core.SimpleTimeline}
 */
com.greensock.core.SimpleTimeline.prototype.add = function(child, position, align, stagger)
{
};

/**
 * @param {number} time
 * @param {boolean=} suppressEvents
 * @param {boolean=} force
 */
com.greensock.core.SimpleTimeline.prototype.render = function(time, suppressEvents, force)
{
};