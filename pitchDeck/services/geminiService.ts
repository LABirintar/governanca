
import { GoogleGenAI, Chat } from '@google/genai';
import { Audience, ChatMessage } from '../types';

// A chave da API deve ser colocada aqui para funcionar no ambiente do navegador.
// ATENÇÃO: Não exponha chaves de API em repositórios públicos por segurança.
// Use variáveis de ambiente em um ambiente de build real.
const API_KEY = "SUA_CHAVE_API_AQUI";

let ai: GoogleGenAI;
if (API_KEY && API_KEY !== "AIzaSyAjLpmKLGRcIVPRpNDh2KAcc8wowzaVbBk") {
    ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
    console.warn("API_KEY não foi configurada. A funcionalidade do Gemini API estará desativada.");
}


const getSystemInstruction = (audience: Audience): string => {
    switch (audience) {
        case Audience.INVESTOR:
            return "Você é 'Retorno', um assistente de IA especialista em finanças e investimentos para startups EdTech. Sua função é responder a perguntas de investidores sobre a LABirintar, focando em modelo de negócio, escala, retorno financeiro (ROI), valuation, e vantagens competitivas, com base no pitch deck. Seja conciso e direto.";
        case Audience.SCHOOL:
            return "Você é 'Solução', um assistente de IA especialista em gestão educacional. Sua função é responder a perguntas de gestores escolares sobre a LABirintar, focando em como a plataforma resolve dores operacionais, gera receita, melhora a qualidade pedagógica e se integra à rotina da escola. Seja prático e focado nos benefícios.";
        case Audience.EDUCATOR:
            return "Você é 'Empodera', um assistente de IA que apoia educadores. Sua função é responder a perguntas de professores e educadores sobre a LABirintar, focando em como a plataforma oferece autonomia, ganhos financeiros, desenvolvimento profissional e uma comunidade de pares. Seja inspirador e acolhedor.";
        case Audience.PARTNER:
            return "Você é 'Sinergia', um assistente de IA focado em parcerias estratégicas. Sua função é responder a perguntas de potenciais parceiros sobre a LABirintar, focando em como criar valor mútuo, modelos de parceria, e sinergias de mercado. Seja colaborativo e visionário.";
        default:
            return "Você é um assistente geral sobre a LABirintar. Responda às perguntas de forma clara e informativa com base no pitch deck.";
    }
};

const chats = new Map<Audience, Chat>();

const getChat = (audience: Audience): Chat | null => {
    if (!ai) return null;
    if (!chats.has(audience)) {
        const newChat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: getSystemInstruction(audience),
            },
        });
        chats.set(audience, newChat);
    }
    return chats.get(audience)!;
};


export const runChat = async (message: string, audience: Audience): Promise<string> => {
    if (!API_KEY || API_KEY === "AIzaSyAjLpmKLGRcIVPRpNDh2KAcc8wowzaVbBk") {
        return "A chave de API do Gemini não está configurada. Para ativar o chat, por favor, adicione sua chave de API no arquivo `services/geminiService.ts`.";
    }
    
    try {
        const chat = getChat(audience);
        if (!chat) {
             return "O assistente de IA não pôde ser inicializado. Verifique a configuração da chave de API.";
        }
        const response = await chat.sendMessage({ message });
        return response.text;
    } catch (error) {
        console.error("Gemini API error:", error);
        return "Desculpe, ocorreu um erro ao me comunicar com a IA. Por favor, tente novamente mais tarde.";
    }
};
