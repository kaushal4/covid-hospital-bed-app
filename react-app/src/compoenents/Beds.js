import React,{useEffect,useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const Bed = ()=>{
    const [initialTables,setInitialTables] = useState({"firstTable":[],"secondTable":[]})
    const [firstTablesLoaded,setFirstTablesLoaded] = useState(false);
    const [secondTablesLoaded,setsecondTablesLoaded] = useState(false);
    const [addressValue,setAddressValue] = useState("");
    const [isInputInvalid,setInputInvalid] = useState(false);
    useEffect(()=>{
        console.log("here");
        axios.get("http://localhost:5000/bed",{params:{"top":"false","count":"true"}})
        .then((data) =>{setInitialTables({...initialTables,"firstTable":data.data.final_array});
        })
        
    },[])
    useEffect(()=>{
        if(initialTables.secondTable.length === 0 && !secondTablesLoaded){
            console.log("here");
            setFirstTablesLoaded(true);
            axios.get("http://localhost:5000/bed",{params:{"top":"true","count":"false"}})
            .then(data =>{setInitialTables({...initialTables,"secondTable":data.data.final_array})})
        }else if(!secondTablesLoaded){
            console.log(initialTables.secondTable);
            setsecondTablesLoaded(true);
        }
    },[initialTables])

    const onChangeFormHandler = (e)=>{
        setAddressValue(e.target.value);
    }
    const onFormSubmitHandler = (e)=>{
        e.preventDefault();
        axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_LOCATION_API}&q=${addressValue}+Delhi`)
        .then((data)=>{
            console.log(data.data);
            console.log(data.data.results[0].geometry);
            console.log(data.data.results[0].geometry.lat);
            console.log(data.data.results[0].geometry.lng);
            if(data.data.results[0].geometry.lat===28.65381 && data.data.results[0].geometry.lng===77.22897){
                setInputInvalid(true);
            }else{
                axios.get("http://localhost:5000/distance",{params:{"lat":data.data.results[0].geometry.lat,"lan":data.data.results[0].geometry.lng}})
                .then(data=>{console.log(data)})
            }
        });

    }
    const getFirstTableBody = ()=>{
        let body = ""
        if((initialTables.firstTable).length !== 0){
            body = initialTables.firstTable.map((Element)=>{
                const items = Element.map((element)=>{
                    return(<td>{element}</td>)
                })
                return (<tr>{items}</tr>)
            })
        }
        
        return (<tbody>{body}</tbody>)
    }
    const getFirstTable = ()=>{
        if(!firstTablesLoaded){
            return(<FontAwesomeIcon icon={faSpinner} className="spin"/>);
        }else{
            return (
                <div>
                    <h3>Beds available:</h3>
                    <table className="table-one">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Covid Beds</th>
                                <th>Covid Oxygen Beds</th>
                                <th>Covid ICU Beds</th>
                            </tr>
                        </thead>
                        {getFirstTableBody()}
                    </table>
                </div>
                
            )
        }
    }
    const getSecondTableBody = ()=>{
        let body = ""
        let filtered_array=[];
        if((initialTables.secondTable).length !== 0){
            body = initialTables.secondTable.map((Element)=>{
                filtered_array = Element.filter((element,index)=>{
                    if([0,3,4].includes(index)){
                        return(true)
                    }else{
                        return(false)
                    }
                })
                const items = filtered_array.map((element)=>{
                        return(<td>{element}</td>)
                })
                return (<tr>{items}</tr>)
            })
        }
        
        return (<tbody>{body}</tbody>)
    }
    const getSecondTable = ()=>{
        if(!secondTablesLoaded){
            return(<FontAwesomeIcon icon={faSpinner} className="spin"/>);
        }else{
            return (
                <div>
                    <h3>Top 5 hospitals in Delhi with most beds</h3>
                    <table className="table-two">
                    <thead>
                        <tr>
                            <th>Hospital Name</th>
                            <th>Beds Available</th>
                            <th>Covid ICU Beds</th>
                        </tr>
                    </thead>
                    {getSecondTableBody()}
                </table>
                </div>
                
            )
        }
    }
    return(
        <div className="bed-container" id="locationStatus">
            <div className="count">
                {getFirstTable()}
            </div>
            <div className="top">
                {getSecondTable()}
            </div>
            <div className="search">
                <h3>Search for nearest hospitals in Delhi:</h3>
                <form onSubmit={(e)=>{onFormSubmitHandler(e)}}>
                    <label htmlFor="address">Enter you locality(eg.Shahdara)</label>
                    <input type="text" name="address" id="address" required onChange={(e)=>{onChangeFormHandler(e)}}/>
                    <button className="btn btn-5">submit!</button>
                </form>
                <p dtyle={{"color":"red"}}>{isInputInvalid && "The location could not be found. Only Delhi Locations supported .Please try again"}</p>
            </div>
        </div>
    )
}

export default Bed;