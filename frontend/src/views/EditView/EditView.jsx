import Edit from "../../components/Edit/Edit"
import Nav from "../../components/Nav/Nav"
import Footer from "../../components/Footer/Footer"


export default function EditView(){
    return(
        <>
        <header className="editWrap">
        <Nav/>
        </header>
        <main className="editWrap">
        <Edit/>
        </main>
        <footer>
       <Footer/>
       </footer> 
        </>
    )
}