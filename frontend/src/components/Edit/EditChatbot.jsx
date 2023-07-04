import ChatbotEditable from "./utils/ComponentesChatbot/ChatbotEditable"
import ChatbotBloqueado from "./utils/ComponentesChatbot/ChatbotBloqueado"
import {useState, useEffect} from "react"
import { useUserContext } from "../../context/UserContext"

export default function EditChatbot(){
const [isEditing, setIsEditing] = useState(false)
const {user} = useUserContext()
const [preguntasUser, setPreguntasUser] = useState(null)


useEffect(() => {
    async function fetchUser() {
      const response = await fetch("http://localhost:3000/chatbox/preguntas/" + user.ID);
      const data = await response.json();
      setPreguntasUser(data);
    }
    fetchUser();
  }, [user]);

  const initialValues = {CHATBOT:preguntasUser}

  async function onSubmit(values, index){
    if(!values.ID){
      const response = await fetch("http://127.0.0.1:3000/chatbox/addpreguntarespuesta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ID_USER:user.ID, ...values}),
      });
      if (response.status === 200) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // const data = await response.json()
        // console.log(data,"RESPUESTA DEL INSERT")
        // setAddressBloqueo(data)
        
        alert("Insert realizado con éxito")
        
        
      }      
    } else{
    const response = await fetch("http://localhost:3000/chatbox//updatepreguntarespuesta", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (response.status === 200) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // console.log(await response.json(),"RESPONSEEE DE JSOON")
    // setAddressBloqueo(await response.json())
    alert("UPDATE realizado con éxito")
  }
  }
}

async function borrarPregunta(values){
  if(values.ID){
    const response = await fetch("http://127.0.0.1:3000/chatbox//deletepreguntarespuesta", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ID:values.ID, ID_USER: user.ID}),
        });
        if (response.status === 200) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          const data = await response.json()
          console.log(data, "DATA DEL DELETE RESPONSE TATATA")
          setPreguntasUser(data)
          alert("DELETE realizado con éxito")
        }   
  }    
  
}

return(
    <>
    {isEditing?<ChatbotEditable borrarPregunta={borrarPregunta} onSubmit={onSubmit} initialValues={initialValues} setIsEditing={setIsEditing} preguntasUser={preguntasUser}/>:<ChatbotBloqueado preguntasUser={preguntasUser} setIsEditing={setIsEditing}/>}
    </>    
)
}