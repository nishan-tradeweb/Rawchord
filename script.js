(function(){
  var appears = document.querySelectorAll('.appear');
  appears.forEach(function(el){
    el.addEventListener('animationend', function(){ el.classList.add('is-in'); }, { once:true });
  });

  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      var targets = document.querySelectorAll('.appear, .hero-photo');
      targets.forEach(function(el){
        var anims = (el.getAnimations ? el.getAnimations() : []);
        var active = anims.some(function(a){ return a.playState === 'running' || a.playState === 'finished'; });
        if(!active){ el.classList.add('is-in'); }
      });
    });
  });

  var burger = document.getElementById('burger');
  var nav = document.getElementById('site-nav');

  function closeMenu(){
    document.body.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
  }
  function openMenu(){
    document.body.classList.add('menu-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close menu');
  }

  burger.addEventListener('click', function(){
    if(document.body.classList.contains('menu-open')){ closeMenu(); } else { openMenu(); }
  });

  nav.addEventListener('click', function(e){
    if(e.target.closest('a')){ closeMenu(); }
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){ closeMenu(); }
  });

  window.matchMedia('(min-width: 901px)').addEventListener('change', function(e){
    if(e.matches){ closeMenu(); }
  });
})();
