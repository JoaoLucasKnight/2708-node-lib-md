import pegaArq from "./index.js";
import fs from 'fs';
import chalk from 'chalk';
import listaValidade from "./http-valida.js";


const caminho = process.argv;

async function imprimi (valida ,resultado, nome = '') {

    if (valida){
    console.log(
        chalk.black.bgGreen('Lista Validada'), 
        await listaValidade(resultado));
    }else 
    console.log(
        chalk.yellow('Caminho do Arquivo'),
        nome, 
        chalk.blue("links"),
        resultado);

}

async function processaTexto (argumento){
    const caminho = argumento[2];
    const valida = argumento[3] === '--valida';
    try{
        fs.lstatSync(caminho)
    }catch (erro) {
        if (erro.code === "ENOENT"){
            console.log(chalk.red("Arquivo ou diretorio não existe"));
            return
        }
    }

    if (fs.lstatSync(caminho).isFile()){
        const resultado =await pegaArq(caminho)
        imprimi(valida,resultado, caminho)

    }else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async(nomeArquivo)=> {
            const lista = await pegaArq(`${caminho}/${nomeArquivo}`);
            imprimi(valida,lista,nomeArquivo)
        })
    }
}

processaTexto(caminho);
