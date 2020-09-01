function shareActive() {
  const btnShare = document.querySelector('.btn-share');
  const active = document.querySelector('.share-icon');
  const boxInfo = document.querySelector('.box-info');
  btnShare.addEventListener('click', classActive);

  function classActive(e) {
    e.preventDefault();
    active.classList.toggle('ativo');
    btnShare.classList.toggle('desativado');
    boxInfo.classList.toggle('desativado');
  }
}
shareActive();