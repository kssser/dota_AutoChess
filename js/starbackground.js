// 星空背景
function starBackground(){
	var container=document.getElementById('container'),
		w=container.offsetWidth,
		h=container.offsetHeight;
	var canvas=document.getElementById('myCanvas'),
		ctx=canvas.getContext('2d');
	canvas.width=w;
	canvas.height=h;

	var canvas2=document.createElement('canvas'),
		ctx2=canvas2.getContext('2d');

	var hue=217;
	canvas2.width = 100;
	canvas2.height = 100;
	var half = canvas2.width / 2,
	    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
	gradient2.addColorStop(0.025, '#CCC');
	gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
	gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
	gradient2.addColorStop(1, 'transparent');

	ctx2.fillStyle = gradient2;
	ctx2.beginPath();
	ctx2.arc(half, half, half, 0, Math.PI * 2);
	ctx2.fill();

	// 向上取整随机数(a,b]
	function getRandom(a,b){
		if(a!==undefined){
			var r=Math.random();
			if(b===undefined)
				return Math.ceil(a*r);
			else
				return a+Math.ceil((b-a)*r);
		}else
			return 0;
	}

	var maxRadius=Math.sqrt(w*w+h*h);

	function Star(){
		var self=this;
		this.orbitRadius=getRandom(maxRadius);
		this.radius=getRandom(this.orbitRadius/10);
		this.center={
			x:w/2,
			y:h/2
		};
		this.timePassed=getRandom(maxStars);
		// this.speed=getRandom();
		this.speed=getRandom(10)/2000;
		this.alpha=getRandom(2,10)/10;
	}
	Star.prototype.move=function(){
		var x=Math.cos(this.timePassed)*this.orbitRadius+this.center.x,
			y=Math.sin(this.timePassed)*this.orbitRadius+this.center.y;
		// ctx.globalAlpha=this.alpha;
		ctx.drawImage(canvas2,x-this.radius,y-this.radius,this.radius,this.radius);
		this.timePassed+=this.speed;
	};

	var stars=[],
		maxStars=600;
	for(var i=0;i<maxStars;i++)
		stars.push(new Star());

	function animation(){
		
		ctx.fillStyle='hsla('+hue+',64%,6%,2)';
		ctx.fillRect(0,0,w,h);

		stars.forEach(function(item){
			item.move();
		});

		window.requestAnimationFrame(animation);
	}
	animation();
}