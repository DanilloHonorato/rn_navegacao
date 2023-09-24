import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

// import { carregaProdutores } from "../../../servicos/carregaDados";
import Produtor from "./Produtor";
import useProdutores from "../../../hooks/produtores";

export default function Produtores({Topo: Topo}){

    const [titulo, lista] = useProdutores(); // Esta linha substitui todas as linhas comentadas
    
    // const [titulo, setTitulo] = useState('');
    // const [lista, setLista] = useState([]);

    // useEffect( () => {
    //     const retorno = carregaProdutores();
    //     setTitulo(retorno.titulo);
    //     setLista(retorno.lista);

    //     console.log(retorno);
    // }, []);

    const TopoLista = () =>{ 
        return <>
            <Topo />
            <Text style={estilos.titulo} > {titulo} </Text>
        </>
    };

    return <FlatList 
            data={lista}
            renderItem={({ item }) => <Produtor {...item} />}
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={TopoLista}
        />
};

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: "#464646"
    },
});
