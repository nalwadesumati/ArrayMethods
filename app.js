const cl = console.log;




// EASY TASKS (30)
// =====================
// 1. Print each element of [1,2,3]. → Output: 1 2 3
let arr1 = [1,2,3];
for (let i = 0; i < arr1.Length; i++){
	result += arr1[i] + " ";
}
document.getElementById("p1").innerHTML = arr1;
cl(arr1);

// 2. Count elements in [10,20,30,40]. → Output: 4
let arr2 = [10,20,30,40];
var result2 = arr2.length;
document.getElementById("p2").innerHTML = result2;
cl(result2);



// 3. Sum elements of [5,5,5]. → Output: 15
let arr3 = [5,5,5];
let sum =0;
for (let i = 0; i < arr3.length; i++){
	sum += (arr3[i]);
}
document.getElementById("p3").innerHTML = sum;
cl(sum);

// 4. Create string from ['a','b','c']. → Output: "abc"
let arr4 = ['a','b','c'];
let newStr = arr4.join("");
document.getElementById("p4").innerHTML = newStr;
cl(newStr);

// 5. Print indexes of [7,8,9]. → Output: 0 1 2
let arr5 = [7,8,9];
result3 ="";
for (let i = 0; i<arr5.length; i++){
	result3 += i + " ";
}
document.getElementById("p5").innerHTML = result3;
cl(result3);


// 6. Print index-value pairs for [10,20]. → Output: 0:10, 1:20
let arr6 = [10,20];
let result4 ="";
for (let i = 0; i < arr6.length; i++){
	result4 += i + ":"+ arr6[i];
	if (i <arr6.length - 1){
		result4 += ", "
	}
}
document.getElementById("p6").innerHTML = result4;
cl(result4);
// 7. Count even numbers in [2,3,4,5]. → Output: 2
let arr7 =[2,3,4,5];
let count ="";
for (let i = 0; i < arr7.length; i++){
		if (arr7[i] % 2 ===0 ){
			count++;
		}
}
document.getElementById("p7").innerHTML = count;
cl(count);

// 8. Count odd numbers in [11,12,13]. → Output: 2
let arr8 =[11,12,13];
let count1 ="";
for (let i = 0; i <arr8.length; i++){
	if (arr8[i] %2 !== 0){
		count1++;
	}
}
document.getElementById("p8").innerHTML = count1;
cl(count1);

// 9. Get max from [1,4,2]. → Output: 4
let arr9 =[1,4,2];
let max= Math.max(...arr9);
document.getElementById("p9").innerHTML = max;
cl(max);

// 10. Get min from [9,1,6]. → Output: 1
let arr10 = [9,1,6];
let min = Math.min(...arr10);
document.getElementById("p10").innerHTML = min;
cl(min);
// 11. Multiply all in [2,2,2]. → Output: 8
let arr11 = [2,2,2];
let product = 1;
for (let i = 0; i < arr11.length; i++){
	product *=(arr11[i]);
}
document.getElementById("p11").innerHTML = product;
cl(product);

// 12. Sum of first 3 elements [2,4,6,8]. → Output: 12
let arr12 = [2,4,6,8];
let sum1 = 0;
for (let i = 0; i < 3; i++){
	sum1 += arr11[i];
}
document.getElementById("p12").innerHTML = sum1;
cl(sum1);
// 13. Print last element [1,2,3,4]. → Output: 4
let arr13 = [1,2,3,4]
let result5 = arr13 [arr13.length-1];
document.getElementById("p12").innerHTML = sum1;
cl(result5);

// 14. Count numbers > 5 in [3,7,9,1]. → Output: 2
let arr14 = [3,7,9,1];
let count2 = 0;
for (i = 0; i < arr14.length; i++){
	if (arr14[i] > 5){
		count2++
		}
		
}
document.getElementById("p14").innerHTML = count2;
cl(count2);
// 15. Print reversed elements [1,2,3]. → Output: 3 2 1
let arr15 = [1,2,3];
let result6 = arr15.reverse();
document.getElementById("p15").innerHTML = result6;
cl(result6);

