/**
 * @param {Object} target
 * @param {Object=} vars
 * @constructor
 */
com.greensock.utils.Draggable = function(target, vars)
{
};

/**
 * @type {number}
 */
com.greensock.utils.Draggable.prototype.autoScroll;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.endRotation;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.endX;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.endY;

/**
 * @type {boolean}
 */
com.greensock.utils.Draggable.prototype.isThrowing;

/**
 * @type {boolean}
 */
com.greensock.utils.Draggable.prototype.lockAxis;

/**
 * @const {string}
 */
com.greensock.utils.Draggable.prototype.lockedAxis;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.maxRotation;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.maxX;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.maxY;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.minRotation;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.minX;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.minY;

/**
 * @const {Object}
 */
com.greensock.utils.Draggable.prototype.pointerEvent;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.pointerX;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.pointerY;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.rotation;

/**
 * @const {Object}
 */
com.greensock.utils.Draggable.prototype.scrollProxy;

/**
 * @const {com.greensock.TweenLite}
 */
com.greensock.utils.Draggable.prototype.tween;

/**
 * @type {*}
 */
com.greensock.utils.Draggable.prototype.vars;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.x;

/**
 * @const {number}
 */
com.greensock.utils.Draggable.prototype.y;

/**
 * @param {string} event
 * @param {Function} listener
 */
com.greensock.utils.Draggable.prototype.addEventListener = function(event, listener)
{
};

/**
 * @param {Object=} newBounds
 * @returns {com.greensock.utils.Draggable}
 */
com.greensock.utils.Draggable.prototype.applyBounds = function(newBounds)
{
};

/**
 * @returns {com.greensock.utils.Draggable}
 */
com.greensock.utils.Draggable.prototype.disable = function()
{
};

/**
 * @returns {com.greensock.utils.Draggable}
 */
com.greensock.utils.Draggable.prototype.enable = function()
{
};

/**
 * @param {Object} event
 */
com.greensock.utils.Draggable.prototype.endDrag = function(event)
{
};

/**
 * @param {string|Element} from
 * @returns {string}
 */
com.greensock.utils.Draggable.prototype.getDirection = function(from)
{
};

/**
 * @param {Object} testObject
 * @param {*} threshold
 * @returns {boolean}
 */
com.greensock.utils.Draggable.prototype.hitTest = function(testObject, threshold)
{
};

/**
 * @returns {com.greensock.utils.Draggable}
 */
com.greensock.utils.Draggable.prototype.kill = function()
{
};

/**
 * @param {Object} event
 * @returns {com.greensock.utils.Draggable}
 */
com.greensock.utils.Draggable.prototype.startDrag = function(event)
{
};

/**
 * @param {boolean} applyBounds
 * @returns {com.greensock.utils.Draggable}
 */
com.greensock.utils.Draggable.prototype.update = function(applyBounds)
{
};

/**
 * @type {number}
 */
com.greensock.utils.Draggable.zIndex;

/**
 * @param {Object} target
 * @param {Object} vars
 * @returns {Array.<com.greensock.utils.Draggable>}
 */
com.greensock.utils.Draggable.create = function(target, vars)
{
};

/**
 * @param {Object} target
 * @returns {com.greensock.utils.Draggable}
 */
com.greensock.utils.Draggable.get = function(target)
{
};

/**
 * @param {Object} testObject1
 * @param {Object} testObject2
 * @param {*} threshold
 * @returns {boolean}
 */
com.greensock.utils.Draggable.hitTest = function(testObject1, testObject2, threshold)
{
};

/**
 * @returns {number}
 */
com.greensock.utils.Draggable.timeSinceDrag = function()
{
};