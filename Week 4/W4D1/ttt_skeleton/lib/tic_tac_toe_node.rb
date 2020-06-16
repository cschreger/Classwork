require_relative 'tic_tac_toe'
require "byebug"
class TicTacToeNode
  attr_accessor :board, :next_mover_mark, :prev_move_pos

  MARKS = [:x, :o]

  def initialize(board, next_mover_mark = MARKS[0], prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    if board.over?
      return board.won? && board.winner != evaluator
    elsif next_mover_mark == evaluator
      children.all?{|child|child.losing_node?(evaluator)}
    else
      children.any?{|child|child.losing_node?(evaluator)}
    end
  end

  def winning_node?(evaluator)
    if board.over?
      return board.won? && board.winner == evaluator
    elsif next_mover_mark == evaluator
      children.any?{|child|child.winning_node?(evaluator)}
    else
      children.all?{|child|child.winning_node?(evaluator)}
    end
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    moves = []
    new_mover_mark = :x
    @board.rows.each_with_index do |row, idx|
      row.each_with_index do |col, jdx|
        if @board.empty?([idx, jdx])
          if next_mover_mark == :x
            new_mover_mark = :o
          else
            new_mover_mark = :x
          end
          @prev_move_pos = [idx, jdx]
          current_board = @board.dup
          pos = [idx,jdx]
          current_board[pos] = next_mover_mark
          node = TicTacToeNode.new(current_board, new_mover_mark, @prev_move_pos)
          moves << node
        end
      end
    end
    moves
  end
end
