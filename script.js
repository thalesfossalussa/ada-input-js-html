let arrProdutos = [];
const tableBody = document.getElementById("table-body");

function addProduto() {
    const txtCodigo = document.getElementById("txt-codigo");
    const txtProduto = document.getElementById("txt-produto");
    const txtQuantidade = document.getElementById("txt-quantidade");
    const txtPrecoUnit = document.getElementById("txt-preco-unit");

    limpaTabela();

    arrProdutos.push({
        codigo: txtCodigo.value,
        produto: txtProduto.value,
        quantidade: txtQuantidade.value,
        precoUnitario: txtPrecoUnit.value
    })

    atualizarTabela();

    limpaCampos();

}

function limpaCampos() {
    const txtCodigo = document.getElementById("txt-codigo");
    const txtProduto = document.getElementById("txt-produto");
    const txtQuantidade = document.getElementById("txt-quantidade");
    const txtPrecoUnit = document.getElementById("txt-preco-unit");

    txtCodigo.value = "";
    txtProduto.value = "";
    txtQuantidade.value = "";
    txtPrecoUnit.value = "";
}

function limpaTabela() {
    tableBody.innerHTML = "";
}

function atualizarTabela() {
    limpaTabela();
    for (let i = 0; i < arrProdutos.length; i++) {
        tableBody.innerHTML += `
        <tr>
            <td>${arrProdutos[i].codigo}</td>
            <td>${arrProdutos[i].produto}</td>
            <td>${arrProdutos[i].quantidade}</td>
            <td>${arrProdutos[i].precoUnitario}</td>
        </tr>
        `;
    }

    
}