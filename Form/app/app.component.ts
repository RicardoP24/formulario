import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  nome = '';
  email = '';
  nif = '';
  dataNasc = '';
  selectedCountry = '';
  selectedCity = "";
  cidades = [];
  endereco = '';
  zipcode = '';
  telefone = 0;
  genero = '';

  nomeErro = '';
  emailErro = '';
  nifErro = '';
  erroNascimento = '';
  erropais = '';
  errocidade = '';
  erroEnder = '';
  erroZipCode = '';
  erroTelefone = '';
  erroGenero = '';
  tudoOk = '';

  validarCodigoPostalPt = function () {

    if (this.selectedCountry === "portugal") {

      let text = String(this.zipcode).replace(/\s/g, '');
      let pattern = /^\d{4}-\d{3}?$/;
      const res = pattern.test(text);
      if (!res) {
        this.erroZipCode = "Código Postal Inválido!";
      } else {
        this.erroZipCode = "";

      }
    } else {
      this.erroZipCode = "";

    }

  };

  validarNif = function () {
    const nif = String(this.nif);
    const validationSets = {
      one: ['1', '2', '3', '5', '6', '8'],
      two: ['45', '70', '71', '72', '74', '75', '77', '79', '90', '91', '98', '99'],
    };

    if (nif.length !== 9) {
      this.nifErro = "Nif Inválido!";
      return;
    }



    if (!validationSets.one.indexOf(nif.substr(0, 1)) && !validationSets.two.indexOf
      (nif.substr(0, 2)))
      return false;

    const total =
      Number(nif[0]) * 9 +
      Number(nif[1]) * 8 +
      Number(nif[2]) * 7 +
      Number(nif[3]) * 6 +
      Number(nif[4]) * 5 +
      Number(nif[5]) * 4 +
      Number(nif[6]) * 3 +
      Number(nif[7]) * 2;

    const modulo11 = (total % 11);
    const checkDigit = modulo11 < 2 ? 0 : 11 - modulo11;

    if (checkDigit === Number(nif[8])) {
      this.nifErro = "";
    } else {
      this.nifErro = "Nif Inválido!";

    }
  };

  checkNull = function () {

    if (this.nome == null || this.nome === "") {
      this.nomeErro = "*Este campo não pode estar vazio!";
    } else {
      this.nomeErro = "";

    }

    if (this.selectedCountry == null || this.selectedCountry === "") {
      this.erropais = "*Este campo não pode estar vazio!";
    } else {
      this.erropais = "";

    }

    if (this.selectedCity == null || this.selectedCity === "") {
      this.errocidade = "*Este campo não pode estar vazio!";
    } else {
      this.errocidade = "";

    }

    if (this.zipcode == null || this.zipcode === "") {
      this.erroZipCode = "*Este campo não pode estar vazio!";
    }

    if (this.endereco == null || this.endereco === "") {
      this.erroEnder = "*Este campo não pode estar vazio!";
    } else {
      this.erroEnder = "";

    }

    if (this.genero == null || this.genero === "") {
      this.erroGenero = "*Este campo não pode estar vazio!";
    } else {
      this.erroGenero = "";

    }

  };

  checkAllOk = function () {

    if (this.nomeErro != null && this.nomeErro !== "") {
      this.tudoOk = "";

      return;
    }

    if (this.nifErro != null && this.nomeErro !== "") {
      this.tudoOk = "";

      return;
    }

    if (this.emailErro != null && this.emailErro !== "") {
      this.tudoOk = "";

      return;

    }

    if (this.erroNascimento == null && this.erroNascimento !== "") {
      this.tudoOk = "";

      return;
    }

    if (this.erropais != null && this.erropais !== "") {
      this.tudoOk = "";

      return;

    }

    if (this.errocidade != null && this.errocidade !== "") {
      this.tudoOk = "";

      return;

    }

    if (this.erroZipCode != null && this.erroZipCode !== "") {
      this.tudoOk = "";

      return;

    }

    if (this.erroEnder != null && this.erroEnder !== "") {
      this.tudoOk = "";

      return;

    }

    if (this.erroGenero != null && this.erroGenero !== "") {
      this.tudoOk = "";

      return;

    }

    if (this.erroTelefone != null && this.erroTelefone !== "") {
      this.tudoOk = "";

      return;

    }

    this.tudoOk = "Todos os dados estão preenchidos corretamente!";


  };



  cities() {

    switch (this.selectedCountry) {
      case "angola":
        this.cidades = ["Luanda", "Huambo", "Huila", "Malange"];
        break;
      case "usa":
        this.cidades = ["Texas", "Las Vegas", "Miami"];
        break;

      case "portugal":
        this.cidades = ["Lisboa", "Porto", "Setubal", "Braga"];
        break;

      case "espanha":
        this.cidades = ["Madrid", "Barcelona", "Sevilha", "Valência"];
        break;

      default:
        this.cidades = [];
        break;


    }

  };




  birthCheck = function () {

    if (this.dataNasc == null) {
      this.erroNascimento = "*Campo Obrigatório";
      return;
    }

    let year = parseInt(String(this.dataNasc).substring(10, 15));

    if (year > 2023) {
      this.erroNascimento = "Ano de Nascimento inválido";
      return;

    }

    if (2023 - year < 18) {
      this.erroNascimento = "Idade mínima é de 18 anos";

    } else {
      this.erroNascimento = "";

    }



  };

  validarEmail = function () {
    let text = String(this.email);
    let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const res = pattern.test(text);
    if (!res) {
      this.emailErro = "Email inválido!";
    } else {
      this.emailErro = "";

    }
  }

  checkTelefone = function () {

    let text = String(this.telefone);
    if (text.length != 9) {

      this.erroTelefone = "Número de telefone inválido!";
      return;

    }
    let pattern = /[3|9|2]/;
    const res = pattern.test(text);
    if (!res) {
      this.erroTelefone = "Número de telefone inválido!";
    } else {
      this.erroTelefone = "";

    }
  }


  enviar() {

    this.birthCheck();
    this.checkTelefone();
    this.validarEmail();
    this.validarNif();
    this.validarCodigoPostalPt();
    this.checkNull();
    this.checkAllOk();


  }

}
