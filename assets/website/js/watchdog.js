(function(){
		/* This resource is used to check the status of Energized */
		var c=document.getElementById('adstatus');
		var i=document.createElement('img');
		i.src='https://watchdog.energized.pro/ep.png?_='+Date.now();
		i.onload=function(){c.innerHTML = "<span class='text-danger'><i class='lar la-times-circle'></i> Inactive</span>";};
		i.onerror=function(){c.innerHTML = "<span class='text-success'><i class='las la-shield-alt'></i> Active</span>";};
		})();