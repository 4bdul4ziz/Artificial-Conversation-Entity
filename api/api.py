# super simple api for now, will make it more organised if need be
from flask import Flask
from flask_restful import Resource, Api, reqparse
from os import getcwd, chdir

from model.prediction import predict



app = Flask(__name__)
api = Api(app)



parser = reqparse.RequestParser()
parser.add_argument('phrase')
class Response(Resource):
	def post(self):
		phrase = parser.parse_args()['phrase']
		response = predict(phrase)

		return {'response': response}

# send a POST req to the base url, req body must 
# contain a parameter 'phrase' with the input phrase
# eg: curl http://localhost:5000/ -d "phrase=let me show you da wae" -X POST
api.add_resource(Response, '/')

if __name__ == '__main__':
	app.run()