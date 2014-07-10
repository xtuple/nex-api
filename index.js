'use strict';

// remove cwd craziness when this is fixed:
// https://github.com/joyent/node/issues/7824
global.cwd = process.cwd();

var nex = module.exports = {

  id: function (version, name) {
    return name + (version ? ('@' + version) : '');
  },

  toField: function (field) {
    return 'nex-'+ field.replace(/[_.-](\w|$)/g, function (_, x) {
      return x.toUpperCase();
    });
  },

  toNpm: function (field) {
    return 'nex-'+ field.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();
  },

  Handler: function (field) {
    this.log = require('npmlog');
    this.log.heading = field;

    this.do = function (field, pkg) {
      throw new Error('Handler.do must be overridden');
    };

    this.undo = function (field, pkg) {
      throw new Error('Handler.undo must be overridden');
    };
  }
};
