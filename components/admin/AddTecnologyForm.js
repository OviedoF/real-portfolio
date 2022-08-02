
import styles from './AddTecnologyForm.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddTecnologyForm() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    if(e.target.type == 'file'){
      setForm({
        ...form,
        [e.target.name]: e.target.files
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataForm = new FormData;

    dataForm.append('name', form.name);
    dataForm.append('description', form.description);
    for (let index = 0; index < form.image.length; index++) {
      dataForm.append('image', form.image[index])
    }
    dataForm.append('documentation_link', form.documentation_link);
    dataForm.append('type', form.type);

    axios.post('http://localhost:4000/api/tecnologies', dataForm)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  return (
    <form id={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.description}>
            <input onChange={(e) => handleChange(e)} type="text" name="name" id="" placeholder='name'/>
            <input onChange={(e) => handleChange(e)} type="file" name="image" id="" multiple/>
            <textarea onChange={(e) => handleChange(e)} name="description" id="" cols="30" rows="10" placeholder='description'/>
        </div>

        <div className={styles.references}>
            <input onChange={(e) => handleChange(e)} type="text" name="documentation_link" id="" placeholder='Documentation link'/>

            <select name="type" id="" onChange={(e) => handleChange(e)}>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
            </select>
        </div>

        <input type="submit" value="Enviar" />
    </form>
  )
}