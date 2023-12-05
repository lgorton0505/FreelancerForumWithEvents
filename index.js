const names = ['Carl', 'James', 'Gabriel', 'Emmi', 'Lance', 'Sunn O)))', 'Samuel', 'Abe', 'Jason', 'Kurt', 'Blaine', 'William', 'Mike', 'Nick', 'Noah', 'Rick'];
const occupations = ['Programmer', 'Petsitter', 'Therapist', 'Gardener', 'Drummer', 'Personal Chef', 'Singer', 'Guitarists', 'Pianist', 'Architect'];
const productsList = window.document.querySelector('#productsList');
const addButton = document.querySelector('#addButton');
const spanCount = document.querySelector('#spanCount');
const spanAverageRate = document.querySelector('#spanAverageRate');

addButton.addEventListener('click', function(){
   products.push(generateRandom());
   render();
});

productsList.addEventListener('click', (ev)=>{
   if(ev.target.tagName === 'LI'){
       const li = ev.target;
       const ul = li.parentNode;
       const children = Array.from(ul.children);
       const idx = children.indexOf(li);
       products.splice(idx, 1);
       render();
   }
});


function generateRandom(){
    const nameIdx = Math.floor(Math.random()*names.length);
    const name = names[nameIdx];
    const occupationsIdx = Math.floor(Math.random()*occupations.length);
    const occupation = occupations[occupationsIdx];
    const cost = Math.ceil(Math.random() * 10);

    return{
        name,
        occupation,
        cost
    };
}

function render(){

    let sum = 0;
   products.forEach((lancer)=>{
       sum = sum + lancer.cost;
   });
    const lis = products.map(function(product){
       return `<li>Name: ${product.name} <br> 
       Occupation: ${product.occupation} <br> 
       Cost: $${product.cost}</li>`;

    }).join('');

    productsList.innerHTML = lis;
    spanCount.innerHTML = products.length;
    const average = sum / products.length;

   if(isNaN(average)){
    spanAverageRate.innerHTML = 0;
   }else{
    spanAverageRate.innerHTML = average.toFixed(2);
   }
}

const products = [];