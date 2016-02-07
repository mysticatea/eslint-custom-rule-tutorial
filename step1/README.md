記事 [ESLint のカスタムルールを作ろう! (その1)](http://qiita.com/mysticatea/items/cc3f648e11368799e66c) の開発環境です。
以下の手順でセットアップできます。

```:shell
$ git clone https://github.com/mysticatea/eslint-custom-rule-tutorial.git
...
$ cd eslint-custom-rule-tutorial/step1
...
$ npm install
...
```

`npm run lint`コマンドに、ESLintによる検査を登録してあります。
何も表示されないと不安なので、初期状態で「変数`foo`を使ってない」と怒られるようになっています。

```
$ npm run lint

> eslint-custom-rule-tutorial@1.0.0 lint eslint-custom-rule-tutorial/step1
> eslint .

eslint-custom-rule-tutorial/step1/hello.js
  3:5  error  "foo" is defined but never used  no-unused-vars

✖ 1 problem (1 error, 0 warnings)

...
```
