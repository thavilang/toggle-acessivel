# Componente Toggle Acessível a Leitores de Tela

Esse é um código para fazer elementos toggle serem acessíveis a leitores de tela. Todos os arias são colocados via JavaScript. Aceito contribuições :)

----------------------------------------------------

Demo: https://thavilang.github.io/toggle-acessivel/

----------------------------------------------------

## Estrutura HTML
Adicione o atributo ```js-toggle``` ao container que agrupa os botões e os conteúdos que serão controlados:

```HTML
<div js-toggle>
    <button>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</button>
    <div>
        <!-- Conteúdo que será expandido/recolhido -->
    </div>
    <button>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</button>
    <div>
        <!-- Conteúdo que será expandido/recolhido -->
    </div>
    <button>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</button>
    <div>
        <!-- Conteúdo que será expandido/recolhido -->
    </div>
</div>
```

## CSS
Adicione o arquivo css ou scss base no seu projeto. Pode acontecer de você precisar aumentar o max-height setado por padrão caso o conteúdo do seu toggle seja muito extenso. É um código css simples e facilmente customizável, sinta-se livre com ele :)

## JavaScript
Adicione o código JS no seu projeto

## Opcionais
Você pode adicionar a classe "```ativo```" em um dos seus botões para que o toggle tenha um item aberto por padrão. Ex:

```HTML
<div js-toggle>
    <button class="ativo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</button>
    <div>
        <!-- Conteúdo que será expandido/recolhido -->
    </div>
    <button>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</button>
    <div>
        <!-- Conteúdo que será expandido/recolhido -->
    </div>
    <button>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</button>
    <div>
        <!-- Conteúdo que será expandido/recolhido -->
    </div>
</div>
```
