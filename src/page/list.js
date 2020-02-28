import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    return (  <h2>list-page->{this.state.id}</h2> );
    }
    componentDidMount(){
      // ③路由接收值 通过props来接收
      // match中的对象属性
      // patch:自己定义的路由规则，可以清楚的看到是可以产地id参数的。
      // url: 真实的访问路径，这上面可以清楚的看到传递过来的参数是什么。
      // params：传递过来的参数，key和value值。
      let tempId = this.props.match.params.id; // id的是自己定义的变量名
      this.setState({id: tempId});
    }
}

export default List;
