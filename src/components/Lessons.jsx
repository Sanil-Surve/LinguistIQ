// src/components/Lessons.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setLessons, setLoading, setError } from '../features/lessonsSlice';

const Lessons = () => {
  const dispatch = useDispatch();
  const { lessons, loading, error } = useSelector((state) => state.lessons);

  useEffect(() => {
    const fetchLessons = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.post('http://localhost:5000/api/generate-lessons', {
          prompt: 'Generate a lesson about basic Spanish greetings.',
        });
        dispatch(setLessons(response.data));
      } catch (err) {
        dispatch(setError('Failed to fetch lessons'));
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchLessons();
  }, [dispatch]);

  if (loading) return <div>Loading lessons...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Lessons</h1>
      <ul className="mt-4">
        {lessons.map((lesson, index) => (
          <li key={index} className="border-b py-2">
            <h2 className="text-xl">{lesson}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lessons;
