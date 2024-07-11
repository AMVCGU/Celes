var i = 0;
var txt1 =
  "Hola Celes...!  <<               Mi lenguaje de cariño es hacerte una página otra vez para hablarte jajaja. <<<                Soy un hombre muy complicado?!                                                                           > He pensado mucho desde hace días < me haces falta la verdad...  <<                  Entre encontrar la manera de tener una conversación fluida con vos o pasar horas haciendo esto, esto fue más divertido < pero que díficil, solo présteme atención por el momento....!                          >  Discúlpame si en algún momento te he hecho sentir incómoda, agobiada o si hay días en los que no deseas saber de mí...!                                                     > Mi corazón tiene un aprecio muy grande por vos ...!                     << Sos la mujer más increíble, atenta, servicial, inteligente, capaz que he conocido, medio despistada también...!                                                     > Sin embargo, saber de ti se ha convertido en mi daily task, a veces....!                    << Pero tengo una pregunta; ¿He hecho algo que haya permitido que no quieras hablarme? Obvio no puedes responder por acá pero te lo dejo a criterio propio por WS                                                           >Desde que ya no estás por acá, extraño saber de ti ocasionalmente, escríbame, yo no muerdo jaja ❤                   <<< Por última instancia, si hablarme no es algo de lo que no tengas ánimos, soy lento para captar indirectas, si no me lo dice por escrito no lo capto, con mucho cariño Adrielito... ¡Te quiero de corazón! Cuídate mucho mari ";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
