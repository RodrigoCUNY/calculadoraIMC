const form = document.getElementById('form');

form.addEventListener('submit', function(event){
   event.preventDefault(); /*impedir carregamento da pagina*/

   const weight = document.getElementById('weight').value;
   const height = document.getElementById('height').value;  

  

   const bmi = (weight / (height * height)).toFixed(2);

   const value = document.getElementById('value');
   let description = '';


   
   document.getElementById('infos').classList.remove('hidden'); /*removes the hidden css mark */



if(bmi < 18.5){
    description = 'Attention! You are under the standard weight!'
}else if(bmi >= 18.5 && bmi <= 25){
    description = 'You are in your ideal weight standard!';
   value.classList.remove('attention');
   value.classList.add('normal')
 }else if(bmi > 25 && bmi <= 30){
    description = 'Attention! You are over your standard weight!';
 }else if(bmi > 30 && bmi <= 35){
    description = 'Attention! You are moderate obese!';
 }else if(bmi > 35 && bmi <= 40){
    description = 'Attention! You are severely Obese!';
} else {
    description = 'Be Careful! You are morbidly Obese!';
}
 



value.textContent = bmi.replace('.',','); /* this changes de (.) for the (,) in the value result for bmi*/

document.getElementById('description').textContent = description;

});

