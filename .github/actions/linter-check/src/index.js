import * as core from '@actions/core';
import * as fs from 'fs';

async function run() {
    try {
        const requiredFile = 'build-config.json';
        if (!fs.existsSync(requiredFile)) {
            core.setFailed(`Arquivo obrigatório '${requiredFile}' não encontrado!`);
        } else {
            core.info(`Arquivo '${requiredFile}' encontrado. Tudo certo!`);
        }
    } catch (error) {
        core.setFailed(`Erro ao executar o linter: ${error}`);
    }
}

run();
    