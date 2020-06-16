require_relative "chessboard"
require 'singleton'

class Piece
attr_accessor :board, :position, :color

    def initialize(color, board, position) #[X,Y]
        @color = color
        @board = board
        @position = position
    end


end

class NullPiece < Piece
    include Singleton
    def initialize
    end
end