"use strict";

var RuleTester = require("eslint").RuleTester;
var tester = new RuleTester();

tester.run("no-literal-call", require("../rule/no-literal-call"), {
    valid: [
        {code: "foo();"},
        {code: "obj.foo();"},
        {code: "(function() {})();"},
        {code: "(() => 0)();", env: {es6: true}}
    ],
    invalid: [
        {code: "true();", errors: ["This is not a function."]},
        {code: "false();", errors: ["This is not a function."]},
        {code: "null();", errors: ["This is not a function."]},
        {code: "100();", errors: ["This is not a function."]},
        {code: "\"hello\"();", errors: ["This is not a function."]},
        {code: "/abc/();", errors: ["This is not a function."]},
        {code: "[1,2,3]();", errors: ["This is not a function."]},
        {code: "({foo: 0})();", errors: ["This is not a function."]},
        {code: "`hello`();", env: {es6: true}, errors: ["This is not a function."]},
        {code: "(class A {})();", env: {es6: true}, errors: ["Class constructors cannot be invoked without 'new'."]}
    ]
});
