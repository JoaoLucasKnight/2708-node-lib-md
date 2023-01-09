import fs from 'fs';
import chalk from 'chalk';


function tiraLink (texto){
    const regex = /\[([^[\]]*?)\]\((https?[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]; // esses tres pontos espalha em array 

    const resultados  = capturas.map(capturas => ({[capturas[1]]: capturas[2]}))
    console.log((resultados))

}



// ultilizando o Async e o await 

async function pegaArq (caminho){
    try { 
    const encoding = 'utf-8'; 
    const texto = await fs.promises.readFile(caminho,encoding);

    tiraLink(texto);
    } catch(erro){
        trataErro(erro)
    }
}

pegaArq('./arquivos/texto.md');


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