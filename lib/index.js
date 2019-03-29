"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetch = require('node-fetch');

exports.getOrganisation = function (orgName) {
  return fetch("https://api.github.com/orgs/".concat(orgName)).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json;
  }).catch(function (e) {
    error: e;
  });
};

exports.getOrganization = exports.getOrganisation;

exports.getPublicUsersFromOrg =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(orgName, cb) {
    var org, publicMembersUrl;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return exports.getOrganisation(orgName);

          case 2:
            org = _context.sent;
            _context.prev = 3;
            publicMembersUrl = org.public_members_url.replace(/{.*}/g, '');
            return _context.abrupt("return", fetch(publicMembersUrl).then(function (res) {
              return res.json();
            }).then(function (json) {
              return cb(null, json);
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", cb(_context.t0, null));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
