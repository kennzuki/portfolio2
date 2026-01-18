



const yearOfBirth=new Number(1960)

 Number.prototype.calculateAge = function () {
    return (new Date().getFullYear()) - this
}

console.log((1960).calculateAge())


