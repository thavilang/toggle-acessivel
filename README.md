# Componente Toggle Acessível a Leitores de Tela (v2.0)

Implementar um toggle básico em JavaScript é simples, mas garantir acessibilidade — com atributos ARIA corretos, controle de foco e navegação por teclado — geralmente exige mais código e atenção.

Este componente simplifica isso fornecendo uma estrutura HTML enxuta e a lógica necessária para toggles acessíveis com efeito sanfona.

----------------------------------------------------

https://thavilang.github.io/toggle-acessivel/

----------------------------------------------------

## CSS
Adicione o arquivo css ou scss base no seu projeto.
```HTML
<link rel="stylesheet" href="https://thavilang.github.io/toggle-acessivel/toggle.min.css">
```

## JavaScript
Adicione o código JS no seu projeto
```HTML
<script src="https://thavilang.github.io/toggle-acessivel/toggle.min.js"></script>
```

## Estrutura HTML
Adicione o atributo ```js-toggle``` ao container que agrupa os botões e os conteúdos que serão controlados:

**Não utilize id's nas perguntas e respostas, o script irá seta-los randomicamente**

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

## Observações
As versões minificadas facilitam a implementação rápida, mas os arquivos não minificados são pequenos e podem ser facilmente personalizados.

Se desejar contribuir com o projeto, fique à vontade para enviar um pull request. Este código é de uso livre e tem como objetivo simplificar a implementação de recursos de acessibilidade. Ao contribuir, você ajuda a tornar a web mais acessível para todos. :)