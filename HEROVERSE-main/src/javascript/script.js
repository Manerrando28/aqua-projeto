// Definição da função carregarConteudoJSON()
function carregarConteudoJSON() {
    fetch('seu_arquivo_json.json') // Substitua 'seu_arquivo_json.json' pelo caminho do seu arquivo JSON
    .then(response => response.json())
    .then(data => {
        // Atualizar o conteúdo do site com base nos dados do JSON
        document.getElementById('pageTitle').textContent = data.pageTitle;
        document.getElementById('projetoLink').textContent = data.projetoLinkText;
        document.getElementById('projetoTitle').textContent = data.projetoTitle;
        document.getElementById('projetoDescription').textContent = data.projetoDescription;
        document.getElementById('footerDescription').textContent = data.footerDescription;
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
}

// Chamada da função carregarConteudoJSON() após a definição
carregarConteudoJSON();
// Definir o caminho da imagem para o banner
document.getElementById('banner').src = "./src/assets/banner.jpg";

// Implementar o carregamento do conteúdo JSON
function carregarConteudoJSON() {
    fetch('caminho/do/seu/arquivo.json')
    .then(response => response.json())
    .then(data => {
        // Atualizar o conteúdo do site com base nos dados do JSON
        document.getElementById('pageTitle').textContent = data.pageTitle;
        document.getElementById('projetoLink').textContent = data.projetoLinkText;
        document.getElementById('projetoTitle').textContent = data.projetoTitle;
        document.getElementById('projetoDescription').textContent = data.projetoDescription;
        document.getElementById('footerDescription').textContent = data.footerDescription;
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
}

// Chamar a função para carregar o conteúdo do JSON quando a página for carregada
document.addEventListener('DOMContentLoaded', carregarConteudoJSON);

