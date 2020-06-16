def first_anagram?(str_1, str_2)
    letters = str_1.split("")
    perms = letters.permutation(5).to_a
    perms.any?{|perm| perm == str_2}
end


def second_anagram?(str_1, str_2)
    str_1.each_char do |char|
        found_index = str_2.index(char)
        return false if !found_index
        str_2.slice!(found_index)
    end

    str_2.empty?
end


def third_anagram?(str_1, str_2)
    str_1.split("").sort == str_2.split("").sort
end


def fourth_anagram?(str_1, str_2)
    counts_1 = Hash.new(0)
    counts_2 = Hash.new(0)

    str_1.each_char {|char| counts_1[char] += 1}
    str_2.each_char {|char| counts_2[char] += 1}

    counts_1 == counts_2
end

