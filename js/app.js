

// Prototype of cats
// name
// link to the photo
// creates div with the photo of a cat
class Cat {
	constructor(name, photo, id, count = 0) {
		this.name = name;
		this.photo = photo;
    this.count = count;
		this.id = id;
	}
  // methode that creates div with the photo of a cat
  createDiv(){
    // takes a <div class ='content'> from html
		// creates:
		// 	<div class='cat'>
		//  	<picture>
		//    	<img   class="cat_photo" src=".." alt="..">
		//  	</picture>
		// ***
    //  	<div class ='description'>
    //    	<p>this.name</p>
		// ***

		// ***
		//		</div>
		// ***
		//  </div>

		const divContent = document.querySelector('.content');
		const divCat = document.createElement('div');
		const pictureCat = document.createElement('picture');
		const imgCat = document.createElement('img');

		divCat.classList.add('oneCat');
		imgCat.classList.add('cat_photo');
		imgCat.src=this.photo;
		imgCat.alt='photo of a Cat';
		imgCat.id= this.id;


		divContent.appendChild(divCat);
		divCat.appendChild(pictureCat);
		pictureCat.appendChild(imgCat);

    // creates:
		// ***
    //  	<div class ='description'>
    //    	<p>this.name</p>
		// ***
		//		</div>
		// ***

    const divDescription = document.createElement('div');
    const pCat = document.createElement('p');
    divDescription.classList.add('description');
    pCat.textContent = this.name;
    divCat.appendChild(divDescription);
    divDescription.appendChild(pCat);

		// creates:
		// ***
		//  	<div class="score_pannel">
		//			<p><span class="fas fa-paw"></span><span class='score'>0</span><span>Click Cats</span>/p>
		//		</div>
		// ***

		const divScorePannel = document.createElement('div');
		const pScore = document.createElement('p');
		const spanPaw = document.createElement('span');
		const spanScore = document.createElement('span');
		const span = document.createElement('span');

		divScorePannel.classList.add('score_pannel');
		spanPaw.classList.add('fas');
		spanPaw.classList.add('fa-paw');
		spanScore.classList.add('score');
		spanScore.textContent = ' 0 ';
		span.textContent =' Click Cats';

		divDescription.appendChild(divScorePannel);
		divScorePannel.appendChild(pScore);
		pScore.appendChild(spanPaw);
		pScore.appendChild(spanScore);
		pScore.appendChild(span);
  }
}

// create two cats from Cat prototype
const cat1 = new Cat ('Mruczek', 'img/cat1.jpg', 1);
const cat2 = new Cat ('Drapek','img/cat2.jpg', 2);

// pushing cats to the array
let catsArray =[];
catsArray.push(cat1);
catsArray.push(cat2);

// using the createDiv methode on cat1 and cat2
cat1.createDiv();
cat2.createDiv();

// function scoreUpgrade(){

// }

function catClick() {
		// selects all elements with class= 'cat'
		const photosToClick = document.querySelectorAll('.cat_photo');

		// loops thrugh all nodes with class= 'cat'
		for(let i = 0; i < photosToClick.length; i++){
			// adds eventListener to all nodes with class= 'cat'
		    photosToClick[i].addEventListener('click', function(event){
					// checks the id of the node (cat photo)
					// selects from the array = catsArray the correspondig cat objects
					// increments its this.count by 1
					for (j=0; j<=photosToClick.length; j++ ){
						if (event.target.id == j+1){
							catsArray[j].count ++;
							// upgrade number of clicks on the website
							// selects all the spans with class='score'
							// loops through this node lists
							// changes its text content reffering to catsArray
							let scoresUpgrade = document.querySelectorAll('.score');
								for (k=0; k < scoresUpgrade.length; k++){
									scoresUpgrade[k].textContent= catsArray[k].count;
								}
							}
					}
				});
		}
}

// calling the function catClick
catClick();
