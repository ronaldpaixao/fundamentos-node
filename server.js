const filmes = [
    {
        titulo: 'Her',
        genero: 'drama',
        nota: 8.8
    },
    {
        titulo: 'Interestelar',
        genero: 'sci-fi',
        nota: 8.5
    },
    {
        titulo: 'The Chainsaw Massacre, 1974',
        genero: 'horror',
        nota: 8.0,
    },
     {
        titulo: 'A Origem',
        genero: 'sci-fi',
        nota: 9.0,
    },

]

const filmeMaiorNota = filmes.reduce((maior, atual) => {
    return (atual.nota > maior.nota) ? atual : maior;
});

console.log('------- Todos os filmes cadastrados ------ ')
console.table(filmes)

console.log('------- Filme de maior nota --------')
console.table(`${filmeMaiorNota.titulo}: ${filmeMaiorNota.nota}`);

console.log('------- Qual gênero tem mais filmes? -----')