// 16. Count zeros in [0,1,0,2]. → Output: 2
let arr16 =[0,1,0,2];
let count3 = 0;
for (i = 0; i < arr16.length; i++){
	if (arr16[i] < 1){
		count3++
	}
}
document.getElementById("p16").innerHTML = count3;
cl(count3);
// 17. Find average [10,20,30]. → Output: 20
let arr17= [10,20,30];
let sum2 = 0;
let average = "";
for (let i = 0; i < arr17.length; i++){
	sum2 += arr17[i];
	average = sum2 / arr17.length;
}
document.getElementById("p17").innerHTML = average;
cl(average)
// 18. Concatenate integers [1,2,3]. → Output: "123"
let arr18 = [1,2,3];
let result7 = arr18.join("");
document.getElementById("p18").innerHTML = result7;
cl(result7);

// 19. Print only negative nums [-1,2,-3]. → Output: -1 -3
let arr19 = [-1,2,-3];
let nums ="";
for (let i = 0; i < arr19.length; i++){
	if (arr19[i] < 1){
		nums += arr19[i] + " ";
	}
}
document.getElementById("p19").innerHTML = nums;
cl(nums);
// 20. Print only positive nums [-1,2,-3,4]. → Output: 2 4
let arr20 = [-1,2,-3,4]
let nums1 ="";
for (let i = 0; i < arr20.length; i++){
	if (arr20[i] > 0){
		nums1 += arr20[i] + " ";
	}
}
document.getElementById("p20").innerHTML = nums1;
cl(nums1);
// 21. Print length of [100,200]. → Output: 2
let arr21 = [100,200];
let result8 = arr21.length;
document.getElementById("p21").innerHTML = result8;
cl(result8);

// 22. Print boolean values [true,false,true]. → Output: true false true
// let arr22 = [true,false,true];
// let result9 ="";
// for (let i =0; i < arr22.length; i++){
	// if (typeof arr22[i] === "boolean"{
		// result9 += arr22[i]+"";
	// }
	
// }

// document.getElementById("p22").innerHTML = result9;
// cl(result9);

// 23. Count strings in [1,"hi",2,"yo"];. → Output: 2
let arr23 = [1,"hi",2,"yo"];
let count4 ="";
for (let i = 0; i < arr23.length; i++){
	if (typeof arr23[i] === "string"){
		count4++
	}
}
document.getElementById("p23").innerHTML = count4;
cl(count4);
// 24. Count numbers in ["a",2,"b",3]. → Output: 2
let arr24 = ["a",2,"b",3];
let count5 ="";
for (let i = 0; i < arr24.length; i++){
	if (typeof arr24[i] === "number"){
		count5++
	}
}
document.getElementById("p24").innerHTML = count5;
cl(count5);
// 25. Convert [true,false] to 1 0. → Output: 1 0
let val1, val2;
if (true){
	val1 = 1;
}else{
	val2 = 0;
}
if (false){
	val1 = 1
}else{
	val2 = 0;
}
document.getElementById("p25").innerHTML = val1 + " " + val2;
cl(val1, val2);
// 26. Count letters in ['x','y','z']. → Output: 3
let arr26 = ['x','y','z'];
let count6 ="";
for (let i = 0; i < arr26.length; i++){
	if (typeof arr26[i] === "string"){
		count6++
	}
}
document.getElementById("p26").innerHTML = count6;
cl(count6);
// 27. Find difference between max-min [8,3,6]. → Output: 5
let arr27 = [8,3,6];
let difference = Math.max(...arr27) - Math.min(...arr27);
document.getElementById("p27").innerHTML = difference
cl(difference);
// 28. Print sum of even indexes [10,20,30,40]. → Output: 40
let arr28 = [10,20,30,40];
sum3 = 0;
for (let i=0; i < arr28.length; i++){
	if (i % 2 ===0 ){
		sum3 += arr28[i];
	}
}
document.getElementById("p28").innerHTML = sum3;
cl(sum3);
// 29. Print sum of odd indexes [10,20,30,40]. → Output: 60
let arr29 = [10,20,30,40];
sum4 = 0;
for (let i=0; i < arr28.length; i++){
	if (i % 2 !==0 ){
		sum4 += arr29[i];
	}
}
document.getElementById("p29").innerHTML = sum4;
cl(sum4);
// 30. Print middle element [5,10,15]. → Output: 10
let arr30 = [5,10,15];
let middleIndex = Math.floor(arr30.length/2);
document.getElementById("p30").innerHTML = arr30[middleIndex];
cl(arr30[middleIndex]);

