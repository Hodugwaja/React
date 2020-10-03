import React, {Component} from 'react';

class ErrorBoundary extends Component{
    state = {
        error : false
    };

    componentDidCatch(error, info){
        this.setState({
            error: true
        });
        console.log({error, info});
    }
    render(){
        if(this.state.error) return <div>error가 발생했습니다</div>
        return this.props.children;
    }
}

export default ErrorBoundary;

//에러를 잡아주는 코드