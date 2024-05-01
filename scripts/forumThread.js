const forumApp = Vue.createApp({
    data() {
        return {
            threads: [],
            showThreadForm: false,
            showReplyForm: false,
            currentThread: null, // To keep track of which thread we're replying to
            selectedCategory: "", // To keep track of the category selected
            newThread: {
                title: "",
                author: "",
                category: "",
                text: ""
            },
            newResponse: {
                author: "",
                text: ""
            },
        };
    },

    computed: {
        filteredThreads() {
          // Filter the threads by the category
          if (!this.selectedCategory) {
            // If no category is selected, return all the threads
            return this.threads;
          } else {
            // If a category is selected, return the threads of that category
            return this.threads.filter(thread => thread.category === this.selectedCategory);
          }
        }
      },

    methods: {
        // Method to open the thread form modal
        openThreadForm() {
            this.showThreadForm = true;
        },

        // Method to close the thread form modal
        closeThreadForm() {
            this.showThreadForm = false;
            // Reset the new thread form data
            this.newThread = { title: "", author: "", category: "", text: "" };
        },

        // Method to open the reply form modal
        openReplyForm(thread) {
            this.currentThread = thread; // Set the current thread for the reply
            thread.showReplyForm = true; // Show the reply form for the specific thread
        },
        // Method to close the reply form modal
        closeReplyForm() {
            if (this.currentThread) {
                this.newResponse = { author: "", text: "" }; // Reset the reply form
                this.currentThread.showReplyForm = false; // Hide the form
                this.currentThread = null; // Clear the current thread reference
            }
        },

        // Method to add new thread to the list at top
        addNewThread() {
            const newThread = {
                id: this.threads.length + 1, // Generate a new ID
                title: this.newThread.title,
                author: this.newThread.author,
                authorPic: "./../images/profilePictures/profilePicture.jpg",
                category: this.newThread.category,
                text: this.newThread.text,
                time: new Date().toISOString(),
                timeAgo: "ahora",
                responses: []
            };

            // Add the new thread to the start of the threads array
            this.threads.unshift(newThread);
            // Close the thread form
            this.closeThreadForm();
        },

        // Method to add new thread to the list at top
        submitReply() {
            if (this.currentThread) {
                const reply = {
                    author: this.newResponse.author,
                    text: this.newResponse.text,
                    time: new Date().toISOString() // Timestamp for the reply
                };
                if (!this.currentThread.responses) {
                    this.$set(this.currentThread, 'responses', []); // Initialize responses if not already
                }
                this.currentThread.responses.unshift(reply); // Add the reply to the top of current threads' response array
                this.closeReplyForm(); // Close the form
            }
        },

        initializeSampleData() {
            this.threads = [
                {
                    id: 1,
                    title: "Introducción a la Informática Básica",
                    author: "María García",
                    authorPic: "./../images/profilePictures/mariaPic.jpg",
                    category: "Informática Básica",
                    text: "¿Cuáles son los conceptos fundamentales de la informática que todo principiante debe conocer?",
                    time: "2024-04-30T08:00:00.000Z",
                    timeAgo: "hace 2 horas",
                    responses: [
                        {
                            id: 1,
                            author: "Pedro Rodríguez",
                            text: "Hola María, algunos conceptos fundamentales de la informática son el hardware y el software.",
                            time: "2024-04-30T08:15:00.000Z" 
                        },
                        {
                            id: 2,
                            author: "Ana Martínez",
                            text: "Buen día María, te recomendaría empezar por entender cómo funcionan los sistemas operativos.",
                            time: "2024-04-30T08:10:00.000Z" 
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "Seguridad en Redes Sociales",
                    "author": "Juan Martínez",
                    "authorPic": "./../images/profilePictures/juanPic.jpg",
                    "category": "Internet y Redes Sociales",
                    "text": "¿Cuáles son algunas medidas que podemos tomar para proteger nuestra privacidad y seguridad en las redes sociales?",
                    "time": "2024-04-30T07:15:00.000Z",
                    "timeAgo": "hace 3 horas",
                    "responses": [
                        {
                            "id": 1,
                            "author": "Emma Watson",
                            "text": "Hola Juan, una medida importante es revisar y ajustar la configuración de privacidad en nuestras cuentas de redes sociales para controlar quién puede ver nuestras publicaciones y datos personales.",
                            "time": "2024-04-30T17:40:00.000Z"
                        },
                        {
                            "id": 2,
                            "author": "Christopher Lee",
                            "text": "Hola, también es recomendable ser selectivo al aceptar solicitudes de amistad o seguir a personas desconocidas, y evitar compartir información personal sensible en línea.",
                            "time": "2024-04-30T07:45:00.000Z"
                        }
                    ]
                },                
                {
                    id: 3,
                    title: "Uso Práctico de Teléfonos Móviles",
                    author: "Ana López",
                    authorPic: "./../images/profilePictures/anaPic.png",
                    category: "Dispositivos Móviles",
                    text: "¿Qué consejos tienen para aprovechar al máximo nuestros teléfonos móviles?",
                    time: "2024-04-29T15:30:00.000Z",
                    timeAgo: "ayer",
                    responses: [
                        {
                            "id": 1,
                            "author": "David Pérez",
                            "text": "Hola Ana, para aprovechar al máximo los teléfonos móviles te recomendaría explorar las diferentes aplicaciones disponibles en las tiendas de aplicaciones.",
                            "time": "2024-04-29T15:55:00.000Z"
                        },
                        {
                            "id": 2,
                            "author": "Laura García",
                            "text": "Hola Ana, también es importante personalizar la configuración del teléfono según tus necesidades y preferencias.",
                            "time": "2024-04-29T15:40:00.000Z"
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Consejos para Videollamadas Efectivas con Zoom",
                    author: "Carlos Rodríguez",
                    authorPic: "./../images/profilePictures/carlosPic.jpg",
                    category: "Comunicación Digital",
                    text: "¿Qué consejos tienen para mejorar la calidad y efectividad de nuestras videollamadas usando Zoom? ¿Hay alguna función especial que recomienden para facilitar la comunicación?",
                    time: "2024-04-29T12:45:00.000Z",
                    timeAgo: "ayer",
                    responses: [
                        {
                            "id": 1,
                            "author": "Laura Martínez",
                            "text": "Hola Carlos, para mejorar la calidad de las videollamadas con Zoom, te recomendaría tener una buena conexión a internet y utilizar auriculares con micrófono.",
                            "time": "2024-04-30T19:50:00.000Z"
                        },
                        {
                            "id": 2,
                            "author": "Pedro García",
                            "text": "Hola, una función útil de Zoom es el modo de pantalla compartida, que facilita la colaboración y la presentación de contenido durante las videollamadas.",
                            "time": "2024-04-30T16:55:00.000Z"
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Introducción a las Hojas de Cálculo",
                    author: "Luisa Fernández",
                    authorPic: "./../images/profilePictures/luisaPic.jpg",
                    category: "Herramientas de Productividad",
                    text: "¿Qué son las hojas de cálculo y cómo podemos empezar a usarlas?",
                    time: "2024-04-28T09:00:00.000Z",
                    timeAgo: "hace 2 días",
                    responses: []
                },
                {
                    id: 6,
                    title: "Consejos de Seguridad en Internet",
                    author: "Pedro Sánchez",
                    authorPic: "./../images/profilePictures/pedroPic.jpg",
                    category: "Seguridad en Línea",
                    text: "¿Qué medidas de seguridad podemos tomar para protegernos mientras navegamos por Internet?",
                    time: "2024-04-27T16:30:00.000Z",
                    timeAgo: "hace 3 días",
                    responses: [
                        {
                            "id": 1,
                            "author": "Sofía López",
                            "text": "Hola Pedro, para protegernos en línea es importante utilizar contraseñas seguras y mantener actualizado el software.",
                            "time": "2024-04-27T19:35:00.000Z"
                        },
                        {
                            "id": 2,
                            "author": "Javier Martínez",
                            "text": "Hola, también es útil habilitar la autenticación de dos factores cuando sea posible.",
                            "time": "2024-04-27T16:40:00.000Z"
                        }
                    ]
                }
            ]
        }
    },
    mounted(){
        this.initializeSampleData();
    }
});

forumApp.mount('#forumThread');