// MEDIUM TASKS (30)
// =====================
// 31. Filter even numbers [1,2,3,4,5]. → Output: [2,4]
let arr31 =[1,2,3,4,5]
let num2 = "";
let even = arr31.filter(num => num % 2 ===0)
document.getElementById("p31").innerHTML = even;
cl(even);
// 32. Filter odd numbers [6,7,8,9]. → Output: [7,9]
let arr32 =[6,7,8,9]
let num3 = "";
let odd = arr32.filter(num => num % 2 !==0)
document.getElementById("p32").innerHTML = odd;
cl(odd);
// 33. Count duplicates in [1,2,2,3]. → Output: Duplicate: 2
let arr33 = [1,2,2,3];
let count9 = 0;
for (let i = 0; i < arr33.length; i++){
	for (let j = i + 1; j < arr33.length; j++){
		if (arr33[i] === arr33[j]){
			count9++;
		}
	}
}
document.getElementById("p33").innerHTML = count9;
cl(count9);
// 34. Remove duplicates [1,1,2,3,3];

let arr34 = [1,1,2,3,3];
let result11= [...new Set (arr34)];
document.getElementById("p34").innerHTML = result11;
cl(result11);

// 35. Reverse [10,20,30,40]. → Output: [40,30,20,10]
let arr35 = [10,20,30,40];
let result12 = arr35.reverse();
document.getElementById("p35").innerHTML = result12;
cl(result12);
// 36. Square each [2,3,4]. → Output: [4,9,16]
let arr36 = [2,3,4];
const Square =[];
for (let i = 0; i < arr36.length; i++){
	Square.push(arr36[i]*arr36[i]);
}
document.getElementById("p36").innerHTML = Square;
cl(Square);
// 37. Double each [1,2,3]. → Output: [2,4,6]
let arr37 = [1,2,3];
const Double =[];
for (let i = 0; i < arr37.length; i++){
	Double.push(arr37[i]*2);
}
document.getElementById("p37").innerHTML = Double;
cl(Double);
// 38. Get only numbers [1,"hi",3,"ok"]. → Output: [1,3];
let arr38 = [1,"hi",3,"ok"]
let num4 =[];
for (let i = 0; i < arr38.length; i++){
	if (typeof arr38[i] === "number"){
		num4.push(arr38[i]);
	}
}
document.getElementById("p38").innerHTML = num4;
cl(num4);
// 39. Get only strings [7,"hi","bye"]. → Output: ["hi","bye"]
let arr39 = [7,"hi","bye"]
let num5 =[];
for (let i = 0; i < arr39.length; i++){
	if (typeof arr39[i] === "string"){
		num5.push(arr39[i]);
	}
}
document.getElementById("p39").innerHTML = num5;
cl(num5);
// 40. Find longest string ["a","abcd","bc"]. → Output: "abcd"
let arr40 =["a","abcd","bc"];
let longest ="";
for(let i = 0; i <arr40.length; i++){
	if (typeof arr40[i] === "string" && arr40[i].length >longest.length){
		longest = arr40[i];
	}
}
document.getElementById("p40").innerHTML = longest;
cl(longest);

// 41. Count vowels in ["a","e","i","o"]. → Output: 4
let arr41 = ["a","e","i","o"];
let count11= 0;
let vowels = "aeiouAEIOU";
for (let i = 0; i < arr41.length; i++){
	if (vowels.includes(arr41[i])){
		count11++;
	}
}
document.getElementById("p41").innerHTML = count11;
cl(count11);

