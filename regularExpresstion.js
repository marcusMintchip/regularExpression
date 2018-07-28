//classic first/last Name switcharoo regex replace example
let firstToLast = "Nick Jonas";
let getFirstAndLast = /(\w+) (\w+)/;
firstToLast.match(getFirstAndLast);//?
let lastCommaFirst = firstToLast.replace(getFirstAndLast,"$2,$1");//?
//capturing parentheses
let message = "David hosts devtips";
//add i to make the regex not case-sensitive
let host = message.match(/(daviD) hosts devtips/i)[1];//?
//captruing with alternation
let country = "美国";
//don't add i when using chinese,cause it's not case sensitive
let rightCountry = country.match(/美国|英国|巴西/);//?
//use case with captruing parentheses,lists thw new hosts from file
const scv = `Date,Host
2018-05-19,Marvin
2018-05-27,David
2018-06-03,MPJ`;
let dateAndHost = /^(\d{4}-\d{2}-\d{2}),(travis|mpj)$/i;
let newHostWhen = scv
    .split("\n")//?
    .filter(line  =>{
        return line.match(dateAndHost)//?
    })
    .map(line => line.replace(dateAndHost,"$2 hosted DevTips on $1"))
    .join(". ");
newHostWhen
//non-capturing parentheses
let input = "David hosts DevTips";
let inccorectInput = "Trump hosts White House";
let extractChannelIfCorrectHost = /(?:david|mpj) hosts (.+)/i;
let channel = input.match(extractChannelIfCorrectHost)[1];//?
channel = inccorectInput.match(extractChannelIfCorrectHost);//?
input = "MPJ hosts Fun Fun Function"
channel = input.match(extractChannelIfCorrectHost)[1];//?
