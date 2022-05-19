const forms = () => {
    const forms = document.querySelector('.form');


    const message = {
        loading : 'Загрузка' ,
        success : 'Данные отправленн',
        failure : 'Что-то сломалось',
        wrongValue : 'корректно заполните все поля'
    }
   
    forms.addEventListener('submit' , formSend);

    async function formSend(event) {
        event.preventDefault();
       
        let error = formValidate(forms);
        const messageStatus = document.createElement('div');
        messageStatus.textContent = message.loading;
        forms.append(messageStatus);

        
        
        let formData = new FormData(forms);
        formData.append("id" , Math.random());

        let obj = {};

        formData.forEach((value , key) => {
            obj[key] = value;
        });

        
       
        if(error === 0) {
            
            let response = await fetch('http://localhost:3000/people' , {
                method : 'POST',
                headers : {
                    'content-type': 'application/json'
                },
                body : JSON.stringify(obj)
            });
            if(response.ok) {
                messageStatus.textContent = message.success;
                forms.reset();
            }else {
                messageStatus.textContent = message.failure;
            }
        }else {
            messageStatus.textContent = message.wrongValue;
        }
        if(messageStatus){
            document.querySelector('.submit__btn').disabled = true;
            setTimeout(() => {
                document.querySelector('.submit__btn').disabled = false;
            }, 1000);
        }
       
           
      
        setTimeout(() => {
            messageStatus.remove()
        }, 1000);
       
    }

   
    function formValidate(form) {
        
        let error =0;

        const formReq  = document.querySelectorAll('._valid');
    
     
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            
            if(input.classList.contains('_email')){
                if(!emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }
            if(input.value === '' && input.classList.contains('_login')) {
                formAddError(input)
                error++;
            }
            
        }

     

        return error;

    }


    function formAddError(input) {
        input.classList.add('_error');
    }
    
    function formRemoveError(input) {   
        input.classList.remove('_error');
    }
    

    function emailTest(input) {

        return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(String(input.value).toLocaleLowerCase());
    }

    
};


















// function moveDog() {
//     const dog = document.querySelector('.reception__img');
//     dog.setAttribute('src' , 'images/convert.png')
//     dog.style.width = 782 +'px';
//     dog.style.height = 520 + 'px';
//     dog.style.left = 189 +'px';
// }

export default forms;







// const forms = () => {
//     const forms = document.querySelectorAll('.form');
//     const inputs = document.querySelectorAll('input');
//     const message = {
//         loading: 'загрузка',
//         success: 'Данные успешно отправлены',
//         failure: 'Что-то пошло не так',
//     };

//     const clearInputs = () => {
//         inputs.forEach(input => {
//             if (input.type === 'submit') {
//                 return false;
//             }
//             input.value = '';
//         });
//     }

//     const postData = async (url, data) => {
//         document.querySelector('.status').textContent = message.success;

//         let result = await fetch(url, {
//             method: 'POST',
//             body: data,
//         });

//         return await result.text();
//     };

 


//     forms.forEach(item => {
//         item.addEventListener('submit', (e) => {
//             e.preventDefault();
//             inputs.forEach(input => {
//                 if(input.value === '') {
//                     return ;
//                 }
                
//             });
//             const statusMessage = document.createElement('div');
            
//             statusMessage.classList.add('status');
//             item.append(statusMessage);
 
//             const formData = new FormData(item);
           
//             postData('../server.php', formData)
//                 .then(res => {
//                     console.log(res)
//                     statusMessage.textContent = message.success
//                 })
//                 .catch(() => {
//                     statusMessage.textContent = message.failure;
//                 })
//                 .finally(() => {
//                     clearInputs();
//                     setTimeout(() => {
//                         statusMessage.remove();
//                     }, 1500);
//                 })
//         });
//     });
// };
