let napok = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
let masolat = napok.slice()
function legyenveletlensorrend(tomb)

{
    let ujTomb = [];
    let hossz = tomb.length;
    
 
    for (let i = 0; i < hossz; i++) 
    {
        let index = Math.floor(Math.random() * tomb.length);
        ujTomb.push(tomb[index]);
        tomb.splice(index, 1);
 
    }
 
    return ujTomb;
}
let ujSorrend = legyenveletlensorrend(napok)
console.log(ujSorrend)

console.log(masolat)