// 42. Print index of max [3,9,7]. → Output: 1
let arr42 = [3,9,7];
let result14 = arr42.indexOf(Math.max(...arr42));
document.getElementById("p42").innerHTML = result14
cl(result14);

// 43. Print index of min [8,5,6]. → Output: 1
let arr43 = [8,5,6];
let minIndex = arr43.indexOf(Math.min(...arr43));
document.getElementById("p43").innerHTML = minIndex
cl(minIndex);

// 44. Pair index + value [1,2]. → Output: 0-1, 1-2
let arr44 = [1,2];
let result44 = "";
arr44.forEach((val, idx) => {
	result44 += `${idx} -${val} `;
})
document.getElementById("p44").innerHTML = result44
cl(result44);
// 45. Sum nested array [[1,2],[3,4]]. → Output: 10
// 46. Flatten [[1,2],[3,4]]. → Output: [1,2,3,4]
let arr45 = [[1,2],[3,4]];
let result45 = arr45.flat();
document.getElementById("p45").innerHTML = result45
cl(result45);
// 47. Count primes [2,3,4,5]. → Output: 3
// 48. Check palindrome [1,2,1]. → Output: true
// 49. Check palindrome [1,2,3]. → Output: false
// 50. Print unique chars ['a','b','a','c']. → Output: a b c
let arr46 = ['a','b','a','c'];
let result50 = [...new Set(arr46)];
document.getElementById("p50").innerHTML = result50
cl(result50);

// 51. Find difference of sums [1,2,3,4] evens-odds. → Output: 2
let arr51 = [1,2,3,4];
let even1 = arr51.filter(x => x %2 ===0).reduce ((a,b) => a+b,0);
let odd1 = arr51.filter(x => x %2 !==0).reduce ((a,b) => a+b,0);
let result51 = even1-odd1;
document.getElementById("p51").innerHTML = result51
cl(result51);

// 52. Find all divisible by 3 [3,6,7,8,9]. → Output: [3,6,9]
let arr52 = [3,6,7,8,9];
let result52 = arr52.filter(x => x % 3 ===0);
document.getElementById("p52").innerHTML = result52
cl(result52);

// 53. Count truthy items [0,"hi",false,1]. → Output: 2
let arr53 = [0,"hi",false,1];
result53 = arr53.filter(Boolean).length;
document.getElementById("p53").innerHTML = result53
cl(result53);

// 54. Count falsy items [0,"",null,false]. → Output: 4
let arr54 = [0,"hi",false,1];
result54 = arr54.filter(x => !x).length;
document.getElementById("p54").innerHTML = result54
cl(result54);
// 55. Generate frequency map [a,a,b]. → Output: {a:2,b:1}
// 56. Print chars of ["hi","ok"]. → Output: h i o k
let arr56 = ["hi","ok"];
let result56 = arr56.join("").split('').join(' ');
document.getElementById("p56").innerHTML = result56
cl(result56);
// 57. Count digits in [12,345,6]. → Output: Total digits=6
let arr57 =  [12,345,6];
let result57 = arr57.join('').length;
document.getElementById("p57").innerHTML = result57
cl(result57);

// 58. Index of target 4 in [1,2,4,5]. → Output: 2
let arr58 =  [1,2,4,5];
let result58 = arr58.indexOf(4)
document.getElementById("p58").innerHTML = result58
cl(result58);

// 59. Total string lengths ["hi","ok"]. → Output: 4
let arr59 =  ["hi","ok"];
let result59 = arr59.join('').length;
document.getElementById("p59").innerHTML = result59
cl(result59);

// 60. Count uppercase ["Hi","OK","hey"]. → Output: 2
let arr60 = ["Hi","OK","hey"];
let result60 = arr60.filter(x => x === x.toUpperCase()).length;
document.getElementById("p60").innerHTML = result60;
cl(result60);
