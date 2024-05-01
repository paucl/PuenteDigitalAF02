export default {
  data() {
    return {
      isNavbarVisible: true,
      lastScrollPosition: 0
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScrollThrottled);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScrollThrottled);
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) return;

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) return;

      this.isNavbarVisible = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  }
};
