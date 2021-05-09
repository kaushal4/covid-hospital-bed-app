import React,{ useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Doughnut } from 'react-chartjs-2';

const Covid_form = ()=>{
    const [inputState,setInputState] = useState({"init":true,"loading":false});
    const [serverResponseData,setServerResponseData] = useState({"confidence":null,"prediction":[0,0]});
    const [inputOptions,setInputOptions] = useState({
        age:0,
        temprature:20,
        sex:0,
        diarrhea:0,
        fever:0,
        coughing:0,
        soreThroat:0,
        nausea:0,
        fatgue:0,
        renalDisease:0,
        diabetes:0,
    });
    const onFormSubmit = (e) =>{
        e.preventDefault();
        const params = inputOptions;
        setInputState({"init":false,"loading":true});
        axios.get("https://covid-delhi-beds-test.herokuapp.com/test",{params:params})
        .then((data)=>{
            console.log(data.data)
            const confidence = data.data.confidence[0]
            const prediction = data.data.prediction[0]===0?"no covid":"covid";
            setServerResponseData({"confidence":confidence,"prediction":prediction});
            setInputState({"init":false,"loading":false});
        });;
    }
    const onFormChange = (e) =>{
        switch(e.target.id){
            case "age": setInputOptions({...inputOptions,age:e.target.value}); break;
            case "temprature": setInputOptions({...inputOptions,temprature:e.target.value});break;
            case "male": setInputOptions({...inputOptions,sex:e.target.value});break;
            case "female": setInputOptions({...inputOptions,sex:e.target.value});break;
            case "diahrrea_yes" : setInputOptions({...inputOptions,diahrrea:e.target.value});break;
            case "diahrrea_no" : setInputOptions({...inputOptions,diahrrea:e.target.value});break;
            case "coughing_yes": setInputOptions({...inputOptions,coughing:e.target.value});break;
            case "coughing_no": setInputOptions({...inputOptions,coughing:e.target.value});break;
            case "fever_yes" : setInputOptions({...inputOptions,fever:e.target.value});break;
            case "fever_no" : setInputOptions({...inputOptions,fever:e.target.value});break;
            case "sore_yes" : setInputOptions({...inputOptions,soreThroat:e.target.value});break;
            case "sore_no" : setInputOptions({...inputOptions,soreThroat:e.target.value});break;
            case "nausea_yes": setInputOptions({...inputOptions,nausea:e.target.value});break;
            case "nausea_no": setInputOptions({...inputOptions,nausea:e.target.value});break;
            case "fatgue_yes" : setInputOptions({...inputOptions,fatgue:e.target.value});break;
            case "fatgue_no" : setInputOptions({...inputOptions,fatgue:e.target.value});break;
            case "renal_yes": setInputOptions({...inputOptions,renalDisease:e.target.value});break;
            case "renal_no": setInputOptions({...inputOptions,renalDisease:e.target.value});break;
            case "diabetes_yes" : setInputOptions({...inputOptions,diabetes:e.target.value});break;
            case "diabetes_no" : setInputOptions({...inputOptions,diabetes:e.target.value});break;
            
            default: console.log("error");
        }
    }

    const createPieChart = ()=>{
        console.log( serverResponseData.confidence[0])
         const data = {
             labels: ['model confidence for no covid', 'model confidence for covid'],
             datasets: [{
                label: 'test',
                 data: [Math.floor(serverResponseData.confidence[0]*100),Math.floor(serverResponseData.confidence[1]*100)],
                 backgroundColor: [
                     'rgba(54, 162, 235, 0.2)',
                     'rgba(255, 99, 132, 0.2)',],
                 borderColor: [
                     'rgba(54, 162, 235, 1)',
                     'rgba(255, 99, 132, 1)',],
                 borderWidth: 1, },
             ],
            
         };
        return(<div height="150px" width="150px"> <Doughnut data={data} width={150} height={150} options={{ maintainAspectRatio: false }}/> </div>)
    }
    const getResultText =  ()=>{
        if(serverResponseData.confidence[0]<0.6 && serverResponseData.confidence[0]>0.4){
            return "sorry our model can not predict your case with enough confidence"
        }else if(serverResponseData.prediction === "covid"){
            return "You might have covid"
        }else{
            return "You might have common flu"
        }
    }
    const getResultColor = ()=>{
        if(serverResponseData.confidence[0]<0.6 && serverResponseData.confidence[0]>0.4){
            return {"background-color":"hsla(54, 42%, 59%, 0.4)","border-color":"hsl(54, 42%, 59%)"}
        }else if(serverResponseData.prediction === "covid"){
            return {"background-color":"hsla(12, 51%, 65%, 0.4)","border-color":"hsl(12, 31%, 49%)"}
        }else{
            return {"background-color":"hsla(110, 28%, 55%, 0.4)","border-color":"hsl(110, 28%, 55%)"}  
        }
    }
    const renderResults = ()=>{
        if(inputState.init){
            return(
                [<div className="bar-graph"> After your survey, a visual display in the form of a pi-chart predicting the confidence level of the prediction will be shown here. This prediction is based on a machine learning model involving many test cases.

                </div>,
                <div className="text-result"> This area will display if you may have COVID or if it’s a simple fever that can be controlled by staying cautious by eating healthy and treat yourself with home remedies.
                </div>
                ]
            )
        }else if(inputState.loading){
            return ([
                <FontAwesomeIcon icon={faSpinner} className="bar-graph"/>,
                <FontAwesomeIcon icon={faSpinner} className="text-result"/>
            ])
        }else{
            return([
                createPieChart()
                ,
                <div className="text-result" style={getResultColor()}>{getResultText()}
                </div>
            ])
        }
    }
    return(
        <div className="covid-form-container">
            <div className="covid-form" id="covid_symptom_test">
            <h2>Covid Check </h2>
            <form onSubmit={(e)=>{onFormSubmit(e)}}> 
                <div className="inputs_nums">
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" min="0" max="100" onChange={(e)=>{onFormChange(e)}} required/>
                </div>
                <div className="inputs_nums">
                    <label htmlFor="teamprature">Temprature</label>
                    <input type="number" name="temprature" id="temprature" min="20" max="42" onChange={(e)=>{onFormChange(e)}} required/>
                </div>
                <div className="inputs">
                    <span>Sex:</span> 
                    <input type="radio" name="sex" value="0" id="male" defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="sex" value="1" id="female" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="female">Female</label>
                </div>
                <div className="inputs">
                     <span>Diarrhea:</span>
                    <input type="radio" name="diarrhea" value="0" id="diahrrea_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="diahrrea_yes">Yes</label>
                    <input type="radio" name="diarrhea" value="1" id="diahrrea_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="diahrrea_no">No</label>
                </div>
                <div className="inputs">
                     <span>Fever:</span>
                    <input type="radio" name="fever" value="0" id="fever_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="fever_yes">Yes</label>
                    <input type="radio" name="fever" value="1" id="fever_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="fever_no">No</label>
                </div>
                <div className="inputs">
                     <span>Coughing:</span>
                    <input type="radio" name="coughing" value="0" id="coughing_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="coughing_yes">Yes</label>
                    <input type="radio" name="coughing" value="1" id="coughing_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="coughing_no">No</label>
                </div>
                <div className="inputs">
                     <span>Sore Throat:</span>
                    <input type="radio" name="sore" value="0" id="sore_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="sore_yes">Yes</label>
                    <input type="radio" name="sore" value="1" id="sore_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="sore_no">No</label>
                </div>
                <div className="inputs">
                     <span>Nausea:</span>
                    <input type="radio" name="nausea" value="0" id="nausea_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="nausea_yes">Yes</label>
                    <input type="radio" name="nausea" value="1" id="nausea_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="nausea_no">No</label>
                </div>
                <div className="inputs">
                     <span>Fatgue:</span>
                    <input type="radio" name="fatgue" value="0" id="fatgue_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="fatgue_yes">Yes</label>
                    <input type="radio" name="fatgue" value="1" id="fatgue_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="fatgue_no">No</label>
                </div>
                <div className="inputs">
                    <span>Do you have Renal Disease? </span>
                    <input type="radio" name="renal" value="0" id="renal_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="renal_yes">Yes</label>
                    <input type="radio" name="renal" value="1" id="renal_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="renal_no">No</label>
                </div>
                <div className="inputs">
                     <span>Do you have Diabetes?</span>
                    <input type="radio" name="diabetes" value="0" id="diabetes_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="diabetes_yes">Yes</label>
                    <input type="radio" name="diabetes" value="1" id="diabetes_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="diabetes_no">No</label>
                </div>
                <button className="btn btn-5">submit</button>
            </form>
        </div>
            {renderResults()}
        </div>
        
    )
}

export default Covid_form;