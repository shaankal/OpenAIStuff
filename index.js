
import OpenAI from "openai";
import dotenv from "dotenv";
import readlineSync from 'readline-sync';
import colors from 'colors';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function main() {
    console.log(colors.bold.blue('Welcome to the greatest Chatbot in history!'))
    console.log(colors.bold.blue('You now have the honor to chat with me!'))

    const chatHistorySaver = []; //Store conversation with Chatbot

    while(true) {
        const userInput = readlineSync.question(colors.bold.magenta('You: '));

        try {
            //Storing history, through iteration
            const messages = chatHistorySaver.map(([role, content]) => ({ role, content}));

            //Update input
            messages.push({role: 'user' , content: userInput})

            //Gets user input
            const chatCompletion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: messages, 
            })

            const completionText = chatCompletion.data.choices[0].message.content;

            if (userInput.toLowerCase() == 'exit') {
                console.log(colors.green('Bot: ') + completionText);
                return;
            }

            console.log(colors.green('Bot: ') + completionText);

            //Update History with input 
            //Need to do
        } catch (error) {
            console.error(colors.red(error));
        }
    }

}

main();