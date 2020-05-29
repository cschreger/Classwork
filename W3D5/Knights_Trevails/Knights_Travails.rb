require_relative "00_tree_node"

class KnightPathFinder

    attr_accessor :root_node, :considered_positions

    def self.valid_moves(pos)
        row, col = pos  #[0,0], [4,4]
        result = []
        possible_moves = [[-2,-1],[-1,-2],[1,-2],[2,-1],[-2, 1],[-1, 2],[1, 2],[2, 1]]
        possible_moves.each do |sub_arr|
            if ((sub_arr[0] + row).between?(0,7)) && ((sub_arr[1] + col).between?(0,7))
                result << [sub_arr[0] + row, sub_arr[1] + col]
            end
        end
        result
    end

    def initialize(start_pos)
        @root_node = PolyTreeNode.new(start_pos)
        @considered_positions = [start_pos]
    end

    def new_move_positions(pos)
        result = []
        KnightPathFinder.valid_moves(pos).each {|move| result << move if !@considered_positions.include?(move)}
        @considered_positions += result
        return result
    end

    def build_move_tree
        queue = [@root_node]

        while !queue.empty?
            first = queue.shift

            new_move_positions(first.value).each do |move|
                child = PolyTreeNode.new(move)
                child.parent = first
                queue << child
            end
        end
        @root_node
    end
    
    # def bfs(target_value)
    #     queue = [self]
        
    #     while !queue.empty?
    #         first = queue.shift
    #         return first if first.value == target_value
    #         first.children.each do |child|
    #             queue << child
    #         end
    #     end 
    #     nil
    # end



end






