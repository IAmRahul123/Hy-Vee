import Form from "@/components/Form";
import axios from "axios";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import ModalView from "@/components/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  const [details, setDetails] = useState()
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSubmit = async (name) => {
    try {
      const [agify, genderize,nationalize] = await Promise.all([
        axios.get(`https://api.agify.io/?name=${name}`),
        axios.get(`https://api.genderize.io/?name=${name}`),
        axios.get(`https://api.nationalize.io/?name=${name}`)
      ])
      setDetails({
        age: agify?.data?.age || "-",
        gender: genderize?.data?.gender || "-",
        nation:nationalize?.data?.country[0]?.country_id || "-"
      })
      openModal()
    } catch (error) {
      console.log("Api error", error)
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.main}>
      <div className={styles.heading}>Guess Your Details</div>
      <Form handleSubmit={handleSubmit} />
      <ModalView
        show={modalIsOpen}
        onHide={closeModal}
      >
        <div>
          <div>
            <span style={{fontWeight:'bold'}}>Age: </span>
            <span>{details?.age}</span>
          </div>
          <div>
            <span style={{fontWeight:'bold'}}>Gender: </span>
            <span>{details?.gender}</span>
          </div>
          <div>
            <span style={{fontWeight:'bold'}}>Country: </span>
            <span>{details?.nation}</span>
          </div>
        </div>
      </ModalView>
    </div>
  );
}
