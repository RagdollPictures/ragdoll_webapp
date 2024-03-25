import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";

function Collection() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "movies", "Gåta om skipet til Thesevs");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // Assuming the URLs are stored in a field named `url`
        setUrl(docSnap.data().url);
      } else {
        console.log("No such document!");
      }
    };

    fetchItem();
  }, []);

  return (
    <div>
      <p>{url}</p>
    </div>
  );
}

export default Collection;