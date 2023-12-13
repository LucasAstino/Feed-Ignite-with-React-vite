import style from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Sidebar() {
    const [selectedImage, setSelectedImage] = useState("")


    const handleImageChange = (event) => {
        // setSelectedImage(event.target.files[0])
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onloadend = () => setSelectedImage(reader.result)
        reader.readAsDataURL(file)
        console.log(selectedImage)

    }


  return (
    <aside className={style.sidebar}>
      <img
        className={style.over}
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"
      />

      <div className={style.profile}>
        <Avatar src={selectedImage || "https://avatars.githubusercontent.com/u/116663021?v=4"} />

        <strong>Lucas Astino</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <label className={style.btnedit}>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <PencilLine size={20} />
          Editar seu perfil
        </label>
      </footer>
    </aside>
  );
}
