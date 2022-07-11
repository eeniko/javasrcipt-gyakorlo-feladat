let teszteloTomb = {
  teszteloSzam: 0,
  esetSzam: 0,
};
let tesztelok = [];
let esetek = [];
let kimenet = [];

function mezoValidalas(mezoNev) {
  mezo = document.getElementById(mezoNev);
  if (!mezo.checkValidity()) {
    mezo.style.borderColor = "red";
    return false;
  } else {
    mezo.style.borderColor = "black";
    return true;
  }
}

function szambekeres() {
  let mindenjo = true;
  if (!mezoValidalas("teszteloSzam")) {
    mindenjo = false;
  }

  if (!mezoValidalas("esetSzam")) {
    mindenjo = false;
  }

  if (!mindenjo) {
    alert(" Hibás, vagy hiányos kitöltés");
    return;
  }

  teszteloTomb.teszteloSzam = document.getElementById("teszteloSzam").value;
  teszteloTomb.esetSzam = document.getElementById("esetSzam").value;

  let str = "";
  for (let i = 0; i < teszteloTomb.teszteloSzam; i++) {
    str += ` ${
      i + 1
    }. tesztelő neve: &nbsp <input type='text' id='tesztelonev ${i}' required />  &nbsp `;
    str += `tesztelési sebessége (1-400) &nbsp <input type='number'  id='tesztHatekony ${i}' required min="1"  max= "400"/> <br> <br> `;
  }
  document.getElementById("teszteloForm").innerHTML = str;
  document.getElementById("alapbekeres").style.display = "none";
  document.getElementById("tesztelokAdatai").style.display = "block";
  console.log(teszteloTomb);
}

function teszteloBekuld() {
  let mindenjo = true;
  for (let i = 0; i < teszteloTomb.teszteloSzam; i++) {
    if (!mezoValidalas(`tesztelonev ${i}`)) {
      mindenjo = false;
    }
    if (!mezoValidalas(`tesztHatekony ${i}`)) {
      mindenjo = false;
    }
  }
  if (!mindenjo) {
    alert(" Hibás, vagy hiányos kitöltés");
    return;
  }
  for (let i = 0; i < teszteloTomb.teszteloSzam; i++) {
    let input = {
      teszteloNev: document.getElementById(`tesztelonev ${i}`).value,
      teszteloHatekonysag: parseInt(
        document.getElementById(`tesztHatekony ${i}`).value
      ),
    };
    tesztelok.push(input);

    let teszteloMinta = {
      nev: document.getElementById(`tesztelonev ${i}`).value,
      hatekonysag: parseInt(
        document.getElementById(`tesztHatekony ${i}`).value
      ),
      tesztek: [],
      osszeg: 0,
    };
    kimenet.push(teszteloMinta);
  }
  let str = "";
  for (let j = 0; j < teszteloTomb.esetSzam; j++) {
    str += `teszteset ${
      j + 1
    }: <input type='text' id='eset${j}' required />  &nbsp`;
    str += `Teszt időigénye (perc) <input type='number'  id='idoigeny${j}' required min='1' /> <br> <br>`;
  }
  document.getElementById("tesztForm").innerHTML = str;
  document.getElementById("tesztelokAdatai").style.display = "none";
  document.getElementById("tesztekAdatai").style.display = "block";
  console.log("Tesztelok: " + tesztelok);
}

function tesztEsetek() {
  let mindenjo = true;
  for (let j = 0; j < teszteloTomb.esetSzam; j++) {
    if (!mezoValidalas(`eset${j}`)) {
      mindenjo = false;
    }
    if (!mezoValidalas(`idoigeny${j}`)) {
      mindenjo = false;
    }
  }
  if (!mindenjo) {
    alert(" Hibás, vagy hiányos kitöltés");
    return;
  }
  for (let j = 0; j < teszteloTomb.esetSzam; j++) {
    let input2 = {
      tesztNev: document.getElementById(`eset${j}`).value,
      tesztIdo: parseInt(document.getElementById(`idoigeny${j}`).value),
    };
    esetek.push(input2);
  }
  fillSelects();
  document.getElementById("tesztekAdatai").style.display = "none";
  document.getElementById("valasztasok").style.display = "block";
  console.log("Esetek:" + esetek);
}

function fillSelects() {
  for (let nevIndex = 0; nevIndex < tesztelok.length; nevIndex++) {
    let teszteloNev = tesztelok[nevIndex].teszteloNev;
    document
      .getElementById("teszteloSelect")
      .options.add(new Option(teszteloNev, nevIndex));
  }
  for (let tesztIndex = 0; tesztIndex < esetek.length; tesztIndex++) {
    let tesztNev = esetek[tesztIndex].tesztNev;
    document
      .getElementById("tesztesetSelect")
      .options.add(new Option(tesztNev, tesztIndex));
  }
}

function hozzarendel() {
  let tesztIndex = document.getElementById("tesztesetSelect").value;
  let teszteloIndex = document.getElementById("teszteloSelect").value;
  kimenet[teszteloIndex].tesztek.push(esetek[tesztIndex].tesztNev);
  kimenet[teszteloIndex].osszeg += Math.round(
    (esetek[tesztIndex].tesztIdo * kimenet[teszteloIndex].hatekonysag) / 100
  );
  megjelenites();
}

function megjelenites() {
  // console.log(kimenet);
  let vegeredmenyT =
    "<table> <tr> <th>  Tesztelő neve    </th> <th> Kiválasztott tesztek  </th><th>   Tesztelési idő összesen (perc)   </th> </tr>  ";

  for (let j = 0; j < kimenet.length; j++) {
    vegeredmenyT += `<tr> <td>${kimenet[j].nev} </td><td> ${kimenet[
      j
    ].tesztek.join(", <br>")}</td><td> ${kimenet[j].osszeg}</td></tr>`;
  }
  vegeredmenyT += "</table>";
  document.getElementById("vegeredmeny").innerHTML = vegeredmenyT;
}
