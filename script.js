let gruposToggle = document.querySelectorAll('[js-toggle]');
gruposToggle.forEach(grupoToggle => {
    grupoToggle.setAttribute('role', 'tablist');

    let botoesToggle = grupoToggle.querySelectorAll('button');
    botoesToggle.forEach(botaoToggle => {
        const idBotao = ToggleRandomId();
        botaoToggle.setAttribute('id', idBotao);
        const idResposta = ToggleRandomId();
        botaoToggle.nextElementSibling.setAttribute('id', idResposta);
        botaoToggle.setAttribute('role', 'tab');
        botaoToggle.setAttribute('aria-selected', 'false');
        botaoToggle.setAttribute('aria-controls', idResposta);
        botaoToggle.nextElementSibling.setAttribute('role', 'tabpanel');
        botaoToggle.nextElementSibling.setAttribute('aria-labelledby', idBotao);

        if(botaoToggle.classList.contains('ativo')){
            botaoToggle.setAttribute('aria-selected', 'true');
            botaoToggle.setAttribute('tabindex', '-1');
            botaoToggle.nextElementSibling.setAttribute('tabindex', '0');
            botaoToggle.nextElementSibling.classList.add('ativo');
        }

        botaoToggle.addEventListener('click', function () {
            efeitoToggle(botaoToggle, botoesToggle);
        });
    });
});

function efeitoToggle(botao, listaBotoes) {
    if (!botao.classList.contains('ativo')) {
        if (listaBotoes) {
            listaBotoes.forEach(cadaBotao => {
                cadaBotao.nextElementSibling.classList.add('efeito-toggle');
                setTimeout(() => {
                    fecharToggle(cadaBotao);
                }, 300);
            });
            setTimeout(() => {
                abrirToggle(botao);
            }, 300);
        } else {
            abrirToggle(botao);
        }
    } else {
        botao.nextElementSibling.classList.add('efeito-toggle');
        setTimeout(() => {
            fecharToggle(botao);
        }, 500);
    }
}

function abrirToggle(elemento) {
    elemento.classList.add('ativo');
    elemento.setAttribute('aria-selected', 'true');
    elemento.setAttribute('tabindex', '-1');
    elemento.nextElementSibling.setAttribute('tabindex', '0');
    elemento.nextElementSibling.classList.add('ativo');
}

function fecharToggle(elemento) {
    elemento.classList.remove('ativo');
    elemento.setAttribute('aria-selected', 'false');
    elemento.nextElementSibling.classList.remove('ativo');
    elemento.removeAttribute('tabindex');
    elemento.nextElementSibling.removeAttribute('tabindex');
    elemento.nextElementSibling.classList.remove('efeito-toggle');
}

function ToggleRandomId() {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return 'toggle-' + s4() + s4() + '-' + s4() + '-' + s4();
}