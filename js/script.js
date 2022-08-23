var p1 = "";
var p2 = "";
var myIndex = 0;
var qconset = 0;
var vconset = 0;
var pconset = 0;
var oconset = 0;
var Gconset = 0;
var qimg = [];
var qpar = [];
var vimg = [];
var vpar = [];
var dimg = [];
var dpar = [];
var oimg = [];
var opar = [];
var Gimg;
var Gpar;
var sel = 0;
var div;
var prods = [];
var button;
var testsrc = [];
var testpar = [];
var int = 0;
var mob = 0;

var srccura = "img/queijos/meiaCura.png";
var srclone = "img/queijos/provolone.png";
var srcser = "img/queijos/queijo-serra.png";
var srcbri = "img/queijos/brie.png";
var srcnast = "img/queijos/canastra.png";
var srccoa = "img/queijos/coalho.png";
var srcfres = "img/queijos/frescal.png";
var srcrei = "img/queijos/reino.png";
var srctran = "img/queijos/trançado.png";
var pcura = "Queijo Meia Cura - <strong>28,00 R$</strong> <br> Direto de Minas Gerais.";
var plone = "Queijo Provolone - <strong>30,00 R$</strong> <br> Direto de Minas Gerais.";
var pser = "Queijo da Serra - <strong>35,00 R$</strong> <br> Direto da Serra Mineira.";
var pbri = "Queijo Brie - <strong>30,00 R$</strong> <br> Direto de Minas Gerais.";
var pnast = "Queijo Canastra - <strong>28,00 R$</strong> <br> Direto da Serra da Canastra.";
var pcoa = "Queijo Coalho - <strong>35,00 R$</strong> <br> Direto de Minas Gerais.";
var pfres = "Queijo Fresco - <strong>28,00 R$</strong> <br> Direto de Minas Gerais.";
var prei = "Queijo do Reino - <strong>35,00 R$</strong> <br> Direto de Minas Gerais.";
var ptran = "Queijo trançado - <strong>25,00 R$</strong> <br> Direto de Minas Gerais.<br> Sabores: Tradicional, Pimenta, Temperado e Alho.";

var srcmart = "img/vinhos/martin.png";
var srcperg = "img/vinhos/pergola.png";
var srcgerm = "img/vinhos/germain.png";
var srcauro = "img/vinhos/aurora.png";
var srcchat = "img/vinhos/chateau.png";
var srcmiol = "img/vinhos/miolo.png";
var pmart = "Vinho San Martin - <strong>13,00 R$</strong> <br> Direto do Rio Grande do Sul.<br> Tipos: Tinto Suave, Tinto sauve bordô e Tinto|Branco seco";
var pperg = "Vinho Pérgola - <strong>22,00 R$</strong> <br> Direto do Rio Grande do Sul. <br> Tipos: Tinto Suave e Tinto seco.";
var pgerm = "Vinho San Germain - <strong>25,00 R$</strong> <br> Direto da Serra Gaucha.<br> Tipos: Tinto Suave, Tinto Meio Suave e Tinto seco.";
var pauro = "Vinho Aurora - <strong>35,00 R$</strong> <br> Direto da Serra Gaucha.<br> Tipos: Tinto Suave e Tinto seco.";
var pchat = "Vinho Chateau Los Boldos - <strong>55,00 R$</strong> <br> Direto do Chile.<br> Tipos: Tinto Suave Tinto seco";
var pmiol = "Vinho Miolo - <strong>35,00 R$</strong> <br> Direto da Serra Gaucha.<br> Tipos: Tinto Suavee Tinto seco.";

var srcaman = "img/doces/amantegados.png";
var srcdlei = "img/doces/dleite1.png";
var srcambr = "img/doces/Ambrosia1.png";
var srccoca = "img/doces/cocada1.png";
var paman = "Bicoitos Amanteigados - <strong>15,00 R$</strong> <br> Direto de Minas Gerais. <br>Tipos: Tradicional, Goiabada, Chocolate e Doce de Leite. ";
var pdlei = "Doce de Leite Puro- <strong>12,00 R$</strong> <br> Direto de Minas Gerais.";
var pambr = "Ambrosia- <strong>12,00 R$</strong> <br> Direto de Minas Gerais.";
var pcoca = "Cocada Cremosa- <strong>12,00 R$</strong> <br> Direto de Minas Gerais. <br> Tipos: Tradicional, Goiabada, Chocolate, Morango, outros...";

var srcmel = "img/outros/mel.png";
var srcman = "img/outros/manPura1.png";
var srcmgar = "img/outros/manGarrafa1.png";
var pmel = "Mel da Roça - <strong>20,00 R$</strong> <br> Direto de Minas Gerais. <br> Tipos: Flores Silvestre e Flores de Laranjeiras.";
var pman = "Manteiga Pura - <strong>12,00 R$</strong> <br> Direto de Minas Gerais.";
var pmgar = "Manteiga de Garrafa - <strong>18,00 R$</strong> <br> Direto de Minas Gerais.";


