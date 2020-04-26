import React from 'react'
import ReactDOM from 'react-dom'

var createReactClass = require('create-react-class')

var Game = createReactClass({

    render(){
        return(
    <div>       
        <div>
            Moi
        </div>
        <Board/>
    </div> 
        )}
})
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
    renderSquare(i) {
      return <Square />;
    }
    renderToggle(i){
        return <Toggle/>;
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
    
        return (
            <table className="puzzle">
                <button onClick={console.log("morooo")}>Tarkista</button>
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
                    <td className="ruutu5" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus1" size="1" /></td>
                    <td className="ruutu6" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus2" size="1" /></td>
                    <td className="ruutu7" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus3" size="1" /></td>
                    <td className="ruutu8" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus4" size="1" /></td>
                    <td className="ruutu9" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus5" size="1" /></td>
                </tr>
                <tr className="rivi2">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={valiStyle}></td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}></td>
                    <td className="ruutu6" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus6" size="1"/></td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" sstyle={valiStyle}></td>
                    <td className="ruutu9" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus7" size="1"/></td>
                    <td className="ruutu10" style={valiStyle}></td>
                </tr>
                <tr className="rivi3">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={valiStyle}>4.</td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}> 2.</td>
                    <td className="ruutu6" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus8" size="1"/></td>
                    <td className="ruutu7" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus9" size="1"/></td>
                    <td className="ruutu8" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus10" size="1"/></td>
                    <td className="ruutu9" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus11" size="1"/></td>
                    <td className="ruutu10" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus12" size="1"/></td>
                </tr>
                <tr className="rivi4">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus13" size="1"/></td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}></td>
                    <td className="ruutu6" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus14" size="1"/></td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" style={valiStyle}></td>
                    <td className="ruutu9" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus15" size="1"/></td>
                </tr>
                <tr className="rivi5">
                    <td className="ruutu1" style={valiStyle}>5.</td>
                    <td className="ruutu2" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus16" size="1"/></td>
                    <td className="ruutu3" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus17" size="1"/></td>
                    <td className="ruutu4" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus18" size="1"/></td>
                    <td className="ruutu5" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus19" size="1"/></td>
                    <td className="ruutu6" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus20" size="1"/></td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" style={valiStyle}></td>
                    <td className="ruutu9" style={valiStyle}></td>
                </tr>
                <tr className="rivi6">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus21" size="1"/></td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}></td>
                    <td className="ruutu6" style={valiStyle}></td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" style={valiStyle}></td>
                </tr>
                <tr className="rivi7">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={ruutuStyle}><input type="text"  maxLength="1" ref="vastaus22" size="1"/></td>
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
    var Puzzle = createReactClass({
        getInitialState:function(){
            return {value:''}
        },
        render: function(){
            var value = this.state.value;
            return <input type="text" defaultValue={value} onChange={this.handleChange}/>
        }
    
    })

    var Vinkit = createReactClass({
        render: function(){
            var statements = this.props.data.map(function(vinkit){
                return(
                    <Output vastaus={vinkit.vastaus}></Output>
                )
            })
            return(
                <div className = "vinkkiLista">
                    {statements}
                </div>
            )
        }
    })

    var Output = createReactClass({
        render:function(){
            return(
                <div className="vinkit">
                    <p>{this.props.vastaus}</p>
                </div>
            )
        }
    })
        
    class Toggle extends React.Component{
        constructor(props){
            super(props);
            this.handleClick = this.handleClick.bind(this)
        }
        

        render(){
           /* handleClick(){
                var kirjain14 = this.props.data[0].answer.charAt(0),
                    kirjain15 = this.props.data[0].answer.charAt(1),
                    kirjain16 = this.props.data[0].answer.charAt(2),
                    kirjain17 = this.props.data[0].answer.charAt(3),
                    kirjain18 = this.props.data[0].answer.charAt(4);
                
                var kirjain35 = this.props.data[1].answer.charAt(0),
                    kirjain36 = this.props.data[1].answer.charAt(1),
                    kirjain37 = this.props.data[1].answer.charAt(2),
                    kirjain39 = this.props.data[1].answer.charAt(4);
    
                var kirjain28 = this.props.data[2].answer.charAt(1),
                    kirjain38 = this.props.data[2].answer.charAt(2),
                    kirjain48 = this.props.data[2].answer.charAt(3);
    
                var kirjain41 = this.props.data[3].answer.charAt(0),
                    kirjain51 = this.props.data[3].answer.charAt(1),
                    kirjain61 = this.props.data[3].answer.charAt(2),
                    kirjain71 = this.props.data[3].answer.charAt(3);
    
                var kirjain52 = this.props.data[4].answer.charAt(1),
                    kirjain53 = this.props.data[4].answer.charAt(2),
                    kirjain54 = this.props.data[4].answer.charAt(3),
                    kirjain55 = this.props.data[4].answer.charAt(4);
    
                var kirjain25 = this.props.data[5].answer.charAt(1),
                    kirjain45 = this.props.data[5].answer.charAt(3);
    
    
    
                var sana1Kirjain1 = ReactDOM.findDOMNode(this.refs.vastaus1).value.toUpperCase(),
                    sana1Kirjain2 = ReactDOM.findDOMNode(this.refs.vastaus2).value.toUpperCase(),
                    sana1Kirjain3 = ReactDOM.findDOMNode(this.refs.vastaus3).value.toUpperCase(),
                    sana1Kirjain4 = ReactDOM.findDOMNode(this.refs.vastaus4).value.toUpperCase(),
                    sana1Kirjain5 = ReactDOM.findDOMNode(this.refs.vastaus5).value.toUpperCase(),
    
                    sana2Kirjain1 = ReactDOM.findDOMNode(this.refs.vastaus8).value.toUpperCase(),
                    sana2Kirjain2 = ReactDOM.findDOMNode(this.refs.vastaus9).value.toUpperCase(),
                    sana2Kirjain3 = ReactDOM.findDOMNode(this.refs.vastaus10).value.toUpperCase(),
                    sana2Kirjain4 = ReactDOM.findDOMNode(this.refs.vastaus11).value.toUpperCase(),
                    sana2Kirjain5 = ReactDOM.findDOMNode(this.refs.vastaus12).value.toUpperCase(),
    
                    sana3Kirjain1 = ReactDOM.findDOMNode(this.refs.vastaus5).value.toUpperCase(),
                    sana3Kirjain2 = ReactDOM.findDOMNode(this.refs.vastaus7).value.toUpperCase(),
                    sana3Kirjain3 = ReactDOM.findDOMNode(this.refs.vastaus11).value.toUpperCase(),
                    sana3Kirjain4 = ReactDOM.findDOMNode(this.refs.vastaus15).value.toUpperCase(),
    
                    sana4Kirjain1 = ReactDOM.findDOMNode(this.refs.vastaus13).value.toUpperCase(),
                    sana4Kirjain2 = ReactDOM.findDOMNode(this.refs.vastaus16.value.toUpperCase(),
                    sana4Kirjain3 = ReactDOM.findDOMNode(this.refs.vastaus21).value.toUpperCase(),
                    sana4Kirjain4 = ReactDOM.findDOMNode(this.refs.vastaus22).value.toUpperCase(),
    
                    sana5Kirjain1 = ReactDOM.findDOMNode(this.refs.vastaus16).value.toUpperCase(),
                    sana5Kirjain2 = ReactDOM.findDOMNode(this.refs.vastaus17).value.toUpperCase(),
                    sana5Kirjain3 = ReactDOM.findDOMNode(this.refs.vastaus18).value.toUpperCase(),
                    sana5Kirjain4 = ReactDOM.findDOMNode(this.refs.vastaus19).value.toUpperCase(),
                    sana5Kirjain5 = ReactDOM.findDOMNode(this.refs.vastaus20).value.toUpperCase(),
    
                    sana6Kirjain1 = ReactDOM.findDOMNode(this.refs.vastaus2).value.toUpperCase(),
                    sana6Kirjain2 = ReactDOM.findDOMNode(this.refs.vastaus6).value.toUpperCase(),
                    sana6Kirjain3 = ReactDOM.findDOMNode(this.refs.vastaus8).value.toUpperCase(),
                    sana6Kirjain4 = ReactDOM.findDOMNode(this.refs.vastaus14).value.toUpperCase(),
                    sana6Kirjain5 = ReactDOM.findDOMNode(this.refs.vastaus20).value.toUpperCase(),
            
            },

            if ((sana1Kirjain1===kirjain14)&&(sana1Kirjain2===kirjain15)&&(sana1Kirjain3===kirjain16)&&
                    (sana1Kirjain4===kirjain17)&&(sana1Kirjain5===kirjain18)&&(sana2Kirjain1===kirjain35)&&
                    (sana2Kirjain2===kirjain36)&&(sana2Kirjain3===kirjain37)&&(sana2Kirjain4===kirjain38)&&
                    (sana2Kirjain5===kirjain39)&&(sana3Kirjain2===kirjain28)&&(sana3Kirjain4===kirjain48)&&
                    (sana4Kirjain1===kirjain41)&&(sana4Kirjain2===kirjain51)&&(sana4Kirjain3===kirjain61)&&
                    (sana4Kirjain4===kirjain71)&&(sana5Kirjain2===kirjain52)&&(sana5Kirjain3===kirjain53)&&
                    (sana5Kirjain4===kirjain54)&&(sana5Kirjain5===kirjain55)&&(sana6Kirjain2===kirjain25)&&
                    (sana6Kirjain4===kirjain45))
                {
                    alert("correct");
                }
                    else{
                        alert("not correct");
                    }*/
            return(
            <button onClick={this.handleClick}>
            </button>
        )}
        
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

