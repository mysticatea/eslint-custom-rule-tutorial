記事 [ESLint のカスタムルールを作ろう! (その2)](http://qiita.com/mysticatea/items/ad56371fa9e17dccac46) の開発環境です。
以下の手順でセットアップできます。

```:shell
$ git clone https://github.com/mysticatea/eslint-custom-rule-tutorial.git
...
$ cd eslint-custom-rule-tutorial/step2
...
$ npm install
...
```

`npm run lint`コマンドに、ESLintによる検査を登録してあります。
何も表示されないと不安なので、初期状態で「変数`foo`を使ってない」等と怒られるようになっています。

```
$ npm run lint

> eslint-custom-rule-tutorial@1.0.0 lint eslint-custom-rule-tutorial/step2
> eslint .

eslint-custom-rule-tutorial/step2/hello.js
  3:5   error  "foo" is defined but never used  no-unused-vars
  3:11  error  This is not a function           no-literal-call

eslint-custom-rule-tutorial/step2/spaced-dot.js
  3:13  error  "foo" is not defined  no-undef

✖ 3 problems (3 errors, 0 warnings)

...
```
