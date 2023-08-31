window.onload = function () {
  buscarDados();
};

function buscarDados() {
  $.ajax({
    method: "POST",
    url: "https://studiopowerstrong.000webhostapp.com/climatempo.php",
    dataType: "json",
    //data: { acao: "setByCity", idCidade: 5136, token: "346557c402363dca608d1e94753834de" }
    data: {
      acao: "getByCity",
      idCidade: 5136,
      token: "c3e1c77a2505268ce7e0624bbacdaa6a",
    },
  })
    .done(function (data) {
  // console.log(data);


      montarClima(data);
    })
    .fail(function (jqXHR, textStatus, msg) {
      console.log(jqXHR);
      console.log(textStatus);
      alert(msg);
    });
}
function montarClima(wheaderInfo) {
  escondeContainers();

  if (wheaderInfo.data.temperature >= 22) {
      var sol = document.getElementById("sol");
      sol.classList.add("exibe");
      

      var graus = document.getElementById("grausSol");
      graus.innerText = wheaderInfo.data.temperature + "º";

      var clima = document.getElementById("climaSol");
      clima.innerText = wheaderInfo.data.condition;
  };


  if (wheaderInfo.data.temperature >= 15 && wheaderInfo.data.temperature < 22) {
      var nublado = document.getElementById("nublado");
      nublado.classList.add("exibe");

      var cidade = document.getElementById("cidade")
      cidade.innerText = wheaderInfo.name;

      var graus = document.getElementById("grausNublado");
      graus.innerText = wheaderInfo.data.temperature + "º";

      var clima = document.getElementById("climaNublado");
      clima.innerText = wheaderInfo.data.condition;
  };


  if (wheaderInfo.data.temperature <= 14 && wheaderInfo.data.temperature >= 11) {
      var chuva = document.getElementById("chuva");
      chuva.classList.add("exibe");

      var graus = document.getElementById("grausChuva");
      graus.innerText = wheaderInfo.data.temperature + "º";

      var clima = document.getElementById("climaChuva");
      clima.innerText = wheaderInfo.data.condition;
  };


  if (wheaderInfo.data.temperature <=10) {
      var frio = document.getElementById("frio");
      frio.classList.add("exibe");

      var graus = document.getElementById("grausFrio");
      graus.innerText = wheaderInfo.data.temperature + "º";

      var clima = document.getElementById("climaFrio");
      clima.innerText = wheaderInfo.data.condition;
  };
}

function escondeContainers(){
  var nublado = document.getElementById("nublado");
  nublado.classList.remove("exibe");

  var nublado = document.getElementById("frio");
  nublado.classList.remove("exibe");

  var nublado = document.getElementById("sol");
  nublado.classList.remove("exibe");

  var nublado = document.getElementById("chuva");
  nublado.classList.remove("exibe");
}

