# react-whatsapp-widget

> WhatsApp chat widget for your website

[![NPM](https://img.shields.io/npm/v/react-whatsapp-widget.svg)](https://www.npmjs.com/package/react-whatsapp-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Custom settings](https://i.ibb.co/kDSbsXb/Screen-Shot-2020-10-29-at-02-01-31.png)

## What is this?

This is a very simple floating WhatsApp button widget. Due to the impact of covid-19 in 2020, most small businesses had to move to an online presence. One of the wey to improve communication with your customers is using a widget like this.

It adds a floating-like button to your site that calls the WhatsApp Chat API.

It will automatically begin a WhatsApp chat to the number you configure and the text the user writes.

All texts are fully customizable and also you can provide an icon/logo.

## Install

```bash
npm install --save react-whatsapp-widget
```

## Usage

```jsx
import React from 'react';
// This is the way to import an SVG file and then pass it as a props
import { ReactComponent as CompanyIcon } from './assets/crown.svg';

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const App = () => {
    return (
        <WhatsAppWidget CompanyIcon={CompanyIcon} phoneNumber="XXXXXXXXXX" />
    );
};
```

⚠️ Where the `phoneNumber` is a full phone number in international format. Omit any zeroes, brackets, or dashes when adding the phone number in international format.

Example: `541112222222` where 54 is the Argentina internacional code.

## Customization

| option        | value       | default                                   | description                                                                                                  |
| ------------- | ----------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| phoneNumber   | `string`    | `''`                                      | WhatsApp [intenational number](https://faq.whatsapp.com/en/general/21016748) which will receive the message. |
| CompanyIcon   | `Component` | `BiSupport`                               | Your company SVG icon                                                                                        |
| companyName   | `string`    | `'Support'`                               | Your company name                                                                                            |
| replyTimeText | `string`    | `'Typically replies within a day'`        |
| message       | `string`    | `'Hello! 👋🏼 \n\nWhat can we do for you?'` | With `\n` you can create a break-line.                                                                       |
| sendButton    | `string`    | `'Send'`                                  | Text inside the send button                                                                                  |
| open          | `boolean`   | `false`                                   | If **true** the chatbox will be open as default                                                              |

## Contributing

After cloning the repository, you have to run the following commands in two different terminal tabs to start the development environment.

```
cd react-whatsapp-widget
npm install
npm start
```

```
cd react-whatsapp-widget/example
npm install
npm start
```

The first command watches the src/ and recompiles it into the dist/ folder when you make changes.

The second command runs the example app that links to your local package.

🚀 **Pull requests are welcome!**

## License

MIT © [ann0nip](https://github.com/ann0nip)
