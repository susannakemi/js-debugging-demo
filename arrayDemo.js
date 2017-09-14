

const example = [40, 50, 80, 'hello', 'world', 100, 0, { example: "object" }];

console.log("Example how to access array values in for-loop");

for(let i = 0; i < example.length; i++)
{   
    const element = example[i];
    console.log(element);
}

console.log("Example how to access array values in while-loop");
let i = 0;
while(i < example.length)
{
    const element = example[i];
    console.log(element);
    i++;
}