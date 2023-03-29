buildjs:
	yarn build
	cp dist/assets/*.js ../landingpage/static/main.js
	cp -r build/assets/ ../landingpage/static/