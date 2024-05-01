import { useState, useEffect } from "react";
import { db } from "../services/firebase/firebaseConnection";
import { doc, getDoc } from "firebase/firestore";

import { DocumentData } from 'firebase/firestore';
import { ProductProps } from "../pages/home";

export const useFetchDocument = (docCollection: string, id: string) => {
  const [document, setDocument] = useState<ProductProps | null>(null);

  useEffect(() => {
    const loadDocument = async () => {
      try {
        const docRef = await doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          const documentData = docSnap.data() as DocumentData;
          const productData: ProductProps = {
            id: docSnap.id,
            title: documentData.title,
            description: documentData.description,
            price: documentData.price,
            cover: documentData.cover,
          };
          setDocument(productData);
        } else {
          console.log("Documento não encontrado.");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    loadDocument();
  }, [docCollection, id]);

  return { document };
};