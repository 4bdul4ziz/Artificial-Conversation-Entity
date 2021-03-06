import random
import json
from nltk import probability
import torch
from api.model.mother import NeuralNet
from api.model.nltk_functions import bag_of_words, tokenize
from api.model.prediction import predict

""" device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

with open('data.json', 'r') as f:
    responses = json.load(f)

file = "data.pth"
data = torch.load(file)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data["all_words"]
tags = data["tags"]
model_state = data["model_state"] """

""" model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()

bot_name = "Hades"
print("Hades wants to spank you, to escape, type 'quit'.") """
bot_name = "H.A.D.E.S"
print("H.A.D.E.S wants to spank you, to escape, type 'quit'.")
while True:

    print(f'\n{bot_name}: '+predict(input('\nYou: ')))
    """     sentence = input('\nYou: ')
        if sentence == 'quit':
            break

        sentence = tokenize(sentence)
        x = bag_of_words(sentence, all_words)
        x = x.reshape(1, x.shape[0])
        x = torch.from_numpy(x)

        output = model(x)
        _, predicted = torch.max(output, dim=1)
        tag = tags[predicted.item()]

        probability = torch.softmax(output, dim=1)
        probability = probability[0][predicted.item()]

        if probability.item() > 0.75:
            for intent in responses["intents"]:
                if tag == intent["tag"]:
                    print(f"\n{bot_name}: {random.choice(intent['responses'])}")
        else:
            print(f"{bot_name}: Tf you mean?") """
            