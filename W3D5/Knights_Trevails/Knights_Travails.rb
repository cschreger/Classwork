require_relative "00_tree_node"
require "byebug"
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
                # child.parent = first
                first.add_child(child)
                queue << child
            end
        end
        @root_node
    end

    def find_path(end_node)
        end_node = self.build_move_tree.bfs(end_node)
        # debugger
        trace_path_back(end_node)
    end

    def trace_path_back(end_node)
        result = []
        current = end_node
        while !current.parent.nil?
            result << current.value
            current = current.parent
        end
        [root_node.value] + (result.reverse)
    end

    kpf = KnightPathFinder.new([0,0])
    p kpf.find_path([6,2])
    # p kpf.trace_path_back([7,6])
    
end






