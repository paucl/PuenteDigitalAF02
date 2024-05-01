new Vue({
    el: '#page-container',
    data: {
        activeSubDropdown: null,
        currentIndex: 0,
        currentPreguntasIndex: 0,
        totalCards: 18,
        currentIndexReached5: false,
        indexReached5: 3,
        reached5: false,
        preguntas: [
            {
                titulo: 'Prueba 1: Interfaz de WhatsApp',
                descripcion: '¿Qué tiene cada contacto al lado de las imágenes de perfil?',
                respuestas: [
                    'Cocinar unos deliciosos tacos',
                    'Llamar al restaurante más cercano',
                    'Presionar el icono de WhatsApp',
                    'Pedir una pizza',
                ],
                respuestaCorrecta: 'Presionar el icono de WhatsApp'
            },
            {
                titulo: 'Prueba 2: Interfaz de Contactos',
                descripcion: '¿Qué tiene cada contacto a la derecha de las imágenes de perfil?',
                respuestas: [
                    'Nombre del contacto',
                    'Un mensaje de texto',
                    'Un mensaje de voz',
                    'La fecha de nacimiento del contacto',
                ],
                respuestaCorrecta: 'Nombre del contacto'
            },
            {
              titulo: 'Prueba 2: Interfaz de Contactos',
              descripcion: '¿Qué es la fecha que encontramos al final de todo a la derecha del contacto?',
              respuestas: [
                  'La fecha de nacimiento del contacto',
                  'La fecha de la última vez que se habló con el contacto',
                  'La fecha de la última vez que se vio al contacto',
                  'La fecha de la primera vez que se habló con el contacto',
              ],
              respuestaCorrecta: 'La fecha de la última vez que se habló con el contacto'
            },
            {
              titulo: 'Prueba 2: Interfaz de Contactos',
              descripcion: '¿Un usuario está obligado a tener una foto de perfil?',
              respuestas: [
                  'Sí, es obligatorio',
                  'No, es opcional, ya que sino se puede usar una imagen por defecto',
                  'Sí, pero solo si es un contacto nuevo',
                  'No, siempre y cuando no se quiera enviar mensajes',
              ],
              respuestaCorrecta: 'No, es opcional, ya que sino se puede usar una imagen por defecto'
            },
            {
              titulo: 'Prueba 3: Interfaz de Mensajes',
              descripcion: '¿Para que sirve el botón que se encuentra a la derecha del cuadro de texto, representado como una flecha?',
              respuestas: [
                  'Para enviar mensajes',
                  'Para enviar fotos',
                  'Para enviar mensajes de voz',
                  'Para enviar ubicación',
              ],
              respuestaCorrecta: 'Para enviar mensajes'
            },
            {
              titulo: 'Prueba 3: Interfaz de Mensajes',
              descripcion: '¿Con que color se representan los mensajes que has enviado?',
              respuestas: [
                  'Azul',
                  'Rojo',
                  'Violeta',
                  'Verde',
              ],
              respuestaCorrecta: 'Verde'
            },
            {
              titulo: 'Prueba 3: ',
              descripcion: '¿Qué significan dos ticks azules?',
              respuestas: [
                  'El mensaje ha sido enviado',
                  'El mensaje ha sido recibido',
                  'El mensaje ha sido leído',
                  'El mensaje ha sido enviado, recibido y leído',
              ],
              respuestaCorrecta: 'El mensaje ha sido enviado, recibido y leído'
            },
            {
              titulo: 'Prueba 3: Interfaz de Mensajes',
              descripcion: '¿Dónde aparecen los mensajes enviados por la persona a la que te diriges?',
              respuestas: [
                  'En la parte izquierda de la pantalla',
                  'En la parte inferior de la pantalla',
                  'En la parte derecha de la pantalla',
                  'En la parte superior de la pantalla',
              ],
              respuestaCorrecta: 'En la parte izquierda de la pantalla'
            },
            {
              titulo: 'Prueba 4: Interfaz de Llamadas',
              descripcion: '¿Qué se encuentra en la parte superior del chat de mensajes con el contacto?',
              respuestas: [
                  'Un botón para llamar',
                  'Un botón para enviar mensajes',
                  'Un botón para enviar mensajes de voz',
                  'Un botón para enviar ubicación',
              ],
              respuestaCorrecta: 'Un botón para llamar'
            },
            {
              titulo: 'Prueba 4: Interfaz de Llamadas',
              descripcion: '¿Que hace el boton rojo en la interfaz de una llamada?',
              respuestas: [
                  'Enviar un mensaje',
                  'Colgar la llamada',
                  'Hacer una videollamada',
                  'Enviar un mensaje de voz',
              ],
              respuestaCorrecta: 'Colgar la llamada'
            },
            {
              titulo: 'Prueba 4: Interfaz de Llamadas',
              descripcion: '¿Para que sirve el botón del microfono en la interfaz de una llamada?',
              respuestas: [
                  'Para llamar a otro contacto',
                  'Un botón para enviar mensajes de voz',
                  'Para silenciar el micrófono',
                  'Para enviar un mensaje de texto',
              ],
              respuestaCorrecta: 'Para silenciar el micrófono'
            },	
            
        ],
        respuestasSeleccionadas: Array.from({ length: 2 }, () => []),
        respuestaSeleccionada: '',
    },
    methods: {
        verificarRespuestasP2() {
          respuestasCorrectas = ['Nombre del contacto', 'La fecha de la última vez que se habló con el contacto', 'No, es opcional, ya que sino se puede usar una imagen por defecto']
          const respuestasUsuario = this.respuestasSeleccionadas;
          // print respuestasUsuario
          console.log(respuestasUsuario);
          
          const todasCorrectas = respuestasCorrectas.every(correcta => respuestasUsuario.includes(correcta));
      
          if (todasCorrectas) {
              this.currentPreguntasIndex++;
              this.siguiente();
          } else {
              alert('Una o más respuestas son incorrectas. Inténtalo de nuevo.');
          }
        },

        verificarRespuestasP3() {
            respuestasCorrectas = ['Para enviar mensajes', 'Verde', 'El mensaje ha sido enviado, recibido y leído', 'En la parte izquierda de la pantalla']
            const respuestasUsuario = this.respuestasSeleccionadas;
            // print respuestasUsuario
            console.log(respuestasUsuario);
            
            const todasCorrectas = respuestasCorrectas.every(correcta => respuestasUsuario.includes(correcta));
        
            if (todasCorrectas) {
                this.currentPreguntasIndex++;
                this.siguiente();
            } else {
                alert('Una o más respuestas son incorrectas. Inténtalo de nuevo.');
            }
        },

        verificarRespuestasP4() {
            respuestasCorrectas = ['Un botón para llamar', 'Colgar la llamada', 'Para silenciar el micrófono']
            const respuestasUsuario = this.respuestasSeleccionadas;
            // print respuestasUsuario
            console.log(respuestasUsuario);
            
            const todasCorrectas = respuestasCorrectas.every(correcta => respuestasUsuario.includes(correcta));
        
            if (todasCorrectas) {
                this.currentPreguntasIndex++;
                this.siguiente();
            } else {
                alert('Una o más respuestas son incorrectas. Inténtalo de nuevo.');
            }
        },

        setTeoriaAbrirWhatsapp() {
            this.currentIndex = 1;
            this.activeSubDropdown = 'whatsapp';
        },


        setTeoriaContactos() {
            this.currentIndex = 4;
            this.activeSubDropdown = 'contactos';
        },


        setTeoriaEscribirMensaje() {
            this.currentIndex = 9;
            this.activeSubDropdown = 'mensaje';
        },

        setTeoriaLlamada() {
            this.currentIndex = 13;
            this.activeSubDropdown = 'llamadas';
        },

        resetIndex() {
            this.currentIndex = 0;
            this.activeSubDropdown = null;
        },

    
        siguiente() {
            this.currentIndex++;
            if (this.currentIndex >= this.totalCards) {
                this.currentIndex = 0;
                this.currentPreguntasIndex = 0;
                this.currentIndexReached5 = false;
                this.indexReached5 = 3;
                this.reached5 = false;
                this.respuestaSeleccionada = '';
                this.respuestasSeleccionadas = Array.from({ length: 2 }, () => []);
            }

            const dropdownStyles = {
                position: 'relative',
                color: 'var(--color-primary-5)',
                transition: 'all 200ms linear',
                fontFamily: "'M Plus Rounded 1c'",
                fontWeight: 700,
                fontSize: '20px',
                borderRadius: '2px',
                padding: '5px 0',
                paddingLeft: '20px',
                paddingRight: '15px',
                marginTop: '15px',
                textAlign: 'left',
                textDecoration: 'none',
                display: ['-ms-flexbox', 'flex'],
                WebkitAlignItems: 'center',
                MozAlignItems: 'center',
                MsAlignItems: 'center',
                alignItems: 'center',
                justifyContent: 'space-between',
                MsFlexPack: 'distribute',
                cursor: 'pointer'
              };

            var x_1 = document.getElementById("dropdown_1");
            var x_2 = document.getElementById("dropdown_2");
            var x_3 = document.getElementById("dropdown_3");
            var x_4 = document.getElementById("dropdown_4");

            if (this.currentIndex === 1){
                this.activeSubDropdown = 'whatsapp';
                x_1.style.color = "white";
                x_1.style.backgroundColor = "--color-primary-3";
                Object.assign(x_2.style, dropdownStyles);
                Object.assign(x_3.style, dropdownStyles);
                Object.assign(x_4.style, dropdownStyles);
            } else if (this.currentIndex === 4){
                this.activeSubDropdown = 'contactos';
                x_2.style.color = "white";
                x_2.style.backgroundColor = "--color-primary-3";
                Object.assign(x_1.style, dropdownStyles);
                Object.assign(x_3.style, dropdownStyles);
                Object.assign(x_4.style, dropdownStyles);
            } else if (this.currentIndex === 9){
                this.activeSubDropdown = 'mensaje';
                x_3.style.color = "white";
                x_3.style.backgroundColor = "--color-primary-3";
                Object.assign(x_1.style, dropdownStyles);
                Object.assign(x_2.style, dropdownStyles);
                Object.assign(x_4.style, dropdownStyles);
            } else if (this.currentIndex === 13){
                this.activeSubDropdown = 'llamadas';
                x_4.style.color = "white";
                x_4.style.backgroundColor = "--color-primary-3";
                Object.assign(x_1.style, dropdownStyles);
                Object.assign(x_2.style, dropdownStyles);
                Object.assign(x_3.style, dropdownStyles);
            } else {
                Object.assign(x_1.style, dropdownStyles);
                Object.assign(x_2.style, dropdownStyles);
                Object.assign(x_3.style, dropdownStyles);
                Object.assign(x_4.style, dropdownStyles);
            }
        },
        verificarRespuesta() {
            if (this.respuestaSeleccionada === 'Presionar el icono de WhatsApp') {
                this.currentPreguntasIndex++;
                this.siguiente();
            } else {
                alert('Respuesta incorrecta. Inténtalo de nuevo.');
            }
        },
        sum3Siguiente() {
            this.currentIndex += 3;
            this.reached5 = true;
            if (this.currentIndex >= this.totalCards) {
                this.currentIndex = 0;
            }
        },
        incrementCurrentPreguntasIndex() {
          this.currentPreguntasIndex++;
      }
    }
});
