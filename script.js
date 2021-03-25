function drawCircle(x0, y0, r, parent, color){
  var j = 0;
	var hours = new Array();
	hours = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, '']
	for(var i = 0; i <= 360; i += 6){
		var point = document.createElement('div');
		point.style.position = 'absolute';
		point.style.сolor = color;
		point.style.top = y0 + r*Math.sin(i * Math.PI  / 180);
		point.style.left = x0 + r*Math.cos(i * Math.PI  / 180);
		point.style.display = 'inline-block';
		if(i%5 == 0){
			point.innerHTML = hours[j];
			j++;		
		} else {
				point.innerHTML = '.';
		}
		parent.appendChild(point);
		parent.style.color = color;
	}
	drawArrows(x0, y0, r, parent);
}

function drawArrows(x0, y0, r, parent){
	
	for(var i = 0; i <= r - 20; i+= 10){
		var time = new Date();
		var point = document.createElement('div');
		point.id = 'second' + i;
		point.style.position = 'absolute';
		point.style.display = ' inline-block';
		point.innerHTML = '.';
		parent.appendChild(point);
		point.style.top = y0 - i;
		point.style.left = x0;
	}
	setInterval('moveSecond(' + x0 + ',' + y0 + ',' + r + ')', 0);
	setInterval('digitalClocks()', 0);
		
	for(var i = 0; i <= r - 30; i+= 2){
		var time = new Date();
		var point = document.createElement('div');
		point.id = 'minute' + i;
		point.style.position = 'absolute';
		point.style.display = ' inline-block';
		point.innerHTML = '.';
		parent.appendChild(point);
		point.style.top = y0 - i;
		point.style.left = x0;
	}
	moveMinute(x0, y0, r);
 
	for(var i = 0; i <= r/2; i += 2){
		var time = new Date();
		var point = document.createElement('div');
		point.id = 'hour' + i;
		point.style.position = 'absolute';
		point.style.display = ' inline-block';
		point.innerHTML = '.';
		point.style.top = y0 - i;
		point.style.left = x0;
		parent.appendChild(point);
	}
	moveHour(x0, y0, r);
}

function moveSecond(x0, y0, r){
	var time = new Date();
	for(var i = 0; i <= r - 20; i += 10){
		var point = document.getElementById('second' + i);
		point.style.top = x0 + i*Math.cos(-6*(time.getSeconds() + 30)*Math.PI/180);
		point.style.left = y0 + i*Math.sin(-6*(time.getSeconds() + 30)*Math.PI/180);
	}
	if(time.getSeconds() == 0){moveMinute(x0, y0, r)}
}

function moveMinute(x0, y0, r){
	var time = new Date();
	for(var i = 0; i <= r - 30; i += 2){
		var point = document.getElementById('minute' + i);
		point.style.top = y0 + i*Math.cos(-6*(time.getMinutes() + 30)*Math.PI/180);
		point.style.left = x0 + i*Math.sin(-6*(time.getMinutes() + 30)*Math.PI/180);
	}
	if(time.getMinutes()%12 == 0){moveHour(x0, y0, r)}
}

