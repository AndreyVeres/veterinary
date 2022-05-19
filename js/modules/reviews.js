



const reviews = () => {
    class Reviews {

        constructor(firstname ,secondName, avatar , text ,parent){
            this.name = firstname ;
            this.secondName = secondName;
            this.avatar = avatar;
            this.text = text;
            this.parent = document.querySelector(parent);
        }

        render () {
            const div = document.createElement('div');
            div.classList.add('reviews__item');
            this.parent.append(div);

            div.innerHTML = `
            <div class="member">
              <img class="member__avatar" src="${this.avatar}" alt="avatar">
              <div class="member__name">
                    <p class="member__firstname">${this.name} </p>
                    <p class="member__secondname"> ${this.secondName} </p>
              </div>

            </div>
            <p class="reviews__text">
              ${this.text};
            </p>
            
            `;
        }
    }

    // const firstReview = new Reviews('andrey' , 'veres' ,'' , 'loremlorem' , '.reviews__list').render();

    function createCard () {
        
    }
  



   
}

export default reviews;