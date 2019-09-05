const fs = require('fs');
const path = require('path');

const prompts = require('prompts');
const mustache = require('mustache');
const glob = require('glob');
const rimraf = require('rimraf');
const componentNameRegex = /^[A-Z][A-Za-z]*$/;
const sourcePath = path.resolve(__dirname, '../src');
const templatePath = path.resolve(__dirname, 'template');
const componentsPath = path.resolve(sourcePath, 'components');

function createComponent({ name, language }) {
	if (!name || !language) {
		return;
	}
	const componentPath = path.join(componentsPath, name);
	const templateProps = {
		name,
		className:
			'ts-rc-' +
			name[0].toLowerCase() +
			name.slice(1).replace(/([a-z])([A-Z])/g, (name, $1, $2) => `${$1}-${$2.toLowerCase()}`)
	};
	const languageTemplatePath = path.join(templatePath, 'languages', language);

	const generateFile = (fileDir, file) => {
		const content = mustache.render(fs.readFileSync(file, 'utf8'), templateProps);
		const targetFile = path.join(componentPath, path.relative(fileDir, file));

		fs.mkdirSync(path.dirname(targetFile), { recursive: true });
		fs.writeFileSync(targetFile, content, 'utf8');

		console.log(`generate ${targetFile}`);
	};

	try {
		glob
			.sync(path.join(templatePath, '**/*'), {
				nodir: true,
				ignore: [path.join(templatePath, '/languages/**/*')]
			})
			.forEach(file => {
				generateFile(templatePath, file);
			});

		glob
			.sync(path.join(languageTemplatePath, '**/*'), {
				nodir: true
			})
			.forEach(file => {
				generateFile(languageTemplatePath, file);
			});
	} catch (error) {
		console.error(error);
		console.log('it seems like something went wrong');
		console.log('reversing changes...');

		rimraf.sync(componentPath);
		console.log('reversed successfully, nothing changed');
		return;
	}

	const styleFilePath = path.resolve(__dirname, '../src/style/index.less');

	fs.appendFileSync(styleFilePath, `@import '../components/${name}/index';\n`, 'utf8');
	fs.appendFileSync(
		path.join(sourcePath, 'index.js'),
		`export { default as ${name} } from './components/${name}';\n`,
		'utf8'
	);
}

(async () => {
	const questions = [
		{
			type: 'text',
			name: 'name',
			message: 'Please input component name (PascalCase), e.g. Panel, PanelHeader...',
			validate: name => {
				if (!componentNameRegex.test(name)) {
					return `Please use an valid component name which matched regex: ${componentNameRegex.source}`;
				}

				const componentPath = path.join(componentsPath, name);

				if (fs.existsSync(componentPath) && !!fs.readdirSync(componentPath).length) {
					return `Component ${name} already exists`;
				}

				return true;
			}
		},
		{
			type: 'select',
			name: 'language',
			initial: 0,
			message: 'Please choose your program language',
			choices: [{ title: 'TypeScript', value: 'ts' }, { title: 'JavaScript', value: 'js' }]
		}
	];

	createComponent(await prompts(questions));
})();
