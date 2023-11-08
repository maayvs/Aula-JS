import { NavBar } from "./navbar.js";
import { Card } from "./card.js";

const navBar = new NavBar();
const card = new Card();
navBar.criaNavBar();
//card.criarCard();

const produto = [
    {
        nome: 'Pizza de queijo',
        texto: 'Essa é a melhor pizza do senac',
        imagem: 'https://cdn-icons-png.flaticon.com/512/3132/3132693.png',
    },
    {
    nome: 'Pizza de calabresa',
    texto: 'Essa é a segunda melhor pizza do senac',
    imagem: 'https://cdn-icons-png.flaticon.com/512/3132/3132693.png',
    }
]

produto.forEach(produto =>  {
    card.criarCard(produto.imagem, produto.nome, produto.texto)
})