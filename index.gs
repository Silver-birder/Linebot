function doPost(e) {  
  var events = JSON.parse(e.postData.contents).events;
  events.forEach(function(event) {
    if(event.type == "message") {
      Logger.log("Catch the message event");
      reply(event);
    }
  });
}

function reply(e) {
  var channel_access_token = "<YOUR_CHANNEL_ACCESS_TOKEN>";
  // @see https://developers.line.biz/ja/reference/messaging-api/#buttons
  var message = {
    "replyToken" : e.replyToken,
    "messages" : [
      {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
          "type": "buttons",
          "thumbnailImageUrl": "https://example.com/bot/images/image.jpg",
          "imageAspectRatio": "rectangle",
          "imageSize": "cover",
          "imageBackgroundColor": "#FFFFFF",
          "title": "Menu",
          "text": "Please select",
          "defaultAction": {
            "type": "uri",
            "label": "View detail",
            "uri": "http://example.com/page/123"
          },
          "actions": [
            {
              "type": "postback",
              "label": "Buy",
              "data": "action=buy&itemid=123"
            },
            {
              "type": "postback",
              "label": "Add to cart",
              "data": "action=add&itemid=123"
            },
            {
              "type": "uri",
              "label": "View detail",
              "uri": "http://example.com/page/123"
            }
          ]
        }
      }
    ]
  };
  
  var replyData = {
    "method" : "post",
    "headers" : {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + channel_access_token,
    },
    "payload" : JSON.stringify(message)
  };
  Logger.log(replyData);
  var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", replyData);
  return response.getResponseCode();
}