function moveHour(x0, y0, r){
	var time = new Date();
	var quinta = Math.PI/30;
	for(var i = 0; i <= r/2; i += 2){
		var point = document.getElementById('hour' + i);
		if(time.getHours() == 0){
			if(time.getMinutes() > 0 && time.getMinutes() <= 11){
				point.style.top = y0 + i*Math.cos(-30*(12 + 30)*Math.PI/180);
				point.style.left = x0 + i*Math.sin(-30*(12 + 30)*Math.PI/180);
			} else if(time.getMinutes() >= 12 && time.getMinutes() <= 23){
				point.style.top = y0 + i*Math.cos(-30*(12 + 30)*Math.PI/180 - quinta);
				point.style.left = x0 + i*Math.sin(-30*(12 + 30)*Math.PI/180 - quinta);
			} else if(time.getMinutes() >= 24 && time.getMinutes() <= 35){
				point.style.top = y0 + i*Math.cos(-30*(12 + 30)*Math.PI/180 - (2*quinta));
				point.style.left = x0 + i*Math.sin(-30*(12 + 30)*Math.PI/180 - (2*quinta));
			}  else if(time.getMinutes() >= 36 && time.getMinutes() <= 47){
				point.style.top = y0 + i*Math.cos(-30*(12 + 30)*Math.PI/180 - (3*quinta));
				point.style.left = x0 + i*Math.sin(-30*(12 + 30)*Math.PI/180 - (3*quinta));
			} else if(time.getMinutes() >= 48  && time.getMinutes() <= 59){
				point.style.top = y0 + i*Math.cos(-30*(12 + 30)*Math.PI/180 - (4*quinta));
				point.style.left = x0 + i*Math.sin(-30*(12 + 30)*Math.PI/180 - (4*quinta));
			} 	
		} else if(time.getMinutes() >= 0 && time.getMinutes() <= 11){
			point.style.top = y0 + i*Math.cos(-30*(time.getHours() + 30)*Math.PI/180);
			point.style.left = x0 + i*Math.sin(-30*(time.getHours() + 30)*Math.PI/180);
		} else if(time.getMinutes() >= 12 && time.getMinutes() <= 23){
			point.style.top = y0 + i*Math.cos(-30*(time.getHours() + 30)*Math.PI/180 - quinta);
			point.style.left = x0 + i*Math.sin(-30*(time.getHours() + 30)*Math.PI/180 - quinta);
		} else if(time.getMinutes() >= 24 && time.getMinutes() <= 35){
			point.style.top = y0 + i*Math.cos(-30*(time.getHours() + 30)*Math.PI/180 - (2*quinta));
			point.style.left = x0 + i*Math.sin(-30*(time.getHours() + 30)*Math.PI/180 - (2*quinta));
		}  else if(time.getMinutes() >= 36 && time.getMinutes() <= 47){
			point.style.top = y0 + i*Math.cos(-30*(time.getHours() + 30)*Math.PI/180 - (3*quinta));
			point.style.left = x0 + i*Math.sin(-30*(time.getHours() + 30)*Math.PI/180 - (3*quinta));
		} else if(time.getMinutes() >= 48  && time.getMinutes() <= 59){
			point.style.top = y0 + i*Math.cos(-30*(time.getHours() + 30)*Math.PI/180 - (4*quinta));
			point.style.left = x0 + i*Math.sin(-30*(time.getHours() + 30)*Math.PI/180 - (4*quinta));
		} 
	}
}

function bgchange(event){
	if(event.keyCode=='32'){
		if(document.body.style.backgroundColor == 'black'){
			document.body.style.backgroundColor = '';
			document.body.style.backgroundImage = 'url("1.jpg")';
			document.body.style.backgroundSize = 'cover';			
		} else if(document.body.style.backgroundImage == 'url("1.jpg")'){
			document.body.style.backgroundColor = '';
			document.body.style.backgroundImage = 'url(2.jpg)';
			document.body.style.backgroundSize = 'cover';
		} else if(document.body.style.backgroundImage == 'url("2.jpg")'){
			document.body.style.backgroundColor = '';
			document.body.style.backgroundImage = 'url(3.jpg)';
			document.body.style.backgroundSize = 'cover';
		} else {
			document.body.style.backgroundColor = 'black';
			document.body.style.backgroundImage = '';
			document.body.style.backgroundSize = '';
		}
	}
}

function digitalClocks(){
	var time = new Date();
	var hh, mm ,ss, dd, momo, yy
	var dd = time.getDay();
	var mm = time.getMonth();
	var yy = '' + time.getYear();
	yy = yy.substr(-2);
	
	if(time.getSeconds() < 10){
		ss = '0' + time.getSeconds();
	} else {
		ss = time.getSeconds();
	}
	
	if(time.getMinutes() < 10){
		mm = '0' + time.getMinutes();
	} else {
		mm = time.getMinutes();
	}
	
	if(time.getHours() < 10){
		hh = '0' + time.getHours();
	} else {
		hh = time.getHours();
	} 
	
	if(time.getDay() < 10){
		dd = '0' + time.getDay();
	} else {
		dd = time.getSeconds();
	}
	
	if(time.getMonth() < 10){
		momo = '0' + time.getMonth();
	} else {
		momo = time.getMonth();
	}
	
	document.getElementsByTagName('div')[0].innerHTML = hh + ':' + mm + ':' + ss + '<br/><span style =\'font-size: 30; position: absolute; top: 60px; left:17px;  \'>'  + dd + ' . ' + momo + ' . ' + yy + '</span>';

}
