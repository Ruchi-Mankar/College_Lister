document.addEventListener('DOMContentLoaded', function () {
    const collegeList = document.getElementById('collegeList');

    // Fetch IT colleges data from the API
    fetch('/api/colleges/it')
        .then((response) => response.json())
        .then((data) => {
            // Clear the college list
            collegeList.innerHTML = '';

            // Populate the table with data
            data.forEach((college) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${college.institute_id}</td>
                    <td>${college.name}</td>
                    <td>${college.tlr}</td>
                    <td>${college.rpc}</td>
                    <td>${college.go}</td>
                    <td>${college.oi}</td>
                    <td>${college.city}</td>
                    <td>${college.state}</td>
                    <td>${college.rank}</td>
                    <td>${college.Contact}</td>
                    <td>${college.Courses}</td>
                `;
                collegeList.appendChild(row);
            });
        })
        .catch((error) => {
            console.error('Error fetching IT colleges:', error);
        });

        const stateFilter = document.getElementById('stateFilter');

        stateFilter.addEventListener('input', () => {
            filterTable();
        });
        
        function filterTable() {
            const userInput = stateFilter.value.trim();
        
            fetch(`/api/colleges/it-by-state?state=${userInput}`)
                .then((response) => response.json())
                .then((data) => {
                    collegeList.innerHTML = '';
        
                    data.forEach((college) => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                        <td>${college.institute_id}</td>
                        <td>${college.name}</td>
                        <td>${college.tlr}</td>
                        <td>${college.rpc}</td>
                        <td>${college.go}</td>
                        <td>${college.oi}</td>
                        <td>${college.city}</td>
                        <td>${college.state}</td>
                        <td>${college.rank}</td>
                        <td>${college.Contact}</td>
                        <td>${college.Courses}</td>
                        `;
                        collegeList.appendChild(row);
                    });
                })
                .catch((error) => {
                    console.error('Error fetching IT colleges by state:', error);
                });
        }
        
});
