window.addEventListener('DOMContentLoaded', () => {
    var socket = io();
    let num = 0;
    socket.on('esta ligado', function(msg){
        if(msg=="6on"){
            num = 1;
            document.getElementById('clique6').click();
        }
    })
	document.getElementById('clique6').addEventListener('click', () =>{
        if(num == 0){
            socket.emit('ligar', '6');
        }
        num = 0;
    });

    const cat = document.getElementById('cat');
	const nul = document.getElementById('nul');
	const ilu = document.getElementById('ilu');
	const cli = document.getElementById('cli');
	const seg = document.getElementById('seg');
	const laz = document.getElementById('laz');
	const lim = document.getElementById('lim');
	const out = document.getElementById('out');

	const devices = document.getElementById('devices');

	ilu.addEventListener('click', () =>{
		while (devices.hasChildNodes()) {
	      devices.removeChild(devices.lastChild);
	    }
	    var iots = ["SmartIot", "Wall-e", "Iot-2017", "HackIot"];
	    for(i = 0; i < iots.length; i++){
			const novoLi1 = document.createElement('li');
			novoLi1.className = 'list-group-item';
			novoLi1.append(iots[i]);
			const novoSpan1 = document.createElement('span');
			novoSpan1.className = 'glyphicon glyphicon-signal';
			novoSpan1.style = 'float:right';
			novoLi1.appendChild(novoSpan1);
			devices.appendChild(novoLi1);
		}
	});

	cli.addEventListener('click', () =>{
		while (devices.hasChildNodes()) {
	      devices.removeChild(devices.lastChild);
	    }
	    var iots = ["TermIout", "SmartClima", "NewSun", "ItsRainingIot"];
	    for(i = 0; i < iots.length; i++){
			const novoLi1 = document.createElement('li');
			novoLi1.className = 'list-group-item';
			novoLi1.append(iots[i]);
			const novoSpan1 = document.createElement('span');
			novoSpan1.className = 'glyphicon glyphicon-signal';
			novoSpan1.style = 'float:right';
			novoLi1.appendChild(novoSpan1);
			devices.appendChild(novoLi1);
		}
	});

	nul.addEventListener('click', () =>{
	while (devices.hasChildNodes()) {
      devices.removeChild(devices.lastChild);
    }
	});

	cat.addEventListener('click', () =>{
	while (devices.hasChildNodes()) {
      devices.removeChild(devices.lastChild);
    }
	});

	seg.addEventListener('click', () =>{
		while (devices.hasChildNodes()) {
	      devices.removeChild(devices.lastChild);
	    }
	    var iots = ["SmartLocker", "SecurIot", "Calls", "CallingHelp"];
	    for(i = 0; i < iots.length; i++){
			const novoLi1 = document.createElement('li');
			novoLi1.className = 'list-group-item';
			novoLi1.append(iots[i]);
			const novoSpan1 = document.createElement('span');
			novoSpan1.className = 'glyphicon glyphicon-signal';
			novoSpan1.style = 'float:right';
			novoLi1.appendChild(novoSpan1);
			devices.appendChild(novoLi1);
		}
	});

	laz.addEventListener('click', () =>{
		while (devices.hasChildNodes()) {
	      devices.removeChild(devices.lastChild);
	    }
	    var iots = ["Iot-31", "Dispositivo-243", "Iot-2-394", "Dispositivo-3"];
	    for(i = 0; i < iots.length; i++){
			const novoLi1 = document.createElement('li');
			novoLi1.className = 'list-group-item';
			novoLi1.append(iots[i]);
			const novoSpan1 = document.createElement('span');
			novoSpan1.className = 'glyphicon glyphicon-signal';
			novoSpan1.style = 'float:right';
			novoLi1.appendChild(novoSpan1);
			devices.appendChild(novoLi1);
		}
	});

	lim.addEventListener('click', () =>{
		while (devices.hasChildNodes()) {
	      devices.removeChild(devices.lastChild);
	    }
	    var iots = ["SmartClean", "CleaningHome", "Odorizador-Iot", "Soliot-39"];
	    for(i = 0; i < iots.length; i++){
			const novoLi1 = document.createElement('li');
			novoLi1.className = 'list-group-item';
			novoLi1.append(iots[i]);
			const novoSpan1 = document.createElement('span');
			novoSpan1.className = 'glyphicon glyphicon-signal';
			novoSpan1.style = 'float:right';
			novoLi1.appendChild(novoSpan1);
			devices.appendChild(novoLi1);
		}
	});

	out.addEventListener('click', () =>{
		while (devices.hasChildNodes()) {
	      devices.removeChild(devices.lastChild);
	    }
	    var iots = ["Iot-22", "Iot-123", "Iot-109", "Iot-13"];
	    for(i = 0; i < iots.length; i++){
			const novoLi1 = document.createElement('li');
			novoLi1.className = 'list-group-item';
			novoLi1.append(iots[i]);
			const novoSpan1 = document.createElement('span');
			novoSpan1.className = 'glyphicon glyphicon-signal';
			novoSpan1.style = 'float:right';
			novoLi1.appendChild(novoSpan1);
			devices.appendChild(novoLi1);
		}
	});
});
