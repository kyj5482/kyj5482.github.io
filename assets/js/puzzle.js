/* 퍼즐 히어로: 글을 읽어 내려갈수록 상단 이미지가 3x3 조각으로 완성된다.
   히어로가 화면 밖으로 나가면 우하단 미니 뷰로 고정되어 진행도를 계속 보여준다. */
(function () {
  var ORDER = [4, 0, 8, 2, 6, 3, 5, 1, 7]; // 중앙부터, 퍼즐 맞추는 느낌의 공개 순서

  function init(hero) {
    var img = hero.getAttribute('data-img');
    var inner = hero.querySelector('.pz-inner');
    if (!img || !inner) return;

    var base = document.createElement('div');
    base.className = 'pz-base';
    base.style.backgroundImage = 'url(' + img + ')';
    inner.appendChild(base);

    var tiles = [];
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++) {
        var t = document.createElement('div');
        t.className = 'pz-tile';
        t.style.backgroundImage = 'url(' + img + ')';
        t.style.backgroundSize = '300% 300%';
        t.style.backgroundPosition = (c * 50) + '% ' + (r * 50) + '%';
        t.style.left = (c * 100 / 3) + '%';
        t.style.top = (r * 100 / 3) + '%';
        inner.appendChild(t);
        tiles.push(t);
      }
    }
    var badge = document.createElement('div');
    badge.className = 'pz-badge';
    inner.appendChild(badge);

    var article = document.querySelector('article') || document.querySelector('.content') || document.body;

    function update() {
      var rect = article.getBoundingClientRect();
      var vh = window.innerHeight || 1;
      var total = rect.height - vh;
      var passed = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      var p = total > 80 ? passed / total : 1;
      var k = Math.max(1, Math.min(9, 1 + Math.floor(p * 9)));
      for (var i = 0; i < 9; i++) tiles[ORDER[i]].classList.toggle('on', i < k);
      badge.textContent = k >= 9 ? '🧩 퍼즐 완성!' : '🧩 ' + k + '/9 조각 — 계속 읽으면 완성됩니다';
      hero.classList.toggle('complete', k >= 9);

      var hr = hero.getBoundingClientRect();
      hero.classList.toggle('mini', hr.bottom < 40);
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  function boot() {
    document.querySelectorAll('.puzzle-hero[data-img]').forEach(init);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
