
const reviews = () => {

  class Reviews {

    constructor(name, text, parent) {
      this.name = name;
      this.text = text;
      this.parent = document.querySelector(parent);
    }

      render() {
        const div = document.createElement('div');
        div.classList.add('reviews__item');
        this.parent.append(div);

        div.innerHTML = `
        <div class="member">
        <img class="member__avatar" src="images/avatar.png" alt="avatar">
        <div class="member__name">
            <p class="member__firstname">${this.name} </p>
        
        </div>

        </div>
        <p class="reviews__text">
          ${this.text}
        </p>
              
              `;
      }
  }

  const popupForm = document.querySelector('.popup__form');

  popupForm.addEventListener('submit', function (e) {
    makeCommetn(e);
  });

  function makeCommetn(e) {
    e.preventDefault()
    const form = document.querySelector('.reviews__popup');
    const reviewsName = document.querySelector('.reviews__name');
    const reviewsArea = document.querySelector('.reviews__area');


    const firstReview = new Reviews(reviewsName.value, reviewsArea.value, '.reviews__list').render();
    const comment = {
      commentName : reviewsName.value ,
      commentText : reviewsArea.value
    };

    popupForm.reset();
    form.style.display = 'none';
    document.body.style.overflow = '';
  
    localStorage.setItem('comment' , JSON.stringify(comment));
    
   
  }

};

export default reviews;