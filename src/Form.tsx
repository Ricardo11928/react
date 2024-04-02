import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape(
  {
    color:Yup.string().required('El color es requerido'),
    opciones:Yup.array().min(1,'Selecciona al menos una opción'),
  }
)

function FormComponent() {
  const [color,setColor]=useState([
    {value:'',label:'Seleccione un color'},
    {value:'rojo',label:'Rojo'},
    {value:'verde',label:'Verde'},
    {value:'azul',label:'Azul'},
  ]);
  const addColor=({value,label}:any)=>{
    setColor([...color,{value,label}])
  }
  const publicar=(values:any, {resetForm,setFieldError}:any)=>{
      
    console.log('Valores a publicar:',values)
      resetForm();
   
  }

  const SelectField =({label,...props}:any)=>{
    const[field,meta]=useField(props);

    return(
      <div>
        <label>{label}</label>
        <Field as="select" {...props}/>
        
        <ErrorMessage name={field.name}/>
      </div>
    )
  }
  

  return (
    <div>

    
    <Formik 
    initialValues={{color:'',opciones:[]}}
    validationSchema={validationSchema}
    onSubmit={publicar}>
      <Form>
        <div>
          <SelectField label="Color" name="color">
            {color.map((c:any)=>(
              <option key={c.value} value={c.value}>{c.label}</option>
            
            ))}

          </SelectField>
          <ErrorMessage name="color"/>
        </div>
        <div>
          <label>Opciones</label>
          <div>
            <label>
              <Field type="checkbox" name="opciones" value="opcion1"/>
              Opción 1
            </label>
          </div>
          <div>
            <label>
              <Field type="checkbox" name="opciones" value="opcion2"/>
              Opción 2
            </label>
          </div>
          <div>
            <label>
              <Field type="checkbox" name="opciones" value="opcion3"/>
              Opción 3
            </label>
          </div>
          <ErrorMessage name="opciones"/>
        </div>
        <button type="submit">Enviar</button>
      </Form>
      
    </Formik>
                   <button onClick={()=>addColor({value:'amarillo',label:'Amarillo'})}>Agregar color</button>

    </div>
    
  )


}

export default FormComponent;