const posicoes = {};

let isAnimating = false;

function moverCarrossel(direcao, idFrame) {
  if (isAnimating) return;

  const frame = document.getElementById(idFrame);
  const itemWidth = frame.children[0].offsetWidth;

  isAnimating = true;

  if (direcao === 1) {
    for (let item of frame.children) {
      item.style.transition = 'transform 0.4s ease';
      item.style.transform = `translateX(-${itemWidth}px)`;
    }

    setTimeout(() => {
      const primeiro = frame.children[0];
      frame.appendChild(primeiro);

      for (let item of frame.children) {
        item.style.transition = 'none';
        item.style.transform = 'translateX(0)';
      }

      isAnimating = false;
    }, 400);

  } else if (direcao === -1) {
    const ultimo = frame.children[frame.children.length - 1];
    frame.insertBefore(ultimo, frame.children[0]);

    for (let item of frame.children) {
      item.style.transition = 'none';
      item.style.transform = `translateX(-${itemWidth}px)`;
    }

    void frame.offsetWidth;

    for (let item of frame.children) {
      item.style.transition = 'transform 0.4s ease';
      item.style.transform = `translateX(0)`;
    }

    setTimeout(() => {
      isAnimating = false;
    }, 400);
  }
}



const posicoesSimples = {};

let animandoSimples = false;

function moverCarrosselSimples(direcao, idFrame) {
  if (animandoSimples) return;

  const frame = document.getElementById(idFrame);
  if (!frame) return;

  const itemWidth = frame.children[0]?.offsetWidth || 300;
  animandoSimples = true;

  if (direcao === 1) {
    for (let item of frame.children) {
      item.style.transition = 'transform 0.4s ease';
      item.style.transform = `translateX(-${itemWidth}px)`;
    }

    setTimeout(() => {
      const primeiro = frame.children[0];
      frame.appendChild(primeiro);

      for (let item of frame.children) {
        item.style.transition = 'none';
        item.style.transform = 'translateX(0)';
      }

      animandoSimples = false;
    }, 400);

  } else if (direcao === -1) {
    const ultimo = frame.children[frame.children.length - 1];
    frame.insertBefore(ultimo, frame.children[0]);

    for (let item of frame.children) {
      item.style.transition = 'none';
      item.style.transform = `translateX(-${itemWidth}px)`;
    }

    void frame.offsetWidth;

    for (let item of frame.children) {
      item.style.transition = 'transform 0.4s ease';
      item.style.transform = 'translateX(0)';
    }

    setTimeout(() => {
      animandoSimples = false;
    }, 400);
  }
}

