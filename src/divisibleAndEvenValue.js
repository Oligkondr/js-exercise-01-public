const isDivisibleBy5AndEven = (n) => {
    let ans
    let bool = n % 2 === 0 && n % 5 === 0 ? ans = true : ans = false
    return ans
};

export { isDivisibleBy5AndEven };