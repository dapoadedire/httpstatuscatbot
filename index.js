require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const levenshtein = require('js-levenshtein');

console.log('Initializing bot...');

// Replace YOUR_TOKEN_HERE with the token provided by BotFather.
const BOT_TOKEN = process.env.BOT_TOKEN;
const API_URL = 'https://http.cat/';

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

console.log('Bot initialized successfully.');

const httpResponses = [
    '100', '101', '200', '201', '202', '204', '206', '207', '300', '301', '302', '303', '304', '305', '307', '400', '401', '402', '403', '404', '405', '406', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418', '420', '422', '423', '424', '425', '426', '429', '431', '444', '450', '451', '499', '500', '501', '502', '503', '504', '506', '507', '508', '509', '510', '511', '599'
];

console.log(`HTTP responses loaded: ${httpResponses}`);

function handleStartCommand(msg) {
    bot.sendMessage(msg.chat.id, 'Welcome to the HTTP Cat Bot! \n\nTo use this bot, simply send me an HTTP response code and I will send you a corresponding cat image. For example, send "/404" and I will send you a cat image that represents the "Not Found" error. \n\nIf you\'re not sure what HTTP response code to send, you can try sending me a random number and I will try my best to find a cat image that matches it.\n\nTo get a list of all available HTTP status codes, send "/list".\n\nEnjoy and have fun! 🐱');
    console.log(`Received /start command from user ${msg.from.username}`);
}

function handleListCommand(msg) {
    bot.sendMessage(msg.chat.id, `These are some of the HTTP response codes I know: \n\n${httpResponses.map(responseCode => `/${responseCode}`).join('\n')}\n\nIf you're not sure what HTTP response code to use, you can try sending me a random number and I will try my best to find a cat image that matches it.`);
    console.log(`Received /list command from user ${msg.from.username}`);
}

function handleValidHttpResponse(msg, responseCode) {
    console.log(`Received request for HTTP response code ${responseCode}`);
    bot.sendMessage(msg.chat.id, `Here's your cat for HTTP response code ${responseCode}. Thanks for using HTTP Status Cat Bot! 🐱`);
    bot.sendPhoto(msg.chat.id, `${API_URL}${responseCode}.jpg`);
    console.log(`Sent cat image for HTTP response code ${responseCode}`);
}

function handleUnknownHttpResponse(msg, responseCode) {
    const similarResponses = httpResponses.filter(r => levenshtein(r, responseCode) < 2);
    if (similarResponses.length > 0) {
        bot.sendMessage(msg.chat.id, `I don't know that HTTP response code. Did you mean ${similarResponses.map(r => `/${r}`).join(' or ')}?`);
        console.log(`Unknown HTTP response code ${responseCode}`);
    } else {
        bot.sendMessage(msg.chat.id, `I don't know that HTTP response code. Send "/list" to get a list of all available HTTP response codes

.`);
        console.log(`Unknown HTTP response code ${responseCode}`);
    }
}

bot.on('message', (msg) => {
    const message = msg.text;

    if (message.startsWith('/')) {
        if (message === '/start') {
            handleStartCommand(msg);
        } else if (message === '/list') {
            handleListCommand(msg);
        } else if (httpResponses.includes(message.slice(1))) {
            handleValidHttpResponse(msg, message.slice(1));
        } else {
            handleUnknownHttpResponse(msg, message.slice(1));
        }
    } else {
        handleUnknownHttpResponse(msg, message);
    }
}
);

console.log('Bot is now listening for messages.');

