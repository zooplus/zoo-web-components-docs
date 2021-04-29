import fs from 'fs';
import marked from 'marked';

const headers = [];
const walkTokens = (token) => {
    if (token.type === 'heading' && token.depth === 1 && token.tokens[0].type === 'link') {
        headers.push(token);
    }
};

marked.use({ walkTokens });

function getWord(str) {
    return str.match(/(^|\B)#(?![0-9_]+\b)([a-zA-Z0-9_/-]{1,30})(\b|\r)/)[2];
}

const renderer = new marked.Renderer();
renderer.heading = (text, level) => {
    if (level === 1) {
        return `<h${level} id=${getWord(text)}>${text}</h${level}>`;
    } else {
        return `<h${level}>${text}</h${level}>`; 
    }
}

renderer.table = (header, body) => {
    while(header.indexOf('align') > -1) {
        header = header.replace('align', 'class');
    }
    while(body.indexOf('align') > -1) {
        body = body.replace('align', 'class');
    }
    return `<table><thead>${header}</thead> <tbody>${body}</tbody></table>`;
}

marked.setOptions({
    renderer
});
  
function transpile() {
    const files = [];
    function getFiles(nextPath) {
        if(fs.existsSync(nextPath) && fs.lstatSync(nextPath).isDirectory()) {
            const nextDirPath = fs.readdirSync(nextPath);
            nextDirPath.forEach(filePath => getFiles(`${nextPath}/${filePath}`, files));
        } else {
            if (nextPath.indexOf('.md') > -1) {
                const markdown = fs.readFileSync(nextPath, 'utf8');
                files.push(marked(markdown));
            }
        }
    }
    getFiles('./zoo-modules');
    function getHeaderString (header) {
        return `<a href="${header.tokens[0].href}">${header.tokens[0].text}</a>`;
    }
    const file = fs.readFileSync('./template.html', 'utf8');
    const result = file.replace('<app-root>', `
        <nav>
            ${headers.map(header => getHeaderString(header)).join('')}
        </nav>
        <div class="content">
            ${files.join('')}
        </div>
    `);
    
    fs.writeFileSync('./docs/index.html', result);
    console.log('Transpilation finished and files written!')
}
transpile();
const cmps = fs.readFileSync('./node_modules/@zooplus/zoo-web-components/dist/zoo-web-components.js', 'utf8');
fs.writeFileSync('./docs/zoo-web-components.js', cmps);
