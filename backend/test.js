let name_file = 'audio.mp3'
let dotIndex;
console.log(name_file.length)
for(let i=name_file.length-1;name_file[i]!='.';i--)
{
    dotIndex = i;
}
var newString = name_file.substr(0, dotIndex);
newString += 'wav'
console.log(newString)