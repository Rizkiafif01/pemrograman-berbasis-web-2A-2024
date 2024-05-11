let textTodo = document.getElementById('todo_name');

let btnSimpan = document.getElementById("btnSimpan").addEventListener("click", function() {
    if(textTodo.value==""){
        alert("Nama todo tidak boleh kosong");
    }else{
        let tambahTodo = document.querySelector('.list-group');
        let todoHtml= tambahTodo.innerHTML;
        todoHtml +=`
        <li class="list-group-item d-flex justify-content-between">
            <div>
                <input class="form-check-input me-1" type="checkbox" value="">
                <span>${textTodo.value}</span>
            </div>
            <div>
                <button class="badge border-0 bg-primary btn-edit">Edit</button>
                <button class="badge border-0 bg-danger btn-hapus">x</button>
            </div>
        </li>`
        tambahTodo.innerHTML = todoHtml ;
        textTodo.value="";

        let cekTodo = document.querySelectorAll('.form-check-input')
        for (let i = 0; i < cekTodo.length; i++) {
            const input = cekTodo[i];
            input.addEventListener("change",function(){
                let todoSpan=input.nextElementSibling;
                todoSpan.classList.toggle('text-decoration-line-through');
            });
        };
        let btnHapus = document.querySelectorAll(".btn-hapus");
        for (let x = 0; x < btnHapus.length; x++) {
            const hapus = btnHapus[x];
            hapus.addEventListener("click", function() {
                this.parentNode.parentElement.remove();
            });
        }

        let btnEdit = document.querySelectorAll(".btn-edit"); 
        for (let y = 0; y < btnEdit.length; y++) {
            const edit = btnEdit[y];
            edit.addEventListener("click", function() {
                let todoSpan = this.closest('li').querySelector('span');
                let newTodo = prompt("Edit Todo : ", todoSpan.innerText);
                if (newTodo !== null) {
                    todoSpan.innerText = newTodo;
                }
            });
        }
    };
});
