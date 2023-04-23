import { fetchProfile, fetchCards } from './api';
import { getProfileImageEle, createCardDom } from './element';

export { renderProfile };
async function renderProfile() {
  //step 1: fetch profile data from backend
  const profile = await fetchProfile();

  //step 2: get the target DOM from html
  const profileImageDOM = getProfileImageEle();

  //step 3: apply the profile data on above DOM element
  profileImageDOM.src = profile.img_src;
}

// export const renderProfile = async () => {
//   //step 1: fetch profile data from backend
//   const profile = await fetchProfile();
//   console.log(profile);

//   //step 2: get the target DOM from html
//   const profileImageDOM = getProfileImageEle();
//   console.log(profileImageDOM);
//   //step 3: apply the profile data on above DOM element
//   profileImageDOM.src = profile.img_src;
//   //   console.log('render profile');
// };

const renderSingleCard = (card) => {
  const cardDom = createCardDom();
  // console.log(card.picture.img_src);
  renderCardPicture(
    cardDom.querySelector('.card-picture'),
    card.picture.img_src,
  );
  document.querySelector('.cards').appendChild(cardDom);
};

const renderCardPicture = (cardPictureDom, pic) => {
  //cardPictureDom === <div class = "card-picture"><div>

  //   <div>
  //     <div class = 'card-profile'></div>
  //     <div class = 'card-picture'>
  //       <img width = '100%' />
  //     </div>
  // </div>
  const imgTag = document.createElement('img'); //<img />
  imgTag.setAttribute('width', '100%'); //<img width = 100% />
  cardPictureDom.appendChild(imgTag); //<div class = "card-picture"><img width = '100%' /><div>
  console.log(cardPictureDom);
  imgTag.src = pic;
};

export const renderCards = async () => {
  //Step 1: fetch cards data from backend
  const cards = await fetchCards();

  //Step 2: start render single card one by one
  cards.forEach((card) => {
    console.log(card);
    renderSingleCard(card);
  });
};
