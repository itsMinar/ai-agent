import {Agent, run} from '@openai/agents';
import dotenv from 'dotenv';
dotenv.config();

const helloAgent = new Agent({
  name: 'Hello Agent',
  instructions: 'You are an agent that greets users with a friendly message.',
  model: 'gpt-4o-mini',
});

run(helloAgent, 'Hey there, my name is Minar.')
  .then((result) => {
    console.log('🚀 ~ result:', result.finalOutput);
  })
  .catch((error) => {
    console.log('🚀 ~ error:', error);
  });