carousel();
detectmob();

function detectmob() { // medias no mobile
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
){   
  mob = 1;      
  if(document.body.clientWidth >1199){

  }else if(document.body.clientWidth >900 && document.body.clientWidth < 1025){
    
  }else if(document.body.clientWidth >800 && document.body.clientWidth < 901){
    
  }else if(document.body.clientWidth >700 && document.body.clientWidth < 801){
    
  }else if(document.body.clientWidth >600 && document.body.clientWidth < 701){
    
  }else if(document.body.clientWidth >450 && document.body.clientWidth < 601){
    
  }else if(document.body.clientWidth < 451){
    
    }
  }
}


document.body.onresize = function() { // capturar quandoo o width alterar.
  if(int == 1 && mob == 0){
    if(document.body.clientWidth >800){
      document.getElementById('hambu').style.display = 'none';
    }else if(document.body.clientWidth >700 && document.body.clientWidth < 801){
      document.getElementById('hambu').style.position = 'absolute';
      document.getElementById('hambu').style.display = 'flex';
      document.getElementById('hambu').style.width = '50%';
      document.getElementById('hambu').style.height = '410px';
      document.getElementById('hambu').style.top = '0';
      document.getElementById('himg').style.left = '40%';
      document.getElementById('list').style.display = 'block';
      document.getElementById('list').style.display = 'flex';
    }else if(document.body.clientWidth >600 && document.body.clientWidth < 701){
      document.getElementById('hambu').style.position = 'absolute';
      document.getElementById('hambu').style.display = 'flex';
      document.getElementById('hambu').style.width = '70%';
      document.getElementById('hambu').style.height = '360px';
      document.getElementById('hambu').style.top = '0';
      document.getElementById('himg').style.left = '40%';
      document.getElementById('list').style.display = 'block';
      document.getElementById('list').style.display = 'flex';
    }else if(document.body.clientWidth < 601){
      document.getElementById('hambu').style.position = 'absolute';
      document.getElementById('hambu').style.display = 'flex';
      document.getElementById('hambu').style.display = 'flex';
      document.getElementById('hambu').style.width = '100%';
      document.getElementById('hambu').style.height = '360px';
      document.getElementById('hambu').style.top = '0';
      document.getElementById('himg').style.left = '40%';
      document.getElementById('list').style.display = 'block';
      document.getElementById('list').style.display = 'flex';
    }
  }else{

  }
  
}

