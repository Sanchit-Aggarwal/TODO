import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
var count=0;
var pointer;
class List extends Component
{
  listUpdater(count)
  {
     console.log('value to be del'+count);
     var newStateObject={

       task:[{counter:0,taskName:''}]

     };

     // var j=-1;
      for(var i=0;i<=this.state.task.length-1;i++)
      {
        //console.log("iterator value "+i);
      //  console.log("loop ret val" + (this.state.task[i].counter!=count && this.state.task[i].counter!=0 ));
       if(this.state.task[i].counter!=count && this.state.task[i].counter!=0 )
         {
      //        console.log('object counter value'+this.state.task[i].counter);
        //     console.log("current length of new aray "+newStateObject.task.length);
          newStateObject.task.push({counter:this.state.task[i].counter,
                                  taskName:this.state.task[i].taskName});

        }
     console.log(newStateObject.task);

  }
  this.setState(newStateObject);

}
  constructor(props)
  {
    super(props);
    this.state={

      task:[{counter:0,taskName:''}]

    };
    this.listUpdater= this.listUpdater.bind(this);

  }

  render()
  {
    var arrSize=this.state.task.length;
    pointer=this;
    this.state.task.push({counter:this.state.task[arrSize-1].counter+1,taskName:this.props.val});

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
                            <button class='btn btn-primary' onClick={listUpdater => pointer.listUpdater(t.counter)}>Remove Item from list</button>
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
  document.getElementById('feild').value=null;//clear feild as it is causing redundancy on delete
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
