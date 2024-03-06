//var userslist = document.getElementById('users');

//userslist.addEventListener('click',onClick);

window.addEventListener('DOMContentLoaded',()=>{
    
    axios.get('http://127.0.0.1:3000/user/get-user')
    .then( (res)=>{
        console.log(res,'res in get');
        for(var i=0;i<res.data.length;i++){
            ShowUsers(res.data);    
        }
    })
    .catch(err => console.log(err))
})


function ShowUsers(res){

    if (res.length>0){
        document.getElementById('users').innerHTML = '';
        for( const item of res){
            const { Name, Email, Phone } = item;
            //console.log(Name,Email,Phone);

            var users=document.getElementById('users');

            var li = document.createElement('li');
            var btn = document.createElement('button');
            var edit = document.createElement('button');

            btn.id='button';
            btn.appendChild(document.createTextNode('Delete'));
            edit.appendChild(document.createTextNode('Edit'));

            li.appendChild(document.createTextNode(`${Name} - ${Email} - ${Phone}`));
            li.appendChild(btn)
            li.appendChild(edit)
            users.appendChild(li)
            //console.log(li)

            btn.addEventListener('click',clicked);

        function clicked(e){
            //console.log('hi',e.target,e,item.id)
            var li = e.target.parentElement;
            users.removeChild(li);
            
            // localStorage.removeItem(obj.email);


            axios.delete(`http://127.0.0.1:3000/user/delete-user/${item.id}`)
            .then((res) => {
                console.log(res)
                console.log('Users detail deleted succesfully')
            })
            .catch(err=>{console.log(err)})

        }

        }
        
    }


    // console.log(name,email,phone,id)
    // var obj={
    //     name:name,
    //     email:email,
    //     phone:phone

    // };
    // var users=document.getElementById('users');

    // var li = document.createElement('li');
    // var btn = document.createElement('button');
    // var edit = document.createElement('button');

    // btn.id='button';
    // btn.appendChild(document.createTextNode('Delete'));
    // edit.appendChild(document.createTextNode('Edit'));

    
    // // axios.get('http://127.0.0.1:3000')
    // // .then(result => console.log(result))
    // // .catch(error => console.log(error))



    // li.appendChild(document.createTextNode(`${name} - ${email} - ${phone}`));
    // li.appendChild(btn)
    // li.appendChild(edit)
    // users.appendChild(li)
    // //console.log(li)

    // var objString=JSON.stringify(obj);

    // localStorage.setItem(email,objString);
    

    //btn.addEventListener('click',clicked);

    // function clicked(e){
    //     console.log('hi',obj,e.target)
    //     var li = e.target.parentElement;
    //     users.removeChild(li);
        
    //     localStorage.removeItem(obj.email);


    //     axios.delete(`https://crudcrud.com/api/27a0f9917c6448f186dd555a7373a69e/appointments/${id}`)
    //     .then((res) => {
    //         console.log(res)
    //         console.log('Users detail deleted succesfully')
    //     })
    //     .catch(err=>{console.log(err)})

    // }


    // edit.addEventListener('click',edited);

    // function edited(e){
    //     console.log('hi',obj,e)
    //     var li = e.target.parentElement;
    //     //console.log(li)
    //     users.removeChild(li);
        
    //     localStorage.removeItem(obj.email);

    //     document.getElementById('name').value=obj.name
    //     document.getElementById('email').value=obj.email
    //     document.getElementById('phone').value=obj.phone
        
    //     //console.log(name)
    //     axios.delete(`https://crudcrud.com/api/27a0f9917c6448f186dd555a7373a69e/appointments/${id}`)
    //     .then((res) => {
    //         console.log(res)
    //         console.log('Users detail deleted succesfully')
    //     })
    //     .catch(err=>{console.log(err)})


    // }

}

function savetolocalstorage(event){
    event.preventDefault();
    //console.log('id',id)
    //console.log(event.target[0].value);
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    console.log(name)


    // now we will only add li to users only when post request is successfull else error message will shown up.
    //users.appendChild(li)
    


    //axios POST request
    axios.post('http://127.0.0.1:3000/user/add-user',
    {name:name,
     email:email,
     phone:phone
    }
    ).then((res) =>{
        console.log(res.data)
        console.log('sab sahi vhal raha hai hiihihihih')
        //console.log(res.data[0].Name)
        ShowUsers(res.data)
    })
    .catch(err=>
        // document.body.innerHTML= document.body.innerHTML+ '<h1> 404 NOT FOUND <h1>')
        console.log(err,'error in axios post'))

    }



// function onClick(e){
//     //console.log('clicked')
//     var li =e.target.parentElement;
//     console.log(e.value,li)
//     console.log(ojb.email)
//     if(e.target.id==='button'){
//         var li =e.target.parentElement;
//         users.removeChild(li);
//     };


// }


