import React,{useState,useEffect} from "react";
import {NativeSelect, FormControl} from "@material-ui/core"
import styles from "./CountryPick.module.css"
import {fetchCountries} from "./../api"


const CountryPicker = ({handleCountryChange})=>{
    const [fetchedCountries, setFetchCountries] = useState([])
    useEffect(() => {
        const fetchCountriesFunc=async()=>{
            setFetchCountries(await fetchCountries())
        }
        fetchCountriesFunc()
        return () => {
        } 
    }, [setFetchCountries])

    return (
    <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
              <option value="">Global</option>
              {fetchedCountries.map((country,index)=><option key={index} value={country} >{country}</option>)}
        </NativeSelect>
    </FormControl>)
}
export default CountryPicker;