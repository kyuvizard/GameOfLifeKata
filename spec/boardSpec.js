
describe("Game of life kata",function (){

    var board;
    var cell;
    var grid;
    beforeEach(function(){      
        board = new Board(6,6);
        cell = new Cell();
        grid = board.grid();
        grid[1][1] = new Cell(1,1);//h,w
        grid[2][1] = new Cell(2,1);
        grid[2][1].isLife = false;
        grid[3][1] = new Cell(3,1);
        grid[4][1] = new Cell(4,1);
        grid[4][1].isLife = false;

        grid[2][2] = new Cell(2,2);
        grid[2][2].isLife = false;
        grid[3][2] = new Cell(3,2);

        grid[1][3] = new Cell(1,3);
        grid[1][3].isLife = false;
        grid[3][3] = new Cell(3,3);
        
        grid[2][4] = new Cell(2,4);        
        grid[3][4] = new Cell(3,4);
        grid[4][4] = new Cell(4,4);

    });

    it("the cell should be defined",
      function(){
        expect(cell).toBeDefined();

    });  

		it("the board should be defined",
			function(){
        expect(board).toBeDefined();
       
		});
    
    it("(by underpopulation)all live cell that fewer than two live neighbours should be dead",
      function(){        
        board.drawBoard(grid);
        console.log('underpopulation');
        board.viewNextGeneration();        
        expect(grid[3][1].isLife).toEqual(false);        
        expect(grid[1][1].isLife).toEqual(false);

    });

     it("(by overcrowding)all live cell that more than three live neighbours should be dead",
      function(){  
        console.log('');    
        board.drawBoard(grid);
        console.log('by overcrowding');
        board.viewNextGeneration();
        expect(grid[3][3].isLife).toEqual(false);
    });

    it("live cell with two or three live neighbours should still be alive",
      function(){  
        console.log('');    
        board.drawBoard(grid);
        console.log('by overcrowding');
        board.viewNextGeneration();
        expect(grid[3][4].isLife).toEqual(true);
        expect(grid[3][2].isLife).toEqual(true);
        expect(grid[4][4].isLife).toEqual(true);
        expect(grid[2][4].isLife).toEqual(true);
    });

    it("any dead cell with exactly three live neighbours should becomes a live cell",
      function(){  
        console.log('');    
        board.drawBoard(grid);
        console.log('by overcrowding');
        board.viewNextGeneration();
        expect(grid[2][1].isLife).toEqual(true);
        
    });
});
