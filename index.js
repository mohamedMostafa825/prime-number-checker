function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let index = 2; index * index <= num; index++) {
        if(num % index == 0) {
            return false;
        }
    }
    return true;
}

module.exports = {isPrime};
