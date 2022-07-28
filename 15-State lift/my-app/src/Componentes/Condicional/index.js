import { useState } from 'react'

function Condicional(){
    const [email,setEmail]=useState()
    const [userEmail,setUserEmail]=useState()
    
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        
    }
        
    function limparEmail(e){
    
        setUserEmail(email)
        
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
        <form>
<input type="email"
 placeholder="Digite o seu e-mail..."
 onChange={(e)=>setEmail(e.target.value)}
 />
<button type="submit" onClick={enviarEmail}>
    Enviar-email
</button>
<button type="submit" onClick={limparEmail}>
    Limpar-email
</button>
{userEmail &&(
    <p>O e-mail do usuário é:{userEmail}</p>
)}
        </form>
        </div>
    )
}
export default Condicional;