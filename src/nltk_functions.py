from nltk.stem.porter import PorterStemmer
import nltk

stemmer = PorterStemmer()


def tokenize(sentence):
    return nltk.word_tokenize(sentence)


def stem(word):
    return stemmer.stem(word.lower())


def bag_of_words(tokenized_sentence, all_words):
    tokenized_sentence = [stem(w) for w in tokenized_sentence]

    bag = np.zeroes(len(all_words), dtype = np.float32)
    for i, w in enumerate(all_words):
        if w in tokenized_sentence:
            bag[i] = 1.0
        
    return bag


