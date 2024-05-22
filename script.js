const shareIcon = document.getElementById('shareIcon');
const sharePopUp = document.getElementById('share-pop-up');
const shareIconLogo = document.getElementById('share_icon_logo')
const shareMobile=document.getElementById('share_icon_mobile');

shareIcon.addEventListener('click', () => {
   sharePopUp.classList.toggle('visible');
    if (sharePopUp.classList.contains('visible')) {
        sharePopUp.classList.remove('hidden');
shareIcon.style.backgroundColor='#6e8098'
shareIconLogo.style.fill='#fff'
    } else {
        sharePopUp.classList.add('hidden');
        shareIcon.style.backgroundColor='#ecf2f8'
shareIconLogo.style.fill='#6e8098'
    }
});
shareMobile.addEventListener('click', ()=>{
    sharePopUp.classList.toggle('visible');
    sharePopUp.classList.add('hidden');
  
})
