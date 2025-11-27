import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are "FrayAI", the intelligent assistant for Fray International Group.
Your goal is to assist clients with product inquiries, export regions, and bulk ordering information.

Company Details:
- Name: Fray International Group
- Nature of Business: Global Trading House (Import/Export)

Key Products:
- Toners & Cartridges (Premium quality for all major brands)
- Office Stationery (Pens, files, organizers, desk accessories)
- School Stationery (Notebooks, art supplies, geometry sets)
- Paper Products (A4 paper, specialized printing paper, rolls)

Key Delivery Markets:
- UAE, Oman, Saudi Arabia, Germany, Spain, India, China, Thailand, Indonesia.

Tone: Professional, energetic, reliable, and knowledgeable about international logistics.
If asked for prices, ask them to use the "Get a Quote" form for the most current bulk pricing.
`;

export const getGeminiChat = async (message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "I'm currently offline (API Key missing). Please contact support.";
    }

    if (!chatSession) {
      const ai = new GoogleGenAI({ apiKey });
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const result: GenerateContentResponse = await chatSession.sendMessage({ message });
    return result.text || "I apologize, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to our network right now. Please try again later.";
  }
};