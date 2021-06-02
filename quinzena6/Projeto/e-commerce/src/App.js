import React from "react";
import styled from "styled-components"
import {products} from "./products"

const AppContainer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 16px;
gap: 8px;
`

export default class App extends React.Component {
  state = {
    carrinho: [],
    valorMin: 0,
    valorMax: 2000,
    valorNome: "prod"
  };

adicionarAoCarrinho = (product) => {
  const produtoNoCarrinho = this.state.carrinho.find((produtoNoCarrinho) => {
    if (produtoNoCarrinho.id === product.id) {
      return true;
    }
    return false;
  });

  if (!produtoNoCarrinho) {
    const novoProdutoNoCarrinho = {
      ...product,
      quantidade: 1
    };
/// aqui é o array copiado, que vai ser usado para adicionar no carrinho
const copiaDoCarrinho = [...this.state.carrinho, novoProdutoNoCarrinho];

this.setState({ carrinho: copiaDoCarrinho });
} else {
const copiaDoCarrinho = this.state.carrinho.map((produtoNoCarrinho) => {
  if (produtoNoCarrinho.id === product.id) {
    return {
      ...produtoNoCarrinho,
      quantidade: produtoNoCarrinho.quantidade + 1
    };
  } else {
    return produtoNoCarrinho;
  }
});
this.setState({ carrinho: copiaDoCarrinho });
}
};

removerDoCarrinho = (product) => {
  const itemsCarrinho =  this.state.product.filter((carrinhoRemoved) => {
    return product !== product
  })
  this.setState({carrinho: itemsCarrinho});
}


  render() {
    //Aqui é o valor total do looping
    let valorTotal = 0;

    for (let produtoNoCarrinho of this.state.carrinho) {
      valorTotal += produtoNoCarrinho.value * produtoNoCarrinho.quantidade;
    }

    // Valor total do carrinho - reduce
    const valorTotalReduce = this.state.carrinho.reduce(
      (valorAcumulado, produtoNoCarrinho) => {
        const valorDoProduto =
          produtoNoCarrinho.value * produtoNoCarrinho.quantidade;

        return valorAcumulado + valorDoProduto;
      },
      0
    );

    // Aqui começa os filtros
    const listaFiltrada = products
      .filter((product) => {
        if (product.value >= this.state.valorMin) {
          return true;
        } else {
          return false;
        }
      })
      .filter((product) => {
        if (product.value <= this.state.valorMax) {
          return true;
        } else {
          return false;
        }
      })
      .filter((product) => {
        if (
          product.name
            .toLowerCase()
            .includes(this.state.valorNome.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });


    return (
      <AppContainer>
        <div>
          <h3>Lista de produtos</h3>
          {listaFiltrada.map((product) => {
            return (
              <div>
                <img src={product.imageUrl} />
                <p>
                  {product.name} - R${product.value}
                </p>
                <button onClick={() => this.adicionarAoCarrinho(product)}>
                  Adicionar ao carrinho
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <h3>Carrinho de compras</h3>
          {this.state.carrinho.map((product) => {
            return (
              <div>
                <p>
                  {product.name} - R${product.value * product.quantidade} -{" "}
                  {product.quantidade}x
                  removerDoCarrinho={this.removerDoCarrinho}
                </p>
                <button onClick={() => this.props.removerDoCarrinho(this.props.product.id)}>Remover</button>

                
              </div>
            );
          })}
          <p>Valor total do carrinho: R${valorTotalReduce}</p>
        </div>
      </AppContainer>
    );
  }
}