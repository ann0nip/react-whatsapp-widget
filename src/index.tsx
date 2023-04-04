import React from "react";
import App from "./components/app/app.component";

import { ChatProvider } from "./contexts/chat.context";

export const WhatsAppWidget = (props: any): JSX.Element => {
  return (
    <ChatProvider>
      <App {...props} />
    </ChatProvider>
  );
};
