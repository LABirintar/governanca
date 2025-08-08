import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';
import { AI_SYSTEM_INSTRUCTION, KNOWLEDGE_BASE_TEXT } from '../ai/knowledge';

const ai = process.env.API_KEY ? new GoogleGenAI({ apiKey: process.env.API_KEY }) : null;

if (!process.env.API_KEY) {
    console.warn("A variável de ambiente API_KEY não está configurada. O Assistente de IA não funcionará.");
}

const AIAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory, isLoading]);
    
    useEffect(() => {
        if (isOpen && chatHistory.length === 0) {
            setChatHistory([{
                role: 'model',
                parts: [{ text: `Olá! Eu sou a Nina, a assistente de IA da LABirintar. Fui treinada com um conjunto de documentos estratégicos, incluindo nosso pitch deck, análise de mercado, e projeções financeiras. Como posso ajudar?` }]
            }]);
        }
    }, [isOpen, chatHistory.length]);


    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !ai) return;

        const userMessage: ChatMessage = { role: 'user', parts: [{ text: input }] };
        const currentChatHistory = [...chatHistory, userMessage];
        setChatHistory(currentChatHistory);
        setInput('');
        setIsLoading(true);

        try {
            const response = await ai.models.generateContentStream({
                model: 'gemini-2.5-flash',
                contents: currentChatHistory,
                config: {
                    systemInstruction: `${AI_SYSTEM_INSTRUCTION}\n\nBASE DE CONHECIMENTO:\n${KNOWLEDGE_BASE_TEXT}`,
                    tools: [{googleSearch: {}}],
                },
            });

            let fullResponseText = '';
            let collectedChunks: any[] = [];
            setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: '' }], sources: [] }]);

            for await (const chunk of response) {
                const chunkText = chunk.text;
                if(chunkText) {
                    fullResponseText += chunkText;
                    setChatHistory(prev => {
                        const newHistory = [...prev];
                        newHistory[newHistory.length - 1].parts[0].text = fullResponseText;
                        return newHistory;
                    });
                }
                if (chunk.candidates?.[0]?.groundingMetadata?.groundingChunks) {
                    collectedChunks.push(...chunk.candidates[0].groundingMetadata.groundingChunks);
                }
            }
            
            if (collectedChunks.length > 0) {
                const uniqueSources = collectedChunks
                    .map(c => c.web)
                    .filter(web => web && web.uri)
                    .reduce((acc, current) => {
                        if (!acc.find(item => item.uri === current.uri)) {
                            acc.push(current);
                        }
                        return acc;
                    }, [] as {uri: string, title: string}[]);
        
                setChatHistory(prev => {
                    const newHistory = [...prev];
                    newHistory[newHistory.length - 1].sources = uniqueSources;
                    return newHistory;
                });
            }

        } catch (error) {
            console.error("Error calling Gemini API:", error);
            const errorMessage: ChatMessage = {
                role: 'model',
                parts: [{ text: 'Desculpe, ocorreu um erro ao me comunicar com a IA. Por favor, tente novamente.' }]
            };
            setChatHistory(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 bg-[#ffa400] text-white font-semibold rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-200 flex items-center"
                aria-label="Open AI Assistant"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Nina AI
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/30 z-[100] flex justify-end" onClick={() => setIsOpen(false)}>
                    <div 
                        className="w-full max-w-md h-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-4 border-b">
                            <h3 className="text-lg font-bold text-[#2d3748]">Nina AI</h3>
                            <p className="text-sm text-gray-500">Um assistente de IA treinado com as informações da empresa para responder suas perguntas.</p>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {chatHistory.map((msg, index) => (
                                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className="flex flex-col">
                                        <div className={`max-w-xs md:max-w-sm rounded-2xl px-4 py-2 ${msg.role === 'user' ? 'bg-[#aec5e7] text-gray-800 rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                                            <p className="whitespace-pre-wrap">{msg.parts[0].text}</p>
                                        </div>
                                        {msg.sources && msg.sources.length > 0 && (
                                            <div className={`mt-2 text-xs text-gray-500 max-w-xs md:max-w-sm ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                                                <h4 className="font-bold mb-1">Fontes:</h4>
                                                <ul className="space-y-1">
                                                    {msg.sources.map((source, i) => (
                                                        <li key={i} className="truncate flex items-center gap-2" dir="ltr">
                                                            <span className="text-gray-400">{i+1}.</span>
                                                            <a href={source.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" title={source.uri}>
                                                                {source.title || new URL(source.uri).hostname}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                 <div className="flex justify-start">
                                    <div className="max-w-xs md:max-w-sm rounded-2xl px-4 py-2 bg-gray-200 text-gray-800 rounded-bl-none">
                                        <div className="flex items-center space-x-1">
                                            <span className="h-2 w-2 bg-[#ff595a] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                            <span className="h-2 w-2 bg-[#ff595a] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                            <span className="h-2 w-2 bg-[#ff595a] rounded-full animate-bounce"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>
                        <div className="p-4 border-t bg-gray-50">
                            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Faça uma pergunta..."
                                    className="flex-1 px-4 py-2 border rounded-full focus:ring-2 focus:ring-[#ffa400] focus:outline-none"
                                    disabled={isLoading || !ai}
                                />
                                <button type="submit" disabled={isLoading || !input.trim() || !ai} className="w-10 h-10 bg-[#ff595a] text-white rounded-full flex items-center justify-center disabled:opacity-50 transition-colors">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
                                </button>
                            </form>
                            {!ai && <p className="text-xs text-center text-red-500 mt-2">API Key não configurada. O assistente está desativado.</p>}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIAssistant;
