// Aguardar o DOM estar pronto para executar os scripts JQuery
$(document).ready(function(){
  $('#loginAluno').submit(function(event){
    if($('#inputUsuario').val() == "root" && $('#inputSenha').val() == "1234"){
      // Executa o código se for verdadeiro
      $('#mensagem').addClass("alert alert-success alert-dismissible fade show")
      $('#mensagem').removeClass('alert-warning')
      $('#mensagem').text('Usuário Logado!').show().fadeOut(3000)
    } else {
      $('#mensagem').addClass("alert alert-warning alert-dismissible fade show")
      $('#mensagem').removeClass('alert-success')
      $('#mensagem').text('usuário ou senha inválida!').show().fadeOut(3000)
      event.preventDefault() // bloqueia o evento de submit
    }
  })
})