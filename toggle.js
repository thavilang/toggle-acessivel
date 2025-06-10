/*Toggle Acessível V 2.0*/
window.addEventListener('DOMContentLoaded', function () {
    let gruposToggle = document.querySelectorAll('[js-toggle]');
    gruposToggle.forEach(grupoToggle => {
        
        // Verifica se o atributo js-toggle contém 'no-auto-close'
        const noClose = grupoToggle.getAttribute('js-toggle') === 'no-auto-close';

        let botoesToggle = grupoToggle.querySelectorAll('button');

        botoesToggle.forEach(botaoToggle => {
            const idBotao = ToggleRandomId();
            botaoToggle.setAttribute('id', idBotao);
            const idResposta = ToggleRandomId();
            botaoToggle.nextElementSibling.setAttribute('id', idResposta);
            botaoToggle.nextElementSibling.setAttribute('role', 'region');
            botaoToggle.setAttribute('aria-expanded', 'false');
            botaoToggle.setAttribute('aria-controls', idResposta);
            botaoToggle.nextElementSibling.setAttribute('aria-labelledby', idBotao);
            botaoToggle.nextElementSibling.style.visibility = 'hidden'; // Começa oculto

            if (botaoToggle.classList.contains('ativo')) {
                abrirToggle(botaoToggle);
            }

            botaoToggle.addEventListener('click', function () {
                efeitoToggle(botaoToggle, botoesToggle, noClose); // Passa 'noClose' como parâmetro
            });
        });
    });
});

function efeitoToggle(botao, listaBotoes, noClose) {
    if (!botao.classList.contains('ativo')) {
        if (listaBotoes && !noClose) { // Só fecha os outros se 'noClose' não estiver presente
            listaBotoes.forEach(cadaBotao => {
                if (cadaBotao.classList.contains('ativo')) {
                    fecharToggle(cadaBotao);
                }
            });
            // Dá um pequeno delay para fechar antes de abrir o novo
            setTimeout(() => {
                abrirToggle(botao);
            }, 300);
        } else {
            abrirToggle(botao);
        }
    } else {
        fecharToggle(botao);
    }
}

function abrirToggle(elemento) {
    const conteudo = elemento.nextElementSibling;

    elemento.classList.add('ativo');
    elemento.setAttribute('aria-expanded', 'true');
    elemento.setAttribute('tabindex', '-1');

    conteudo.style.visibility = 'visible';
    conteudo.classList.add('ativo');
    conteudo.setAttribute('tabindex', '0');

    // Primeiro define height 0 para garantir transição
    conteudo.style.height = '0px';

    // Depois, no próximo frame, seta para scrollHeight para animar
    requestAnimationFrame(() => {
        const alturaReal = conteudo.scrollHeight;
        conteudo.style.height = alturaReal + 'px';
    });
}

function fecharToggle(elemento) {
    const conteudo = elemento.nextElementSibling;

    elemento.classList.remove('ativo');
    elemento.setAttribute('aria-expanded', 'false');
    elemento.removeAttribute('tabindex');

    // Animar altura para 0 para fechar
    conteudo.style.height = '0px';
    conteudo.setAttribute('tabindex', '-1');

    // Remover ativo e esconder após transição acabar
    conteudo.addEventListener('transitionend', function handler() {
        if (conteudo.style.height === '0px') {
            conteudo.style.visibility = 'hidden';
            conteudo.classList.remove('ativo');
        }
        conteudo.removeEventListener('transitionend', handler);
    });
}

const idsGerados = new Set();
function ToggleRandomId() {
    let id;
    do {
        id = 'toggle-' + s4() + s4();
    } while (idsGerados.has(id));
    idsGerados.add(id);
    return id;

    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1, 4);
    }
}