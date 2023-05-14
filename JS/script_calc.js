
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-Clear'),
        
        inicia() {
            this.cliqueBotoes();
            this.clicaEnter();
            this.pressionaEnter();
            this.pressionaNumbers();
            this.pressionaBackspace();
        },
        
        clicaEnter() {
            this.display.addEventListener('click', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        pressionaEnter() {
            document.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        pressionaBackspace() {
            document.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    this.apagaUm();
                }
            })
        },

        pressionaNumbers() {
            // Adicionado evento ao elemento de document
            document.addEventListener('keyup', (e) => {
                // 49 é o código para a tecla "1"
                if (e.keyCode === 97) {
                    this.btnParaDisplay('1');
                };

                if (e.keyCode === 98) {
                    this.btnParaDisplay('2');
                };

                if (e.keyCode === 99) {
                    this.btnParaDisplay('3');
                };

                if (e.keyCode === 100) {
                    this.btnParaDisplay('4');
                };

                if (e.keyCode === 101) {
                    this.btnParaDisplay('5');
                };

                if (e.keyCode === 102) {
                    this.btnParaDisplay('6');
                };

                if (e.keyCode === 103) {
                    this.btnParaDisplay('7');
                };

                if (e.keyCode === 104) {
                    this.btnParaDisplay('8');
                };

                if (e.keyCode === 105) {
                    this.btnParaDisplay('9');
                };

                if (e.keyCode === 111) {
                    this.btnParaDisplay('/');
                };

                if (e.keyCode === 106) {
                    this.btnParaDisplay('*');
                };

                if (e.keyCode === 107) {
                    this.btnParaDisplay('+');
                };

                if (e.keyCode === 109) {
                    this.btnParaDisplay('-');
                };

                if (e.keyCode === 96) {
                    this.btnParaDisplay('0');
                };

                if (e.keyCode === 110) {
                    this.btnParaDisplay('.');
                };

                if (e.keyCode === 27) {
                    this.clearDisplay();
                };
            })
        },
        
        clearDisplay() {
            this.display.value = '';
        },
        
        // Para apagar um número, usando o slice.
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;
            
            try {
                conta = eval(conta);
                
                if (!conta) {
                    alert('Conta inválida!');
                    return;
                }
                
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida.');
                return;
            }
        },
        
        cliqueBotoes() {
            //this -> calculadora
            document.addEventListener('click', e => {
                const el = e.target;
                
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            })
        },
        
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
};

const calculadora = criaCalculadora();
calculadora.inicia();

/* 
document.addEventListener('keyup', (e) => {
    console.log(e);
});  */ 