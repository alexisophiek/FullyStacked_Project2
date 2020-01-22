from application import create_app

app = create_app()

if __name__ == '__main__':
	# app.run(debug=True)
	app.run(host='0.0.0.0',debug=True)


# Will Not Run on 0.0.0.0 - Replace in your Browser with 127.0.0.1