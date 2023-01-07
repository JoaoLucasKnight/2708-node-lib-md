import fs from 'fs';
import chalk from 'chalk';


const testeTexto = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

function tiraLink (texto){
    const regex = /\[([^[\]]*?)\]\((https?[^\s]*)\)/gm
    const capturas = texto.match(regex);
    console.log(capturas)

}

tiraLink(testeTexto);



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
// ---------------- Comentarios --------------

// alem do try (caminho feliz) catch ( o caminho do erro ) temos tambem o finally que sempre sera executado indepedente do caso 

// \[[^[\]]*?\]
//\(https?[^\s]*\)
// \[([^[\]]*?)\]\((https?[^\s]*)\)








// Ultilizando o Then()
/* function pegaArq (caminho){
     const encoding = 'utf-8'; 
    
        fs.promises
        .readFile(caminho, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch((erro) => trataErro(erro)) // tambem pode ser feito dessa formas ===  .catch(trataErro)
    } */

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