# Linebot

## Setup

▽ 1. Linebot用Channel作成
https://developers.line.biz/

▽ 2. LinebotのWebhook用Google Apps Script準備

コードは、index.gs を参照 (channel_access_tokenが必要)

Google Apps Script > 公開 > ウェブアプリケーションとして導入

```
Who has access to the app:
→ Anyone, even anonymous 
```

公開URL
https://script.google.com/macros/s/.../exec

▽ 3. LinebotのWebhookに公開URLを設定

▽ 4. 細かいこと

LINE Official Account Manager に行き、

設定 > 応答設定 > 詳細設定 > 応答メッセージ
オンからオフに変更

（これがオンになっていると、Webhookではなく、Lineデフォルトメッセージが返却される）

▽ 5. リッチメニュー

https://manager.line.biz/account

リッチメニュー より設定

## memo

* [line messaging api](https://developers.line.biz/ja/reference/messaging-api/)
