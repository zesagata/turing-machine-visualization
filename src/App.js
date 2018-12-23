import React, { Component } from 'react';
import './App.css';
import Graph from 'react-graph-vis'
import GrapConfig from './config/vis.config.js';
import StateConfig from './config/state.config.js';
import Form from './Component/Form.js';
import Operation from './algorithm/Operation.js';
import {time} from './config/delay.config.js';

class App extends Component {

  constructor () {
    super();
    this.defaultState = StateConfig;
    this.state = {
      currOperation:undefined,
      result:[],
      graphState:StateConfig,
      startAnimate:false,
      i:0,
      network:{
        add:undefined
      },
      history:null
    }
    this.oprt = new Operation();
  }

  onSubmitForm = (data) =>{ 
    console.log("(Log) Receive from Form",data);
    this.setState(state=>{
      if(data.operation == "add"){
        state.result = this.oprt.add(Number(data.x1),Number(data.x2));
        state.currOperation="add";
      }else if(data.operation == "sub"){
        state.result = this.oprt.sub(Number(data.x1),Number(data.x2));
        state.currOperation="sub";
      }else if(data.operation == "mult"){
        state.result = this.oprt.mult(Number(data.x1),Number(data.x2));
        state.currOperation = "mult";
      }else if(data.operation == "fac"){
        state.result = this.oprt.fac(Number(data.x1));
        state.currOperation = "fac";
      }
      state.startAnimate="true";
      state.i = 0;
      return state;
    })
  }

  componentDidUpdate(){

    if(this.state.startAnimate && this.state.network[this.state.currOperation] != undefined){
      setTimeout(()=>{
        
        const network = this.state.network[this.state.currOperation];
        let temp = JSON.parse(JSON.stringify(this.defaultState[this.state.currOperation]))

        if(this.state.i < this.state.result.length){
          let currStack;
          let tempIdSelected;
          if(this.state.currOperation == "add" || this.state.currOperation == "sub"){
            currStack = this.state.result[this.state.i].split("-");   //"state-tape-i" -> [state,tape,i]
            temp.nodes = temp.nodes.map(item=>{
              if(item.label.toLowerCase() === currStack[0]){
                item.color = "#D0CD94";
              }else{
                item.color = "#EFF3FF";
              }
              return item;
            })
            tempIdSelected = [];
            temp.edges = temp.edges.map(item=>{
              if(String(item.from) === currStack[0].charAt(1)){
                if(currStack[1].split("").length > currStack[2] && item.label.charAt(0).toLowerCase() === String(currStack[1].charAt(currStack[2])).toLowerCase()){
                  tempIdSelected.push(item.id);
                }else if(currStack[1].split("").length == currStack[2] && item.label.charAt(0) == "B"){
                  tempIdSelected.push(item.id);
                }
              }
              return item;
            })
          }else if(this.state.currOperation == "mult" || this.state.currOperation == "fac"){
            currStack = this.state.result[this.state.i]; 
            let {i,j,k,tape1,tape2,tape3} = currStack;
            let _inpT1 = (tape1.charAt(i) === "") ? "B":tape1.charAt(i);
            let _inpT2 = (tape2.charAt(j) === "") ? "B":tape2.charAt(j);
            let _inpT3 = (tape3.charAt(k) === "") ? "B":tape3.charAt(k);
            let inputAll = _inpT1+_inpT2+_inpT3;
            temp.nodes = temp.nodes.map(item=>{
              if(item.label.toLowerCase() === currStack.state){
                item.color = "#D0CD94";
              }else{
                item.color = "#EFF3FF";
              }
              return item;
            })
            tempIdSelected = [];
            temp.edges = temp.edges.map(item=>{
              if(String(item.from) === currStack.state.charAt(1)){
                console.log(item.input);
                console.log(inputAll)
                if(item.input.toUpperCase() === inputAll.toUpperCase()){
                  tempIdSelected.push(item.id);
                }
              }
              return item;
            })
          }
          network.setData(temp);
          network.selectEdges(tempIdSelected);
          this.setState(state=>{
            state.network[state.currOperation] = network;
            state.graphState[state.currOperation] = temp;
            state.i += 1;
            return state;
          })
        }else{
          temp.nodes = temp.nodes.map(item=>{
            item.color = "#EFF3FF";
            return item;
          })
          network.setData(temp);
          network.selectEdges([]);
          this.setState(state=>{
            state.network[state.currOperation] = network;
            state.data = temp;
            state.i = 0;
            state.history = true;
            state.startAnimate = false;
            return state;
          })
        }
      },time)
    }

  }

