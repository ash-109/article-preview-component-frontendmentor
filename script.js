const shareIcon = document.getElementById('share_icon');
const sharePopUp = document.getElementById('share-pop-up');


shareIcon.addEventListener('click', () => {
   sharePopUp.classList.toggle('visible');
    if (sharePopUp.classList.contains('visible')) {
        sharePopUp.classList.remove('hidden');
    } else {
        sharePopUp.classList.add('hidden');
    }
});
