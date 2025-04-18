
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('El título principal contiene el texto correcto', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const titulo = dom.window.document.querySelector('h1');
  expect(titulo.textContent).toBe('Hola Mundo desde CI/CD 🌐');
});
