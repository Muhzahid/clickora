import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Learning = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/courses")
            .then((res) => setCourses(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <section className="p-6">
                <h2 className="text-3xl font-bold text-center mb-6">Learning</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div key={course._id} className="bg-white shadow-lg rounded-xl p-4">
                            {course.image && (
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                            )}
                            <h3 className="text-xl font-semibold">{course.title}</h3>
                            <p className="text-gray-600 mt-2">{course.description}</p>
                            <span className="text-sm text-blue-600 mt-2 block">
                                {course.category}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Learning;
