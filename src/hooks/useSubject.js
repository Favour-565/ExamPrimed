import { useState, useEffect } from 'react';

export const useSubjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
    
        const subjectsData = [
          { 
            id: 1,
            name: "ENGLISH", 
            image: "/images/practice1.png",
            path: "/daily-test"
          },
          { 
            id: 2,
            name: "GENERAL KNOWLEDGE", 
            image: "/images/practice2.png",
            path: "/daily-test"
          },
          { 
            id: 3, 
            name: "MATHEMATICS",
            image: "/images/Knowledge.png",
            path: "/daily-test"
          },
        ];
        
        setSubjects(subjectsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  return { subjects, loading, error };
};