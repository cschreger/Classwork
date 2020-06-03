require "byebug"

module Slideable

    def horizontal_dirs  
        [[1,0], [-1,0], [0,1], [0,-1]]
    end

    def diagonal_dirs 
        [[1,1], [1,-1], [-1,1], [-1,-1]]
    end

    def moves
        possible_moves = []
        move_dirs.each {|dir| possible_moves += grow_unblocked_moves_in_dir(dir)}
        possible_moves
    end


    private

    @@HORIZONTAL_DIRS = [[1,0], [-1,0], [0,1], [0,-1]]
    @@DIAGONAL_DIRS = [[1,1], [1,-1], [-1,1], [-1,-1]]

    def grow_unblocked_moves_in_dir(direction)
        dx, dy = direction
        possible_moves = []

        until #the position corresponds to invalid board pos (blocked/edge)
            dx += dx 
            dy += dy
            possible_moves << [dx,dy]
        end
        possible_moves
    end

end

module Steppable

    def moves #===> an array of offsets
        possibilities = []
        # debugger
        move_dirs.each do |dir|
            start = self.position
            target_row = start[0] + dir[0]
            target_col = start[1] + dir[1]
            # debugger
            if (target_row >= 0) && (target_col >= 0) && (target_row < 8) && (target_col < 8) && (self.color != board[target_row][target_col].color)  #And not landing on team piece
                possibilities << [target_row,target_col]
            end
        end
        possibilities
    end

private
    def move_diffs

    end

end