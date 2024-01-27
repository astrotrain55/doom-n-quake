import fs from 'node:fs';
import archiver from 'archiver';

const archive = archiver('zip', { zlib: { level: 9 } });
const output = fs.createWriteStream('doom-n-quake.zip');

archive.directory('src', 'doom-n-quake', {});
archive.pipe(output);
archive.finalize().catch(console.warn);
