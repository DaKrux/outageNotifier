"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessage = sendMessage;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _ssm = require("./lib/ssm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sns = new _awsSdk.default.SNS();

async function sendMessage(message) {
  if (message.length === 0) return;
  const topic = await (0, _ssm.getSecret)('/outage/telstra/snstopic');
  await sns.publish({
    Message: JSON.stringify(message),
    TopicArn: topic
  }).promise();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZW5kX2FsZXJ0LmpzIl0sIm5hbWVzIjpbInNucyIsIkFXUyIsIlNOUyIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsImxlbmd0aCIsInRvcGljIiwicHVibGlzaCIsIk1lc3NhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiVG9waWNBcm4iLCJwcm9taXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsSUFBSUMsZ0JBQUlDLEdBQVIsRUFBWjs7QUFFTyxlQUFlQyxXQUFmLENBQTJCQyxPQUEzQixFQUFvQztBQUV6QyxNQUFJQSxPQUFPLENBQUNDLE1BQVIsS0FBbUIsQ0FBdkIsRUFDRTtBQUVGLFFBQU1DLEtBQUssR0FBRyxNQUFNLG9CQUFVLDBCQUFWLENBQXBCO0FBRUEsUUFBTU4sR0FBRyxDQUFDTyxPQUFKLENBQVk7QUFBQ0MsSUFBQUEsT0FBTyxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sT0FBZixDQUFWO0FBQW1DTyxJQUFBQSxRQUFRLEVBQUVMO0FBQTdDLEdBQVosRUFBaUVNLE9BQWpFLEVBQU47QUFFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBV1MgZnJvbSAnYXdzLXNkaydcbmltcG9ydCB7Z2V0U2VjcmV0fSBmcm9tICcuL2xpYi9zc20nXG5cbmNvbnN0IHNucyA9IG5ldyBBV1MuU05TKClcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcblxuICBpZiAobWVzc2FnZS5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgdG9waWMgPSBhd2FpdCBnZXRTZWNyZXQoJy9vdXRhZ2UvdGVsc3RyYS9zbnN0b3BpYycpXG5cbiAgYXdhaXQgc25zLnB1Ymxpc2goe01lc3NhZ2U6IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCBUb3BpY0FybjogdG9waWN9KS5wcm9taXNlKClcblxufVxuXG4iXX0=
//# sourceMappingURL=send_alert.js.map