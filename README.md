
# openapi-genarator

- これは、API仕様書から色々なものを生成するためのツール

## 使い方

### 事前準備

- Step 1. yarnコマンドを使用できるようにしておく
  - [Macでyarnをインストールする方法 \| Awesome Blog](https://awesome-linus.com/2019/04/11/mac-yarn-install/)

- Step 2. javaの環境構築
  ```
  # installする
  brew install openjdk

  # pathを通す
  sudo ln -sfn /usr/local/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk

  # ログインシェルに記載する
  export JAVA_HOME=`/usr/libexec/java_home -v xx`
  ```

- 参考サイトは以下
  - [HomebrewでインストールできるJDKまとめ（2019年11月時点） \- Qiita](https://qiita.com/gishi_yama/items/ee3526e7e7a922148333)



