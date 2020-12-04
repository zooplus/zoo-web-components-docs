import fs from 'fs';
import marked from 'marked';

const headers = [];
const renderer = new marked.Renderer();
renderer.heading = function(text, level, raw) {
    if (level != 1) {
        return `<h${level}>${text}</h${level}>`;
    }
	const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
	headers.push({
		href: `#${escapedText}`,
		text: text
	});
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
	return `<a class="header" href="${header.href}">${header.text}</a>`;
}
const file = fs.readFileSync('./template.html', 'utf8');
const result = file.replace('<app-root>', `
	<div class="menu">
		${headers.map(header => getHeaderString(header)).join('')}
	</div>
    <div class="content">
        ${files.map(file => getComponentString(file)).join('')}
    </div>
`);

fs.writeFileSync('./docs/index.html', result);
const cmps = fs.readFileSync('./node_modules/@zooplus/zoo-web-components/dist/zoo-components-esm.js', 'utf8');
fs.writeFileSync('./docs/zoo-web-components.js', cmps);
