/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}
/*******************
 * YOUR CODE BELOW *
 *******************/
 const d6Image = document.querySelector(`#d6-roll`)
 d6Image.scr =`images/start/d6.png`
 const random = 6
 d6Image.scr =`images/d6/${random}png`
 
//const firstName = "Towanna
//const lastName = "Hickey"
//console.log(`${firstName}${lastName} is here.`)
//d6

/*******************
 * EVENT LISTENERS *
 *******************/
 // document.querySelector('#d6 roll')
 //d6Image.src = '$images/start/d6.png'
//const random = 6
//d6Image.src =`image/start/d6.png`


// click listener
// finding a random number/number
//then add that number to datdbase (array at the top)
// change the image to reflect the number/number









/******************
 * RESET FUNCTION *
 ***********************

// clear out the data from the arrays and
// reset the starting image

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
