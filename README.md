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

[リッチメニューを作成するツールを選択する](https://developers.line.biz/ja/docs/messaging-api/using-rich-menus/#%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB)

* LINE Official Account Manager
  * URLリンクなど単純なものしか設定できない
* Messaging API
  * postback actionなどカスタマイズできる

Messaging APIから設定する ↓
```bash
curl -v -X POST https://api.line.me/v2/bot/richmenu \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
  "size":{
      "width":2500,
      "height":843
  },
  "selected": false,
  "name": "LINE Developers Info",
  "chatBarText": "Tap to open",
  "areas": [
      {
          "bounds": {
              "x": 0,
              "y": 0,
              "width": 2500,
              "height": 843
          },
          "action": {
               "type": "postback",
               "data": "sample=hoge"
           }
      }
  ]
}'
```
↓
```
{"richMenuId":"richmenu-XXXX"}
```

```bash
curl -v -X POST https://api-data.line.me/v2/bot/richmenu/richmenu-XXXX/content \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: image/png" \
-T richmenu-template-guide-05.png
```
↓
```bash
curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/richmenu-XXXX \
-H "Authorization: Bearer {channel access token}"
```

## memo

* [line messaging api](https://developers.line.biz/ja/reference/messaging-api/)
