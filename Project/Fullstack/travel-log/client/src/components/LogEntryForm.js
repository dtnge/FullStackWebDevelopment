import React, {useState} from 'react';
import '../index.css';
import {useForm} from "react-hook-form";
import { createLogEntries } from '../API';


const LogEntryForm = ({location, onClose}) => {

  const [loading, setLoading]= useState(false);
  const [error, setError]= useState('');
  const { register, handleSubmit} = useForm();

 const onSubmit = async (data) =>{
      // console.log(data);
      try {
        setLoading(true);
        data.latitude = location.latitude;
        data.longitude = location.longitude;
        const created = await createLogEntries(data);
        console.log(created);
        onClose();
      } catch (error) { 
        console.log(error);
        setError(error.message);
        setLoading(false);
      }     
 };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-style">
      {error ? <h3 className="error">{error}</h3> : null}
      <label htmlFor="title">Title</label>
      <input name="title" required ref={register}/>
      <label htmlFor="description">Description</label>
      <textarea name="description" rows={5} ref={register}></textarea>
      <label htmlFor="comments">Comment</label>
      <textarea name="comments" rows={3} ref={register}></textarea>
      <label htmlFor="image">Images</label>
      <input name="image" ref={register}/>
      <label htmlFor="visitDate">Visit Date</label>
      <input name="visitDate" type="date" required ref={register}/>
      <button disabled={loading}>{loading ? 'Loading...' : '📙Create Entry'}</button>
    </form>
  );
};

export default LogEntryForm;
