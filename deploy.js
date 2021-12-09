const fs = require('fs');
const path = require('path');

function wrapReact(source) {
    return "{% if page.is_react %}\n" + source + "\n{% endif %}\n";
}

function copyIndex(indexSrcPath, destFolderPath) {
    const indexMarkdown = `\
---
title: React Demo
layout: react
is_react: True
---

This is the markdown content for the React demo.

It has two paragraphs, and is deployed with a React app below.
`;
    let indexSource = fs.readFileSync(indexSrcPath, 'utf8');
    let destFilePath = path.join(destFolderPath, 'index.md');
    let includesPath = path.join(destFolderPath, '../_includes');

    fs.writeFileSync(destFilePath, indexMarkdown);

    let match = indexSource.match(/<link href=".*" rel="stylesheet">/);
    destFilePath = path.join(includesPath, 'head-scripts.html');
    fs.writeFileSync(destFilePath, wrapReact(match[0]));

    match = indexSource.match(/<div id="root"><\/div>(.*)<\/body>/ms);
    destFilePath = path.join(includesPath, 'footer-scripts.html');
    fs.writeFileSync(destFilePath, wrapReact(match[1]));
}

function main() {
    let dest = path.resolve('docs/react-demo');
    let src = path.resolve('build');
    let d = fs.opendirSync(dest);
    let entry;
    while ((entry = d.readSync()) !== null) {
        let destFilePath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            fs.rmdirSync(destFilePath, {recursive: true});
        }
        else {
            fs.unlinkSync(destFilePath);
        }
    }
    d = fs.opendirSync(src);
    while ((entry = d.readSync()) !== null) {
        let srcFilePath = path.join(src, entry.name),
            destFilePath = path.join(dest, entry.name);
        if (entry.name !== 'index.html') {
            fs.renameSync(srcFilePath, destFilePath);
        } else {
            copyIndex(srcFilePath, dest);
        }
    }
    fs.renameSync(path.join(dest, 'favicon.ico'), path.join(dest, '../favicon.ico'));
}

main();
