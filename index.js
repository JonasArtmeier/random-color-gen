const randomHex = require('random-hex');
const createColor = require('my-colors');
const randomColor = require('randomcolor');

let randomColorNull = randomHex.generate();
let colorMain = process.argv[2];
let colorVersion = process.argv[3];
let colorName = colorVersion + colorMain;
let answer = randomColor({
  luminosity: colorVersion,
  hue: colorMain,
});
if (colorName) {
  const design = `###############################
###############################
###############################
######                #########
######     ${answer}    #########
######                #########
###############################
###############################
###############################`;
  const print = createColor(answer);
  const msg = print(design);
  console.log(msg);
} else {
  const design = `###############################
###############################
###############################
######                #########
######     ${randomColorNull}    #########
######                #########
###############################
###############################
###############################`;
  const print = createColor(randomColorNull);
  const msg = print(design);
  console.log(msg);
}
