/**
 * @param {Function=} func
 * @param {Array=} extraParams
 * @param {number=} type
 * @param {number=} power
 * @constructor
 */
com.greensock.easing.Ease = function(func, extraParams, type, power)
{
};

/**
 * @param {number} progress
 * @returns {number}
 */
com.greensock.easing.Ease.prototype.getRatio = function(progress)
{
};

/**
 * @constructor
 */
com.greensock.easing.EaseLookup = function()
{
};

/**
 * @param {string} name
 * @returns {com.greensock.easing.Ease}
 */
com.greensock.easing.EaseLookup.find = function(name)
{
};

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Back = function()
{
};

/**
 * @type {com.greensock.easing.Back}
 */
com.greensock.easing.Back.easeIn;

/**
 * @type {com.greensock.easing.Back}
 */
com.greensock.easing.Back.easeInOut;

/**
 * @type {com.greensock.easing.Back}
 */
com.greensock.easing.Back.easeOut;

/**
 * @param {number=} linearRatio
 * @param {number=} power
 * @param {number=} yoyoMode
 * @returns {com.greensock.easing.Back}
 */
com.greensock.easing.Back.prototype.config = function(linearRatio, power, yoyoMode)
{
};

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Bounce = function()
{
};

/**
 * @type {com.greensock.easing.Bounce}
 */
com.greensock.easing.Bounce.easeIn;

/**
 * @type {com.greensock.easing.Bounce}
 */
com.greensock.easing.Bounce.easeInOut;

/**
 * @type {com.greensock.easing.Bounce}
 */
com.greensock.easing.Bounce.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Circ = function()
{
};

/**
 * @type {com.greensock.easing.Bounce}
 */
com.greensock.easing.Circ.easeIn;

/**
 * @type {com.greensock.easing.Bounce}
 */
com.greensock.easing.Circ.easeInOut;

/**
 * @type {com.greensock.easing.Bounce}
 */
com.greensock.easing.Circ.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Cubic = function()
{
};

/**
 * @type {com.greensock.easing.Cubic}
 */
com.greensock.easing.Cubic.easeIn;

/**
 * @type {com.greensock.easing.Cubic}
 */
com.greensock.easing.Cubic.easeInOut;

/**
 * @type {com.greensock.easing.Cubic}
 */
com.greensock.easing.Cubic.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Elastic = function()
{
};

/**
 * @type {com.greensock.easing.Elastic}
 */
com.greensock.easing.Elastic.easeIn;

/**
 * @type {com.greensock.easing.Elastic}
 */
com.greensock.easing.Elastic.easeInOut;

/**
 * @type {com.greensock.easing.Elastic}
 */
com.greensock.easing.Elastic.easeOut;

/**
 * @param {number=} linearRatio
 * @param {number=} power
 * @param {number=} yoyoMode
 * @returns {com.greensock.easing.Elastic}
 */
com.greensock.easing.Elastic.prototype.config = function(linearRatio, power, yoyoMode)
{
};

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Expo = function()
{
};

/**
 * @type {com.greensock.easing.Expo}
 */
com.greensock.easing.Expo.easeIn;

/**
 * @type {com.greensock.easing.Expo}
 */
com.greensock.easing.Expo.easeInOut;

/**
 * @type {com.greensock.easing.Expo}
 */
com.greensock.easing.Expo.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Linear = function()
{
};

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.ease;

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.easeIn;

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.easeInOut;

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.easeNone;

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Power0 = function()
{
};

/**
 * @type {com.greensock.easing.Power0}
 */
com.greensock.easing.Power0.easeIn;

/**
 * @type {com.greensock.easing.Power0}
 */
com.greensock.easing.Power0.easeInOut;

/**
 * @type {com.greensock.easing.Power0}
 */
com.greensock.easing.Power0.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Power1 = function()
{
};

/**
 * @type {com.greensock.easing.Power1}
 */
com.greensock.easing.Power1.easeIn;

/**
 * @type {com.greensock.easing.Power1}
 */
com.greensock.easing.Power1.easeInOut;

/**
 * @type {com.greensock.easing.Power1}
 */
