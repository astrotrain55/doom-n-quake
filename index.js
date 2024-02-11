import fs from 'node:fs';
import archiver from 'archiver';

const packageJson = fs.readFileSync('./package.json', null).toString();
const archive = archiver('zip', { zlib: { level: 9 } });
const output = fs.createWriteStream(`${JSON.parse(packageJson).name}-windows.zip`);

archive.glob(
  '**/*',
  {
    cwd: 'src',
    ignore: ['**/*.md', '**/*.so', '**/*.pdf', '**/*.zip', '**/convert_to_lowercase'],
  },
  {},
);
archive.pipe(output);
archive.finalize().catch(console.warn);
