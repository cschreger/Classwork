require_relative 'modules'
require_relative 'pieces'

class Queen < Piece
    include Slideable
    Symbol = "♕"
    def move_dirs
        (horizontal_dirs + diagonal_dirs).flatten #array of all initial directions this piece can move
    end

end

class Rook < Piece
    include Slideable
    Symbol = "♖"
    def move_dirs
        horizontal_dirs
    end
end

class Bishop < Piece
    include Slideable
    Symbol = "♗"
    def move_dirs
        diagonal_dirs
    end
end