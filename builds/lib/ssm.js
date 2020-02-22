"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSecret = getSecret;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const WithDecryption = true;

async function getSecret(Name) {
  try {
    const ssm = new _awsSdk.default.SSM();
    const result = await ssm.getParameter({
      Name,
      WithDecryption
    }).promise();
    const {
      Parameter
    } = result;
    const {
      Value
    } = Parameter;
    if (!Value) throw new Error('Empty SSM Value');
    return Value;
  } catch (e) {
    throw new Error(`Could not retrieve ${Name} from SSM\n${e}`);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvc3NtLmpzIl0sIm5hbWVzIjpbIldpdGhEZWNyeXB0aW9uIiwiZ2V0U2VjcmV0IiwiTmFtZSIsInNzbSIsIkFXUyIsIlNTTSIsInJlc3VsdCIsImdldFBhcmFtZXRlciIsInByb21pc2UiLCJQYXJhbWV0ZXIiLCJWYWx1ZSIsIkVycm9yIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLElBQXZCOztBQUVPLGVBQWVDLFNBQWYsQ0FBeUJDLElBQXpCLEVBQStCO0FBQ3BDLE1BQUk7QUFDRixVQUFNQyxHQUFHLEdBQUcsSUFBSUMsZ0JBQUlDLEdBQVIsRUFBWjtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNSCxHQUFHLENBQUNJLFlBQUosQ0FBaUI7QUFBQ0wsTUFBQUEsSUFBRDtBQUFPRixNQUFBQTtBQUFQLEtBQWpCLEVBQXlDUSxPQUF6QyxFQUFyQjtBQUVBLFVBQU07QUFBQ0MsTUFBQUE7QUFBRCxRQUFjSCxNQUFwQjtBQUNBLFVBQU07QUFBQ0ksTUFBQUE7QUFBRCxRQUFVRCxTQUFoQjtBQUVBLFFBQUksQ0FBQ0MsS0FBTCxFQUNFLE1BQU0sSUFBSUMsS0FBSixDQUFVLGlCQUFWLENBQU47QUFFRixXQUFPRCxLQUFQO0FBQ0QsR0FYRCxDQVdFLE9BQU9FLENBQVAsRUFBVTtBQUNWLFVBQU0sSUFBSUQsS0FBSixDQUFXLHNCQUFxQlQsSUFBSyxjQUFhVSxDQUFFLEVBQXBELENBQU47QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFXUyBmcm9tICdhd3Mtc2RrJ1xuXG5jb25zdCBXaXRoRGVjcnlwdGlvbiA9IHRydWVcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlY3JldChOYW1lKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3NtID0gbmV3IEFXUy5TU00oKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNzbS5nZXRQYXJhbWV0ZXIoe05hbWUsIFdpdGhEZWNyeXB0aW9ufSkucHJvbWlzZSgpXG5cbiAgICBjb25zdCB7UGFyYW1ldGVyfSA9IHJlc3VsdFxuICAgIGNvbnN0IHtWYWx1ZX0gPSBQYXJhbWV0ZXJcblxuICAgIGlmICghVmFsdWUpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtcHR5IFNTTSBWYWx1ZScpXG5cbiAgICByZXR1cm4gVmFsdWVcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IHJldHJpZXZlICR7TmFtZX0gZnJvbSBTU01cXG4ke2V9YClcbiAgfVxufVxuIl19
//# sourceMappingURL=ssm.js.map