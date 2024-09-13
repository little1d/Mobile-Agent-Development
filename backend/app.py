# Flask 应用入口文件，负责启动应用和加载配置

from flask import Flask, request, jsonify


app = Flask(__name__)

if __name__ == '__main__':
    app.run(debug=True)