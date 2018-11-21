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
        temp[k] = <span key={text[k]}>{text[k]}<br/></span>;
      }
      groups.push("Group "+(i+1),<span><br/>{temp}</span>);
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
        <div className="div1">
        <h1>Random Team Generator</h1>
        <form name="forms" onSubmit={this.handle}>
        
        <label for="file">Upload from CSV: </label>
        <input type="file" name="file" id="file" className='input-file' accept='.csv' onChange={e => this.handleFile(e.target.files[0])}></input><br/>
        
        <label for="names">Names: </label><br/>
         <textarea style={{width:"400px",height:"300px"}} name="names" onChange={this.getsize.bind(this)} required></textarea><br/>
        <label for="howmany">How many groups?</label><br/>
         <input type="number" min = '1' max={this.state.sizes} name="howmany" style={{width:"300px"}}></input><br/>

         <button type="submit" className="button3" >Generate</button>
         </form>
         <div>
        
        
         
          </div>
          </div>
          <div className="div1">
          <h3 style={{marginTop:"30px"}}>Generate Teams</h3>
    {this.state.divz.map((item,i) =>
         
         <div style={{display:"inline-block",verticalAlign:"top",alignContent:"left",borderRight:"2px"}}  key ={i}>{item}<br/></div>
        
      )}
  

          </div>
       
      </div>
    );
  }
}

export default App;
