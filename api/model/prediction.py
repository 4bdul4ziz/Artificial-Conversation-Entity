import random
import json
from nltk import probability
import torch
from .mother import NeuralNet
from .nltk_functions import bag_of_words, tokenize

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

with open('api/model/data.json', 'r') as f:
    responses = json.load(f)

file = "api/model/data.pth"
data = torch.load(file)



def predict(sentence):
    input_size = data["input_size"]
    hidden_size = data["hidden_size"]
    output_size = data["output_size"]
    all_words = data["all_words"]
    tags = data["tags"]
    model_state = data["model_state"]


    model = NeuralNet(input_size, hidden_size, output_size).to(device)
    model.load_state_dict(model_state)
    model.eval()


    

    if sentence == 'quit':
        exit(1)
    
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
                return f"{random.choice(intent['responses'])}"
    else:
        return f"Unfortunately, that is beyond my understanding. Please try again."