com.greensock.easing.Power1.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Power2 = function()
{
};

/**
 * @type {com.greensock.easing.Power2}
 */
com.greensock.easing.Power2.easeIn;

/**
 * @type {com.greensock.easing.Power2}
 */
com.greensock.easing.Power2.easeInOut;

/**
 * @type {com.greensock.easing.Power2}
 */
com.greensock.easing.Power2.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Power3 = function()
{
};

/**
 * @type {com.greensock.easing.Power3}
 */
com.greensock.easing.Power3.easeIn;

/**
 * @type {com.greensock.easing.Power3}
 */
com.greensock.easing.Power3.easeInOut;

/**
 * @type {com.greensock.easing.Power3}
 */
com.greensock.easing.Power3.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Power4 = function()
{
};

/**
 * @type {com.greensock.easing.Power4}
 */
com.greensock.easing.Power4.easeIn;

/**
 * @type {com.greensock.easing.Power4}
 */
com.greensock.easing.Power4.easeInOut;

/**
 * @type {com.greensock.easing.Power4}
 */
com.greensock.easing.Power4.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Quad = function()
{
};

/**
 * @type {com.greensock.easing.Quad}
 */
com.greensock.easing.Quad.easeIn;

/**
 * @type {com.greensock.easing.Quad}
 */
com.greensock.easing.Quad.easeInOut;

/**
 * @type {com.greensock.easing.Quad}
 */
com.greensock.easing.Quad.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Quart = function()
{
};

/**
 * @type {com.greensock.easing.Quart}
 */
com.greensock.easing.Quart.easeIn;

/**
 * @type {com.greensock.easing.Quart}
 */
com.greensock.easing.Quart.easeInOut;

/**
 * @type {com.greensock.easing.Quart}
 */
com.greensock.easing.Quart.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Quint = function()
{
};

/**
 * @type {com.greensock.easing.Quint}
 */
com.greensock.easing.Quint.easeIn;

/**
 * @type {com.greensock.easing.Quint}
 */
com.greensock.easing.Quint.easeInOut;

/**
 * @type {com.greensock.easing.Quint}
 */
com.greensock.easing.Quint.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Sine = function()
{
};

/**
 * @type {com.greensock.easing.Sine}
 */
com.greensock.easing.Sine.easeIn;

/**
 * @type {com.greensock.easing.Sine}
 */
com.greensock.easing.Sine.easeInOut;

/**
 * @type {com.greensock.easing.Sine}
 */
com.greensock.easing.Sine.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Strong = function()
{
};

/**
 * @type {com.greensock.easing.Strong}
 */
com.greensock.easing.Strong.easeIn;

/**
 * @type {com.greensock.easing.Strong}
 */
com.greensock.easing.Strong.easeInOut;

/**
 * @type {com.greensock.easing.Strong}
 */
com.greensock.easing.Strong.easeOut;

/**
 * @param {Object=} vars
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.RoughEase = function(vars)
{
};

/**
 * @type {com.greensock.easing.RoughEase}
 */
com.greensock.easing.RoughEase.ease;

/**
 * @param {Object=} vars
 * @returns {com.greensock.easing.RoughEase}
 */
com.greensock.easing.RoughEase.prototype.config = function(vars)
{
};

/**
 * @param {number=} linearRatio
 * @param {number=} power
 * @param {boolean=} yoyoMode
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.SlowMo = function(linearRatio, power, yoyoMode)
{
};

/**
 * @type {com.greensock.easing.SlowMo}
 */
com.greensock.easing.SlowMo.ease;

/**
 * @param {number=} linearRatio
 * @param {number=} power
 * @param {boolean=} yoyoMode
 * @returns {com.greensock.easing.SlowMo}
 */
com.greensock.easing.SlowMo.prototype.config = function(linearRatio, power, yoyoMode)
{
};

/**
 * @param {number} steps
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.SteppedEase = function(steps)
{
};

/**
 * @param {number} steps
 * @returns {com.greensock.easing.SteppedEase}
 */
com.greensock.easing.SteppedEase.config = function(steps)
{
};