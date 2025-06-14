from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

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
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },

            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            }
        },
        "2": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            }
        },

        "3": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            }
        },

        "4": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            }
        },

        "5": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            }
        },

        "6": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            }
        },

        "7": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            }
        },

        "8": {
            "pub0": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },
            
            "pub1": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            },

            "pub2": {
                "description": "Lorem ipsum dolor sit amet и бла бла бла бла... Это текст подгруженный с бэкенда!",
                "tags": ["Computer", "Lines"],
                "thubnail_url": "https://placehold.co/300x400.png",
                "id": "12345678"
            }
        }
    }

    return jsonify(data)

@app.route("/api/papers")
def papers():
    data = {
        "1": {
            "0": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит архемед",
                "date": "02.10.2077",
                "author": "Magamedad",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "1": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "2": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "3": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "4": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "5": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            }
        },
        "2": {
            "0": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "1": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
            },
            "2": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "3": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "4": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "5": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            }
        },
        "3": {
            "0": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "1": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "2": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "3": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "4": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "5": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            }
        },
        "4": {
            "0": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "1": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "2": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "3": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "4": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "5": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            }
        },
        "5": {
            "0": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "1": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "2": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "3": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "4": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "5": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            }
        },
        "6": {
            "0": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "1": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "2": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "3": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "4": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "5": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            }
        },
        "7": {
            "0": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "1": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "2": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "3": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "4": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "5": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            }
        },
        "8": {
            "0": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "1": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "2": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "3": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "4": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            },
            "5": {
                "category": "Computers",
                "title": "Лорем ипсум доллар сит амет",
                "date": "02.10.2077",
                "author": "Magamed",
                "views": "2077",
                "text": "Lorem iiiiiiiiiiiiiiiiiipsum dolor sid ahmed",
                "id": "12345678"
            }
        }
    }

    return jsonify(data)

@app.route("/api/paper")
def paper():
    data = {
        "12345678": {
            "title": "Лорем ипсум, короче",
            "annotation": {
                "date": "02.03.2077",
                "author": "Magamed Magamedovich",
                "views": "1234",
                "reviews": "5",
                "content": '''Bacon ipsum dolor amet t-bone strip steak sausage jerky landjaeger tri-tip ham spare ribs jowl ground round pork loin beef ribs hamburger. Shoulder jowl salami meatloaf short ribs buffalo bacon kevin rump pork loin pastrami landjaeger fatback strip steak. Porchetta spare ribs ground round chuck venison, pork loin beef bresaola boudin burgdoggen fatback jowl shoulder. Frankfurter hamburger drumstick meatball buffalo tenderloin biltong beef ribs andouille ball tip turkey chislic kielbasa pork belly. Kevin tenderloin ham hock, turducken pork belly t-bone frankfurter shank turkey. Pork loin bresaola pork belly alcatra landjaeger, turkey chuck meatball chicken frankfurter ground round burgdoggen pig. Flank meatball burgdoggen, alcatra doner pancetta pig spare ribs rump kevin pastrami corned beef porchetta meatloaf.''',
                "keywords": "Абоба, бабоба"
            },
            "reviews": {
                "1": {
                    "name": "абобус",
                    "job": "крутой",
                    "pdf": "assets/papers/19439dSad23.pdf"
                },
                "2": {
                    "name": "амогус",
                    "job": "не оч крутой",
                    "pdf": "assets/papers/19439dSad23.pdf"
                },
                "3": {
                    "name": "сугома",
                    "job": "ваще не крутой",
                    "pdf": "assets/papers/19439dSad23.pdf"
                },
                "4": {
                    "name": "амвогус",
                    "job": "самый не крутой",
                    "pdf": "assets/papers/19439dSad23.pdf"
                },
                "5": {
                    "name": "он кто вообще",
                    "job": "???",
                    "pdf": "assets/papers/19439dSad23.pdf"
                }
            },
            "article": "Тралалело тралала",
            "references": {
                "1": {
                    "title": "Лорем ипсум долор сит амет и бла бла бла",
                    "text": "Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет"
                },
                "2": {
                    "title": "Лорем ипсум долор сит амет и бла бла бла",
                    "text": "Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет"
                },
                "3": {
                    "title": "Лорем ипсум долор сит амет и бла бла бла",
                    "text": "Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет"
                },
                "4": {
                    "title": "Лорем ипсум долор сит амет и бла бла бла",
                    "text": "Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет"
                },
                "5": {
                    "title": "Лорем ипсум долор сит амет и бла бла бла",
                    "text": "Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет"
                },
                "6": {
                    "title": "Лорем ипсум долор сит амет и бла бла бла",
                    "text": "Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет"
                },
                "7": {
                    "title": "Лорем ипсум долор сит амет и бла бла бла",
                    "text": "Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет"
                },
                "8": {
                    "title": "Лорем ипсум долор сит амет и бла бла бла",
                    "text": "Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет Лорем ипсум долор сит амет"
                }
            }
        }
    }

    return jsonify(data)

@app.route("/api/publication")
def publication():
    data = {
        "12345678": {
            "text": '''Bacon ipsum dolor sit amet hamburger meat cow and pig''',
            "tags": {
                "computer": True,
                "lines": False,
                "telecommunications": True,
                "datascience": False,
                "intellect": False,
                "system": True,
                "iot": False,
                "computerarch": True
            },
            "pdf": "re8wu737d.pdf"
        }
    }

    return jsonify(data)

@app.route("/api/contacts", methods=["POST"])
def contacts():
    contactsdata = request.get_json()
    print(contactsdata)
    firstname = contactsdata["firstname"]
    email = contactsdata["email"]
    message = contactsdata["message"]
    return "Успешно", 200

@app.route('/api/register', methods=['POST'])
def register():
    firstname = request.form.get("firstname")
    lastname = request.form.get("lastname")
    date = request.form.get("date")
    email = request.form.get("email")
    org = request.form.get("organization")
    login = request.form.get("login")
    password = request.form.get("password")
    degree = request.form.get("degree")
    anotherinformation = request.form.get("another")

    print(f"Received: {firstname=}, {lastname=}, {date=}, {email=}, {org=}, {login=}, {password=}, {degree=}, {anotherinformation=}")

    if 'file' not in request.files:
        return jsonify({"message": "File not found."}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"message": "File not selected."}), 400

    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    file.save(filepath)

    return jsonify({"message": "Register successfully!"}), 200

if __name__ == '__main__':
    app.run(debug=True)