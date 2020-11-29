function InputExample(props){
    return(
        <>
        <h1>{props.data}</h1>
        <input type="text" onChange={props.onChange} />
    </>
    )
}
export default InputExample;