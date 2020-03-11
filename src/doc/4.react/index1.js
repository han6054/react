let batchingStrategy = {
    isBatchingUpdaters :false, // 非批量更新模式
    dirtyComponents: [],
    batchedUpdates: function () {
        this.dirtyComponents.forEach(component => component.UpdateComponent())
    }
};

class Transaction {
    constructor(wrappers) {
        this.wrappers = wrappers;
    }
    perform(anyMethod) {
        this.wrappers.forEach(wrapper => wrapper.initialize());
        anyMethod.call();
        this.wrappers.forEach(wrapper => wrapper.close());
    }
}
// 更新器
class Updater {
    constructor(component) {
        this.component = component;
        this.PendingState = [];
    }
    addState(partcialState) {
        this.PendingState.push(partcialState);
        batchingStrategy.isBatchingUpdaters? batchingStrategy.dirtyComponents.push(this.component): this.component.UpdateComponent()
    }
}

class Component {
    constructor(props) {
        this.props = props;
        this.$updater = new Updater(this);
    }
    UpdateComponent() {
        this.$updater.PendingState.forEach(partcialState => Object.assign(this.state, partcialState));
        this.$updater.PendingState.length = 0;
        let oldDOM = this.domElement;
        let newDOM = this.createDOMFromDOMString();
        oldDOM.parentElement.replaceChild(newDOM, oldDOM);
    }
    setState(partcialState) {
        this.$updater.addState(partcialState);
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
let transaction = new Transaction([{
    initialize() {
        batchingStrategy.isBatchingUpdaters = true;
    },
    close() {
        batchingStrategy.batchedUpdates();
        batchingStrategy.isBatchingUpdaters = false;
    }
    }]
);
window.trigger = function (event, method) {
    let component = event.target.component;
    transaction.perform(event.target.component[method].bind(component));
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