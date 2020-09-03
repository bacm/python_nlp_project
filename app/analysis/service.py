from app import app, nlp

class AnalysisService():

    @staticmethod
    def ponder():
        return False

    @staticmethod
    def extract_pos(text):
        doc = nlp(text)
        return [{"text": token.text, "pos": token.pos_, "dep": token.dep_} for token in doc]

