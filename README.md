# [HTTP Status Cat Bot](https://t.me/httpstatuscatsbot)

This Telegram bot sends cute cat images for HTTP response codes.

## How to Use

- To use the bot, go to [t.me/httpstatuscatsbot](https://t.me/httpstatuscatsbot) in Telegram.
- Search for the bot on Telegram using the handle @http_status_cat_bot.
- Start a chat with the bot by sending a message to it.
- To get a cat image for an HTTP response code, send the code to the bot preceded by a forward slash (/). For example, send "/404" to get a cat image for the "Not Found" error.
- If you're not sure what HTTP response code to send, you can try sending the bot a random number and it will try its best to find a cat image that matches it.
- To get a list of all available HTTP response codes, send "/list" to the bot.

## How It Works

The HTTP Status Cat Bot is built using Node.js and the node-telegram-bot-api library. When you send an HTTP response code to the bot, it uses the HTTP Cats API to retrieve a cat image corresponding to the code and sends it back to you.

If you send an unknown HTTP response code, the bot will try to find a similar code and suggest it to you. If it can't find any similar codes, it will send you a message asking you to send "/list" to get a list of all available HTTP response codes.

### Some Supported HTTP Response Codes

- 200
- 201
- 204
- 301
- 302
- 304
- 400
- 401
- 403
- 404
- 405
- 409
- 500
- 503

Screenshot:
![Screenshot from 2023-04-13 21 35 33](https://user-images.githubusercontent.com/95668340/231879677-643601e9-d0cc-4bfa-af9a-bae6a3a57a49.png)

## How to Run

## Contributions

Contributions to this project are welcome! If you find a bug or have a suggestion for an improvement, please open an issue or submit a pull request.
