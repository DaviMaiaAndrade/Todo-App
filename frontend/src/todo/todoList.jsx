import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { marksAsDone, marksAsPeding, remove } from "./todoActions";
import IconButton from "../template/iconButton";

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        console.log(props)
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone':''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => {props.marksAsDone(todo)}}
                    />
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => {props.marksAsPeding(todo)}}
                    />
                    <IconButton style='danger' icon='trash-o' hide={!todo.done} 
                        onClick={() => {props.remove(todo)}}
                    />
                </td>
            </tr>
        ))
    }
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

function mapStateToProps(state){
    return{
        list:state.todo.list
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({marksAsDone,marksAsPeding,remove}, dispatch)    
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
