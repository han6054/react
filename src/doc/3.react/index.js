
class Component {
    constructor(props) {
        this.props = props;
        this.$updater = new Updater(this);
    }
    setState(partcialState) {
       this.state = Object.assign(this.state, partcialState);
        let oldDOM = this.domElement;
        let newDOM = this.createDOMFromDOMString();
        oldDOM.parentElement.replaceChild(newDOM, oldDOM);
    }
    createDOMFromDOMString() {
        let htmlString = this.render();
        let div = document.createElement('div');
        div.innerHTML = htmlString;
        this.domElement = div.children[0];
        // 元素节点component属性等于当前Counter实例
        this.domElement.component = this;
        // this.domElement.addEventListener('click', this.add.bind(this));
        return this.domElement;
    }
}
window.trigger = function (event, method) {
    event.target.component[method].call(event.target.component);
};
class Counter extends  Component{
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = { number: 0 }
    }
    add () {
        this.setState({number: this.state.number+1});
        console.log(this.state);
        this.setState({number: this.state.number+1});
        console.log(this.state);
        setTimeout(()=> {
            this.setState({number: this.state.number+1});
            console.log(this.state);
            this.setState({number: this.state.number+1});
            console.log(this.state);
        })
    }
    render() {
          return `<button onclick="trigger(event, 'add')">${this.state.number}</button>`
    }
    mount(container) {
        container.appendChild(this.createDOMFromDOMString())
    }
}