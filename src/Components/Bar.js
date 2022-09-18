function Bar({showside,setShowside}){
    console.log(showside)
    return (
        
            <div className="item2">
                <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{display:showside}} id="mySidebar">
                    <button onClick={()=>setShowside("none")} className="w3-bar-item w3-button w3-large">Close &times;</button>
                    <a href="#" className="w3-bar-item w3-button">Link 1</a>
                    <a href="#" className="w3-bar-item w3-button">Link 2</a>
                    <a href="#" className="w3-bar-item w3-button">Link 3</a>
                    
                </div>
          
          </div>
        
    )
}

export default Bar