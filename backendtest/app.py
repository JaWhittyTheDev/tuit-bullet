from flask import Flask, jsonify
from flask_cors import CORS  # импортируем

app = Flask(__name__)
CORS(app)  # разрешаем запросы с любого источника (для разработки)

@app.route('/api/latest-publication')
def latest_publication():
    data = {
        "text": "Это тестовый текст последней публикации"
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)