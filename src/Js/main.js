
const nname = document.querySelector('#nname');
const id = document.querySelector('#id');
const gpa = document.querySelector('#gpa');
const btn = document.querySelector('.btn');
const studentList = document.querySelector('#studentlist');

btn.addEventListener('click', function(e) {
    e.preventDefault();

    if(nname.value == '' && id.value == '' && gpa.value == ''){
        alert('Input Something');
    }else{
        const newRow = document.createElement('tr');
        
        //New Title
        const newNname = document.createElement('th');
        newNname.innerHTML = nname.value;
        newRow.appendChild(newNname);

        //New Title
        const newId = document.createElement('th');
        newId.innerHTML = id.value;
        newRow.appendChild(newId);

        //New Title
        const newGpa = document.createElement('th');
        newGpa.innerHTML = gpa.value;
        newRow.appendChild(newGpa);

        studentList.appendChild(newRow);
    }
});