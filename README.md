# Amigo Secreto

Este é um projeto desenvolvido como parte do **OracleONE + Alura Challenge**, onde o objetivo é criar uma aplicação web que possibilite o sorteio aleatório de amigos secretos. O usuário pode inserir nomes de amigos, visualizar a lista de nomes e, ao final, sortear aleatoriamente um nome para revelar quem será o amigo secreto.

---

## Funcionalidades

- **Adicionar nomes**: 
  - Os usuários podem inserir o nome de um amigo em um campo de texto e adicioná-lo a uma lista clicando no botão **"Adicionar"**.
  
- **Validação de entrada**:
  - Caso o campo de texto esteja vazio, a aplicação exibe um alerta solicitando a inserção de um nome válido.
  
- **Visualização da lista**:
  - Todos os nomes adicionados são exibidos em uma lista visível na página, permitindo que o usuário acompanhe os nomes inseridos.
  
- **Sorteio aleatório**:
  - Ao clicar no botão **"Sortear Amigo"**, a aplicação seleciona aleatoriamente um dos nomes da lista e exibe o resultado na tela.

---

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização e layout.
- **JavaScript**: Lógica de manipulação de eventos, validação de entradas e sorteio aleatório.

---

## Como Executar o Projeto

### Pré-requisitos

- Navegador web (Chrome, Firefox, Edge, etc.)
- Editor de código (opcional, para visualizar/modificar o código fonte)

### Passo a Passo

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```

2. **Acesse a pasta do projeto**:
   ```bash
   cd amigo-secreto
   ```

3. **Abra o arquivo `index.html`**:
   - Você pode abrir diretamente no seu navegador (clicando duas vezes no arquivo ou utilizando o comando `open index.html` no terminal).

4. **Utilize a aplicação**:
   - Insira os nomes dos amigos no campo de texto.
   - Clique no botão **"Adicionar"** para inserir os nomes na lista.
   - Após inserir todos os nomes desejados, clique em **"Sortear Amigo"** para realizar o sorteio.

---

## Organização do Projeto

- `index.html`  
  Estrutura básica da aplicação e importação dos arquivos de estilo e script.

- `styles.css`  
  Arquivo contendo a estilização da página.

- `script.js`  
  Arquivo JavaScript responsável pela lógica de adicionar nomes, validar a entrada e realizar o sorteio aleatório.

---

## Boas Práticas

- **Validação de Dados**: O código inclui validação para garantir que não sejam adicionados nomes vazios.
- **Modularidade**: A lógica de sorteio e manipulação de elementos está separada e organizada, facilitando futuras manutenções e melhorias.
- **Feedback Visual**: Alertas e atualizações na interface proporcionam um feedback imediato para o usuário.

---

## Contribuições

Contribuições são sempre bem-vindas! Se você deseja melhorar este projeto ou corrigir algum bug, sinta-se à vontade para:

1. Fazer um fork do projeto.
2. Criar uma branch para a sua feature (`git checkout -b minha-feature`).
3. Commitar suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Enviar para a branch (`git push origin minha-feature`).
5. Abrir um Pull Request.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## Autor

- **Geovane Dias de Araújo** - [/geovanedias](https://github.com/geovanedias)

---

## Agradecimentos

- Ao time do **OracleONE** e **Alura** pelos desafios e aprendizado proporcionados.
- A todos os colaboradores e revisores que contribuíram para o desenvolvimento deste projeto.
