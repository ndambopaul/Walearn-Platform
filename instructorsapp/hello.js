const courses = [
    {
      "_id": "66d5d171d019671c6af11d93",
      "author": "66d48057cf1fd67fd5ae265a",
      "title": "Python Engineer",
      "price": 150000,
      "discount": 0,
      "course_type": "BOOTCAMP",
      "is_paid": true,
      "course_period": "9 Months",
      "description": "This is a course to move you from zero to expert in Python Programming...",
      "published": false,
      "course_status": "UNDER REVIEW",
      "createdAt": "2024-09-02T14:53:37.200Z",
      "__v": 0,
      "authors": [
        {
          "_id": "66d47cb9c5cbea0d3e29a6ca",
          "first_name": "Paul",
          "last_name": "Ndambo",
          "username": "paulkadabo",
          "email": "paulkadabo@gmail.com",
          "__v": 0
        },
        {
          "_id": "66d48057cf1fd67fd5ae265a",
          "first_name": "James",
          "last_name": "Doe",
          "username": "jamesdoe",
          "email": "jamesdoe@gmail.com",
          "__v": 0
        }
      ]
    },
    {
      "_id": "66fc46a483ecfd8279978830",
      "category": "66d6bf4c240bdfa1a1ac5e1d",
      "subcategory": "66d6c364259241d1f63b787e",
      "authors": [
        {
          "_id": "66fc440f99c46eaa23f55c6b",
          "first_name": "John",
          "last_name": "Smith",
          "username": "johnsmith",
          "email": "johnmith@gmail.com",
          "__v": 0
        },
        {
          "_id": "66fc43f099c46eaa23f55c69",
          "first_name": "Jane",
          "last_name": "Smith",
          "username": "janesmith",
          "email": "janesmith@gmail.com",
          "__v": 0
        }
      ],
      "title": "Backend Development[Python]",
      "price": 55000,
      "discount": 0,
      "course_type": "BOOTCAMP",
      "is_paid": true,
      "course_period": "2 Months",
      "description": "This is a backend development course for Python developers",
      "published": false,
      "course_status": "UNDER REVIEW",
      "createdAt": "2024-10-01T18:59:48.486Z",
      "__v": 2
    }
  ];
  
  // Function to filter courses by author ID
  const filterCoursesByAuthor = (courses, authorId) => {
    return courses.filter(course => 
      course.authors.some(author => author._id === authorId)
    );
  };
  
  // Example usage
  const authorIdToSearch = "66d48057cf1fd67fd5ae265a";
  const filteredCourses = filterCoursesByAuthor(courses, authorIdToSearch);
  
  console.log(filteredCourses);
  