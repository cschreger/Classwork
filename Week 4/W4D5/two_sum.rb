#O(n^2) time complexity

def bad_two_sum?(arr, target)
    pairs = []

    arr.each_index do |i|
        (i+1...arr.length).each do |i2|
            return true if arr[i] + arr[i2] == target
        end
    end
    false
end


def okay_two_sum?(arr, target)
    sorted = arr.sort
    min = 0
    max = sorted.length - 1

    while min < max
        if sorted[min] + sorted[max] == target
            return true
        else
            sorted[min] + sorted[max] < target ? min += 1 : max += 1
        end
    end
    false
end



def two_sum?(arr, target)
    nums_hash = {}

    arr.each do |ele|
        return true if nums_hash[target - ele]
        nums_hash[ele] == true
    end

    false
end

arr = [0, 1, 5, 7]
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false