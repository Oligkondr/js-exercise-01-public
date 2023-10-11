const isHappyTicket = (ticket) => {
    let count = 0
    let firstHalf = 0
    let secondHalf = 0
    if (ticket.length % 2 !== 0) {
        return 'Неправильный номер билета!'
    }
    console.log(ticket.length / 2)
    console.log('----------')
    while (count < ticket.length) {
        console.log('count ' + count, ticket[count])
        if (count < ticket.length / 2) {
            firstHalf += Number(ticket[count])
            count++
        }else {
            secondHalf += Number(ticket[count])
            count++
        }
        console.log('****')
        console.log(firstHalf)
        console.log(secondHalf)
        console.log('****')
    }
    console.log('----------')
    console.log(firstHalf)
    console.log(secondHalf)
    return firstHalf === secondHalf
};

console.log(isHappyTicket('00'))

export { isHappyTicket };