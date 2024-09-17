# Resumo da aula 1
No dia 04/09 ou 05/09, exploramos conceitos essenciais sobre Git e GitHub, que são ferramentas fundamentais para o controle de versão e colaboração em projetos de desenvolvimento. Também usamos o Visual Studio Code (VS Code) para gerenciar nossos projetos.

# O que é Git?
Git é um sistema de controle de versão desenvolvido por Linus Torvalds para gerenciar o código-fonte do Linux. Ele permite que múltiplos desenvolvedores trabalhem em um projeto ao mesmo tempo, mantendo um histórico completo das alterações feitas. Git ajuda a organizar e versionar o código de forma eficiente.

Para começar a usar o Git, podemos verificar se ele já está instalado no seu computador com o comando:

git --version

Se não estiver, você pode baixá-lo.

Após a instalação, é importante configurar com o  nome e e-mail para que as suas alterações sejam atribuídas corretamente, podemos fazer esse processo com o código:

git config --global user.name "seu_nome"
git config --global user.email "seu_email"

# O que é GitHub?

GitHub é uma plataforma online que utiliza o Git para controle de versão e colaboração. Com o GitHub, podemos armazenar e compartilhar  projetos, colaborar com outros desenvolvedores e gerenciar o código de forma visual e organizada.

Para criar um novo repositório no GitHub:

podemos ir até o perfil e clicar em "Your repositories".
Clica em "New", escolher um nome para o repositório, definir a visibilidade (público ou privado) e adicionar um arquivo README se desejar.
Clicar em "Create repository".
Se encontrar um repositório interessante que deseja copiar para a sua conta, você podemos "forkar" (criar uma cópia) clicando no ícone de "Fork" na página do repositório.

Para trabalhar localmente em um repositório, podemos usar o comando:

git clone url-do-repositorio

# Conceitos Importantes

Repositório: É onde o código do projeto é armazenado e versionado.

Branch: Permite que possamos trabalhar em diferentes versões do projeto sem afetar a versão principal. A branch principal é chamada de "master" ou "main". podemos criar uma nova branch com:

git checkout -b nome-da-branch

Para listar todas as branches:

git branch

E para mudar de branch:

git checkout nome-da-branch

Pull Request (PR): Solicitação para integrar alterações feitas em uma branch ou fork com a branch principal do repositório. É uma forma de revisar e discutir as alterações antes de integrá-las.

Merge: Processo de unir duas branches. Quando uma PR é aceita, as alterações são mescladas com a branch principal, consolidando as modificações feitas.

# Markdown e o Arquivo README.md

O arquivo README.md é um documento em Markdown que fornece informações sobre o projeto, como seu propósito, instruções de uso e instalação. O Markdown facilita a formatação de texto de maneira simples.

Aqui estão algumas dicas para usar Markdown:

Use negrito e itálico para destacar texto.
Crie listas com - ou *.
Adicione links e imagens com facilidade.
Utilize tabelas para organizar informações.

Para aprimorar suas habilidades em Markdown, podemos conferir recursos como:

Awesome README Templates
Como Fazer um README.md Bonitão
Blog da Rocketseat sobre README

# Visual Studio Code (VS Code)

VS Code é um editor de código gratuito e open-source desenvolvido pela Microsoft. Ele oferece uma série de extensões que facilitam o desenvolvimento, como:

Code Runner: Executa snippets de código rapidamente.
Prettier: Formata o código automaticamente.
vscode-icons: Adiciona ícones aos arquivos e pastas.
