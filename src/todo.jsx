import { useState } from "react"


function Todo() {
    const [tasks,setTasks] = useState([])
    const [input,setInput] = useState("")
    const [showAlert,setShowAlert] = useState(false)

    function add() {
        if (input.trim() === "") return
        setTasks([...tasks,input])
        setInput("")
    }
    function Delete(index) {
       setTasks(tasks.filter((_,i) => i !== index)) 
       setShowAlert(true)
       setTimeout(()=>setShowAlert(false),1000)
    }

  return (
    <div className="bg-secondary min-vh-100 min-vw-100">
      <nav className="navbar navbar-dark navbar-expand-lg ">
        <div className="container-fluid justify-content-center d-flex flex-column text-center">
            <span className="navbar-brand" style={{color:"yellow",fontSize:"5rem",fontFamily:"emoji"}}>MY TODO APP</span>
            <span className="badge bg-secondary" style={{color:"darksalmon",fontSize:"2rem",fontWeight:"900"}}>{tasks.length}</span>
        </div>

      </nav>

      <div>
        <div className="d-flex flex-column justify-content-center w-50 mx-auto">
          
            <input type="text" placeholder="ivide add aakk" value={input}  onChange={(e) => setInput(e.target.value)} />
            <button onClick={add} className="btn btn-primary btn-lg p-2">ADD</button>
        </div>
      </div>
      {showAlert && (
              <div className="alert alert-danger">🗑️ delete aayittoo</div>
            )}
      <ul className="d-flex flex-wrap justify-content-center gap-2 p-4">
        {tasks.map((task,index) =>(
            
             <div className="card" style={{width:"10rem"}} key={index}>
              <div className="card-body">
                <div className="card-text"><p>{task}</p></div>
                
              </div>
              <div className="card-footer" style={{height:"3rem"}}><button onClick={() => Delete(index)} 
                 className="btn btn-outline-warning btn-sm">dlt</button>
                 </div>
             </div>
             
             
            
            
        ))}
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-4 ">
            <div className="card bg-light">
              <div className="card-body">
                <div className="card-text">ONE</div>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="card bg-primary">
              <div className="card-body">
                <div className="card-text">TWO</div>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="card bg-danger">
              <div className="card-body">
                <div className="card-text">THREE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="d-flex flex-column justify-content-center w-50 mx-auto">
        <div className="mb-3 mt-5 ">
          <label className="form-label">NAME</label>
          <input type="text" className="form-control" placeholder="ENTER YOUR NAME"/>
        </div>

        <div className="mb-3 ">
          <label className="form-label">EMAIL</label>
          <input type="text" className="form-control" placeholder="ENTER YOUR EMAIL"/>
        </div>

        <div className="mb-3 ">
          <label className="form-label">MESSEGES</label>
          <textarea className="form-control" rows="3"  placeholder="WRITE YOUR MESSEGE"/>
        </div>

        <button className="btn btn-primary mb-5" >SUBMIT</button>
      </form>




    </div>
  )
}
export default Todo