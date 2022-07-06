import React from 'react';
import { ReactComponent as CompanyIcon } from './assets/crown.svg';

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const App = () => {
    return (
        <WhatsAppWidget
            message={`Hello! 👋🏼 \n\nWhat can we do for you?`}
            phoneNumber=""
        />
    );
};

export default App;
