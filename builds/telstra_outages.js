"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkTelstra = checkTelstra;

var _axios = _interopRequireDefault(require("axios"));

var _ssm = require("./lib/ssm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function checkTelstra() {
  const validateStatus = status => status === 200;

  const address = await (0, _ssm.getSecret)('/outage/telstra/address');
  const url = `https://outages.telstra.com/api/fixed?address=${address}`;
  const {
    data
  } = await _axios.default.get(url, {
    timeout: 60000,
    validateStatus
  });
  const connectionType = 'Cable';
  return Object.values(data.serviceStatus).filter(outage => outage.name === connectionType);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZWxzdHJhX291dGFnZXMuanMiXSwibmFtZXMiOlsiY2hlY2tUZWxzdHJhIiwidmFsaWRhdGVTdGF0dXMiLCJzdGF0dXMiLCJhZGRyZXNzIiwidXJsIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwidGltZW91dCIsImNvbm5lY3Rpb25UeXBlIiwiT2JqZWN0IiwidmFsdWVzIiwic2VydmljZVN0YXR1cyIsImZpbHRlciIsIm91dGFnZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVPLGVBQWVBLFlBQWYsR0FBOEI7QUFFbkMsUUFBTUMsY0FBYyxHQUFHQyxNQUFNLElBQUlBLE1BQU0sS0FBSyxHQUE1Qzs7QUFDQSxRQUFNQyxPQUFPLEdBQUcsTUFBTSxvQkFBVSx5QkFBVixDQUF0QjtBQUNBLFFBQU1DLEdBQUcsR0FBSSxpREFBZ0RELE9BQVEsRUFBckU7QUFFQSxRQUFNO0FBQUNFLElBQUFBO0FBQUQsTUFBUyxNQUFNQyxlQUFNQyxHQUFOLENBQVVILEdBQVYsRUFBZTtBQUFDSSxJQUFBQSxPQUFPLEVBQUUsS0FBVjtBQUFpQlAsSUFBQUE7QUFBakIsR0FBZixDQUFyQjtBQUVBLFFBQU1RLGNBQWMsR0FBRyxPQUF2QjtBQUVBLFNBQU9DLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixJQUFJLENBQUNPLGFBQW5CLEVBQ0pDLE1BREksQ0FDSUMsTUFBRCxJQUFZQSxNQUFNLENBQUNDLElBQVAsS0FBZ0JOLGNBRC9CLENBQVA7QUFHRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7Z2V0U2VjcmV0fSBmcm9tICcuL2xpYi9zc20nXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1RlbHN0cmEoKSB7XG5cbiAgY29uc3QgdmFsaWRhdGVTdGF0dXMgPSBzdGF0dXMgPT4gc3RhdHVzID09PSAyMDBcbiAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IGdldFNlY3JldCgnL291dGFnZS90ZWxzdHJhL2FkZHJlc3MnKVxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9vdXRhZ2VzLnRlbHN0cmEuY29tL2FwaS9maXhlZD9hZGRyZXNzPSR7YWRkcmVzc31gXG5cbiAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge3RpbWVvdXQ6IDYwMDAwLCB2YWxpZGF0ZVN0YXR1c30pXG5cbiAgY29uc3QgY29ubmVjdGlvblR5cGUgPSAnQ2FibGUnXG5cbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZGF0YS5zZXJ2aWNlU3RhdHVzKVxuICAgIC5maWx0ZXIoKG91dGFnZSkgPT4gb3V0YWdlLm5hbWUgPT09IGNvbm5lY3Rpb25UeXBlKVxuXG59XG5cbiJdfQ==
//# sourceMappingURL=telstra_outages.js.map