  renderCurrState = () =>{
    if(this.state.i < this.state.result.length && this.state.i != 0){
      let currStack;
      let result;
      if(this.state.currOperation == "add" || this.state.currOperation == "sub"){
        currStack = this.state.result[this.state.i-1].split("-");
        result = <span className="logtext">{`${currStack[0]}`}</span>
      }else if(this.state.currOperation == "mult" || this.state.currOperation == "fac"){
        currStack = this.state.result[this.state.i-1];
        result = <span className="logtext">{`${currStack.state}`}</span>
      }
      return result;
    }else if(this.state.i == this.state.result.length){
      let currStack;
      let result;
      if(this.state.currOperation == "add" || this.state.currOperation == "sub"){
        currStack = this.state.result[this.state.result.length-1].split("-");
        result = <span className="logtext">{`${currStack[0]}`}</span>
      }else if(this.state.currOperation == "mult"  || this.state.currOperation == "fac"){
        currStack = this.state.result[this.state.result.length-1];
        result = <span className="logtext">{`${currStack.state}`}</span>
      }
      return result;
    }
  }
  renderCurrentInput = () =>{
    if(this.state.i < this.state.result.length && this.state.i != 0){
      let currStack;
      let result;
      if(this.state.currOperation == "add" || this.state.currOperation == "sub"){
        currStack = this.state.result[this.state.i-1].split("-");
        let curr = (currStack[1].charAt(currStack[2]) == "") ? "B" : currStack[1].charAt(currStack[2]);
        result = <span className="logtext">{`${curr}`}</span>
      }else if(this.state.currOperation == "mult"  || this.state.currOperation == "fac"){
        currStack = this.state.result[this.state.i-1];
        let {i,j,k,tape1,tape2,tape3} = currStack;
        let _inpT1 = (tape1.charAt(i) === "") ? "B":tape1.charAt(i);
        let _inpT2 = (tape2.charAt(j) === "") ? "B":tape2.charAt(j);
        let _inpT3 = (tape3.charAt(k) === "") ? "B":tape3.charAt(k);
        let inputAll = _inpT1+_inpT2+_inpT3;
        result = <span className="logtext">{`${inputAll}`}</span>
      }
      return result;
    }else if(this.state.i == this.state.result.length){
      let currStack;
      let result;
      if(this.state.currOperation == "add" || this.state.currOperation == "sub"){
        currStack = this.state.result[this.state.result.length-1].split("-");
        let curr = (currStack[1].charAt(currStack[2]) == "") ? "B" : currStack[1].charAt(currStack[2]);
        result = <span className="logtext">{`${curr}`}</span>
      }else if(this.state.currOperation == "mult"  || this.state.currOperation == "fac"){
        currStack = this.state.result[this.state.result.length-1];
        let {i,j,k,tape1,tape2,tape3} = currStack;
        let _inpT1 = (tape1.charAt(i) === "") ? "B":tape1.charAt(i);
        let _inpT2 = (tape2.charAt(j) === "") ? "B":tape2.charAt(j);
        let _inpT3 = (tape3.charAt(k) === "") ? "B":tape3.charAt(k);
        let inputAll = _inpT1+_inpT2+_inpT3;
        result = <span className="logtext">{`${inputAll}`}</span>
      }
      return result;
    }
  }
  renderCurrTape = () =>{
   if(this.state.i != 0){
     let currStack;
      if(this.state.i < this.state.result.length && this.state.i != 0){
        currStack = this.state.result[this.state.i-1].split("-");
      }else if(this.state.i == this.state.result.length){
        currStack = this.state.result[this.state.result.length-1].split("-");
      }
      let spanCurrTape = [];
      for(let i = 0 ; i < currStack[1].length ; i++){
        if(i != currStack[2]){
          spanCurrTape.push(<span key={i} className="logtext">{`${currStack[1].charAt(i)}`}</span>)
        }else{
          spanCurrTape.push(<span key={i} className="logtext hightlighted">{`${currStack[1].charAt(i)}`}</span>)
        }
      }
      return spanCurrTape;
    }
  }
  renderCurrentTape1 = () =>{
    if(this.state.i != 0){
      let currStack;
      if(this.state.i < this.state.result.length && this.state.i != 0){
        currStack = this.state.result[this.state.i-1];
      }else if(this.state.i == this.state.result.length){
        currStack = this.state.result[this.state.result.length-1];
      }
      let spanCurrTape = [];
      for(let c = 0 ; c < currStack.tape1.length ; c++){
        if(c != currStack.i){
          spanCurrTape.push(<span key={c} className="logtext">{`${currStack.tape1.charAt(c)}`}</span>)
        }else{
          spanCurrTape.push(<span key={c} className="logtext hightlighted">{`${currStack.tape1.charAt(c)}`}</span>)
        }
      }
      return spanCurrTape;
    }
  }
  renderCurrentTape1 = () =>{
    if(this.state.i != 0){
      let currStack;
      if(this.state.i < this.state.result.length && this.state.i != 0){
        currStack = this.state.result[this.state.i-1];
      }else if(this.state.i == this.state.result.length){
        currStack = this.state.result[this.state.result.length-1];
      }
      let spanCurrTape = [];

      currStack.tape1 = "B"+currStack.tape1+"B";
      currStack.i = currStack.i + 1;
      for(let c = 0 ; c < currStack.tape1.length ; c++){
        if(c != currStack.i){
          spanCurrTape.push(<span key={c} className="logtext">{`${currStack.tape1.charAt(c)}`}</span>)
        }else{
          spanCurrTape.push(<span key={c} className="logtext hightlighted">{`${currStack.tape1.charAt(c)}`}</span>)
        }
      }
      return spanCurrTape;
    }
  }
  renderCurrentTape2 = () =>{
    if(this.state.i != 0){
      let currStack;
      if(this.state.i < this.state.result.length && this.state.i != 0){
        currStack = this.state.result[this.state.i-1];
      }else if(this.state.i == this.state.result.length){
        currStack = this.state.result[this.state.result.length-1];
      }
      let spanCurrTape = [];

      currStack.tape2 = "B"+currStack.tape2+"B";
      currStack.j = currStack.j + 1;
      for(let c = 0 ; c < currStack.tape2.length ; c++){
        if(c != currStack.j){
          spanCurrTape.push(<span key={c} className="logtext">{`${currStack.tape2.charAt(c)}`}</span>)
        }else{
          spanCurrTape.push(<span key={c} className="logtext hightlighted">{`${currStack.tape2.charAt(c)}`}</span>)
        }
      }
      return spanCurrTape;
    }
  }
  renderCurrentTape3 = () =>{
    if(this.state.i != 0){
      let currStack;
      if(this.state.i < this.state.result.length && this.state.i != 0){
        currStack = this.state.result[this.state.i-1];
      }else if(this.state.i == this.state.result.length){
        currStack = this.state.result[this.state.result.length-1];
      }
      let spanCurrTape = [];

      currStack.tape3 = "B"+currStack.tape3+"B";
      currStack.k = currStack.k + 1;
      for(let c = 0 ; c < currStack.tape3.length ; c++){
        if(c != currStack.k){
          spanCurrTape.push(<span key={c} className="logtext">{`${currStack.tape3.charAt(c)}`}</span>)
        }else{
          spanCurrTape.push(<span key={c} className="logtext hightlighted">{`${currStack.tape3.charAt(c)}`}</span>)
        }
      }
      return spanCurrTape;
    }
  }
  
  
  renderResult = () =>{
    if(this.state.currOperation != undefined){
      let lastStack;
      if(this.state.currOperation == "add" || this.state.currOperation == "sub"){
        lastStack = this.state.result[this.state.result.length - 1].split("-");
        return(
          <div className="result">
            <label>{`Final State : ${lastStack[0].toUpperCase()}`}</label>
            <label>{`Final Tape  : ${lastStack[1].toUpperCase()}`}</label>
          </div>
        )
      }else if(this.state.currOperation == "mult"  || this.state.currOperation == "fac"){
        lastStack = this.state.result[this.state.result.length - 1];
        return(
          <div className="result">
            <label>{`Final State   : ${lastStack.state.toUpperCase()}`}</label>
            <label>{`Final Tape  1 : ${lastStack.tape1.toUpperCase()}`}</label>
            <label>{`Final Tape  2 : ${lastStack.tape2.toUpperCase()}`}</label>
            <label>{`Final Tape  3 : ${lastStack.tape3.toUpperCase()}`}</label>
          </div>
        )
      }
    }
  }

