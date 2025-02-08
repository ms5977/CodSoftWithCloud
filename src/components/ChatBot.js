import { useState } from "react";
import { motion } from "framer-motion";
import { FaComments, FaTimes, FaRobot, FaUser, FaPaperPlane } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const responses = {
    hello: "Hello there! 😊 How can I help you today?",
    hii: "Hii! 👋 How's your day going?",
    "how are you": "I'm just a chatbot, but I'm feeling great! 🚀",
    "what is your name": "I am ChatGPT Bot, your friendly assistant! 🤖",
    "what do you do": "I help users with information, coding, and fun conversations! 😃",
    "tell me a joke": "Why don’t programmers like nature? It has too many bugs! 😆",
    bye: "Goodbye! Have a fantastic day! 👋",
    default: "Oops! I didn't understand that. Can you rephrase? 🤔",
};

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages([...messages, userMessage]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = responses[input.toLowerCase()] || responses.default;
            const botMessage = { role: "bot", content: botResponse };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div
            className="chatbot-container d-flex flex-column align-items-end"
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                zIndex: 1000,
            }}
        >
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-primary rounded-circle p-3 shadow-lg"
            >
                {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
            </motion.button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white shadow-lg border border-secondary rounded-lg p-2 mt-2"
                    style={{ width: "300px", height: "350px" }}
                >
                    <div className="bg-primary text-white p-3 d-flex justify-content-between align-items-center rounded-top">
                        <span>Chatbot 🤖</span>
                        <button className="btn btn-sm btn-light" onClick={() => setIsOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>

                    <div className="p-2 overflow-auto" style={{ height: "250px" }}>
                        {messages.map((msg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: msg.role === "user" ? 50 : -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className={`d-flex align-items-center my-2 ${msg.role === "user" ? "justify-content-end" : "justify-content-start"}`}
                            >
                                {msg.role === "bot" && <FaRobot className="text-primary me-2" />}
                                <div className={`p-2 rounded ${msg.role === "user" ? "bg-primary text-white" : "bg-light text-dark"}`}>
                                    {msg.content}
                                </div>
                                {msg.role === "user" && <FaUser className="text-secondary ms-2" />}
                            </motion.div>
                        ))}

                        {isTyping && <div className="text-muted">Chatbot is typing...</div>}
                    </div>

                    <div className="d-flex border-top p-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button className="btn btn-primary ms-2" onClick={sendMessage}>
                            <FaPaperPlane />
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Chatbot;