let leftI = 0
let rightI = 0
const speeds = [-100, -250,]
basic.forever(function() {



    
})

console.log(String.fromCharCode(64))
console.log("@\dfjdg".charCodeAt(0))
console.log("@\dfjdg".charCodeAt(1))



input.onButtonPressed(Button.A, function() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, speeds[++leftI % speeds.length])
})
	
    
input.onButtonPressed(Button.B, function() {
    PCAmotor.MotorRun(PCAmotor.Motors.M4, speeds[++rightI % speeds.length])
})

input.onButtonPressed(Button.AB, function () {
    PCAmotor.MotorStop(PCAmotor.Motors.M1)
})

//měli naprogramovanou lištu. řídit to ručně to bylo složitější. Měli jsme dané kužely. Věděli předem že je radius 30cm. trénovali pohyby.zatoč doprava, dolegva, a rovně.
//
//
//Použití posílání jednoho čísla (64bit) max. 8 jendobytovejch čísel nebo 4 2bytový atd. (asi 2 nebo 16 soustava)

// v pravidelnych intervalech nacitat data z axcelometru
// kdyz pracujes z rosahy, extremy se neschodujou ??? co posunout interval do kladných čísel


function pack(x: number, y: number, z: number): number
{
    let xmod = x+1024 //posun intervalu do kladných čísel
    xmod = Math.floor(xmod / 8) //redukce intervalu (haha)
    String.fromCharCode(64)
    "@/asdaf".charCodeAt(1)
    return 0
}

input.onButtonPressed(Button.A, function() {
    let x = 1022
    let y = -950
    let z = 10

radio.sendNumber(pack(x, y, z))
})


radio.onReceivedNumber(function(receivedNumber: number){
    basic.showNumber(receivedNumber)
})