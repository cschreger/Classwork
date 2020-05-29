class PolyTreeNode
    attr_reader :parent, :children, :value

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(value)
        @parent.children.delete(self) if @parent != nil
        @parent = value
        @parent.children << self unless value.nil?
    end

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        child_node.parent = nil 
        raise if !@children.include?(child_node)
    end

    def dfs(target_value)
        return self if target_value == self.value
        self.children.each do |child|
            result = child.dfs(target_value)
            return result if !result.nil?
        end
        nil
    end

    def bfs(target_value)
        queue = [self]
        
        while !queue.empty?
            first = queue.shift
            return first if first.value == target_value
            first.children.each do |child|
                queue << child
            end
        end 
        nil
    end

end