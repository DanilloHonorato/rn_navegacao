import React from "react";
import {SafeAreaView, StatusBar} from "react-native"

import useProdutores from "./src/hooks/useProdutores";

import Home from "./src/telas/home";
import Cesta from "./src/telas/cesta";

export default function App() {
  const produtores = useProdutores(false);

  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <Home melhoresProdutores={true} />
    {/* {produtores.length > 0 && 
      <Cesta produtor={{
        nome: produtores[0].nome, 
        imagem: produtores[0].imagem
      }}
      {...produtores[0].cestas[0]} />
    } */}
  </SafeAreaView>
}
