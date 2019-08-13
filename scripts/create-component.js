const fs = require('fs');
const path = require('path');

const prompts = require('prompts');
const mustache = require('mustache');
const glob = require('glob');
const componentNameRegex = /^[A-Z][A-Za-z]*$/;
const templatePath = path.resolve(__dirname, 'template');
const componentsPath = path.resolve(__dirname, '../src/components');

function createComponent({ name, language }) {
	if (!name || !language) {
		return;
	}
	const componentPath = path.join(componentsPath, name);
	const templateProps = {
		name,
		className:
			name[0].toLowerCase() +
			name.slice(1).replace(/([a-z])([A-Z])/g, (name, $1, $2) => `${$1}-${$2.toLowerCase()}`)
	};
	const languageTemplatePath = path.join(templatePath, 'languages', language);

	const generateFile = (fileDir, file) => {
		const content = mustache.render(fs.readFileSync(file, 'utf8'), templateProps);
		const targetFile = path.join(componentPath, path.relative(fileDir, file));

		fs.writeFileSync(targetFile, content, 'utf8');

		console.log(`generate ${targetFile}`);
	};

	fs.mkdirSync(componentPath, { recursive: true });

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

		fs.rmdirSync(componentPath);
	}
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
			choices: [{ title: 'JavaScript', value: 'js' }, { title: 'TypeScript', value: 'ts' }]
		}
	];

	createComponent(await prompts(questions));
})();
