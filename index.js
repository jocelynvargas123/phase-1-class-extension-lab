//Define polygon class
class Polygon {
    //accept array as parameter ex. [1,2,3]
    constructor(array){
        this.array = array
    }
    //use get to make a method that counts the number of sides... each index in array
    get countSides(){
        return this.array.length
    }
    get perimeter(){
        let sum = this.array.reduce((partSum, a) => partSum + a, 0)  
        return sum
    }
}

class Triangle extends Polygon{
    get isValid(){
        let sum = this.array.reduce((partSum, a) => partSum + a, 0)  
        for (let i = 0; i < this.array.length; i++ ) {
            if( sum -(this.array[i]) >= this.array[i]) {
                let valid = true
                return valid
            }else{ 
                let invalid = false
                return invalid }
        }
        
    }

}

class Square extends Polygon{
    get isValid(){
        for (let i = 0; i < this.array.length; i++ ) {
            if(this.array[i] === this.array[i+1]){
                return true
            }else{return false}
        }
    }
    get area(){
        let i = 0
        return this.array[i] * this.array[i+1]
    }
}