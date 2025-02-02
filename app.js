let listaAmigos = [];
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');

function adicionarAmigo() {
  let amigo = document.getElementById('amigo').value.trim();

  if (!amigo) {
    // valida o input
    ulResultado.innerHTML =
      '<li class="erro">Por favor, digite um nome válido.</li>';
    return;
  }

  if (listaAmigos.includes(amigo)) {
    ulResultado.innerHTML = `<li class="erro">${amigo} já está na lista!</li>`;
  } else {
    listaAmigos.push(amigo); // adiciona o amigo á lista

    const li = document.createElement('li');
    li.textContent = amigo;
    ulListaAmigos.appendChild(li);
    // Feedback de sucesso
    ulResultado.innerHTML = `<li class="sucesso">${amigo} foi adicionado!</li>`;
  }

  document.getElementById('amigo').value = '';
}
