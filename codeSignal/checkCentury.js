// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.


function checkCentury(year) {
    // year 1-100 is 1st cent
    if (year <= 100) {
        return 1;
    }
    //if year % 100 == 0) then its the first year in a new cent
    return year % 100 == 0 ? parseInt(year / 100) : parseInt((year / 100)+1)
}

checkCentury(204); // returns 3