$(function () {
    //ao clickar no botão
    $('#j1').bind('click', function (e) {
        //não realiza a atualização
        e.preventDefault();
        //converte o valor do input em integer
        p1 = parseInt($('#P1').val());
        //caso o valor seja diferente de 12
        if (p1 != 12) {
            //atribui 1 ao valor
            p1 = p1 + 1;
            //caso seja igual a 12
            if (p1 == 12) {
                //exibe o toast
                $.toast({
                    heading: 'Success',
                    text: 'PARABENS VOCE GANHOU!',
                    showHideTransition: 'slide',
                    icon: 'success'
                })
                //atribui o valor ao input
                $('#P1').val(p1);
            } else {
                //atribui o valor ao input
                $('#P1').val(p1);
            }
        } else {
            //caso contrario exibe o toast
            $.toast({
                heading: 'Success',
                text: 'PARABENS VOCE GANHOU!',
                showHideTransition: 'slide',
                icon: 'success'
            })
        }
    });

    //ao click do botão para adicionar 1 ao segundo jogador
    $('#j2').bind('click', function (e) {
        //não permite o envio do formulario
        e.preventDefault();
        //converte o valor do input para integer
        p2 = parseInt($('#P2').val());
        //caso o valor seja diferente de 12
        if (p2 != 12) {
            //atribui 1 ao valor
            p2 = p2 + 1;
            //caso o p2 seja igual a 12 então exibe o toast
            if (p2 == 12) {
                $.toast({
                    heading: 'Success',
                    text: 'PARABENS VOCE GANHOU!',
                    showHideTransition: 'slide',
                    icon: 'success'
                })
                //atribui o valor ao input
                $('#P2').val(p2);
                //atribui o valor ao input
            } else {
                $('#P2').val(p2);
            }
            //caso contrario exibe o toast
        } else {
            $.toast({
                heading: 'Success',
                text: 'PARABENS VOCE GANHOU!',
                showHideTransition: 'slide',
                icon: 'success'
            })
        }
    });

    //ao click do botão para subtrair 1 do primeiro jogador
    $('#j1-').bind('click', function (e) {
        //não permite o envio do formulario
        e.preventDefault();
        var p1 = parseInt($('#P1').val());
        if (p1 != 0) {
            p1 = p1 - 1;
        } else {
            p1 = 0;
            $.toast({
                text: "Voce ta querendo roubar?",
                icon: 'error',
                showHideTransition: 'fade',
                allowToastClose: true,
                hideAfter: 3000,
                position: 'top-right',
            });
        }
        $('#P1').val(p1);
    });

    //ao click do botão para subtrair 1 do primeiro jogador
    $('#j2-').bind('click', function (e) {
        //não permite o envio do formulario
        e.preventDefault();
        var p2 = parseInt($('#P2').val());
        if (p2 != 0) {
            p2 = p2 - 1;
        } else {
            p2 = 0;
            $.toast({
                text: "Voce ta querendo roubar?",
                icon: 'error',
                showHideTransition: 'fade',
                allowToastClose: true,
                hideAfter: 3000,
                position: 'top-right',
            });
        }
        $('#P2').val(p2);
    });


    $('#reiniciar').bind('click', function (e) {
        e.preventDefault();
        $('#P1').val(0);
        $('#P2').val(0);
        console.log("REINICIOU")
    });



});