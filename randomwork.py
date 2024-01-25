from openai import OpenAI
import openai
import os 


client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY", "key would be here..."))

MODEL = "gpt-3.5-turbo"
response = openai.chat.completions.create(

    model = MODEL,
    messages = [

        {"role": "system" , "content": "Hello, you are ChatGPT, a helpful AI assistant"},
        {"role": "user", "content":  "Explain to me how the National Football League works, with basic rules of how the sport of american football functions"},

    ],
    temperature = 0

)
print(response.choices[0].message.content)





