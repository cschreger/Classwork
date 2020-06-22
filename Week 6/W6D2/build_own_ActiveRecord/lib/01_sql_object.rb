require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @column_names unless @column_names.nil?

    @column_names = DBConnection.execute2(<<-SQL)
    
      SELECT
        *
      FROM
        #{table_name}
      LIMIT
       1
      SQL
      .first

      @column_names.map!{|column| column.to_sym}
  end

  def self.finalize!
    columns.each do |column|
      define_method(column) do
        attributes[column] ||= nil
      end

      define_method("#{column}=") do |value|
        attributes[column] = value
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    if @table_name == nil
      self.to_s.tableize
    else
      @table_name 
    end
  end

  def self.all
    results = 
      DBConnection.execute(<<-SQL)
        SELECT *
        FROM #{table_name}
      SQL
    parse_all(results)
  end

  def self.parse_all(results)
    results.map { |result| self.new(result) }
  end

  def self.find(id)
    
  end

  def initialize(params = {})
    params.each do |k,v|
      k.to_sym
      raise "unknown attribute '#{k}'" unless self.class.columns.include?(k)
      self.send("#{k.to_sym}=", v)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
  end

  def insert
    
  end

  def update
    
   
  end

  def save
    
  end
end
