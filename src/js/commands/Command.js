"use strict";

/**
 * Usage example:
 *
 * <code>
 * var MyCommand = function (val) {
 *     this.val = val;
 * }
 * _.extend(MyCommand.prototype, Command.prototype, {
 *     operation: function (resolve, reject) {
 *         ... do stuff ...
 *         resolve(this.val)
 *     }
 * });
 *
 * return MyCommand;
 * </code>
 *
 * This would then be used by the consumer like this:
 *
 * <code>
 * const cmd = new MyCommand(value);
 * cmd.execute()
 *     .then(function () {
 *         return new AnotherCommand(value).execute();
 *     })
 *     .then(function (val) {
 *         logger.log(val)
 *     })
 *     .catch(function (err) {
 *         logger.error(err);
 *     })
 * </code>
 */
function Command () {}

/**
 * Wraps the Command's operation in a Promise.
 * @return {Promise}
 */
Command.prototype.execute = function () {
    return new Promise(function() {
        this.operation.apply(this, arguments);
    }.bind(this));
};

module.exports = Command;
