'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultOnSSR = function DefaultOnSSR() {
  return _react2.default.createElement('span', null);
};

var NoSSR = function (_React$Component) {
  (0, _inherits3.default)(NoSSR, _React$Component);

  function NoSSR() {
    var _ref;

    (0, _classCallCheck3.default)(this, NoSSR);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = NoSSR.__proto__ || (0, _getPrototypeOf2.default)(NoSSR)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      canRender: false
    };
    return _this;
  }

  (0, _createClass3.default)(NoSSR, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ canRender: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          _props$onSSR = _props.onSSR,
          onSSR = _props$onSSR === undefined ? _react2.default.createElement(DefaultOnSSR, null) : _props$onSSR;
      var canRender = this.state.canRender;


      return canRender ? children : onSSR;
    }
  }]);
  return NoSSR;
}(_react2.default.Component);

exports.default = NoSSR;