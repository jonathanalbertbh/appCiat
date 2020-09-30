import React, { useState } from  'react';

import { View, Text, TextInput, Picker } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import style from './style'


function FormRegister(){

    const [selecion, setSelecion] = useState<string>('')

    

   

    return (


        <View style={style.container}>
            <Text style={style.textInput}>Técnico</Text>
            
            <Picker
                selectedValue={selecion}
                onValueChange={(itemValue, itemIndex)=> setSelecion(itemValue.toLocaleString)}
            >
                <Picker.Item value="java"  label= "java" />
            </Picker>

            
                
                <View style={style.containerMult}>
                    <View style={style.viewMult}>
                        <Text style={style.textInput}>Data</Text>
                        <TextInput style={style.inputs} placeholder="data"></TextInput>
                    </View>
                    <View style={style.viewMult}>
                        <Text style={style.textInput}>Hora de Abertura</Text>
                        <TextInput style={style.inputs} placeholder="Hora"></TextInput>
                    </View>
                </View>

            <Text style={style.textInput}>Tipo de Antendimento</Text>
            <TextInput style={style.inputs} placeholder="tipo"></TextInput>
            
            <Text style={style.textInput}>Razão Soxial</Text>    
            <TextInput style={style.inputs} placeholder="Razão"></TextInput>
            
            <Text style={style.textInput}>Nome Fantasia</Text>    
            <TextInput style={style.inputs} placeholder="Nome Fantasia"></TextInput>
            
                <View style={style.containerMult}>
                    <View style={style.viewMult}>
                        <Text style={style.textInput}>Telefone</Text>
                        <TextInput style={style.inputs}></TextInput>
                    </View>
                    <View style={style.viewMult}>
                        <Text style={style.textInput}>CNPJ</Text>
                        <TextInput style={style.inputs}></TextInput>
                    </View>
            
                </View>
            <Text style={style.textInput}>Solicitante</Text>
            <TextInput style={style.inputs}></TextInput>
            
            <Text style={style.textInput}>Descrição do problema apresentado:</Text>
            <TextInput style={style.inputs}></TextInput>
            
            
                <View style={style.containerButtons}>
                    <RectButton style={style.rectButtonGreen}>
                        <Text style={style.textButton}>Salvar</Text>
                    </RectButton>
                    <RectButton style={style.rectButtonRed}>
                        <Text style={style.textButton}>Cancelar</Text>
                    </RectButton>
                </View>
        </View>    
    )
}

export default FormRegister;