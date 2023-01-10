import chalk from "chalk";

function tiraurl (arrLinks) {
   return arrLinks.map ((objetoLink)=> Object.values(objetoLink).join())
}

async function checaStatus (listaURLs) {
    const arrStatus = await Promise
    .all (
        listaURLs.map(async (url)=> {
            try {
                const response = await fetch(url)
                return response.status
            }catch (erro){
                return 'Deu merda no link'
            }

        
        })
    )
    return arrStatus;
}



export default async function listaValidade (listadelinks) {
    const links = tiraurl(listadelinks);
    const status = await checaStatus(links);

    
    return listadelinks.map((objeto,indice) => ({
        ...objeto,
        status: status[indice]
    }))
};


