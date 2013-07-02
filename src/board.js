var Cell = (function(){
	return function(x,y){
		this.x = x;
		this.y = y;
		this.isLife = true;
	}

})();

var Board = (function(){
	return function(height,width){

		var height = height || 6;
		var width = width || 5;

		var arrayCell = new Array();
		var _grid = new Array(width);

		for (var i = 0; i < width; i++)
			_grid[i] = new Array(height);

		this.grid = function(){
			return _grid;
		};

		var fillLiveCell = function(){
			
			for (var w = 0; w < width; w++) {
					for (var h = 0; h < height; h++) {
				for (var w = 0; w < width; w++) {
					if(_grid[w][h] )
						arrayCell.push( new Cell(w, h));
				}
			}
		}

		var updateBoard= function(){
			for (var i = 0; i < arrayCell.length; i++) {
				var x = arrayCell[i].x;
				var y = arrayCell[i].y;

				_grid[x][y].isLife = arrayCell[i].isLife;
			}
		}

		var fillCell = function(){

			for (var i = 0; i < 10; i++) {
				var h = Math.floor((Math.random()*height-1));
				var w = Math.floor((Math.random()*width-1));
				if(h<=0) h = 1;
				if(w<=0) w = 1;
				_grid[w][h] = new Cell(w,h);
			};
			
		}

		/*this.putCellOnGrind = function(h,w){
			
		}*/

		this.drawBoard = function(grid){
			if(!grid)
				fillCell();
			fillLiveCell();
			this.iterate();
		}



		this.viewNextGeneration = function(){
			for (var i = 0; i < arrayCell.length; i++) {
				var x =arrayCell[i].x;
				var y =arrayCell[i].y;
				var neighborsLive = 0;
				var neighborsUnLive = 0;
				if(arrayCell[i].isLife) {
					
						if(_grid[x+1][y] &&_grid[x+1][y].isLife)
							neighborsLive++;
						if(_grid[x+1][y+1] && _grid[x+1][y+1].isLife)
							neighborsLive++;
						if(_grid[x+1][y-1] && _grid[x+1][y-1].isLife)
							neighborsLive++;
						if(_grid[x][y+1] && _grid[x][y+1].isLife)
							neighborsLive++;
						if(_grid[x][y-1] && _grid[x][y-1].isLife)
							neighborsLive++;
						if(_grid[x-1][y] && _grid[x-1][y].isLife)
							neighborsLive++;
						if(_grid[x-1][y+1] && _grid[x-1][y+1].isLife)
							neighborsLive++;
						if(_grid[x-1][y-1] && _grid[x-1][y-1].isLife)
							neighborsLive++;
						if(neighborsLive<2||neighborsLive>3){						
								arrayCell[i].isLife = false;
						}
						if(!_grid[x][y].isLife){							
							if(neighborsLive==3)
								arrayCell[i].isLife = true;
							else
								arrayCell[i].isLife = false;
						}																	
				}
			};
			updateBoard();
			this.iterate();
			arrayCell = new Array();
			fillLiveCell();
		}

		this.iterate = function(){
			var str = '';
			

			for (var w = 0; w < width; w++) {
				for (var h = 0; h < height; h++) {
					if(_grid[w][h] != null) {

						if(_grid[w][h].isLife)
							str +=' 1 ';
						else
							str +=' 0 ';
					}
					else
						str += ' N ';
				};
				console.log(str);
				str = '';
			};
		}

	};
})();

var g = new Board();