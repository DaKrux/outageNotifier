"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outageHandler = void 0;

require("source-map-support/register");

var _telstra_outages = require("./telstra_outages");

var _send_alert = require("./send_alert");

const outageHandler = async () => {
  const telstra = await (0, _telstra_outages.checkTelstra)();
  await (0, _send_alert.sendMessage)(telstra);
};

exports.outageHandler = outageHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJvdXRhZ2VIYW5kbGVyIiwidGVsc3RyYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVPLE1BQU1BLGFBQWEsR0FBRyxZQUFhO0FBRXhDLFFBQU1DLE9BQU8sR0FBRyxNQUFNLG9DQUF0QjtBQUNBLFFBQU0sNkJBQVlBLE9BQVosQ0FBTjtBQUVELENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcidcbmltcG9ydCB7Y2hlY2tUZWxzdHJhfSBmcm9tICcuL3RlbHN0cmFfb3V0YWdlcydcbmltcG9ydCB7c2VuZE1lc3NhZ2V9IGZyb20gJy4vc2VuZF9hbGVydCdcblxuZXhwb3J0IGNvbnN0IG91dGFnZUhhbmRsZXIgPSBhc3luYyAoKSA9PiAge1xuXG4gIGNvbnN0IHRlbHN0cmEgPSBhd2FpdCBjaGVja1RlbHN0cmEoKVxuICBhd2FpdCBzZW5kTWVzc2FnZSh0ZWxzdHJhKVxuXG59XG4iXX0=
//# sourceMappingURL=index.js.map