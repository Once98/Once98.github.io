# Repository Guidelines

This project is a static website for GitHub Pages. It consists of HTML, CSS, JavaScript, images, and videos in the repository root. There is no build step or package manager.

## Editing
- Use 4 spaces for indentation in HTML, CSS, and JavaScript files.
- Keep new assets in the repository root or organize them in folders, updating paths accordingly.
- Use relative links when referencing assets.

## Previewing
Run a simple local server from the repository root to preview changes:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html` in a browser.

## Testing
No automated tests exist. Manually load the site in a browser after changes to ensure pages work as expected.
