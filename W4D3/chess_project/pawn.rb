require_relative 'pieces'
require_relative 'modules'
require 'byebug'
class Pawn < Piece
include Steppable
Symbol = "♙"
#piece diagonal, at start row, which side
def move_dirs
    # debugger
    p forward_steps
    p side_attacks
    forward_steps + side_attacks
end

private
def at_start_row?
    self.position[0] == 1 || self.position[0] == 6      
end

def forward_dir #which direction are we headed
   if color == "white"
    return -1
   else
    return 1
   end
end

def forward_steps 
    if forward_dir == -1 && at_start_row?
        return [[-1,0],[-2,0]]
    elsif forward_dir == 1 && at_start_row?
        return [[1,0],[2,0]]
    elsif forward_dir == -1 && !at_start_row?
        return [[-1,0]]
    else
        return [[1,0]]
    end
        
end

def side_attacks
    current_row = self.position[0]
    current_col = self.position[1]
    if (forward_dir == -1) && !board[current_row - 1][current_col + 1].is_a?(NullPiece)
        [-1,1]
    elsif (forward_dir == -1) && !board[current_row - 1][current_col + -1].is_a?(NullPiece)
        [-1,-1]
    elsif (forward_dir == 1) && !board[current_row + 1][current_col + 1].is_a?(NullPiece)
        [1,1]
    elsif (forward_dir == 1) && !board[current_row + 1][current_col - 1].is_a?(NullPiece)
        [1,-1]
    else
        []
    end
end

end