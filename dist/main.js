(function(graph){
        function require(module){
            function PathRequire(relativePath){
               return require(graph[module].dependencies[relativePath])
            }
            const exports = {};
            (function(require,exports,code){
               eval(code) 
            })(PathRequire,exports,graph[module].code)
            return exports;
        }
        require('./src/index.js')
    })({"./src/index.js":{"dependencies":{"./a.js":"./src\\a.js"},"code":"\"use strict\";\n\nvar _a = require(\"./a.js\");\n\nconsole.log(\"E:\\\\study project\\\\webpack_share\\\\my-webpack\\\\lib\\\\src\\\\index.js\");\nconsole.log(\"hello \".concat(_a.str));"},"./src\\a.js":{"dependencies":{"./b.js":"./src\\b.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.str = void 0;\n\nvar _b = require(\"./b.js\");\n\nconsole.log(\"E:\\\\study project\\\\webpack_share\\\\my-webpack\\\\lib\\\\src\\\\a.js\");\n/*\n* Author: yuanzhirong\n* Date: 2021-07-28 11:10:24\n* LastEditors: yuanzhirong\n* LastEditTime: 2021-07-28 14:56:51\n* Description: \n*/\n\nvar str = \"webpack \".concat(_b.str2);\nexports.str = str;"},"./src\\b.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.str2 = void 0;\nconsole.log(\"E:\\\\study project\\\\webpack_share\\\\my-webpack\\\\lib\\\\src\\\\b.js\");\nvar str2 = \"!!!\";\nexports.str2 = str2;"}})