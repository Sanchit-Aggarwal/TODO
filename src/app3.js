import React, { Component } from 'react';
import './App.css';
//import {List} from './list.js';
import ReactDOM from 'react-dom';
var count=0;
var a;var fun;var tt;
var temp;var listUpdater;
var unique_Id=-50;
var x=function(t)
{
  console.log(t.taskname);

}
class List extends Component
{
    listUpdater=function (){ }
  constructor(props)
  {
    super(props);
    tt=this.props;

    this.state={

      task:[{counter:0,taskName:''}]

    };
    this.listUpdater = this.listUpdater.bind(this);

  }
  listUpdater=function ()
  {
     console.log(this.props);
  }
  render()
  {
    listUpdater=function ()
    {
       console.log(tt);
    }
    count++;
    this.state.task.push({counter:count,taskName:this.props.val});

return(
  <div>
  {
    this.state.task.map(
       function(t)
         {

           if(t.counter==0)
             {
               return(<div></div>);
             }
        else
        {
         return(
                   <div>
                        <li>
                            <h7>Task No={t.counter}</h7>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <h7>Task Name={t.taskName}</h7>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button class='btn btn-primary' onClick={listUpdater}>Remove Item from list</button>
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
  unique_Id++;
  ReactDOM.render(<List val={document.getElementById('feild').value} uniqueId={unique_Id} />, document.getElementById('myList'));

}
else {
alert("Kindly Enter SOme Value!");
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
