# ルーティング設計


## ページ

アドレス              | 説明     
--------------------|-----------------------------
/                   | ルート
/login              | ログイン画面
/stream             | メインストリーム
/stream/:hash       | カスタムストリーム
/recommend_stream   | おすすめのストリーム一覧

## 部分テンプレート

アドレス        | 説明     
------------- |-----------------------------
N/A           | N/A

## API

アドレス            |  メソッド      | 説明     
------------------|:------------:|-----------------------------
_/                | GET          | APIルート
_/authentication  | POST         | ログイン処理
_/post            | POST         | 投稿
_/notification    | POST         | 通知の取得
_/nc              | POST         | 新しい通知がないかチェックする
_/mar             | POST         | 通知をすべて既読
_/pc              | POST         | 新しい投稿がないかチェック
_/watch           | POST(commet) | 新しい投稿や通知がないかをストリーミングで監視を行う 
_/is_login        | POST         | ログインしている場合は、1 が返る
_/ 



