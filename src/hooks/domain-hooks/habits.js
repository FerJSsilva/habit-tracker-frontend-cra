// Import axios from 'axios';

// useEffect(() => {
//   axios.get('http://backend_url/habits')
//     .then(response => setHabits(response.data))
//     .catch(error => console.error('Error loading habits:', error));
// }, []);

// function addTask() {
//   axios.post('http://backend_url/habits')
//     .then(response => {
//       console.log('Task added:', response);
//       axios.get('http://backend_url/habits')
//         .then(response => setHabits(response.data))
//         .catch(error => console.error('Error loading habits:', error));
//     })
//     .catch(error => console.error('Error adding task:', error));
// }

// function removeTask(id) {
//   axios.delete(`http://backend_url/habits/${id}`)
//     .then(response => {
//       console.log('Task removed:', response);
//       axios.get('http://backend_url/habits')
//         .then(response => setHabits(response.data))
//         .catch(error => console.error('Error loading habits:', error));
//     })
//     .catch(error => console.error('Error removing task:', error));
// }
