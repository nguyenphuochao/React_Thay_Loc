const { createStore } = window.Redux;
// action là object vd: {type: 'increment'}
const initialState = [];
const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            var newState = [];
            for (const el of state) {
                newState.push({ ...el });
            }

            newState.push({ ...action.payload }); // hàm thêm phần tử
            return newState;
        case 'remove':
            var newState = [];
            for (const el of state) {
                const removeKey = Number(action.payload);
                if (el.key != removeKey) {
                    newState.push({ ...el });
                }
            }
            return newState;
        default:
            return state;
    }
}
let store = createStore(todoListReducer);
store.subscribe(() => {
    const todoList = store.getState();
    const olTag = document.querySelector("#view-todolist");
    olTag.innerHTML = '';
    let key = 1;
    for (const todo of todoList) {
        const liTag = document.createElement('li');
        liTag.textContent = todo.name;
        liTag.setAttribute('key', todo.key);
        const btnEl = document.createElement('button');
        btnEl.textContent = 'Xóa';
        btnEl.setAttribute('type', 'button');
        btnEl.setAttribute('key', key);
        btnEl.addEventListener('click', deleteTodo);
        liTag.appendChild(btnEl);
        //add thêm checkbox
        const chkEl = document.createElement('input');
        chkEl.setAttribute('type', 'checkbox');
        chkEl.setAttribute('key', key);
        liTag.prepend(chkEl);
        olTag.appendChild(liTag);
        key++;
    }
    const qtyEl = document.querySelector('.qty');
    qtyEl.innerHTML = todoList.length;
});
const deleteTodo = (event) => {
    const key = event.target.parentElement.getAttribute('key');
    store.dispatch({ type: 'remove', payload: key });

}
const formTag = document.querySelector("form");
formTag.onsubmit = function (e) {
    e.preventDefault();
    const inputTag = formTag.querySelector('input');
    const taskName = inputTag.value;
    const keyName = Math.floor(Math.random() * 10000);
    store.dispatch({ type: 'add', payload: { key: keyName, name: taskName } });
    this.reset();
}
const chkAllEl = document.querySelector('.chk-all');
chkAllEl.onclick = function () {
    const olEl = document.querySelector('#view-todolist');
    const unChkEls = olEl.querySelectorAll('input[type=checkbox]:not(:checked)');
    for (const unChkEl of unChkEls) {
        unChkEl.checked = true;
    }
}
const deleteTodoListEl = document.querySelector('.delete-todolist');
deleteTodoListEl.onclick = function () {
    const olEl = document.querySelector('#view-todolist');
    const checkedEls = olEl.querySelectorAll('input[type=checkbox]:checked');
    for (const checkedEl of checkedEls) {
        const liEl = checkedEl.parentElement;
        const removeKey = liEl.getAttribute('key');
        store.dispatch({ type: 'remove', payload: removeKey });
    }
}
