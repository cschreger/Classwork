require_relative 'modules'
require_relative 'pieces'

class Knight < Piece
    include Steppable
    Symbol = "♘"
    def move_dirs
        return [[2,1], [-2,1], [2,-1], [-2, -1], [1,2], [-1,2], [1,-2], [-1,-2]] 
    end
end

class King < Piece
    include Steppable
    Symbol = "♔"
    def move_dirs
       [[1,0], [-1,0], [0,1], [0,-1], [1,1], [1,-1], [-1,1], [-1,-1]]
    end 
end


