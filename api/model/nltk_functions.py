from nltk.stem.porter import PorterStemmer
import nltk
import numpy as np

stemmer = PorterStemmer()


def tokenize(sentence):
    return nltk.word_tokenize(sentence)


def stem(word):
    return stemmer.stem(word.lower())


def bag_of_words(tokenized_sentence, all_words):
    sentence_words = [stem(word) for word in tokenized_sentence]

    bag = np.zeros(len(all_words), dtype = np.float32)
    for i, w in enumerate(all_words):
        if w in sentence_words:
            bag[i] = 1
    return bag



