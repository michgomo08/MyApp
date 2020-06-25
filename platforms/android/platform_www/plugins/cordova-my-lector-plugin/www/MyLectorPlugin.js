cordova.define("cordova-my-lector-plugin.MyLectorPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MyLectorPlugin', 'coolMethod', [arg0]);
};

});
