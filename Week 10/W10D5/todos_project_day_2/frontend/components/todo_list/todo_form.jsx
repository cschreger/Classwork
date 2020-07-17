import React from 'react';
import Util from '../../util/util'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {title: "", body: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo({
            id: Util.uniqueId,
            title: this.state.title,
            body: this.state.body,
            done: false
    })
        this.setState({ title: "", body: ""})
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }
    
    render() {
        return (
            <>
                <h2>Make a new ToDo!</h2>

                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={this.update("title")}
                        value={this.state.title}
                    />
                    <label>Body</label>
                    <input
                        type="text"
                        onChange={this.update("body")}
                        value={this.state.body}
                    />

                    <button>Send it!</button>
                </form>
            </>
        );
    }
}

export default TodoForm;





    

 