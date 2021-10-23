class Derivation {
  constructor(input)
  {
	
let treeData = [""]// Global array to keep track of each derivation
	
	// function accept string and store it on array list
	function leftMostDer(input){
		
		console.log("program   →  " + input)// print the derivation 
// add each derivation to treeData array
		
	}
  }
}


console.log("Hello world!");
var input = prompt("Please Enter a valid input?");
alert(`Your input is ${input}`);
let inputString = "";
let arr = input.split(" ")

function validateFirstLast() {


  console.log(arr);

  const start = 'go';
  const end = 'stop';
  const lastElement = arr[arr.length - 1]
  console.log(lastElement)

  if (arr[0] != start) {// validate to first element of the string and if its not equal to start a error is printed

    console.log(`Error: "${arr[0]}" is an invalid sytnax. String should begin with: ${start}`);
    return false
  }

  if (lastElement != end) {// validate the last element of the string and if  its not equal to end a error is printed
    console.log(`Error: "${lastElement}" is an invalid sytnax. String should end with: ${end}`);
    return false
  }

  return true
}
validateFirstLast()
	
function rightmost() {
  x = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  y = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  der = new Derivation();

  let start = 1;
  let end = arr.length - 1;
  var command = arr.slice(start, end);
  console.log(command)
  inputsize = command.length;
  inputString = " go <commands> stop "
  index = 0;

  while (index < inputsize) {

    // let pos = true;
    // for (let i = 0; i < command[index + 1].length; i++) {//loop through string to verify if a , exist 


    //   if (command[index + 1].slice(i, i) == ",") {// if any character in the string equal to , . The position is set to false

    //     pos = false

    //   }
    // }
    // if (pos) {

    //   inputString = inputString.replace("<draw>", "<command>")

    // } else {

    //   inputString = inputString.replace("<draw>", "<command> , <command>")

    // }

if(command[index] == "rec" || command[index] == "tri"){
				
				//split string at , and semicolon 
				let temp = command[1].split('.')
				let tempy = temp[1].toString().split(',')
				
				//get value of x and y from string the parse above
				let coordx = temp[0].toString()
				let coordy = tempy[0]
				
				
				if(command[index] == "rec"){// if element is equal to rec  then data is process accordingly rec  allowed syntax
									
					inputString = inputString.replace("<draw>", "rec <xy>.<xy>")//derivation is created for rec 
					//add latest derivation
					
					// if(!validateCoord(coordx, index)){//validate xy value 
						
					// 	return false
					// }
					
					//derivation error replace both y 
//					tempI = coordx.getRange(1..1)
//					inputString = inputString.replace(",${tempI}",",<y>")
//					
					
					if(coordy.length != 1){// validate the second y and verify it a single digit number 
						
						// console.log("Error : ${coordy} - ${coordy.size} size isn't correct. ", " Y valid numbers: ${y}")
            console.log(`Error Syntax: "${coordy} - length of ${coordy.length} isn't correct. " Y Valid statement should be ${y}`)
					}
				
					// if(!validateY(coordy.getRange(start, end))){//validate the second y in rec  element
					
					// 	console.log("Error Sytnax: ${coordy} is a invalid y. ", " Y valid numbers: ${y}")
					// 	return false
					// }
					
					//derivation created for second y
					inputString = inputString.replace("<y>", "${coordy.getRange(0..0)}")
					//add derivation
				
					
				}else{ // validating for hbar element
					
					//split string at , and semicolon 
						let xtemp = command[index+1].toString().split('.')
						let xtempx = xtemp[1].toString().split(',')
					
					//new values for xy after parsing 
						let xValue = xtemp[0]
						let xSvalue =  xtempx[0]
					
					inputString = inputString.replace("<draw>", "tri <xy>.<xy>.<xy>")//derivation created for hbar
					// add derivation
					
					// if(!validateCoord(xValue, index)){//validate xy values
						
					// 	return false
					// }
					
					
					// if(!validateX(xSvalue)){// validate second x in the hbar element
						
					// 	return false
					// }
					
					inputString = inputString.replace("<x>", "${xSvalue}")//derivation created for second x
					//add derivation
					
				}
				
				//increment index 
				index = index +=2
				
			}else if( command[index]== "fill"){// validate fill element
				
				if(index+1 > command.length){//verify size of the fill element
					
					console.log("Statement does not meet the minimum arguments. "," Verify string enter with grammer")
				}
			
				if(command[index+1] == "," || command[index+1] == "end"){// verify that data on fill element

					console.log("Statement does meet the minumum arguments. "," String enter at ${command[index+1]}")
				}
				
					let tempCoord = command[index+1]//get xy values from element

				if(command[index] == "fill"){
					
					inputString = inputString.replace("<draw>", "fill <x>.<y>")//derivation created for fill
					//add derivation
					
					// if(!validateCoord(tempCoord, index)){// validate the values for xy in the fill element
						
					// 	return false
					// }
				}
				
				//increment index
				index+=3
				
			}else{
				console.log(`Error Syntax: "${command[index]}" is an invalid sytnax. Valid statement should be rec, tri, fill`)
				// console.log("Error Synatx: ${command[index]} an invalid statement. ", " Valid Statement: rec , hbar, fill")
				index +=5
        
			}

		}
		
		// der.printTree()
		return true


  }

  rightmost()
  
// function leftMostDer(input){

//   console.log("program   →  " + arr)// print the derivation 


// }





