import React    from 'react';
import ReactDOM from 'react-dom';
import Test     from 'components/test.jsx';
import mypic    from './123.jpg';
import './index.css';

console.log(mypic);
class App extends React.Component{
    render(){
        return(
            <div>
                hello,world~!again~~~~~~~~??
                <img src={mypic}/>
                <img src={mypic}/>
                <img src={mypic}/>
                <Test />
            </div>
        )
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

if(module.hot){
    module.hot.accept()
}