require_relative 'tic_tac_toe_node'

class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    node = TicTacToeNode.new(Board.new,mark)
    moves = []

    children = node.children
    children.each do |child|
      return child.prev_move_pos if child.winning_node?(mark)
      moves << child.prev_move_pos unless child.losing_node?(mark)
    end

    if moves.empty?
      raise "loserrr" 
    else
      return moves
    end
  end

end


if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end
