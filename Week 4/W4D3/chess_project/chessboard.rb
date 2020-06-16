require "byebug"
require_relative "pieces"

class Board
attr_accessor :board
    def initialize
        @board = Array.new(8)
        setup_board
    end

    def setup_board
        board[0] = [
            Rook.new("black", board, [0,0]),
            Knight.new("black", board, [0,1]),
            Bishop.new("black", board, [0,2]),
            Queen.new("black", board, [0,3]),
            King.new("black", board, [0,4]),
            Bishop.new("black", board, [0,5]),
            Knight.new("black", board, [0,6]),            
            Rook.new("black", board, [0,7])
        ]

        board[1] = Array.new(8) {|idx| Pawn.new("black", board, [1, idx])}

        board[2] = Array.new(8) {|idx| NullPiece.instance}
        board[3] = Array.new(8) {|idx| NullPiece.instance}
        board[4] = Array.new(8) {|idx| NullPiece.instance}
        board[5] = Array.new(8) {|idx| NullPiece.instance}

        board[6] = Array.new(8) {|idx| Pawn.new("white", board, [6, idx])}

        board[7] = [
            Rook.new("white", board, [7,0]),
            Knight.new("white", board, [7,1]),
            Bishop.new("white", board, [7,2]),
            Queen.new("white", board, [7,3]),
            King.new("white", board, [7,4]),
            Bishop.new("white", board, [7,5]),
            Knight.new("white", board, [7,6]),
            Rook.new("white", board, [7,7])
        ]

       @board = board
    end

    def move_piece(start_pos, end_pos) #[1,1]
    #    debugger
       raise "No piece!" if @board[start_pos[0]][start_pos[1]].is_a?(NullPiece)
       raise "Position occupied!" if !board[end_pos[0]][end_pos[1]].is_a?(NullPiece)

       moving_piece = @board[start_pos[0]][start_pos[1]]
       if moving_piece.moves.include?(end_pos) #TEST THIS
        @board[start_pos[0]][start_pos[1]] = NullPiece.instance
        @board[end_pos[0]][end_pos[1]] = moving_piece
       else
        raise "INVALID MOVE"
       end
    end

    def [](position) 
        @board[position.first][position.last]
    end 

    def []=(pos,mark)
        @board[position.first][position.last] = mark
    end

end
