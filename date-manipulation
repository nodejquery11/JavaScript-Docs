# Programming

var splitTime = function(arg) {
  var splitAmPm = arg.split(' ');
  var splitTimeVal = splitAmPm[0].split(':');
  return splitTimeVal;
}

function duration(startVal, endval){
  var startTime = splitTime(startVal);
  var endTime = splitTime(endval);
    if (endTime[0] === startTime[0] && endTime[1] < startTime[1]) {
    	console.log('Not validate time.');
      var finalTime = 'None';
    }
    if (endTime[0] === startTime[0] && endTime[1] > startTime[1]) {
    	var mintVal = endTime[1] - startTime[1];
      var hourVal = endTime[0] - startTime[0];
      var finalTime = hourVal +':'+ mintVal;
    }
  	if(endTime[1] < startTime[1] && endTime[0] > startTime[0]) {
    	 var mintVal = (60 - startTime[1]) + parseInt(endTime[1], 10);
       var hourVal = (endTime[0] > startTime[0]) ? endTime[0] - 1 : endTime[0];
       var finalTime = (hourVal - startTime[0]) +':'+ mintVal;
    }
    if(endTime[1] > startTime[1] && endTime[0] > startTime[0]) {
    	var mintVal = endTime[1] - startTime[1];
      var hourVal = endTime[0] - startTime[0];
      var finalTime = hourVal +':'+ mintVal;
    }
  return finalTime;
}
console.log('time =>', duration('10:30 AM', '12:20 AM'));
