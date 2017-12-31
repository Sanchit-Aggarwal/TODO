import React, { Component } from 'react';
import './App.css';
//import {List} from './list.js';
import ReactDOM from 'react-dom';
var count;
var a;var fun;
var temp;

class List extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      count:1,
      task:[]
    };
  }
  render()
  {

    this.state.task.push(this.props.val);
    //this.state.count++;
    //  this.setState({
      //count:this.state.count+1,
      //task:this.state.task.push(this.props.val)
    //});


    //var taskArray=
    // <div>
    //   <h1>{this.state.count}</h1>
    //   <h1>{this.state.task}</h1>
    // </div>
  //  console.log(this.state.task+this.state.count);

    count=this.state.count;
  //  temp=;


return(
  <div>
  {
    this.state.task.map(
       function(t)
         {
           if(count==0||t=='')
             {
               return(<div></div>);
             }
        else
        {
         return(
                   <div>
                        <li>
                            <h7>Task No={count}</h7>
                            <h7>Task Name={t}</h7>
                        </li>
                   </div>
              );
        }
     }

)}</div>);
}
}
class App extends Component {

addToList()
{
console.log(document.getElementById('feild').value);
if(!(document.getElementById('feild').value==''))
{
  ReactDOM.render(<List val={document.getElementById('feild').value} />, document.getElementById('myList'));

}
else {
alert();
}
}

  render() {

    return (
      <div className="App">
        <div id='head'>
             <center><h1>Welcome,Jai Mata Di ,Happy Coding :)</h1></center>
        </div>
        <br />
        <div className="main row ">
        <div className='col'>
             <div className="jumbotron">

                <div className='row'>
                <label id='addSpace1'><strong><h4>Enter task name</h4></strong></label>
                <input id='feild' type='text' className='form-control col-sm-4'></input>
                <button id='addSpace' className='btn  btn-primary col-sm-3' onClick={this.addToList}>Add it to list</button>
                </div>


             </div>
        </div>
        <div className='col'>
        <div className="jumbotron full">
        <div id="myList">


        </div>

        </div>
        </div>
        </div>


      </div>
    );
  }
}

export default App;
