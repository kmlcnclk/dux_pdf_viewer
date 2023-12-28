function openModal(pdfUrl) {
  document.getElementById('modal-container').style.display = 'flex';
  document.getElementById('myframe').src = pdfUrl;
}

function closeModal() {
  document.getElementById('modal-container').style.display = 'none';
}

function stopPropagation(event) {
  event.stopPropagation();
}

document.addEventListener('click', function (event) {
  if (event.target === document.getElementById('modal-container')) {
    closeModal();
  }
});
