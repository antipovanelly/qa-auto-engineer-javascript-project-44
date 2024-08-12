
.PHONY: install
install:
	npm ci

.PHONY: brain-games
brain-games:
	node bin/brain-games.js

.PHONY: publish
publish:
	npm publish --dry-run

.PHONY: lint
lint:
	npx eslint .

.PHONY: node
node:
	node -v
