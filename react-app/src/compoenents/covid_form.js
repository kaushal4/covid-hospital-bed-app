import React,{ useState } from "react";
import axios from "axios";



const Covid_form = ()=>{
    const [inputOptions,setInputOptions] = useState({
        age:0,
        temprature:0,
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
        axios.get("localhost:5000/test",params)
        .then(data=>{console.log(data)});;
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


    return(
        <div className="covid-form" id="covid_symptom_test">
            <h2>Covid Check </h2>
            <form onSubmit={(e)=>{onFormSubmit(e)}}> 
                <div className="inputs">
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" min="0" max="100" onChange={(e)=>{onFormChange(e)}}/>
                </div>
                <div className="inputs">
                    <label htmlFor="teamprature">Temprature</label>
                    <input type="number" name="temprature" id="temprature" onChange={(e)=>{onFormChange(e)}}/>
                </div>
                <div className="inputs">
                    Sex:
                    <input type="radio" name="sex" value="0" id="male" defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="sex" value="1" id="female" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="female">Female</label>
                </div>
                <div className="inputs">
                    Diarrhea:
                    <input type="radio" name="diarrhea" value="0" id="diahrrea_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="diahrrea_yes">Yes</label>
                    <input type="radio" name="diarrhea" value="1" id="diahrrea_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="diahrrea_no">No</label>
                </div>
                <div className="inputs">
                    Fever:
                    <input type="radio" name="fever" value="0" id="fever_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="fever_yes">Yes</label>
                    <input type="radio" name="fever" value="1" id="fever_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="fever_no">No</label>
                </div>
                <div className="inputs">
                    Coughing:
                    <input type="radio" name="coughing" value="0" id="coughing_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="coughing_yes">Yes</label>
                    <input type="radio" name="coughing" value="1" id="coughing_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="coughing_no">No</label>
                </div>
                <div className="inputs">
                    Sore Throat:
                    <input type="radio" name="sore" value="0" id="sore_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="sore_yes">Yes</label>
                    <input type="radio" name="sore" value="1" id="sore_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="sore_no">No</label>
                </div>
                <div className="inputs">
                    Nausea:
                    <input type="radio" name="nausea" value="0" id="nausea_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="nausea_yes">Yes</label>
                    <input type="radio" name="nausea" value="1" id="nausea_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="nausea_no">No</label>
                </div>
                <div className="inputs">
                    Fatgue:
                    <input type="radio" name="fatgue" value="0" id="fatgue_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="fatgue_yes">Yes</label>
                    <input type="radio" name="fatgue" value="1" id="fatgue_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="fatgue_no">No</label>
                </div>
                <div className="inputs">
                    Do you have Renal Disease?
                    <input type="radio" name="renal" value="0" id="renal_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="renal_yes">Yes</label>
                    <input type="radio" name="renal" value="1" id="renal_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="renal_no">No</label>
                </div>
                <div className="inputs">
                    Do you have Diabetes?
                    <input type="radio" name="diabetes" value="0" id="diabetes_yes"  defaultChecked onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="diabetes_yes">Yes</label>
                    <input type="radio" name="diabetes" value="1" id="diabetes_no" onChange={(e)=>{onFormChange(e)}}/>
                    <label htmlFor="diabetes_no">No</label>
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Covid_form;