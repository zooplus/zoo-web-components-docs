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

marked.setOptions({
    renderer
});
  
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
    <div class="menu">
        <h1>Zoo web components</h1>
		${headers.map(header => getHeaderString(header)).join('')}
	</div>
    <div class="content">
        ${files.join('')}
    </div>
`);

fs.writeFileSync('./docs/index.html', result);
const cmps = fs.readFileSync('./node_modules/@zooplus/zoo-web-components/dist/zoo-components-esm.js', 'utf8');
fs.writeFileSync('./docs/zoo-web-components.js', cmps);
