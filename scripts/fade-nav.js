let lastScrollTop = 0;
        window.addEventListener("scroll", function() {
          let st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > lastScrollTop) {
            document.querySelector('.db-header').classList.add('navbar-fade');
          } 
          else {
            document.querySelector('.db-header').classList.remove('navbar-fade');
          }
          lastScrollTop = st <= 0 ? 0 : st;
        }, false);