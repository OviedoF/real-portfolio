
import styles from './AddProjectForm.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddProjectForm() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    if(e.target.name == 'tools'){
      setForm({
        ...form,
        tools: e.target.value.split(', ')
      })
    } else if(e.target.type == 'file'){
      setForm({
        ...form,
        [e.target.name]: e.target.files
      })
      console.log(form.image);
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
    
    form.tools.forEach(el => {
      dataForm.append('tools', el);
    })

    for (let index = 0; index < form.image.length; index++) {
      dataForm.append('image', form.image[index])
  }

    dataForm.append('github_link', form.github_link);
    dataForm.append('deploy_link', form.deploy_link);
    dataForm.append('type', form.type);

    axios.post('http://localhost:4000/api/projects', dataForm)
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
            <input onChange={(e) => handleChange(e)} type="text" name="tools" id="" placeholder='Html, Css, React, Sass, etc..'/>
            <input onChange={(e) => handleChange(e)} type="text" name="github_link" id="" placeholder='github link'/>
            <input onChange={(e) => handleChange(e)} type="text" name='deploy_link' placeholder='deploy link'/>

            <select name="type" id="" onChange={(e) => handleChange(e)}>
              <option value="principal">Principal</option>
              <option value="secundario">Secundario</option>
            </select>
        </div>

        <input type="submit" value="Enviar" />
    </form>
  )
}
