import { View, Image, StatusBar, Alert } from "react-native"
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons"
import { Link, router } from "expo-router"
import axios from "axios"

import { Input } from "@/components/input"
import { colors } from "@/styles/colors"
import { useBadgeStore } from "@/store/badge-store"

import { api } from "@/server/api"
import { Button } from "@/components/button"
import { useState } from "react"

const EVENT_ID = "9e9bd979-9d10-4915-b339-3786b1634f33"


export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const badgeStore = useBadgeStore()

    async function handleRegister(){
        try{
            if(!name.trim() || !email.trim()){
                return Alert.alert("Inscrição", "Preencha todos os campos!")
            }

            setIsLoading(true)

            const registerResponde = await api.post(`/events/${EVENT_ID}/attendees`, {
                name, 
                email
            })

            if(registerResponde.data.attendeeId){
                const badgeRespoonde = await api.get(`/attendees/${registerResponde.data.attendeeId}/badge`)

                badgeStore.save(badgeRespoonde.data.badge)
                Alert.alert("Inscrição", "Inscrição realizada com sucesso!", [
                    { text: "OK", onPress: () => router.push("/ticket") }
                ])
            }
        }catch (error){
            console.log(error)
            setIsLoading(false)

            if(axios.isAxiosError(error)){
                if(String(error.response?.data.message).includes("already registered")){
                    return Alert.alert("Inscrição", "Este e-mail já está cadastrado!")
                }

            }

            Alert.alert("Inscrição", "Não foi posível fazer a inscrição")
        }
    }

    return (
        <View className="bg-black flex-1 items-center justify-center">
            <StatusBar barStyle="light-content" />
            <Image 
            source={require("@/assets/logo.png")} 
            className="h-10" 
            resizeMode="contain" />
            <View className="w-full p-8 mt-2 gap-3">
                <Input>
                    <FontAwesome6 
                    name="user-circle" 
                    size={20}
                    color={colors.green[200]} />
                    <Input.Field 
                    placeholder="Nome Completo"
                    onChangeText={setName} />
                </Input>
                <Input>
                    <MaterialIcons 
                    name="alternate-email" 
                    size={20}
                    color={colors.green[200]} />
                    <Input.Field 
                    placeholder="E-mail" 
                    keyboardType="email-address"
                    onChangeText={setEmail} />
                </Input>
                <Button 
                title="Realizar inscrição" 
                onPress={handleRegister}
                isLoading={isLoading} />

                <Link 
                href="/" 
                className="text-gray-100 text-base font-bold text-center mt-8">
                    Já possui ingresso?
                </Link>
                
            </View>
            
        </View>
    )
}

