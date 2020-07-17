
const allTodos = (state) => {
    let newArr = [];
    Object.keys(state.todos).forEach(key => {
    
        newArr.push(state.todos[key]);
    })
    return newArr;
}

export default allTodos;