class ProgressCircleCtrl {
  constructor($scope) {
  	this.total = 4;
  	this.score = parseInt(this.score);
  	this.percent = this.percentage();
  	this.color = this.color();
  }

  percentage(){
  	if(this.score == 0){
  		return 0;
  	};

  	return (this.score / this.total) * 100; 
  }

  color(){
  	if(this.percent == 0){
  		return "";
  	}else if(this.percent <= 25){
  		return "orange";
  	}else{
  		return "green";
  	}
  }
}

export default {
  bindings: { score: '=' },
  templateUrl: 'shared/progress-circle/progress-circle.component.html',
  controller: ProgressCircleCtrl
}