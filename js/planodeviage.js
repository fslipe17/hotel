
var botao = document.querySelector('button');

botao.addEventListener('click', () => {
    const destino = document.getElementById('destino').value;
    const dataInicio = document.getElementById('data-inicio').value;
    const dataFim = document.getElementById('data-fim').value;
    const nPessoas = document.getElementById('n-pessoas').value;

    // Validação de dados (opcional)

    // Exibindo o plano de viagem (simplificado)
    alert(`Plano de Viagem:\nDestino: ${destino}\nData de Início: ${dataInicio}\nData de Fim: ${dataFim}\nNúmero de Pessoas: ${nPessoas}`);
});
