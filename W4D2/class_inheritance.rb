class Employee 
    attr_accessor :salary

    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end

    def bonus(multiplier)
        bonus = salary * multiplier
    end

end


class Manager < Employee
    attr_accessor :subordinates

    def initialize(name, title, salary, boss)
        super(name, title, salary, boss)
        @subordinates = []
    end


    def bonus(multiplier)
        emp_array = self.employee_generator
        total = 0
        (emp_array.inject(0) {|acc, emp| acc + emp.salary}) * multiplier
    end


    def employee_generator
        emps = []
        return emps if self.subordinates.empty?
        if self.subordinates.any?{|sub| sub.class == Manager}
            self.subordinates.each do |sub|
                if sub.is_a?(Manager)
                    emps << sub
                    emps += sub.employee_generator
                else 
                    emps << sub
                end
            end
        else
            return self.subordinates
        end
        emps
    end



end