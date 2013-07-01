var Cell = (function(){
	return function(x,y){
		this.x = x;
		this.y = y;
		this.isLife = true;
	}

})();


var Board = (function(){
	return function(height,width){

		var height = 5;
		var width = 5;

		var arrayCell = new Array();
		var _grid = new Array(height);

		var fillGrid = function(){

			for (var i = 0; i < this.height; i++) {
				_grid[i] = new Array(width);
				for (var ind = 0; ind < this.width; ind++) {
					_grid[i][ind] = null;
				}
			}
		}


		var fillLiveCell = function(){
			for (var i = 0; i < height; i++) {
				for (var j = 0; j < width; j++) {
					if(_grid[i][j]!=null )	
						arrayCell.push( _grid[i][j]);
				};
			};
			/*console.log(_grid[1][1]);
			arrayCell[1][1] = 0;			
			console.log(_grid[1][1])*/
		}

		var fillCell = function(){
			
			for (var i = 0; i < height; i++) {
				_grid[i] = new Array(width);
				for (var ind = 0; ind < width; ind++) {
					_grid[i][ind] = null;
				}
			}
			for (var i = 0; i < 10; i++) {
				var h = Math.floor((Math.random()*height-1));
				var w = Math.floor((Math.random()*width-1));
				if(h<=0) h = 1;
				if(w<=0) w = 1;
				_grid[w][h] = new Cell(w,h);

				
			};
			fillLiveCell();
		}

		this.drawBoard = function(){

			fillGrid();
			fillCell();
			this.iterate();
		}


		this.viewNextyGenera = function(){


			for (var i = 0; i < arrayCell.length; i++) {
				var x =arrayCell[i].x;
				var y =arrayCell[i].y;
				var neighborsLive = 0;
				var neighborsUnLive = 0;
				if(arrayCell[i].isLife) {
					if(_grid[x+1][y]!=null&&_grid[x+1][y].isLife)
						neighborsLive++;
					if(_grid[x+1][y+1]!=null&&_grid[x+1][y+1].isLife)
						neighborsLive++;
					if(_grid[x+1][y-1]!=null&&_grid[x+1][y-1].isLife)
						neighborsLive++;
					if(_grid[x][y+1]!=null&&_grid[x][y+1].isLife)
						neighborsLive++;
					if(_grid[x][y-1]!=null&&_grid[x][y-1].isLife)
						neighborsLive++;
					if(_grid[x-1][y]!=null&&_grid[x-1][y].isLife)
						neighborsLive++;	
					if(_grid[x-1][y+1]!=null&&_grid[x-1][y+1].isLife)
						neighborsLive++;
					if(_grid[x-1][y-1]!=null&&_grid[x-1][y-1].isLife)
						neighborsLive++;
					if(neighborsLive<2||neighborsLive>3)
						arrayCell[i].isLife = false;
				}
				
			};

			this.iterate();
			arrayCell = new Array();
			fillLiveCell();
		}

		this.iterate = function(){
			var str = '';
			for (var i = 0; i < height; i++) {
				
				for (var j = 0; j < width; j++) {

					//console.log( _grid[i][j]);
					if(_grid[i][j] != null) {
						
						if(_grid[i][j].isLife)
							str +='1';
						else
							str +='0';
					}
					else 
						str += 'N';
				};
				console.log(str);
				str = '';
			};
		}

	};
})();


