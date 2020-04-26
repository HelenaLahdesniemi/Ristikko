import React from 'react'



//Määrittelee React-komponentin nimeltä Game

const Game = () => {
    console.log('Testi')
    return(
    <div>
        <h1>Ristikkopeli</h1>
        <Board />
    </div>
)
}
 /*  ************************************************   */
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
    
  
    render() {
      const status = 'Next player: X';
      const ruutuStyle = {
        color: 'white',
        backgroundColor: 'black',
        width: '25px',
        height: '25px'
    }
    const valiStyle = {
        backroungColor: 'white',
        color: 'black',
        width: '25px',
        height: '25px'
    }
    
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
                    <td className="ruutu5" style={ruutuStyle}></td>
                    <td className="ruutu6" style={ruutuStyle}></td>
                    <td className="ruutu7" style={ruutuStyle}></td>
                    <td className="ruutu8" style={ruutuStyle}></td>
                    <td className="ruutu9" style={ruutuStyle}></td>
                </tr>
                <tr className="rivi2">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={valiStyle}></td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}></td>
                    <td className="ruutu6" style={ruutuStyle}></td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" style={valiStyle}></td>
                    <td className="ruutu9" style={ruutuStyle}></td>
                    <td className="ruutu10" style={valiStyle}></td>
                </tr>
                <tr className="rivi3">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={valiStyle}>4.</td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}> 2.</td>
                    <td className="ruutu6" style={ruutuStyle}></td>
                    <td className="ruutu7" style={ruutuStyle}></td>
                    <td className="ruutu8" style={ruutuStyle}></td>
                    <td className="ruutu9" style={ruutuStyle}></td>
                    <td className="ruutu10" style={ruutuStyle}></td>
                </tr>
                <tr className="rivi4">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={ruutuStyle}></td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}></td>
                    <td className="ruutu6" style={ruutuStyle}></td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" style={valiStyle}></td>
                    <td className="ruutu9" style={ruutuStyle}></td>
                </tr>
                <tr className="rivi5">
                    <td className="ruutu1" style={valiStyle}>5.</td>
                    <td className="ruutu2" style={ruutuStyle}></td>
                    <td className="ruutu3" style={ruutuStyle}></td>
                    <td className="ruutu4" style={ruutuStyle}></td>
                    <td className="ruutu5" style={ruutuStyle}></td>
                    <td className="ruutu6" style={ruutuStyle}></td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" style={valiStyle}></td>
                    <td className="ruutu9" style={valiStyle}></td>
                </tr>
                <tr className="rivi6">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={ruutuStyle}></td>
                    <td className="ruutu3" style={valiStyle}></td>
                    <td className="ruutu4" style={valiStyle}></td>
                    <td className="ruutu5" style={valiStyle}></td>
                    <td className="ruutu6" style={valiStyle}></td>
                    <td className="ruutu7" style={valiStyle}></td>
                    <td className="ruutu8" style={valiStyle}></td>
                </tr>
                <tr className="rivi7">
                    <td className="ruutu1" style={valiStyle}></td>
                    <td className="ruutu2" style={ruutuStyle}></td>
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
//Renderöi komponentin sisällön tiedoston public/index.html määrittelemään div-elementtiin, jonka
//id:n arvona on 'root
export default Game
