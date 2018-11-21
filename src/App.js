import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state={
    text:'',
    sizes:1,
    error:'',
    divz:[],
  }
 handle =(event) => {
   event.preventDefault();
   if(event.target.names.value === ''){
   
     this.setState({error:"TextArea cannot be empty"});
   }
    var text = event.target.names.value;
    text = text.split('\n');
    var sizes = parseInt(event.target.howmany.value);
    
 
    text=this.shuffle(text);
 
    var groups = []
    var temp =[]
    var j =0
    for (let i=0;i<sizes;i++){
      temp =[]

      for (let k =j;k<j+text.length/sizes;k++ ){
        temp[k] = <div className="columns">{text[k]}</div>;
      }
      groups.push("Group "+(i+1),<ol>{temp}</ol>);
      j = j+Math.ceil(text.length/sizes)
      
    }
    //console.log(groups);
   //alert(groups);
  this.setState({divz: groups});
  }
  getsize = (e) =>{
this.setState({sizes:e.target.value.split('\n').length})
  }

  shuffle =(o)=> {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };


  


  render() {

    return (
      <div className="App">
        <header className="App-header">
        <h1>Random Team Generator</h1>
        <form name="forms" onSubmit={this.handle}>
        <input type="file" id="file" className='input-file' accept='.csv' onChange={e => this.handleFile(e.target.files[0])}></input><br/>
         <textarea style={{width:"400px",height:"300px"}} name="names" onChange={this.getsize.bind(this)} required></textarea><br/>
         <input type="number" min = '1' max={this.state.sizes} name="howmany" style={{width:"300px"}}></input>
         <input type="submit" ></input>
         </form>
         <div>
        
        
         <div>{this.state.divz.map((item,i) =>
         
            <div className="columns" key ={i}>{item}<br/></div>
           
         )}
     
          </div>
          </div>
         
        </header>
      </div>
    );
  }
}

export default App;