  render() {
    console.log("(Log) Render-------------")
    return (
      <div className="main flex">
        <div className="graphcontainer flex"> 
          {(this.state.currOperation=="add") ? 
          <div className={(this.state.currOperation == 'add') ? "showgraph" : "hidden"}>
            <div className="up">
              <Graph 
                getNetwork={network => this.setState(state=>{state.network.add = network; return state})} 
                graph={this.state.graphState.add} 
                options={GrapConfig.options} 
                events={GrapConfig.events} />
            </div>
            <div className="bot">
              {<label className="logtext">Current State   : </label>}
              {this.renderCurrState()}
              {<br/>}
              {<label className="logtext">Current Input   : </label>}
              {this.renderCurrentInput()}
              { <br/>}
              {<label className="logtext">Current Tape   : </label>}
              {this.renderCurrTape()}
            </div>
          </div> : null}

          {(this.state.currOperation=="sub") ? 
          <div className={(this.state.currOperation == 'sub') ? "showgraph" : "hidden"}>
            <div className="up">
              <Graph 
                getNetwork={network => this.setState(state=>{state.network.sub = network; return state})} 
                graph={this.state.graphState.sub} 
                options={GrapConfig.options} 
                events={GrapConfig.events} />
            </div>
            <div className="bot">
              {<label className="logtext">Current State   : </label>}
              {this.renderCurrState()}
              {<br/>}
              {<label className="logtext">Current Input   : </label>}
              {this.renderCurrentInput()}
              { <br/>}
              {<label className="logtext">Current Tape   : </label>}
              {this.renderCurrTape()}
            </div>
          </div> : null}

          {(this.state.currOperation=="mult") ? 
          <div className={(this.state.currOperation == 'mult') ? "showgraph" : "hidden"}>
            <div className="up">
              <Graph 
                getNetwork={network => this.setState(state=>{state.network.mult = network; return state})} 
                graph={this.state.graphState.mult} 
                options={GrapConfig.optionsgraph} 
                events={GrapConfig.events} />
            </div>
            <div className="bot">
              {<label className="logtext">Current State   : </label>}
              {this.renderCurrState()}
              {<br/>}
              {<label className="logtext">Current Input   : </label>}
              {this.renderCurrentInput()}
              { <br/>}
              {<label className="logtext">Current Tape 1  : </label>}
              {this.renderCurrentTape1()}
              { <br/>}
              {<label className="logtext">Current Tape 2  : </label>}
              {this.renderCurrentTape2()}
              { <br/>}
              {<label className="logtext">Current Tape 3  : </label>}
              {this.renderCurrentTape3()}
              { <br/>}
            </div>
          </div> : null}

           {(this.state.currOperation=="fac") ? 
            <div className={(this.state.currOperation == 'fac') ? "showgraph" : "hidden"}>
              <div className="up">
                <Graph 
                  getNetwork={network => this.setState(state=>{state.network.fac = network; return state})} 
                  graph={this.state.graphState.fac} 
                  options={GrapConfig.optionsfac} 
                  events={GrapConfig.events} />
              </div>
              <div className="bot">
                {<label className="logtext">Current State   : </label>}
                {this.renderCurrState()}
                {<br/>}
                {<label className="logtext">Current Input   : </label>}
                {this.renderCurrentInput()}
                { <br/>}
                {<label className="logtext">Current Tape 1  : </label>}
                {this.renderCurrentTape1()}
                { <br/>}
                {<label className="logtext">Current Tape 2  : </label>}
                {this.renderCurrentTape2()}
                { <br/>}
                {<label className="logtext">Current Tape 3  : </label>}
                {this.renderCurrentTape3()}
                { <br/>}
              </div>
            </div> : null}

          <div className={(this.state.currOperation == undefined) ? "show" : "hidden"}>
            <label>Turing Machine Visualization</label>
          </div>
          
        </div>
        <div className="inputcontainer flex">
          <Form isAnimate={this.state.startAnimate} onSubmitForm={this.onSubmitForm.bind(this)}></Form>
          {(this.state.history != null && (this.state.startAnimate == false)) ? this.renderResult() : null}
        </div>
      </div>
    );
  }
}

export default App;
