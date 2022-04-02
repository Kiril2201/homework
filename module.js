

// const arr_new = []
// const arr=[1,5,-2,8,6]
// for(let i =0;i< arr.length;i++)
// {
//     if(arr[i]>5)
//     {
//         arr_new.push(arr[i])
//     }
// }
// alert(arr_new)

// const arr=[1,5,-2,8,6]
// let results = arr.filter(function(item)
// {
// return item >5
// })
// console.log(results)

// const arr = [0,2,3,4,5]




// let result = [0,2,3,4,5].map(item => item * item );
// alert(result);
// const arr = [0,90,1,6,234,865,-93.-7,98,-3]
// let result = arr.filter( item =>item < 0)
// console.log(result)
// let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30        // под ключом "age" хранится значение 30
//   };
//   alert(user.name)
//   user.floor = 20
//   delete user.name
//   console.log(user)
// const parent = document.querySelector('.container');
// const child = document.createElement('div');
// child.textContent = 'I wanna be anything';
// child.classList.add('child');
// parent.after(child);
// // document.parent= addEventListener('click' parent)
const parent = document.querySelector('.container');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
function sendM(){
    const child = document.createElement('div');
    child.textContent = input.value;
    child.classList.add('child','.child');
    if (input.value !== '') {
        parent.append(child);
    }
    input.value = '';
}
input.addEventListener('keydown' , function(event)
{
    
    if(event.key =='Enter')
    {
        sendM()
    }
   
   
   
})
btn.addEventListener('click',sendM )
   

