/*eslint-disable*/
import React from "react";
import styles from './TodoItem.css';
class TodoItem extends React.Component {
    state = {
        editing: false,
    };
    handleEditing = () =>  {
        this.setState({
            editing: true,

        });
    };
    handleUpdatedDone = (evemt) => {
        if (event.keu === 'Enter') {
            this.setStart({ editing: false })
        }
    };

    render() {
        const { completed, id, title } = this.props.todo;       
        const viewMode = {};
        const editMode = {};

        if (this.state.editing) {
            viewMode.display = 'none';
        } else {
          editMode.display = 'none';
        }

        const completedStyle = {
            fontStyle: 'italic',
            color: '#595959',
            opacity: 0.4,
            textDeoration: 'line-through',
        };
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => this.props.handleChangeProps(id)}
                    />
                    <button onClick={() => this. props. deleteTodoProps(id)}>Delete</button>
                    <span style={completed ? completedStyle : null}>{title}</span>
                </div>
                <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={(e) => this.props.setUpdate(e.target.value, id)}
                onKeyDown={this.handleUpdateDone}
                />
            </li>
        );
      }
    }
export default TodoItem;