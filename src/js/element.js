export const getProfileImageEle = () => {
  return document.querySelector('nav .profile-photo img');
};

export const createCardDom = () => {
  const cardDom = document.createElement('div');
  cardDom.innerHTML = `
  <div class = 'card-profile'></div>
  <div class = 'card-picture'></div>
  `;

  return cardDom;
};

/* 
<div>
  <div class = 'card-profile'></div>
  <div class = 'card-picture'></div>
</div> 
*/
