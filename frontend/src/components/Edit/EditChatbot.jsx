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


return(
    <>
    {isEditing?<ChatbotEditable initialValues={initialValues} setIsEditing={setIsEditing} preguntasUser={preguntasUser}/>:<ChatbotBloqueado preguntasUser={preguntasUser} setIsEditing={setIsEditing}/>}
    </>
    
)
}