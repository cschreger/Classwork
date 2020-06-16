def my_min(arr)
    min = arr.first
    arr.each {|ele| min = ele if ele < min}
    min
end


def sub_sum(arr)
    largest = arr[0] + arr[1]

    (0...arr.length - 1).each do |i|
        current = arr[i] + arr[i+1]
        largest = current if current > largest
    end

    largest
end

