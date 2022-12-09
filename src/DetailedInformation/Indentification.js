

function Indentification(props){

    if(props.idvData){
        console.log(props.idvData)
        var url = props.idvData.data.redirect_url
    }

    function cont(e){
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <center>
            <button type="submit" class=" btn btn-warning" onClick={cont}>Click Here to Verifiy</button>
        </center>
    )

}

export default Indentification