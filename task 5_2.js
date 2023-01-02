

function substrCount(input, needle, offset, length) {

    let strPart = input.slice(offset, length);
    let result = strPart.toLowerCase().split(needle.toLowerCase()).length - 1;
    console.log(result);
    return result;
}
substrCount('Good Golly Miss Molly', 'll', 7, 25);

