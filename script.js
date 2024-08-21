// Data do início do relacionamento
const dataInicio = new Date('2024-04-24');

// Função para calcular o tempo juntos
function calcularTempoJuntos() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.4375));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('tempo-juntos').textContent = 
        `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualizar a cada segundo
setInterval(calcularTempoJuntos, 1000);

calcularTempoJuntos();


