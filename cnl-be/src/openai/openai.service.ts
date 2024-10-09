import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai'; // Import the OpenAI library
import { GPT_MODEL } from 'src/utils/constants';


@Injectable()
export class OpenAiService {
  private openai: OpenAI;

  constructor() {
    console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, 
    });
  }

  async sendMessageToGPT(message: string): Promise<string> {
    
    try {
      const response = await this.openai.chat.completions.create({
        model: GPT_MODEL, 
        messages: [{ role: 'user', content: message }],
      });
      return response.choices[0].message.content; 
    } catch (error) {
      console.error('Error communicating with GPT:', error);
      throw new Error('Failed to communicate with OpenAI');
    }
  }
}


/*
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-4o-mini",
});
*/