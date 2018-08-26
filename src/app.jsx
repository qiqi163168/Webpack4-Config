import React    from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test     from 'components/test.jsx';

class App extends React.Component{
    render(){
        return(
            <div>
                hello,world~!again~~~~
                <Test />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

if(module.hot){
    module.hot.accept()
}