// Let's review our loops

// While loops

// Write a while loop that outputs all integers from 0 to 100


count = 0;
while (count < 100) {
  
   count ++;
    console.log(count);
}


// Write a while loop that outputs all integers from 10 to 0 and outputs Done!

count = 0
while (count < 10) {
  count ++;
    console.log(count);
}
console.log("Done!");


// For loops - Great for outputing

// Write a for loop that outputs all integers from 0 to 50

for (var i=0; i <= 50; i++) {
  console.log(i);
}


// Write a for loop that outputs all even integers from 0 to 300.

for (var i = 0; i <= 300; i++) {
  if (i%2 == 0) {
    console.log(i)
  }
}

// For each loops (great for outputting a content of list)

// Write a for each loop that outputs all elements of an array (list)

var colors = ["red", "orange", "yellow", "green", "blue", "purple"];

for (var color of colors) {
  console.log(color);
}

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}