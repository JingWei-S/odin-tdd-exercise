const analyzeArray = (arr) => {
    const arrLength = arr.length;
    const arrSum = arr.reduce((a, b) => a + b, 0);
    return {
        average: arrSum / arrLength,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arrLength
    }
};

module.exports = analyzeArray;