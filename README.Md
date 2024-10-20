Visualização do Projeto Localmente
Para visualizar o projeto localmente, siga os passos abaixo:

Clone o repositório:

bash
git clone  https://github.com/LuisFurtado27/Atividade-4.git

Acesse a pasta do projeto:

bash
cd nome-do-repositorio
Abra o arquivo index.html em um navegador: Você pode abrir o arquivo diretamente no navegador ou usar um servidor local para melhor compatibilidade. Para isso, você pode usar extensões como Live Server no Visual Studio Code ou um servidor HTTP simples.

Verifique os arquivos de estilo e script: Certifique-se de que as referências para os arquivos CSS e JavaScript estão corretas e que os caminhos para as imagens estão ajustados conforme a estrutura de pastas do projeto.

APIs Utilizadas
Random User Generator API: Utilizada para obter perfis aleatórios de usuários para os testemunhos. O endpoint usado é https://randomuser.me/api/?results=3, que retorna três usuários com suas informações.

EmailJS: Usada para o envio de mensagens através do formulário de contato. Para que funcione, é necessário configurar sua conta no EmailJS e ajustar as credenciais no código.

Bibliotecas Externas
Swiper:

Swiper
Descrição: Uma biblioteca moderna de sliders e carrosséis. Utilizada para implementar a seção de banner com transições suaves entre slides.
AOS (Animate On Scroll):

AOS
Descrição: Permite adicionar animações a elementos quando eles entram na viewport. Utilizada para melhorar a experiência visual nas seções de serviços e testemunhos.
Font Awesome:

Font Awesome
Descrição: Uma biblioteca de ícones vetoriais que permite incluir ícones facilmente. Usada para os ícones de redes sociais no rodapé e no cabeçalho.
Estrutura do Projeto
index.html: Página principal do projeto.
styles.css: Arquivo de estilo que contém os estilos da página.
script.js: Arquivo JavaScript que contém a lógica da página, incluindo a inicialização do Swiper, carregamento de serviços e testemunhos, e manipulação do formulário de contato.