function menu(){
  if(int == 0){
    document.getElementById('hambu').style.backgroundColor ="rgba(128,0,0,0.8)";
    int = 1;
    if(document.body.clientWidth >700 && document.body.clientWidth < 801){
      document.getElementById('hambu').style.position = 'absolute';
      document.getElementById('hambu').style.display = 'flex';
      document.getElementById('hambu').style.width = '50%';
      document.getElementById('hambu').style.height = '410px';
      document.getElementById('hambu').style.top = '0';
      document.getElementById('himg').style.left = '40%';
      document.getElementById('list').style.display = 'block';
      document.getElementById('list').style.display = 'flex';
    }else if(document.body.clientWidth >600 && document.body.clientWidth < 701){
      document.getElementById('hambu').style.position = 'absolute';
      document.getElementById('hambu').style.display = 'flex';
      document.getElementById('hambu').style.width = '70%';
      document.getElementById('hambu').style.height = '360px';
      document.getElementById('hambu').style.top = '0';
      document.getElementById('himg').style.left = '40%';
      document.getElementById('list').style.display = 'block';
      document.getElementById('list').style.display = 'flex';
    }else if(document.body.clientWidth < 601){
      document.getElementById('hambu').style.position = 'absolute';
      document.getElementById('hambu').style.display = 'flex';
      document.getElementById('hambu').style.display = 'flex';
      document.getElementById('hambu').style.width = '100%';
      document.getElementById('hambu').style.height = '360px';
      document.getElementById('hambu').style.top = '0';
      document.getElementById('himg').style.left = '40%';
      document.getElementById('list').style.display = 'block';
      document.getElementById('list').style.display = 'flex';
    }
  }else if(int == 1){
    int = 0;
    document.getElementById('hambu').style.backgroundColor ="rgba(128,0,0,1)";
    if(document.body.clientWidth <801){
      document.getElementById('hambu').style.display = 'block';
      document.getElementById('hambu').style.width = '11%';
      document.getElementById('hambu').style.height = '55px';
      document.getElementById('hambu').style.top = '0';
      document.getElementById('himg').style.left = '8%';
      document.getElementById('list').style.display = 'none';
    }
  }
  
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

function ir(p1,p2){
  if(p2 == 2){
    Gconset++;
    
    if(sel == 1){
      if(Gconset == 1){
        document.getElementById('Gimg').src = srclone;
        document.getElementById('Gpar').innerHTML = plone;
      }else if(Gconset == 2){
        document.getElementById('Gimg').src = srcser;
        document.getElementById('Gpar').innerHTML = pser;
      }else if(Gconset == 3){
        document.getElementById('Gimg').src = srcbri;
        document.getElementById('Gpar').innerHTML = pbri;
      }else if(Gconset == 4){
        document.getElementById('Gimg').src = srcnast;
        document.getElementById('Gpar').innerHTML = pnast;
      }else if(Gconset == 5){
        document.getElementById('Gimg').src = srccoa;
        document.getElementById('Gpar').innerHTML = pcoa;
      }else if(Gconset == 6){
        document.getElementById('Gimg').src = srcfres;
        document.getElementById('Gpar').innerHTML = pfres;
      }else if(Gconset == 7){
        document.getElementById('Gimg').src = srcrei;
        document.getElementById('Gpar').innerHTML = prei;
      }else if(Gconset == 8){
        document.getElementById('Gimg').src = srctran;
        document.getElementById('Gpar').innerHTML = ptran;
      }else if(Gconset == 9){
        document.getElementById('Gimg').src = srccura;
        document.getElementById('Gpar').innerHTML = pcura;
        Gconset = 0;
      }
    }else if(sel == 2){
      if(Gconset == 1){
        document.getElementById('Gimg').src = srcperg;
        document.getElementById('Gpar').innerHTML = pperg;
      }else if(Gconset == 2){
        document.getElementById('Gimg').src = srcgerm;
        document.getElementById('Gpar').innerHTML = pgerm;
      }else if(Gconset == 3){
        document.getElementById('Gimg').src = srcauro;
        document.getElementById('Gpar').innerHTML = pauro;
      }else if(Gconset == 4){
        document.getElementById('Gimg').src = srcchat;
        document.getElementById('Gpar').innerHTML = pchat;
      }else if(Gconset == 5){
        document.getElementById('Gimg').src = srcmiol;
        document.getElementById('Gpar').innerHTML = pmiol;
      }else if(Gconset == 6){
        document.getElementById('Gimg').src = srcmart;
        document.getElementById('Gpar').innerHTML = pmart;
        Gconset = 0;
      } 
    }else if(sel == 3){
       if(Gconset == 1){
        document.getElementById('Gimg').src = srcambr;
        document.getElementById('Gpar').innerHTML = pambr;
      }else if(Gconset == 2){
        document.getElementById('Gimg').src = srccoca;
        document.getElementById('Gpar').innerHTML = pcoca;
      }else if(Gconset == 3){
        document.getElementById('Gimg').src = srcaman;
        document.getElementById('Gpar').innerHTML = paman;
      }else if(Gconset == 4){
        document.getElementById('Gimg').src = srcdlei;
        document.getElementById('Gpar').innerHTML = pdlei;
        Gconset = 0;
      }
    }else if(sel == 4){
       if(Gconset == 1){
        document.getElementById('Gimg').src = srcman;
        document.getElementById('Gpar').innerHTML = pman;
      }else if(Gconset == 2){
        document.getElementById('Gimg').src = srcmgar;
        document.getElementById('Gpar').innerHTML = pmgar;
      }else if(Gconset == 3){
        document.getElementById('Gimg').src = srcmel;
        document.getElementById('Gpar').innerHTML = pmel;
        Gconset = 0;
      }
    }
  }else{
    if(p1 == 0){
      qconset++;
      qimg = document.getElementsByClassName('qimg');
      qpar = document.getElementsByClassName('qpar');
      if(qconset == 1){
        qimg[0].src = srclone
        qpar[0].innerHTML = plone;
        qimg[1].src = srcser;
        qpar[1].innerHTML = pser;
        qimg[2].src = srcbri;
        qpar[2].innerHTML = pbri;
      }else if(qconset == 2){
        qimg[0].src = srcser;
        qpar[0].innerHTML = pser;
        qimg[1].src = srcbri;
        qpar[1].innerHTML = pbri;
        qimg[2].src = srcnast;
        qpar[2].innerHTML = pnast;
      }else if(qconset == 3){
        qimg[0].src = srcbri;
        qpar[0].innerHTML = pbri; 
        qimg[1].src = srcnast;
        qpar[1].innerHTML = pnast;
        qimg[2].src = srccoa;
        qpar[2].innerHTML = pcoa;
      }else if(qconset == 4){
        qimg[0].src = srcnast;
        qpar[0].innerHTML = pnast;
        qimg[1].src = srccoa;
        qpar[1].innerHTML = pcoa;
        qimg[2].src = srcfres;
        qpar[2].innerHTML = pfres;
      }else if(qconset == 5){
        qimg[0].src = srccoa;
        qpar[0].innerHTML = pcoa;
        qimg[1].src = srcfres;
        qpar[1].innerHTML = pfres;
        qimg[2].src = srcrei;
        qpar[2].innerHTML = prei;
      }else if(qconset == 6){
        qimg[0].src = srcfres;
        qpar[0].innerHTML = pfres;
        qimg[1].src = srcrei;
        qpar[1].innerHTML = prei;
        qimg[2].src = srctran;
        qpar[2].innerHTML = ptran;
      }else if(qconset == 7){
        qimg[0].src = srcrei;
        qpar[0].innerHTML = prei;
        qimg[1].src = srctran;
        qpar[1].innerHTML = ptran;
        qimg[2].src = srccura;
        qpar[2].innerHTML = pcura;
      }else if(qconset == 8){
        qimg[0].src = srctran;
        qpar[0].innerHTML = ptran;
        qimg[1].src = srccura;
        qpar[1].innerHTML = pcura;
        qimg[2].src = srclone
        qpar[2].innerHTML = plone;
      }else if(qconset == 9){ 
        qimg[0].src = srccura;
        qpar[0].innerHTML = pcura;
        qimg[1].src = srclone
        qpar[1].innerHTML = plone;
        qimg[2].src = srcser;
        qpar[2].innerHTML = pser;
        qconset = 0;
      }
    }else if (p1 == 1) {
      vconset++;
      vimg = document.getElementsByClassName('vimg');
      vpar = document.getElementsByClassName('vpar');
  
      if(vconset == 1){
        vimg[0].src = srcperg;
        vpar[0].innerHTML = pperg;
        vimg[1].src = srcgerm;
        vpar[1].innerHTML = pgerm;
        vimg[2].src = srcauro;
        vpar[2].innerHTML =pauro;
      }else if(vconset == 2){
        vimg[0].src = srcgerm;
        vpar[0].innerHTML = pgerm;
        vimg[1].src = srcauro;
        vpar[1].innerHTML =pauro;
        vimg[2].src = srcchat;
        vpar[2].innerHTML = pchat;
      }else if(vconset == 3){
        vimg[0].src = srcauro;
        vpar[0].innerHTML =pauro;
        vimg[1].src = srcchat;
        vpar[1].innerHTML = pchat;
        vimg[2].src = srcmiol
        vpar[2].innerHTML = pmiol;
      }else if(vconset == 4){
        vimg[0].src = srcchat;
        vpar[0].innerHTML = pchat;
        vimg[1].src = srcmiol
        vpar[1].innerHTML = pmiol;
        vimg[2].src = srcmart;
        vpar[2].innerHTML = pmart;
      }else if(vconset == 5){
        vimg[0].src = srcmiol
        vpar[0].innerHTML = pmiol;
        vimg[1].src = srcmart;
        vpar[1].innerHTML = pmart;
        vimg[2].src = srcperg;
        vpar[2].innerHTML = pperg;
      }else if(vconset == 6){
        vimg[0].src = srcmart;
        vpar[0].innerHTML = pmart;
        vimg[1].src = srcperg;
        vpar[1].innerHTML = pperg;
        vimg[2].src = srcgerm;
        vpar[0].innerHTML = pgerm;
        vconset = 0;
      }
  
    }else if(p1 == 2){
      pconset++;
      pimg = document.getElementsByClassName('pimg');
      ppar = document.getElementsByClassName('ppar');
      /*if(pconset == 0){
  
      }else*/ if(pconset == 1){
        pimg[0].src = srcdlei;
        ppar[0].innerHTML = pdlei
        pimg[1].src = srcambr;
        ppar[1].innerHTML = pambr;
        pimg[2].src = srccoca;
        ppar[2].innerHTML = pcoca;
      }else if(pconset == 2){
        pimg[0].src = srcambr;
        ppar[0].innerHTML = pambr;
        pimg[1].src = srccoca;
        ppar[1].innerHTML = pcoca;
        pimg[2].src = srcaman;
        ppar[2].innerHTML = paman;
      }else if(pconset == 3){
        pimg[0].src = srccoca;
        ppar[0].innerHTML = pcoca;
        pimg[1].src = srcaman;
        ppar[1].innerHTML = paman;
        pimg[2].src = srcdlei;
        ppar[2].innerHTML = pdlei
      }else if(pconset == 4){
        pimg[0].src = srcaman;
        ppar[0].innerHTML = paman;
        pimg[1].src = srcdlei;
        ppar[1].innerHTML = pdlei
        pimg[2].src = srcambr;
        ppar[2].innerHTML = pambr;
        pconset = 0;
      }
    }else if(p1 == 3){
      if(document.body.clientWidth > 1024){
        Swal.fire(
          'Não há mais produtos.',
          'Em breve teremos novidades.',
          'info'
        )
      }else{
        oconset++;
        pimg = document.getElementsByClassName('oimg');
        ppar = document.getElementsByClassName('opar');
         if(oconset == 1){
          pimg[0].src = srcaman;
          ppar[0].innerHTML = pman
          pimg[1].src = srcmgar;
          ppar[1].innerHTML = srcmgar;
          pimg[2].src = srcmel;
          ppar[2].innerHTML = pmel;
        }else if(oconset == 2){
          pimg[0].src = srcmgar;
          ppar[0].innerHTML = srcmgar;
          pimg[1].src = srcmel;
          ppar[1].innerHTML = srcmel;
          pimg[2].src = srcman;
          ppar[2].innerHTML = pman;
        }else if(oconset == 3){
          pimg[0].src = srcmel;
          ppar[0].innerHTML = pmel;
          pimg[1].src = srcman;
          ppar[1].innerHTML = pman;
          pimg[2].src = srcmgar;
          ppar[2].innerHTML = pmgar
          oconset = 0;
        }
      }
    }
  }  
}

function voltar(p1,p2){
  if(p2 == 2){
    Gconset--;
    
    if(sel == 1){
      if(Gconset == -1){
        Gconset = 8;
      }
      if(Gconset == 0){
        document.getElementById('Gimg').src = srccura;
        document.getElementById('Gpar').innerHTML = pcura;
        Gconset = 0;
      }else if(Gconset == 1){
        document.getElementById('Gimg').src = srclone;
        document.getElementById('Gpar').innerHTML = plone;
      }else if(Gconset == 2){
        document.getElementById('Gimg').src = srcser;
        document.getElementById('Gpar').innerHTML = pser;
      }else if(Gconset == 3){
        document.getElementById('Gimg').src = srcbri;
        document.getElementById('Gpar').innerHTML = pbri;
      }else if(Gconset == 4){
        document.getElementById('Gimg').src = srcnast;
        document.getElementById('Gpar').innerHTML = pnast;
      }else if(Gconset == 5){
        document.getElementById('Gimg').src = srccoa;
        document.getElementById('Gpar').innerHTML = pcoa;
      }else if(Gconset == 6){
        document.getElementById('Gimg').src = srcfres;
        document.getElementById('Gpar').innerHTML = pfres;
      }else if(Gconset == 7){
        document.getElementById('Gimg').src = srcrei;
        document.getElementById('Gpar').innerHTML = prei;
      }else if(Gconset == 8){
        document.getElementById('Gimg').src = srctran;
        document.getElementById('Gpar').innerHTML = ptran;
      }
    }else if(sel == 2){
      if(Gconset == -1){
        Gconset = 5;
      }
      if(Gconset == 0){
        document.getElementById('Gimg').src = srcmart;
        document.getElementById('Gpar').innerHTML = pmart;
        Gconset = 0;
      }else if(Gconset == 1){
        document.getElementById('Gimg').src = srcperg;
        document.getElementById('Gpar').innerHTML = pperg;
      }else if(Gconset == 2){
        document.getElementById('Gimg').src = srcgerm;
        document.getElementById('Gpar').innerHTML = pgerm;
      }else if(Gconset == 3){
        document.getElementById('Gimg').src = srcauro;
        document.getElementById('Gpar').innerHTML = pauro;
      }else if(Gconset == 4){
        document.getElementById('Gimg').src = srcchat;
        document.getElementById('Gpar').innerHTML = pchat;
      }else if(Gconset == 5){
        document.getElementById('Gimg').src = srcmiol;
        document.getElementById('Gpar').innerHTML = pmiol;
      }
    }else if(sel == 3){
      if(Gconset == -1){
        Gconset = 3;
      }
      if(Gconset == 0){
        document.getElementById('Gimg').src = srcdlei;
        document.getElementById('Gpar').innerHTML = pdlei;
        Gconset = 0;
      }else if(Gconset == 1){
        document.getElementById('Gimg').src = srcambr;
        document.getElementById('Gpar').innerHTML = pambr;
      }else if(Gconset == 2){
        document.getElementById('Gimg').src = srccoca;
        document.getElementById('Gpar').innerHTML = pcoca;
      }else if(Gconset == 3){
        document.getElementById('Gimg').src = srcaman;
        document.getElementById('Gpar').innerHTML = paman;
      }
    }else if(sel == 4){
      if(Gconset == -1){
        Gconset = 2;
      }
      if(Gconset == 0){
        document.getElementById('Gimg').src = srcmel;
        document.getElementById('Gpar').innerHTML = pmel;
        Gconset = 0;
      }else if(Gconset == 1){
        document.getElementById('Gimg').src = srcman;
        document.getElementById('Gpar').innerHTML = pman;
      }else if(Gconset == 2){
        document.getElementById('Gimg').src = srcmgar;
        document.getElementById('Gpar').innerHTML = pmgar;
      }
    }
  }else{
    if(p1 == 0){
      qconset--;
      qimg = document.getElementsByClassName('qimg');
      qpar = document.getElementsByClassName('qpar');
      if(qconset == -1){
        qconset = 8;
      }
      if(qconset == 0){
        qimg[0].src = srccura;
        qpar[0].innerHTML = pcura;
        qimg[1].src = srclone;
        qpar[1].innerHTML = plone;
        qimg[2].src = srcser;
        qpar[2].innerHTML = pser;
        qconset = 8;
      }else if(qconset == 1){
        qimg[0].src = srclone;
        qpar[0].innerHTML = plone;
        qimg[1].src = srcser;
        qpar[1].innerHTML = pser;
        qimg[2].src = srcbri;
        qpar[2].innerHTML = pbri;
      }else if(qconset == 2){
        qimg[0].src = srcser;
        qpar[0].innerHTML = pser;
        qimg[1].src = srcbri;
        qpar[1].innerHTML = pbri;
        qimg[2].src = srcnast;
        qpar[2].innerHTML = pnast;
      }else if(qconset == 3){
        qimg[0].src = srcbri;
        qpar[0].innerHTML = pbri; 
        qimg[1].src = srcnast;
        qpar[1].innerHTML = pnast;
        qimg[2].src = srccoa;
        qpar[2].innerHTML = pcoa;
      }else if(qconset == 4){
        qimg[0].src = srcnast;
        qpar[0].innerHTML = pnast;
        qimg[1].src = srccoa;
        qpar[1].innerHTML = pcoa;
        qimg[2].src = srcfres;
        qpar[2].innerHTML = pfres;
      }else if(qconset == 5){
        qimg[0].src = srccoa;
        qpar[0].innerHTML = pcoa;
        qimg[1].src = srcfres;
        qpar[1].innerHTML = pfres;
        qimg[2].src = srcrei;
        qpar[2].innerHTML = prei;
      }else if(qconset == 6){
        qimg[0].src = srcfres;
        qpar[0].innerHTML = pfres;
        qimg[1].src = srcrei;
        qpar[1].innerHTML = prei;
        qimg[2].src = srctran;
        qpar[2].innerHTML = ptran;
      }else if(qconset == 7){
        qimg[0].src = srcrei;
        qpar[0].innerHTML = prei;
        qimg[1].src = srctran;
        qpar[1].innerHTML = ptran;
        qimg[2].src = srccura;
        qpar[2].innerHTML = pcura;
      }else if(qconset == 8){
        qimg[0].src = srctran;
        qpar[0].innerHTML = ptran;
        qimg[1].src = srccura;
        qpar[1].innerHTML = pcura;
        qimg[2].src = srclone;
        qpar[2].innerHTML = plone;
      }
    }else if (p1 == 1) {
      vimg = document.getElementsByClassName('vimg');
      vpar = document.getElementsByClassName('vpar');
      vconset--;
      if(vconset == -1){
        vconset = 5;
      }
      if(vconset == 0){
        vimg[0].src = srcmart;
        vpar[0].innerHTML = pmart;
        vimg[1].src = srcperg;
        vpar[1].innerHTML = pperg;
        vimg[2].src = srcgerm;
        vpar[2].innerHTML = pgerm;
      }else if(vconset == 1){
        vimg[0].src = srcperg;
        vpar[0].innerHTML = pperg;
        vimg[1].src = srcgerm;
        vpar[1].innerHTML = pgerm;
        vimg[2].src = srcauro;
        vpar[2].innerHTML =pauro;
      }else if(vconset == 2){
        vimg[0].src = srcgerm;
        vpar[0].innerHTML = pgerm;
        vimg[1].src = srcauro;
        vpar[1].innerHTML =pauro;
        vimg[2].src = srcchat;
        vpar[2].innerHTML = pchat;
      }else if(vconset == 3){
        vimg[0].src = srcauro;
        vpar[0].innerHTML =pauro;
        vimg[1].src = srcchat;
        vpar[1].innerHTML = pchat;
        vimg[2].src = srcmiol
        vpar[2].innerHTML = pmiol;
      }else if(vconset == 4){
        vimg[0].src = srcchat;
        vpar[0].innerHTML = pchat;
        vimg[1].src = srcmiol
        vpar[1].innerHTML = pmiol;
        vimg[2].src = srcmart;
        vpar[2].innerHTML = pmart;
      }else if(vconset == 5){
        vimg[0].src = srcmiol
        vpar[0].innerHTML = pmiol;
        vimg[1].src = srcmart;
        vpar[1].innerHTML = pmart;
        vimg[2].src = srcperg;
        vpar[2].innerHTML = pperg;
      }
    }else if(p1 == 2){
      pconset--;
      pimg = document.getElementsByClassName('pimg');
      ppar = document.getElementsByClassName('ppar');
      if(pconset == -1){
        pconset = 3;
      }
      if(pconset == 0){
        pimg[0].src = srcaman;
        ppar[0].innerHTML = paman;
        pimg[1].src = srcdlei;
        ppar[1].innerHTML = pdlei
        pimg[2].src = srcambr;
        ppar[2].innerHTML = pambr;
        pconset = 3;
      }else if(pconset == 1){
        pimg[0].src = srcdlei;
        ppar[0].innerHTML = pdlei
        pimg[1].src = srcambr;
        ppar[1].innerHTML = pambr;
        pimg[2].src = srccoca;
        ppar[2].innerHTML = pcoca;
      }else if(pconset == 2){
        pimg[0].src = srcambr;
        ppar[0].innerHTML = pambr;
        pimg[1].src = srccoca;
        ppar[1].innerHTML = pcoca;
        pimg[2].src = srcaman;
        ppar[2].innerHTML = paman;
      }else if(pconset == 3){
        pimg[0].src = srccoca;
        ppar[0].innerHTML = pcoca;
        pimg[1].src = srcaman;
        ppar[1].innerHTML = paman;
        pimg[2].src = srcdlei;
        ppar[2].innerHTML = pdlei
      }
    }else if(p1 == 3){
      if(document.body.clientWidth > 1024){
        Swal.fire(
          'Não há mais produtos.',
          'Em breve teremos novidades.',
          'info'
        )
      }else{
        oconset--;
        if(oconset == -1){
          oconset = 2;
        }
        pimg = document.getElementsByClassName('oimg');
        ppar = document.getElementsByClassName('opar');
         if(oconset == 0){
          pimg[0].src = srcmel;
          ppar[0].innerHTML = pmel;
          pimg[1].src = srcman;
          ppar[1].innerHTML = pman;
          pimg[2].src = srcmgar;
          ppar[2].innerHTML = srcmgar
          pconset = 2;
        }else if(oconset == 1){
          pimg[0].src = srcaman;
          ppar[0].innerHTML = pman
          pimg[1].src = srcmgar;
          ppar[1].innerHTML = srcmgar;
          pimg[2].src = srcmel;
          ppar[2].innerHTML = pmel;
        }else if(oconset == 2){
          pimg[0].src = srcmgar;
          ppar[0].innerHTML = srcmgar;
          pimg[1].src = srcmel;
          ppar[1].innerHTML = srcmel;
          pimg[2].src = srcman;
          ppar[2].innerHTML = pman;
        }
      }
    }
    }  
}

function catalogo(p1,p2,p3){
    Gconset = 0;
  if(p1 == undefined && p2 == undefined && p3 == undefined){

    if(document.body.clientWidth > 700 && document.body.clientWidth < 1025){
      sel = document.getElementById('cat2').value;
    }else{
      sel = document.getElementById('cat').value;
    }
    prods = document.getElementsByClassName('prods');
    button = document.getElementById("produtos");
    button.click()
    if(sel == 0){

    }else if(sel == 1){
        document.getElementById('GG').style.display = 'block';
        document.getElementById('GG').style.display = 'flex';
        document.getElementById('GG').style.marginTop = '0';
        document.getElementById('go').style.display = "block";
        document.getElementById('volt').style.display = "block";
        document.getElementById('Gimg').src= srccura;
        document.getElementById('Gpar').innerHTML = pcura;    
        if(document.body.clientWidth > 1024){
          document.getElementById('GG').style.marginTop = '0';
        }else if(document.body.clientWidth > 700){
          document.getElementById('GG').style.marginTop = '14%';
        }else if(document.body.clientWidth < 701){
          document.getElementById('GG').style.display = 'none';
        } 
    }else if(sel == 2){
      document.getElementById('GG').style.display = 'block';
      document.getElementById('GG').style.display = 'flex';
      document.getElementById('GG').style.marginTop = '46.6%';
      document.getElementById('go').style.display = "block";
      document.getElementById('volt').style.display = "block";
      document.getElementById('Gimg').src= srcmart;
      document.getElementById('Gpar').innerHTML = pmart;
     document.getElementById('vinhos').scrollIntoView()
     /*if(document.body.clientWidth > 1024){  
      document.getElementById('GG').style.marginTop = '0';
    }else */if(document.body.clientWidth > 700 && document.body.clientWidth < 1025){
      document.getElementById('GG').style.marginTop = '80%';
    }else if(document.body.clientWidth < 701){
      document.getElementById('GG').style.display = 'none';
    } 
    }else if(sel == 3){
      document.getElementById('GG').style.display = 'block';
      document.getElementById('GG').style.display = 'flex';
      document.getElementById('GG').style.marginTop = '83%'
      document.getElementById('go').style.display = "block";
      document.getElementById('volt').style.display = "block";
      document.getElementById('Gimg').src= srcaman;
      document.getElementById('Gpar').innerHTML = paman;  
      document.getElementById('doces').scrollIntoView()  
      if(document.body.clientWidth > 700 && document.body.clientWidth < 1025){
        document.getElementById('GG').style.marginTop = '142%';
      }else if(document.body.clientWidth < 701){
        document.getElementById('GG').style.display = 'none';
      } 
    }else if(sel == 4){
      document.getElementById('GG').style.display = 'block';
      document.getElementById('GG').style.display = 'flex';
      document.getElementById('GG').style.marginTop = '117%'
      document.getElementById('go').style.display = "block";
      document.getElementById('volt').style.display = "block";
      document.getElementById('Gimg').src= srcmel;
      document.getElementById('Gpar').innerHTML = pmel;
      document.getElementById('outros').scrollIntoView()
      if(document.body.clientWidth > 700 && document.body.clientWidth < 1025){
        document.getElementById('GG').style.marginTop = '208%';
      }else if(document.body.clientWidth < 701){
        document.getElementById('GG').style.display = 'none';
      } 
    }

  }else {
    sel = p1;
    div = p2;
    if(sel == 0){
      document.getElementById('GG').style.display = 'block';
      document.getElementById('GG').style.display = 'flex';
      document.getElementById('go').style.display = "block";
      document.getElementById('volt').style.display = "block";
      get(sel,div);
      document.getElementById('Gimg').src= testsrc[div];
      document.getElementById('Gpar').innerHTML = testpar[div];
      Gconset = div;
      sel = 1;  
       if(document.body.clientWidth > 700 && document.body.clientWidth < 1025){
        document.getElementById('GG').style.marginTop = '5%';
      }else if(document.body.clientWidth < 701){
        document.getElementById('GG').style.display = 'none';
      } 
    }else if(sel == 1){
      document.getElementById('GG').style.display = 'block';
      document.getElementById('GG').style.display = 'flex';
      document.getElementById('go').style.display = "block";
      document.getElementById('volt').style.display = "block";
      get(sel,div);
      document.getElementById('Gimg').src= testsrc[div];
      document.getElementById('Gpar').innerHTML = testpar[div];
      Gconset = div;
      sel = 2;  
      if(document.body.clientWidth > 700 && document.body.clientWidth < 1025){
        document.getElementById('GG').style.marginTop = '50%';
      }else if(document.body.clientWidth < 701){
        document.getElementById('GG').style.display = 'none';
      } 
    }else if(sel == 2){
      document.getElementById('GG').style.display = 'block';
      document.getElementById('GG').style.display = 'flex';
      document.getElementById('go').style.display = "block";
      document.getElementById('volt').style.display = "block";
      get(sel,div);
      document.getElementById('Gimg').src= testsrc[div];
      document.getElementById('Gpar').innerHTML = testpar[div];
      Gconset = div;
      sel = 3;   
      if(document.body.clientWidth > 700 && document.body.clientWidth < 1025){
        document.getElementById('GG').style.marginTop = '104%';
      }else if(document.body.clientWidth < 701){
        document.getElementById('GG').style.display = 'none';
      } 
    }else if(sel == 3){
      document.getElementById('GG').style.display = 'block';
      document.getElementById('GG').style.display = 'flex';
      document.getElementById('go').style.display = "block";
      document.getElementById('volt').style.display = "block";
      get(sel,div);
      document.getElementById('Gimg').src= testsrc[div];
      document.getElementById('Gpar').innerHTML = testpar[div];
      Gconset = div;
      sel = 4;  
      if(document.body.clientWidth > 700 && document.body.clientWidth < 1025){
        document.getElementById('GG').style.marginTop = '155%';
      }else if(document.body.clientWidth < 701){
        document.getElementById('GG').style.display = 'none';
      } 
    }   
  }
  button = "";
  
  
}

function fechar(){
  document.getElementById("GG").style.display = "none";
}

function get(p1,p2){
  if(p1 == 0){
    testsrc[0] = document.getElementById('Qj1').src;
    testsrc[1] = document.getElementById('Qj2').src;
    testsrc[2] = document.getElementById('Qj3').src;
    testpar[0] = document.getElementById('p1').innerHTML;
    testpar[1] = document.getElementById('p2').innerHTML;
    testpar[2] = document.getElementById('p3').innerHTML;
  }else if(p1 == 1){
    testsrc[0] = document.getElementById('vi1').src;
    testsrc[1] = document.getElementById('vi2').src;
    testsrc[2] = document.getElementById('vi3').src;
    testpar[0] = document.getElementById('v1').innerHTML;
    testpar[1] = document.getElementById('v2').innerHTML;
    testpar[2] = document.getElementById('v3').innerHTML;
  }else if(p1 == 2){
    testsrc[0] = document.getElementById('dc1').src;
    testsrc[1] = document.getElementById('dc2').src;
    testsrc[2] = document.getElementById('dc3').src;
    testpar[0] = document.getElementById('d1').innerHTML;
    testpar[1] = document.getElementById('d2').innerHTML;
    testpar[2] = document.getElementById('d3').innerHTML;
  }else if(p1 == 3){
    testsrc[0] = document.getElementById('ot1').src;
    testsrc[1] = document.getElementById('ot2').src;
    testsrc[2] = document.getElementById('ot3').src;
    testpar[0] = document.getElementById('o1').innerHTML;
    testpar[1] = document.getElementById('o2').innerHTML;
    testpar[2] = document.getElementById('o3').innerHTML;
  }
}