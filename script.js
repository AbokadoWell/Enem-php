function media(){
    var red, cn, ch, lin, mat, med, corte, dif;

    document.getElementById('showdados').innerHTML = ("<div id='lin'></div><div id='ch'></div><div id='red'></div><div id='mat'></div><div id='cn'></div>");
    document.getElementById('medecorte').innerHTML = ("");
    document.getElementById('avaliacao').innerHTML = ("");

    lin =  prompt ("Digite sua nota em Linguagens:");
    lin = eval (lin);
    if (lin == undefined || null) {(lin = 0)} //considera "cancela" ou "ok" como 0
    document.getElementById('lin').innerHTML = (`${lin} ponto(s) em Linguagens <br>`);

    ch =  prompt ("Digite sua nota em Ciências Humanas:");
    ch = eval (ch);
    if (ch == undefined || null) {(ch = 0)} //considera "cancela" ou "ok" como 0
    document.getElementById('ch').innerHTML = (`${ch} ponto(s) em Ciências Humanas <br>`);

    red = prompt ("Digite sua nota em Redação:");
    red = eval (red);
    if (red == undefined || null) {(red = 0)} //considera "cancela" ou "ok" como 0
    document.getElementById('red').innerHTML = (`${red} ponto(s) em Redação <br>`);

    mat =  prompt ("Digite sua nota em Matemáticas:");
    mat = eval (mat);
    if (mat == undefined || null) {(mat = 0)} //considera "cancela" ou "ok" como 0
    document.getElementById('mat').innerHTML = (`${mat} ponto(s) em Matemáticas <br>`);

    cn =  prompt ("Digite sua nota em Ciências da Natureza:");
    cn = eval (cn);
    if (cn == undefined || null) {(cn = 0)} //considera "cancela" ou "ok" como 0
    document.getElementById('cn').innerHTML = (`${cn} ponto(s) em Ciências da Natureza <br>`);


    med = (lin + ch + red + mat + cn)/5;
    med = eval (med);
    med = parseFloat(med.toFixed(2)); //evita dízimas

    corte = prompt ("Digite a nota de corte do curso desejado:");
    corte = eval (corte);
    if (corte == undefined || null) {(corte = 0)} //considera "cancela" ou "ok" como 0

    if (med == corte) { //se média for igual, considera um dos valores
        document.getElementById('medecorte').innerHTML = (`Sua média e a nota de corte valem ${corte} ponto(s)`);
    }
    else { //se média for diferente de corte
    document.getElementById('medecorte').innerHTML = (`Sua média = ${med} ponto(s)<br>A nota de corte = ${corte} ponto(s)`);
}

    if (med < corte) {
        dif = (corte-med);
        dif = parseFloat(dif.toFixed(2)); //evita dízimas
        if (dif < 40) { //se a diferença for pequena
            document.getElementById('avaliacao').innerHTML = (`Sua média é menor que a nota de corte, com a diferença de apenas ${dif} ponto(s).`);
        }
        else { //se a diferença for grande
            document.getElementById('avaliacao').innerHTML = (`Sua média é menor que a nota de corte, com a grande diferença de ${dif} ponto(s).`);
        }
    }
    else if (med > corte) {
        dif = (med-corte); //mudança de ordem pra n dar n° negativo
        dif = parseFloat(dif.toFixed(2)); //evita dízimas
        if (dif < 40) { //se a diferença for pequena
            document.getElementById('avaliacao').innerHTML = (`Sua média é maior que nota de corte, com a diferença de apenas ${dif} ponto(s).`);
        }
        else { //se a diferença for grande
            document.getElementById('avaliacao').innerHTML = (`Sua média é maior que nota de corte, com a grande diferença de ${dif} ponto(s).`);
        }
    }
    else if (med && corte == 0) { //ambos iguais à 0
        document.getElementById('avaliacao').innerHTML = ("Sua média e corte valem 0.");
    }
    else if (med == corte && med != 0 && corte != 0) { //são iguais, mas diferentes de 0
        document.getElementById('avaliacao').innerHTML = ("Sua média é exatamente igual à nota de corte.");
    }
}
