window.addEventListener('DOMContentLoaded', () => {
	let checa = 0;
	const checkFunc1 = document.getElementById('checaFuncao1');
	const checkFunc2 = document.getElementById('checaFuncao2');
	const checkFunc3 = document.getElementById('checaFuncao3');
	const checkFunc4 = document.getElementById('checaFuncao4');

	checkFunc1.addEventListener('click', () =>{
		if(checa == 0){
			alert(`Você não possui um dispositivo para essa função`);
			checa = 1;
		}
		checkFunc1.click();
		checkFunc1.touchstart();
		checa = 0;
	});

	checkFunc2.addEventListener('click', () =>{
		if(checa == 0){
			alert(`Você não possui um dispositivo para essa função`);
			checa = 1;
		}
		checkFunc2.click();
		checa = 0;
	});

	checkFunc3.addEventListener('click', () =>{
		if(checa == 0){
			alert(`Você não possui um dispositivo para essa função`);
			checa = 1;
		}
		checkFunc3.click();
		checa = 0;
	});

	checkFunc4.addEventListener('click', () =>{
		if(checa == 0){
			alert(`Você não possui um dispositivo para essa função`);
			checa = 1;
		}
		checkFunc4.click();
		checa = 0;
	});
});