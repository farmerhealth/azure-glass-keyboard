# Azure Glass Keyboard

Crie a interface de um teclado virtual para celular com estética Glass UI.

Estilo visual

Design moderno, minimalista e tecnológico.

Utilizar principalmente tons de azul-marinho, evoluindo gradualmente para azul muito escuro/quase preto.

Efeito de vidro translúcido nos elementos da interface.

Superfícies com transparência, blur e leve efeito de profundidade.

Bordas finas e discretas.

Cantos arredondados.

Sombras suaves.

Evitar cores muito vibrantes.

Evitar aparência neon.

O resultado deve ser elegante e sofisticado, não parecer um teclado gamer.

Estrutura

Criar uma tela de smartphone contendo:

1. Área de texto

Na parte superior, deixar uma área onde o texto digitado será exibido.

2. Barra de sugestões

Logo abaixo da área de texto, criar uma barra horizontal de sugestões.

Essa barra será utilizada posteriormente para mostrar a tradução em inglês da palavra digitada.

não inventar nenhuma palavra sempre mostrar a tradução para o que foi escrito, e se houver outros significados para a palavra mostrar todas traduções:

eat | eating | food

3. Teclado

Abaixo da barra de sugestões, criar um teclado QWERTY completo.

As teclas devem:

possuir aparência de vidro;

ter fundo azul-marinho translúcido;

possuir leve blur;

ter bordas finas;

possuir cantos arredondados;

apresentar as letras em branco ou branco levemente azulado;

possuir espaçamento confortável entre as teclas.

Paleta

A paleta deve partir de:

Azul-marinho → azul muito escuro → quase preto

O fundo geral deve ser escuro.

Os elementos de vidro devem possuir diferentes níveis de transparência para criar profundidade.

Importante

Neste momento, criar somente a interface visual do teclado.

Não adicionar:

login;

cadastro;

banco de dados;

gamificação;

histórico;

configurações;

pagamentos;

funcionalidades empresariais;

funcionalidades desnecessárias.

O objetivo é simplesmente criar um teclado pessoal bonito em Glass UI, que posteriormente iremos utilizar para testar a ideia de sugestões em inglês.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8a5a0eea-3079-45c9-8776-946a62705c71).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
