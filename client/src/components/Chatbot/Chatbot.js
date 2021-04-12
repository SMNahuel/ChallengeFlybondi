import React from 'react';
import ChatBot from 'react-simple-chatbot';
const Chatbot = () => {
    return(
        <div>
            <ChatBot
            steps={[
                {
                id: 'hello-world',
                message: 'Hello World!',
                end: true,
                },
            ]}
            />
        </div>
    )
}

export default Chatbot;