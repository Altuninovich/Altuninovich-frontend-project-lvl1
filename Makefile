install:
	npm install
start:
	npx babel-node --  src/bin/brain-g.js
publish:
	npm publish
lint:
	npx eslint .
fixLint:
	npx eslint --fix .