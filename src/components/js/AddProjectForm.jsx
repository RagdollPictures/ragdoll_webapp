import React, { useState } from 'react';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

function AddProjectForm() {
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [url, setUrl] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('');
  const [cover, setCover] = useState('');
  const [logo, setLogo] = useState('');
  const [headline, setHeadline] = useState('');
  const [footer, setFooter] = useState('');
  const [year, setYear] = useState('');
  const [link, setLink] = useState('');
  const [companyLink, setCompanyLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, 'projects', title);
      await setDoc(docRef, {
      
        title,
        info,
        url,
        subject,
        category,
        cover,
        logo,
        headline,
        footer,
        year,
        link,
        companyLink,
       
      });

      alert('Project added successfully!');
      setTitle('');
      setInfo('');
      setUrl('');
      setSubject('');
      setCategory('');
      setCover('');
      setLogo('');
      setHeadline('');
      setFooter('');
      setYear('');
      setLink('');
      setCompanyLink('');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error adding project. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={info} onChange={(e) => setInfo(e.target.value)} placeholder="Info" />
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input type="text" value={cover} onChange={(e) => setCover(e.target.value)} placeholder="Cover URL" />
      <input type="text" value={logo} onChange={(e) => setLogo(e.target.value)} placeholder="Logo URL" />
      <input type="text" value={headline} onChange={(e) => setHeadline(e.target.value)} placeholder="Headline" />
      <textarea value={footer} onChange={(e) => setFooter(e.target.value)} placeholder="Footer" />
      <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />
      <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link" />
      <input type="text" value={companyLink} onChange={(e) => setCompanyLink(e.target.value)} placeholder="Company Link" />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddProjectForm;
