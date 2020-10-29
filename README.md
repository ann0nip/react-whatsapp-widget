# react-whatsapp-widget

> WhatsApp chat widget for your website

[![NPM](https://img.shields.io/npm/v/react-whatsapp-widget.svg)](https://www.npmjs.com/package/react-whatsapp-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Custom settings](https://i.ibb.co/kDSbsXb/Screen-Shot-2020-10-29-at-02-01-31.png)

## What is this?

This is a very simple floating WhatsApp button widget. In the current situation with the pandemic 2020 events, most of the small businesses have to move to online presence. A wey to short the communication with your customers is using a widget like this.

It adds a floating-like button to your site that calls the WhatsApp Chat API.

It will automatically begin a WhatsApp chat to the number that you configure and with the text that the user writes.

All texts are fully customizable.

## Install

```bash
npm install --save react-whatsapp-widget
```

## Usage

```jsx
import React from 'react'

import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const App = () => {
  return <WhatsAppWidget phoneNumber='XXXXXXXX' />
}

export default App
```

⚠️ Where the `phoneNumber` is a full phone number in international format. Omit any zeroes, brackets, or dashes when adding the phone number in international format.

Example: `54222222` where 54 is the Argentina internacional code.

## Customization

| option        | value    | default                                   | description                                                                                                  |
| ------------- | -------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| phoneNumber   | `string` | `''`                                      | WhatsApp [intenational number](https://faq.whatsapp.com/en/general/21016748) which will receive the message. |
| textReplyTime | `string` | `'Typically replies within a day'`        |
| message       | `string` | `'Hello! 👋🏼 \n\nWhat can we do for you?'` | With `\n` you can create a break-line.                                                                       |
| companyName   | `string` | `'Support'`                               | Your company name?)                                                                                          |
| sendButton    | `string` | `Send`                                    | Text inside the send button                                                                                  |

## License

MIT © [ann0nip](https://github.com/ann0nip)
