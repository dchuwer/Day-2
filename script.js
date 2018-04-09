
/* Ex 1
var age = prompt("Whats your age ?");
if (age < 18)
    alert("You cant have adrink !");
else
    alert("You can have a drink !")
// alert('hello world 1!')
*/

/* Ex 2
var citizen = prompt("Which is your citizen ?");
citizen = citizen.toLowerCase();
if (citizen==="israeli")
   alert("You can enter !");
else
   alert("You need a Visa");
*/

/* Ex 3
var age = prompt("Whats your age ?");
var gender = prompt("Whast your gender ?");
gender = gender.toLowerCase();
if (age < 18 )
    alert("You cant have a drink !");
else {
    if (gender === "female")
       alert("You can have a free drink !")
    else
       alert("You need to pay a drink !")
}

*/

/* fizzbuzz 

for ( var i = 1; i < 20; i++){
    mod3 = i%3;
    mod5 = i%5;
    if (mod3 != 0 & mod5 !=0)
       alert(i)
    else {
        if (mod3 == 0 & mod5 ==0)
            alert("fizzbuzz")
        else
            if (mod3 == 0)
               alert("fizz")
            else
               alert("buzz")
    }
}
*/

/* Array Restaurants 
var Restaurants = ["Prime Grill","Al a essh","Papagaio","El Gaucho","Dagim"]
var sizeArray = Restaurants.length;
for (var i=0 ; i < sizeArray; i++){
    cosole.log(Restaurants[i]);
}
*/

/* exercise 2
var count=0;
const arr1 = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62]
for (num1 of arr1){
    count = count + num1;
}
var media = count/arr1.length;
alert(media)

*/

/*Exercise 3
var newElement =""
var myColor = ["Red", "Green", "White", "Black"];
for (element of myColor)
    if (newElement != "")
       newElement = newElement + "+" + element
    else
       newElement = element
alert(newElement);

*/

/* Exercise 4 
var newString = ""
var number = prompt("Enter a number")
alert(number.length)
for (var i = 0; i < number.length; i++){
    pos = number.slice(i,i+1)
    if (pos%2 === 0){
        j = i + 1
        pos1 = number.slice(j,j+1)
        if (pos1%2 === 0){
          newString = newString + pos + "-" + pos1 
          i++
       }
       else
          newString = newString + pos + pos1;
    }
    else
       newString = newString + pos;
}
alert(newString)

*/

/*exercise PARTNER EXTENSION 1 
var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count = {};
var great = 0, number = 0;

for (var i=0; i < arr.length ; i++){
    count[arr[i]] = count[arr[i]] ? count[arr[i]] + 1 : 1;
    if (great <= count[arr[i]]){
       great = count[arr[i]];
       number = arr[i];
    }
}
alert("the greatest occurring item is " + number + " with " + great + " times");

*/

/* Exercise PARTNER EXTENSION 2 */
var array = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133]

array.sort(function(a, b){return a - b});

for ( var i =0; i <200; i++){
    j = i+1
    if (j != array[i])
      alert("The missing number is " + j)

}
   
 
