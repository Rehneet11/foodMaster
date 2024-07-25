import { BotMessageSquare } from "lucide-react";
import React, { useState } from "react";

interface ChatMessage {
    sender: string;
    content: string;
}

const Chatbot: React.FC = () => {
    const [showChatbot, setShowChatbot] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { sender: "Bot", content: "Welcome to FoodMaster 😍😊" }
    ]);
    

    const toggleChatbotPanel = () => {
        setShowChatbot(!showChatbot);
        
    };

    const sendMessage = () => {
        const userInput = (document.getElementById(
            "user-input"
        ) as HTMLInputElement).value.trim();
        if (userInput !== "") {
            setMessages([
                ...messages,
                { sender: "You", content: userInput }
            ]);
            
            setMessages([
                ...messages,
                { sender: "Bot", content: "Coming Soon 🤘🚀" }
            ]);
            (document.getElementById(
                "user-input"
            ) as HTMLInputElement).value = "";
        }
    };

    return (
        <div>
            {!showChatbot &&(
            <div
                className="fixed bottom-4 right-4 z-10 cursor-pointer"
                onClick={toggleChatbotPanel}
            >
                <div className="bg-black p-2 rounded-lg">
                <BotMessageSquare className="text-green-500 text-2xl "/>
                </div>
            </div>
            )}

            {showChatbot && (
                <div className="fixed bottom-0 right-0 w-80 h-96 bg-gray-200 border-t-2 border-black border-solid rounded-tl-lg flex flex-col">
                    <div className="bg-gray-800 text-white p-2 flex justify-between rounded-tl-lg">
                        <h2>Customer Support</h2>
                        <button onClick={toggleChatbotPanel}>Close</button>
                    </div>
                    <div className="overflow-y-auto p-2 flex-grow">
                        {messages.map((message, index) => (
                            <div key={index}>
                                <strong>{message.sender}:</strong>{" "}
                                {message.content}
                            </div>
                        ))}
                    </div>
                    <div className="p-2 flex justify-between items-center">
                        <input
                            id="user-input"
                            type="text"
                            placeholder="Type your message..."
                            className="flex-grow p-2 border border-gray-300 rounded-l-lg"
                        />
                        <button
                            onClick={sendMessage}
                            className="px-4 py-2 bg-green-800 text-white rounded-r-lg"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
