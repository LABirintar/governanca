
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Audience, ChatMessage } from '../types';
import { runChat } from '../services/geminiService';

interface ChatAssistantProps {
  audience: Audience;
  assistantName: string;
  assistantColor: string;
}

const SendIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
);


const ChatAssistant: React.FC<ChatAssistantProps> = ({ audience, assistantName, assistantColor }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  const handleSend = useCallback(async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await runChat(input, audience);
      const modelMessage: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { role: 'model', text: 'Houve um problema ao conectar com o assistente.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, audience]);
  
  const assistantInitial = assistantName.charAt(0).toUpperCase();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 h-[28rem] sm:w-96 sm:h-[32rem] bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col transition-all duration-300 animate-slide-up">
          <header className={`flex items-center justify-between p-4 rounded-t-2xl text-white`} style={{ backgroundColor: assistantColor }}>
            <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white text-lab-dark flex items-center justify-center font-bold mr-3">{assistantInitial}</div>
                <h3 className="font-bold text-lg">{assistantName}</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="font-bold text-2xl leading-none">&times;</button>
          </header>

          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-2.5 my-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                 {msg.role === 'model' && (
                     <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-lab-dark" style={{ backgroundColor: `${assistantColor}33`}}>
                        {assistantInitial}
                     </div>
                 )}
                <div className={`p-3 rounded-xl max-w-xs ${msg.role === 'user' ? 'bg-lab-blue/80 text-black rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
             {isLoading && (
                <div className="flex items-start gap-2.5 my-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-lab-dark" style={{ backgroundColor: `${assistantColor}33`}}>
                        {assistantInitial}
                    </div>
                    <div className="p-3 rounded-xl bg-gray-100 rounded-bl-none">
                        <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
	                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
	                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        </div>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center bg-gray-100 rounded-full">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pergunte algo..."
                className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-800 focus:outline-none"
                disabled={isLoading}
              />
              <button onClick={handleSend} disabled={isLoading || !input.trim()} className="p-2 text-white rounded-full m-1 disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: assistantColor }}>
                <SendIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)} 
          className="w-16 h-16 rounded-full text-white shadow-xl flex items-center justify-center text-3xl font-bold transition-transform hover:scale-110"
          style={{ backgroundColor: assistantColor }}
        >
          {assistantInitial}
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;
