import fs from 'fs';
import chalk from 'chalk';




function trataErro (erro) {
        throw new Error(chalk.red(erro.code, 'Fez merda jumento'));
   }
// ultilizando o Async e o await 

async function pegaArq (caminho){
    try { 
    const encoding = 'utf-8'; 

    const texto = await fs.promises.readFile(caminho,encoding);
    console.log(chalk.green(texto))
    } catch(erro){
        trataErro(erro)
    }
}
// alem do try (caminho feliz) catch ( o caminho do erro ) temos tambem o finally que sempre sera executado indepedente do caso 



// Ultilizando o Then()
/* function pegaArq (caminho){
     const encoding = 'utf-8'; 
    
        fs.promises
        .readFile(caminho, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch((erro) => trataErro(erro)) // tambem pode ser feito dessa formas ===  .catch(trataErro)
    } */



pegaArq('./arquivos/texto.md');


/* function pegaArquivo (caminho){ sicrona 
    const encoding = 'utf-8';
    
    fs.readFile(caminho, encoding, (erro,texto)=>{
         if(erro){
            trataErro(chalk.red(erro.code, 'Fez merda jumento'));
         } else{
            console.log(chalk.green(texto))
         }   
    });
}; */