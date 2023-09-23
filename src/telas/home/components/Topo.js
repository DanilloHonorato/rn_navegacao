import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { carregaTopo, carregaProdutores} from "../../../servicos/carregaDados";

import logo from "../../../../assets/logo.png";
import topo from "../../../mocks/topo";

class Topo extends React.Component {
    state = {
        topo: {
            textoBoasVindas: "",
            textoLegenda: "",
        },
    };

    atualizaTopo(){
        const retorno = carregaTopo();
        this.setState( {topo : retorno} );
        console.log(retorno);
    };

    componentDidMount(){
        this.atualizaTopo();
    };

    render() {
        return <View style={estilos.topo}>
            <Image source={logo} style={estilos.Image}/>
            <Text style={estilos.textoBoasVindas}> {this.state.topo.textoBoasVindas} </Text>
            <Text style={estilos.textoLegenda}> {this.state.topo.textoLegenda} </Text>
        </View>
    };
};

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    Image: {
        width: 70,
        height: 28,
    },
    textoBoasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646"
    },
    textoLegenda: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3"
    },
});

export default Topo;
