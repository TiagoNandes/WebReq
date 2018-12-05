<template>
  <!-- Login e Registo -->
  <div class="modal fade login" id="loginModal">
    <div class="modal-dialog login animated">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">Login</h4>
        </div>
        <div class="modal-body">
          <div class="box">
            <div class="content">
              <div class="error"></div>
              <div class="form loginBox">
                <form method="post" action="/login" accept-charset="UTF-8">
                  <input
                    id="email"
                    class="form-control"
                    type="text"
                    placeholder="Email"
                    name="email"
                  >
                  <input
                    id="password"
                    class="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                  >
                  <input
                    class="btn btn-default btn-login"
                    type="button"
                    value="Login"
                    onclick="loginAjax()"
                  >
                </form>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="content registerBox" style="display:none;">
              <div class="form">
                <form
                  method="post"
                  html="{:multipart=>true}"
                  data-remote="true"
                  action="/register"
                  accept-charset="UTF-8"
                >
                  <input
                    id="email"
                    class="form-control"
                    type="text"
                    placeholder="Email"
                    name="email"
                  >
                  <input
                    id="password"
                    class="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                  >
                  <input
                    id="password_confirmation"
                    class="form-control"
                    type="password"
                    placeholder="Repeat Password"
                    name="password_confirmation"
                  >
                  <input
                    class="btn btn-default btn-register"
                    type="submit"
                    value="Create account"
                    name="commit"
                  >
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="forgot login-footer">
            <span>
              Looking to
              <a href="javascript: showRegisterForm();">create an account</a>
              ?
            </span>
          </div>
          <div class="forgot register-footer" style="display:none">
            <span>Already have an account?</span>
            <a href="javascript: showLoginForm();">Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<template>
  <!-- Features Section -->
  <div id="features" class="text-center">
    <div class="container">
      <div class="col-md-10 col-md-offset-1 section-title">
        <h2>Features</h2>
      </div>
      <div class="row">
        <div class="col-xs-6 col-md-3">
          <i class="fas fa-mouse-pointer"></i>
          <h3>Todos os equipamentos à distância de um clique</h3>
          <p>Com esta ferramenta web terás acesso a todos os equipamentos disponíveis para requisição.</p>
        </div>
        <div class="col-xs-6 col-md-3">
          <i class="fas fa-chart-bar"></i>
          <h3>Rankings</h3>
          <p>Com esta funcionalidade poderás ver onde te encontras na classificação de requisições.</p>
        </div>
        <div class="col-xs-6 col-md-3">
          <i class="fa fa-chart-pie"></i>
          <h3>Estatísticas</h3>
          <p>Poderás ver estatísticas específicas de um equipamento ou requisição.</p>
        </div>
        <div class="col-xs-6 col-md-3">
          <i class="fa fa-group"></i>
          <h3>Recomendação</h3>
          <p>Agora poderás...</p>
        </div>
      </div>
    </div>
  </div>
</template>
<template>
  <!-- About Section -->
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <img src="img/esmad.jpg" class="img-responsive" alt>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="about-text">
            <h2>Sobre Nós</h2>
            <p>
              Este website foi elaborado no âmbito da disciplina Programaçao Web I lecionada no segundo ano da Licenciatura
              de Tecnologias e Sistemas de Informação para a Web.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<template>
  <!-- Contact Section -->
  <div id="contact">
    <div class="container">
      <div class="col-md-8">
        <div class="row">
          <div class="section-title">
            <h2>Contacta-nos:</h2>
            <p>
              Preencha o seguinte formulário para entrar em contacto connosco e entraremos em contacto consigo o mais rapidamente
              possivel.
            </p>
          </div>
          <form name="sentMessage" id="contactForm" novalidate>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Nome"
                    required="required"
                  >
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Email"
                    required="required"
                  >
                  <p class="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div class="form-group">
              <textarea
                name="message"
                id="message"
                class="form-control"
                rows="4"
                placeholder="Mensagem"
                required
              ></textarea>
              <p class="help-block text-danger"></p>
            </div>
            <div id="success"></div>
            <button type="submit" class="btn btn-custom btn-lg">Enviar mensagem</button>
          </form>
        </div>
      </div>
      <div class="col-md-3 col-md-offset-1 contact-info">
        <div class="contact-item">
          <h3>Informação de contacto</h3>
          <p>
            <span>
              <i class="fa fa-map-marker"></i> Localização
            </span>R. Dom Sancho I, 981,
            <br>4480-876 Vila do Conde
          </p>
        </div>
        <div class="contact-item">
          <p>
            <span>
              <i class="fa fa-phone"></i> Telefone
            </span> 252 291 700
          </p>
        </div>
        <div class="contact-item">
          <p>
            <span>
              <i class="fa fa-envelope-o"></i> Email
            </span> geral@esmad.ipp.pt
          </p>
        </div>
      </div>
      <div class="col-md-12">
        <div class="row">
          <div class="social">
            <ul>
              <li>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template><!--
<script> 
import JQuery from 'jquery'
let $ = JQuery
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 900);
            return false;
          }
        }
      });

/*
    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });
*/
	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
	/*
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
		
*/
</script>-->
