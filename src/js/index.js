
const listaSelecaoZeldas = document.querySelectorAll(".zelda");

listaSelecaoZeldas.forEach(zelda => {
	zelda.addEventListener("click", () => {
		esconderCartaoZelda();

		const idZeldaSelecionado = mostrarCartaoZeldaSelecionado(zelda);

		desativarZeldaNaListagem();
		ativarZeldaSelecionadoNaListagem(idZeldaSelecionado);

	})
})


function ativarZeldaSelecionadoNaListagem(idZeldaSelecionado) {
	const zeldaSelecionadoNaListagem = document.getElementById(idZeldaSelecionado);
	zeldaSelecionadoNaListagem.classList.add("ativo");
}

function desativarZeldaNaListagem() {
	const zeldaAtivoNaListagem = document.querySelector(".ativo");
	zeldaAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoZeldaSelecionado(zelda) {
	const idZeldaSelecionado = zelda.id;
	const idDoCartaoZeldaParaAbrir = "cartao-" + idZeldaSelecionado;
	const cartaoZeldaParaAbrir = document.getElementById(idDoCartaoZeldaParaAbrir);
	cartaoZeldaParaAbrir.classList.add("aberto");
	return idZeldaSelecionado;
}

function esconderCartaoZelda() {
	const cartaoZeldaAberto = document.querySelector(".aberto");
	cartaoZeldaAberto.classList.remove("aberto");
}