from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)  # Enable CORS if you need cross-origin requests

def danmu_record(instructions):
    try:
        result = subprocess.run(
            ['python', '/Users/little1d/Desktop/Code/Mobile-Agent-Development/test.py', instructions],
            capture_output=True,
            text=True
        )
        print(result, 'error')
        return result.stdout, result.stderr  # Return both stdout and stderr
    except Exception as e:
        raise e

@app.route('/api/danmu-record', methods=['POST'])
def get_danmu():
    instructions = request.json.get('instructions')
    print(instructions)
    if not instructions:
        return jsonify({'error': 'No instructions provided.'}), 400
    try:
        output, error = danmu_record(instructions)
        return jsonify({'output': output, 'error': error})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)