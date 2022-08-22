document.addEventListener("DOMContentLoaded", st_entra ) 

function st_entra() {
    
    const listaprincipal = document.createElement('ol')
    document.body.prepend(listaprincipal)
    const contH2 = document.querySelectorAll('h2')

    for (let i = 0; i < contH2.length; i++) {

        const elementos = f_criaçãodeLista(`#h2${i + 1}`, contH2[i].textContent)
        listaprincipal.appendChild(elementos)
        mudarH2(contH2[i], i + 1)

    }
}

// Adicionando os h2 na lista (ol)
function f_criaçãodeLista(ref, texto) {

    const li = document.createElement('li')
    const criarLink = f_criaçãodeLink(ref, texto)
    li.appendChild(criaçãodeLink)

    return li
}

// Criando texto clicável (link)
function f_criarLink(href, texto) {

    const criarLink = document.createElement('a')
    criarLink.setAttribute('href', href)
    criarLink.textContent = texto

    return criarLink
}

// Mudando os textos no H2
function mudarH2(elemento, num) {
    elemento.textContent = `${num}. ${elemento.textContent}`
    elemento.id = `h2${num}`
    const voltar = f_criarLink('#', 'Voltar')
    f_inserirDepois(elemento, voltar)
}

// Inserindo na h2 modificado na tela
function f_inserirDepois(elemento, ref) {
    const nextElement = elemento.nextElementSibling
    elemento.parentElement.insertBefore(ref, nextElement)
}


  
