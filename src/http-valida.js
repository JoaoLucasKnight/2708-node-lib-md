function tiraurl (arr) {
   return arr.map ((objetoLink)=> Object.values(objetoLink).join())
}

export default function listaValidade (listadelinks) {
    return tiraurl(listadelinks);
};

