import React from "react"
import { SafeAreaView } from "react-native"
import Login from "./login/login"

export default function App() {
    return (
        <SafeAreaView style={{backgroundColor: '#1F1F50'}}>
            <Login/>
        </SafeAreaView>
    );
}