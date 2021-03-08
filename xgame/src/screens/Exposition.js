import React, {Component} from 'react'
import './Exposition.css';
import Json from '../products.json'
var numero = 0;
class Exposition extends Component {
  
  state = {
    carrinho: [],
    quantidade: 0
  }
  
  comprar (){
    let compra = {
      subTotal: 0,
      valorDoFrete: 0,
      valorTotal: 0
    }

    for(let compras of this.state.carrinho){
      compra.subTotal += parseInt(compras.quantidade) * compras.valor
    }

    compra.subTotal = compra.subTotal
    compra.valorDoFrete = compra.subTotal * 10 / 100
    compra.valorTotal = (compra.subTotal + compra.valorDoFrete)

    
    alert(
      "Valor Sub total: R$" + compra.subTotal.toFixed(2) + 
      "\nValor do Frete: R$" + compra.valorDoFrete.toFixed(2) +
      "\nValor total: R$" + compra.valorTotal.toFixed(2) +
      "\nCompra realizada com sucesso!"
    )

    this.state.quantidade = ''
    this.state.carrinho = []
  }

  addCarrinho (id, nome, valor) {
    this.state.carrinho.push(
      {
        id: id, 
        nome: nome, 
        quantidade:this.state.quantidade,
        valor: valor
      }
    )
    function carrinho() {
      var p = document.querySelector('p')
        var inp = document.getElementById('conteudo').value
        numero+=parseInt(inp);
        if(numero <=-1){
          p.innerText = 'carrinho:' + 0;
        }else{
          p.innerText = 'carrinho:' + numero;
        }
      
    }
    carrinho()
    alert(`\nProduto ${nome} adicionado no carrinho\n`)
  }

  handlequantidade = (event) => {
    this.setState({
      quantidade: event.target.value
    })
  }

  render(){
    return (
      <div>
        {
          Json.map(({id, name, price, score, image}) => {
            return <div>
            <div >
              <aside>
                <p></p>
              
              </aside>

                <div id="screem">
                  <img src={ process.env.PUBLIC_URL + "/assets/" + image} />
                </div>

                <h3>{name}</h3>
                <h3>{`R$${price}`}</h3>
                <h5>{`Score:${score}`}</h5>
            
                <input
                 id="conteudo"
                 className="form-control"
                 type="number" value={this.props.quantidade} 
                 placeholder="Digite a quantidade de jogos para comprar" 
                 onChange={this.handlequantidade} 
                 />
                &ensp;&ensp;&ensp;
                <button onClick={() => this.addCarrinho(id, name, price)}>Adicionar no carrinho</button>
              </div>
              <br/>
              <br/>
            </div>
          })
        }
        <button onClick={() => this.comprar()}>Comprar</button>
      </div>
    );
  }
}



export default Exposition