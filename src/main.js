function generateTodoHtml(todoItems) {
    let number = 0;
    let lines = `
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>`;

    for(let {name,completed} of todoItems) {
        if(completed===true) {
             lines += `
            <li>
                <div><input type="checkbox" checked="checked"/><label>${name}</label></div>
                <form><input type="text"/></form>
            </li>`;
        }else{
            number++;
            lines += `
            <li>
                <div><input type="checkbox"/><label>${name}</label></div>
                <form><input type="text"/></form>
            </li>`;
        }
    }
    lines += `
        </ul>
    </section>
    <footer>
        <strong>${number}</strong> items left
        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </footer>
</section>
`;



    return lines;
}

module.exports = {
    generateTodoHtml: generateTodoHtml
}