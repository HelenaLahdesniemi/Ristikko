import React, { Component } from 'react'
import ReactDOM from 'react-dom'

var createReactClass = require('create-react-class')


class Game extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        vastaukset.map(v =>v.name);
        console.log('klikattu');
        console.log(vastaukset[0].vastaus[0])
            var kirjain14 =vastaukset[0].vastaus[0],
                kirjain15 =vastaukset[0].vastaus[1],
                kirjain16 =vastaukset[0].vastaus[2],
                kirjain17 =vastaukset[0].vastaus[3],
                kirjain18 =vastaukset[0].vastaus[4];

            var kirjain35 =vastaukset[1].vastaus[0],
                kirjain36 =vastaukset[1].vastaus[1],
                kirjain37 =vastaukset[1].vastaus[2],
                kirjain38 =vastaukset[1].vastaus[3],
                kirjain39 =vastaukset[1].vastaus[4];

            var kirjain28 =vastaukset[2].vastaus[1],
                kirjain48 =vastaukset[2].vastaus[3];

            var kirjain41 =vastaukset[3].vastaus[0],
                kirjain51 =vastaukset[3].vastaus[1],
                kirjain61 =vastaukset[3].vastaus[2],
                kirjain71 =vastaukset[3].vastaus[3];

            var kirjain52 =vastaukset[4].vastaus[1],
                kirjain53 =vastaukset[4].vastaus[2],
                kirjain54 =vastaukset[4].vastaus[3],
                kirjain55 =vastaukset[4].vastaus[4];

            var kirjain25 =vastaukset[5].vastaus[1],
                kirjain45 =vastaukset[5].vastaus[3];


        
        var sana1Kirjain1 = this.refs.vastaus1.value,
            sana1Kirjain2 = this.refs.vastaus2.value,
            sana1Kirjain3 = this.refs.vastaus3.value,
            sana1Kirjain4 = this.refs.vastaus4.value,
            sana1Kirjain5 = this.refs.vastaus5.value,

            sana2Kirjain1 = this.refs.vastaus8.value,
            sana2Kirjain2 = this.refs.vastaus9.value,
            sana2Kirjain3 = this.refs.vastaus10.value,
            sana2Kirjain4 = this.refs.vastaus11.value,
            sana2Kirjain5 = this.refs.vastaus12.value,

            
            sana3Kirjain2 = this.refs.vastaus7.value,
            sana3Kirjain4 = this.refs.vastaus15.value,

            sana4Kirjain1 = this.refs.vastaus13.value,
            sana4Kirjain2 = this.refs.vastaus16.value,
            sana4Kirjain3 = this.refs.vastaus21.value,
            sana4Kirjain4 = this.refs.vastaus22.value,

            sana5Kirjain2 = this.refs.vastaus17.value,
            sana5Kirjain3 = this.refs.vastaus18.value,
            sana5Kirjain4 = this.refs.vastaus19.value,
            sana5Kirjain5 = this.refs.vastaus20.value,

            sana6Kirjain2 = this.refs.vastaus6.value,
            sana6Kirjain4 = this.refs.vastaus14.value;

        

         if ((sana1Kirjain1===kirjain14)&&(sana1Kirjain2===kirjain15)&&(sana1Kirjain3===kirjain16)&&
            (sana1Kirjain4===kirjain17)&&(sana1Kirjain5===kirjain18)&&(sana2Kirjain1===kirjain35)&&
            (sana2Kirjain2===kirjain36)&&(sana2Kirjain3===kirjain37)&&(sana2Kirjain4===kirjain38)&&
            (sana2Kirjain5===kirjain39)&&(sana3Kirjain2===kirjain28)&&(sana3Kirjain4===kirjain48)&&
            (sana4Kirjain1===kirjain41)&&(sana4Kirjain2===kirjain51)&&(sana4Kirjain3===kirjain61)&&
            (sana4Kirjain4===kirjain71)&&(sana5Kirjain2===kirjain52)&&(sana5Kirjain3===kirjain53)&&
            (sana5Kirjain4===kirjain54)&&(sana5Kirjain5===kirjain55)&&(sana6Kirjain2===kirjain25)&&
            (sana6Kirjain4===kirjain45)){
            alert("Oikea ratkaisu!")
        } else{
            alert("Väärä vastaus ")
        }
    }
    render(){
    return(
     <div>
        <Board/>
        <button type="button" onClick={this.handleClick} >
            Tarkista
        </button>
     </div>   
    )
    }
}

 class Square extends React.Component {  
    render() {
        const divStyle = {
            color: 'white',
            backgroundColor: 'blue',
            width: '100px',
            height: '100px' 
        }
      return (
           <box className="square" style = {divStyle}>,
            <input type="text"/>
            </box>
      )
    }
  }


  class Board extends React.Component {
      constructor(props){
          super(props);
          this.state = {value: ''};

          this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event){
          const value = event.target.value;
          this.setState({
              [event.target.name]: value
          })
          console.log(event.target.value);
      }
      
    renderSquare(i) {
      return <Square />;
    }
    
    render() {
      const ruutuStyle = {
        color: 'black',
    }
    const valiStyle = {
        color: 'white',
        width: '25px',
        height: '25px'
    }
     //luodaan ruudut sekä niiden input-toiminnallisuus
        return (
            <table className="puzzle">
                <tr className="rivi0">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={valiStyle}></td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}></td>
                    <td className="ruutu6" style={valiStyle}>6.</td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" style={valiStyle}></td>
                    <td className="ruutu9" style={valiStyle}>3.</td>
                </tr>
                <tr className="rivi1">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={valiStyle}></td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}> 1.</td>
                    <td className="ruutu5" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus1" name="vastaus1" size="1" value={this.state.vastaus1} onChange={this.handleChange} /></td>
                    <td className="ruutu6" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus2" ref="vastaus2"size="1" value={this.state.valuevastaus2} onChange={this.handleChange}/></td>
                    <td className="ruutu7" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus3" ref="vastaus3" size="1" value={this.state.vastaus3} onChange={this.handleChange} /></td>
                    <td className="ruutu8" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus4"ref="vastaus4" size="1" value={this.state.vastaus4} onChange={this.handleChange}/></td>
                    <td className="ruutu9" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus5" ref="vastaus5" size="1" value={this.state.vastaus5} onChange={this.handleChange}/></td>
                </tr>
                <tr className="rivi2">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={valiStyle}></td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}></td>
                    <td className="ruutu6" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus6"ref="vastaus6" size="1" value={this.state.vastaus6} onChange={this.handleChange}/></td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" sstyle={valiStyle}></td>
                    <td className="ruutu9" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus7"ref="vastaus7" size="1"value={this.state.vastaus7} onChange={this.handleChange}/></td>
                    <td className="ruutu10" style={valiStyle}></td>
                </tr>
                <tr className="rivi3">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={valiStyle}>4.</td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}> 2.</td>
                    <td className="ruutu6" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus8" ref="vastaus8" size="1"value={this.state.vastaus8} onChange={this.handleChange}/></td>
                    <td className="ruutu7" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus9"ref="vastaus9" size="1"value={this.state.vastaus9} onChange={this.handleChange}/></td>
                    <td className="ruutu8" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus10"ref="vastaus10" size="1"value={this.state.vastaus10} onChange={this.handleChange}/></td>
                    <td className="ruutu9" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus11"ref="vastaus11" size="1"value={this.state.vastaus11} onChange={this.handleChange}/></td>
                    <td className="ruutu10" style={ruutuStyle}><input type="text"  maxLength="1"name="vastaus12"ref="vastaus12" size="1"value={this.state.vastaus12} onChange={this.handleChange}/></td>
                </tr>
                <tr className="rivi4">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus13" ref="vastaus13" size="1"value={this.state.vastaus13} onChange={this.handleChange}/></td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}></td>
                    <td className="ruutu6" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus14" ref="vastaus14" size="1"value={this.state.vastaus14} onChange={this.handleChange}/></td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" style={valiStyle}></td>
                    <td className="ruutu9" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus15" ref="vastaus15" size="1"value={this.state.vastaus15} onChange={this.handleChange}/></td>
                </tr>
                <tr className="rivi5">
                    <td className="ruutu1" style={valiStyle}>5.</td>
                    <td className="ruutu2" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus16" ref="vastaus16" size="1"value={this.state.vastaus16} onChange={this.handleChange}/></td>
                    <td className="ruutu3" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus17" ref="vastaus17" size="1"value={this.state.vastaus17} onChange={this.handleChange}/></td>
                    <td className="ruutu4" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus18" ref="vastaus18" size="1"value={this.state.vastaus18} onChange={this.handleChange}/></td>
                    <td className="ruutu5" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus19" ref="vastaus19" size="1"value={this.state.vastaus19} onChange={this.handleChange}/></td>
                    <td className="ruutu6" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus20" ref="vastaus20" size="1"value={this.state.vastaus20} onChange={this.handleChange}/></td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" style={valiStyle}></td>
                    <td className="ruutu9" style={valiStyle}></td>
                </tr>
                <tr className="rivi6">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus21" ref="vastaus21" size="1"value={this.state.vastaus21} onChange={this.handleChange}/></td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}></td>
                    <td className="ruutu6" style={valiStyle}></td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" style={valiStyle}></td>
                </tr>
                <tr className="rivi7">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={ruutuStyle}><input type="text"  maxLength="1" name="vastaus22" ref="vastaus22" size="1"value={this.state.vastaus22} onChange={this.handleChange}/></td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}></td>
                    <td className="ruutu6" style={valiStyle}></td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" style={valiStyle}></td>
                    <td className="ruutu9" style={valiStyle}></td>
                </tr>
            </table>
        );
        }
    }

var vastaukset = [
    {
        vastaus: 'orava',
    },
    {
        vastaus: 'aslak'
    },
    {
        vastaus: 'asat'
    },
    {
        vastaus: 'elon'
    },
    {
        vastaus: 'lokit'
    },
    {
        vastaus: 'react'
    }
]
           
export default Game 
  
//Renderöi komponentin sisällön tiedoston public/index.html määrittelemään div-elementtiin, jonka
//id:n arvona on 'root

