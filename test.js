const fs = require('fs');
const marked = require('marked');

const renderer = new marked.Renderer();
renderer.heading = function(text, level, raw) {
    if (level != 1) {
        return `<h${level}>${text}</h${level}>`;
    }
    // TODO move these elements to side menu as well
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return `
            <h${level}>
            <a name="${escapedText}" class="anchor" href="#${escapedText}">
                <span class="header-link">${text}</span>
            </a>
            </h${level}>`;
};

marked.use({ renderer });
  
const files = [];
function getFiles(nextPath) {
    if(fs.existsSync(nextPath) && fs.lstatSync(nextPath).isDirectory()) {
        const nextDirPath = fs.readdirSync(nextPath);
        nextDirPath.forEach(filePath => getFiles(`${nextPath}/${filePath}`, files));
    } else {
        if (nextPath.indexOf('.mdx') > -1) {
            const markdown = fs.readFileSync(nextPath, 'utf8');
            files.push(marked(markdown));
        }
    }
}
getFiles('./zoo-modules');
function getComponentString (file) {
    return `<div class="component">${file}</div>`;
}
const file = fs.readFileSync('./test.html', 'utf8');
const result = file.replace('<app-root/>', `
    <div class="content">
        ${files.map(file => getComponentString(file)).join('<hr>')}
    </div>
    <div class="menu">
        
    </div>
`);

fs.writeFileSync('./public/index.html', result);
const cmps = fs.readFileSync('./node_modules/@zooplus/zoo-web-components/dist/zoo-components-esm.js', 'utf8');
fs.writeFileSync('./public/zoo-web-components.js', cmps);
