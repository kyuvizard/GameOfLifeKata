
describe("Game of life kata",function (){

    var board;
    var cell;
    beforeEach(function(){      
        board = new Board(6,6);
        cell = new Cell();
    
    });

		it("the board should be defined",
			function(){
        expect(board).toBeDefined();
		});
    
    it("the cell should be defined",
      function(){
        expect(cell).toBeDefined();
    });    

    it("When live cell fewer than two live neighbours dies",
      function(){
        
    });

});
