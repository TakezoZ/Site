const posicoes = {};

function moverCarrossel(direcao, idFrame) {
  const frame = document.getElementById(idFrame);
  if (!frame) return;

  const larguraItem = frame.children[0]?.offsetWidth || 300;
  const totalItens = frame.children.length;
  const visiveis = 3;
  const maxPos = Math.max(0, totalItens - visiveis);

  if (!(idFrame in posicoes)) posicoes[idFrame] = 0;

  posicoes[idFrame] += direcao;
  if (posicoes[idFrame] < 0) posicoes[idFrame] = 0;
  if (posicoes[idFrame] > maxPos) posicoes[idFrame] = maxPos;

  frame.style.transform = `translateX(-${posicoes[idFrame] * larguraItem}px)`;
}

const posicoesSimples = {};

function moverCarrosselSimples(direcao, idFrame) {
  const frame = document.getElementById(idFrame);
  if (!frame) return;

  const larguraItem = frame.children[0]?.offsetWidth || 300;
  const totalItens = frame.children.length;
  const maxPos = Math.max(0, totalItens - 1);

  if (!(idFrame in posicoesSimples)) posicoesSimples[idFrame] = 0;

  posicoesSimples[idFrame] += direcao;
  if (posicoesSimples[idFrame] < 0) posicoesSimples[idFrame] = 0;
  if (posicoesSimples[idFrame] > maxPos) posicoesSimples[idFrame] = maxPos;

  frame.style.transform = `translateX(-${posicoesSimples[idFrame] * larguraItem}px)`;
  frame.style.transition = 'transform 0.3s ease';
}
