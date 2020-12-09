import fs from 'fs';
import marked from 'marked';

const headers = [];
const walkTokens = (token) => {
    if (token.type === 'heading' && token.depth === 1 && token.tokens[0].type === 'link') {
        headers.push(token);
    }
};

marked.use({ walkTokens });
  
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
function getComponentString (file) {
    return `<div class="component">${file}</div>`;
}
function getHeaderString (header) {
	return `<a class="header" href="${header.tokens[0].href}">${header.tokens[0].text}</a>`;
}
const file = fs.readFileSync('./template.html', 'utf8');
const result = file.replace('<app-root>', `
    <div class="menu">
        <h2>Zoo web components</h2>
		${headers.map(header => getHeaderString(header)).join('')}
	</div>
    <div class="content">
        ${files.map(file => getComponentString(file)).join('')}
    </div>
`);

fs.writeFileSync('./docs/index.html', result);
const cmps = fs.readFileSync('./node_modules/@zooplus/zoo-web-components/dist/zoo-components-esm.js', 'utf8');
fs.writeFileSync('./docs/zoo-web-components.js', cmps);
