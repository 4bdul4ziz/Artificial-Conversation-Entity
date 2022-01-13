from nltk.stem.porter import PorterStemmer
import nltk
import numpy as np

stemmer = PorterStemmer()


def tokenize(sentence):
    return nltk.word_tokenize(sentence)


def stem(word):
    return stemmer.stem(word.lower())


def bag_of_words(tokenized_sentence, words):
    sentence_words = [stem(word) for word in tokenized_sentence]

    bag = np.zeros(len(words), dtype = np.float64)
    for i, w in enumerate(words):
        if w in sentence_words:
            bag[i] = 1
    return bag


