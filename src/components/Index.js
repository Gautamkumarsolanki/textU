import React from "react";
import Alert from "./Alert";
import TextForm from "./TextForm";
function Index(props){
    return (
        <>
        <Alert data={props.data}/>
        <TextForm mode={props.mode} data={props.dataTransfer} /> 
        </>
    )
}export default Index;