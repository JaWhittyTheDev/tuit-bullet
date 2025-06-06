from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/api/latest-publication')
def latest_publication():
    data = {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis sed tortor vitae scelerisque. Nulla vitae orci vitae massa bibendum cursus...",
        "thubnail_url": "https://placehold.co/210x297.png"
    }
    return jsonify(data)

@app.route('/api/papers/most-read')
def most_read_papers():
    data = {
        "0": {
            "title": "Название 1",
            "description": "Описание 1"
        },

        "1": {
            "title": "Название 2",
            "description": "Описание 2"
        },

        "2": {
            "title": "Название 3",
            "description": "Описание 3"
        },

        "3": {
            "title": "Название 4",
            "description": "Описание 4"
        },

        "4": {
            "title": "Название 5",
            "description": "Описание 5"
        }
    }

    return jsonify(data)

@app.route('/api/papers/last-paper')
def last_paper():
    data = {
        "0": {
            "category": "Категория 1",
            "title": "Заголовок 1",
            "description": "Описание 1"
        },
        "1": {
            "category": "Категория 2",
            "title": "Заголовок 2",
            "description": "Описание 2"
        },
        "2": {
            "category": "Категория 3",
            "title": "Заголовок 3",
            "description": "Описание 3"
        },
        "3": {
            "category": "Категория 4",
            "title": "Заголовок 4",
            "description": "Описание 4"
        }
    }

    return jsonify(data)

@app.route('/api/publications')
def publications():
    data = {
        "1": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },

            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            }
        },
        "2": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            }
        },

        "3": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            }
        },

        "4": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            }
        },

        "5": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            }
        },

        "6": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            }
        },

        "7": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            }
        },

        "8": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"]
            }
        }
    }

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)