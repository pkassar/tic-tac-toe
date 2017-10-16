describe('Game', function(){
  var game;

  beforeEach(function(done){
    game = new Game();
    done();
  })

  describe('starting a game', function(){

    it('has a game board array', function(){
      expect(game.board).toEqual(['', '', '', '', '', '', '', '', ''])
    })

    it('starts with player O', function(){
      expect(game.turn).toEqual('O')
    })
  })
})
