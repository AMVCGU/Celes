var i = 0;
var txt1 =
  "Hola Celes...! Cómo vas? Deberia haber un fondo, si no lo hay recargue la página jajaja  <<               Me entró la creatividad de hacer una página otra vez para hablarte. <<<                Soy muy complicado a veces!                                                                           > He pensado mucho desde hace días  <<                  Entre encontrar la manera de tener una conversación fluida con vos o pasar horas haciendo esto, esto fue más divertido lit jaja< pero que díficil, solo présteme atención por el momento....!                          >  Discúlpame si en algún momento te he hecho sentir incómoda, agobiada o si hay días en los que no deseas hablarme...!                                                     > Resulta que mi aprecio por vos es muy grande ...!                     << Sos la mujer más increíble y con el corazón más puro que he llegado a conocer, sos increíble, medio despistada también...!                                                     > Le pido a Dios por vos aunque haya días que no sepa de ti!                    << Pero tengo una pregunta; ¿He hecho algo que haya permitido que no quieras hablarme? Obvio no puedes responder por acá pero ajá, pronto haré que si puedas, eh                                                          >Desde que ya no estás por acá, extraño saber de ti ocasionalmente, escríbame, yo no muerdo jaja ❤                   << Por última instancia, si es que no quieres hablarme más, soy lento para captar indirectas, si no me lo dice por escrito no lo capto, prefiero no sobrepensar.. >                                                                    con mucho cariño Adrielito... ¡Te quiero de corazón! Cuídate mucho mari >                                            ❤";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-color", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
