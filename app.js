const shareBtn=document.getElementById('share');
const sharingOptions=document.getElementById('sharingOptions');



shareBtn.addEventListener('click', showSharingOptions=()=> {
    sharingOptions.style.opacity=1;
    setTimeout(hidesharingOptions, 2400);
});

const hidesharingOptions = () => {
    sharingOptions.style.opacity=0;
};
