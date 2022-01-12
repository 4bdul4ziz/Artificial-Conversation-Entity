# super simple api for now, will make it more organised if need be
from flask import Flask
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)

# some dummy responses for now
responses = ['foo', 'bar', 'who let the dogs out', 'do you know da wae']


parser = reqparse.RequestParser()
parser.add_argument('phrase')
class Response(Resource):
	def post(self):
		phrase = parser.parse_args()['phrase']
		r_id = len(phrase)%4 # Just so the phrase has any meaning in this dummy api

		return {'response': responses[r_id]}

# send a POST req to the base url, req body must 
# contain a parameter 'phrase' with the input phrase
# eg: curl http://localhost:5000/ -d "phrase=let me show you da wae" -X POST
api.add_resource(Response, '/')

if __name__ == '__main__':
	app.run()