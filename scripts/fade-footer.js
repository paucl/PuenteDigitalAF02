new Vue({
    el: '#app',
    methods: {
        footer() {
            var scroll = window.scrollY; 
            if (scroll > 50) { 
                document.querySelector("footer").classList.add("show");
            } else {
                document.querySelector("footer").classList.remove("show");
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.footer);
    }
});