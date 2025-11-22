import { useState } from 'react'
import './App.css'
function App() {
  const [value,setValue] = useState('');

  function DisplayBtn(e){
    setValue(value + e.target.value);
  }
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} readOnly/>
          </div>
          <div>
            <input type="button" value="AC" onClick={e => setValue('')} />
            <input type="button" value="DE" onClick={e => setValue(value.slice(0,-1))} />
            <input type="button" value="." onClick={DisplayBtn}/>
            <input type="button" value="/" onClick={DisplayBtn}/>
          </div>
          <div>
            <input type="button" value="7" onClick={DisplayBtn} />
            <input type="button" value="9" onClick={DisplayBtn}/>
            <input type="button" value="8" onClick={DisplayBtn}/>
            <input type="button" value="*" onClick={DisplayBtn}/>
          </div>
          <div>
            <input type="button" value="4" onClick={DisplayBtn}/>
            <input type="button" value="5" onClick={DisplayBtn}/>
            <input type="button" value="6" onClick={DisplayBtn}/>
            <input type="button" value="+" onClick={DisplayBtn}/>
          </div>
          <div>
            <input type="button" value="1" onClick={DisplayBtn}/>
            <input type="button" value="2" onClick={DisplayBtn}/>
            <input type="button" value="3" onClick={DisplayBtn}/>
            <input type="button" value="-" onClick={DisplayBtn}/>
          </div>
          <div>
            {/* <input type="button" value="%" onClick={DisplayBtn}/> */}
            <input type="button" value="0"onClick={DisplayBtn}/>
            <input type="button" value="=" className='equal' onClick={e=> setValue(eval(value))}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
