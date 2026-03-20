.PHONY: dev docs docs-build docs-preview

# Open index.html with a live-reload server (requires npx)
dev:
	npx live-server --port=3000 --no-browser .

# Run the VitePress docs site locally
docs:
	cd docs-site && npm run docs:dev

# Build the docs site for production
docs-build:
	cd docs-site && npm run docs:build

# Preview the production docs build
docs-preview:
	cd docs-site && npm run docs:preview
