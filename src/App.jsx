import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { FiSend, FiImage, FiMic } from 'react-icons/fi';
import ChatMessage from './components/ChatMessage';
import InputBox from './components/InputBox';
import { GoogleGenerativeAI } from '@google/generative-ai';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Ici, vous ajouterez l'appel à l'API Google AI
      const response = "Ceci est une réponse simulée de l'API Google AI";
      
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 flex flex-col">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-lg p-6 max-w-4xl mx-auto w-full flex-grow flex flex-col"
      >
        <div className="flex-grow overflow-auto space-y-4 mb-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        
        <InputBox
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </motion.div>
    </div>
  );
}

export default App;
