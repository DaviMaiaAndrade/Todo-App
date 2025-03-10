import React, {Component} from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDescription, search, add, clear } from "./todoActions";

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHendler = this.keyHendler.bind(this)
    }
    
    componentWillMount(){
        this.props.search()
    }

    keyHendler(e) {
        const {add, search, description, clear} = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        }else if (e.key === 'Escape') {
            clear()
        }
    }

    render()
    {
        const {add, search, description} = this.props
        return(
            <div className="todoForm" role='form'>
                <Grid cols="12 9 10">
                    <input className="form-control" id="description" 
                    placeholder="Adicione uma tarefa" 
                    onChange={this.props.changeDescription}
                    onKeyUp={this.keyHendler}
                    value={this.props.description}/>
                </Grid>
                <Grid cols="12 3 2">   
                    <IconButton 
                        style="primary"
                        icon="plus"
                        onClick={() => add(description)}
                    />         
                    <IconButton
                        style="info"
                        icon="search"
                        onClick={search}
                    />
                    <IconButton 
                        style="default" 
                        icon="close"
                        onClick={this.props.clear}
                    />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {changeDescription, search, add, clear},dispatch
)

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)
