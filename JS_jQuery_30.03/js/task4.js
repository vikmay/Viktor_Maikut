// Масив аудиторій академії
const academyAuditoriums = [
    { name: 'A1', seats: 15, faculty: 'Math' },
    { name: 'B1', seats: 10, faculty: 'Physics' },
    { name: 'C1', seats: 20, faculty: 'Math' },
    { name: 'D1', seats: 12, faculty: 'Physics' },
];

// Функція для виводу всіх аудиторій
function displayAuditoriums(auditoriums) {
    auditoriums.forEach(auditorium => console.log(`${auditorium.name}: ${auditorium.seats} місць для факультету ${auditorium.faculty}`));
}

// Функція для виводу аудиторій зазначеного факультету
function displayFacultyAuditoriums(auditoriums, faculty) {
    const facultyAuditoriums = auditoriums.filter(auditorium => auditorium.faculty === faculty);
    displayAuditoriums(facultyAuditoriums);
}

// Функція для виводу аудиторій, що підходять для групи
function displaySuitableAuditoriums(auditoriums, group) {
    const suitableAuditoriums = auditoriums.filter(auditorium => auditorium.faculty === group.faculty && auditorium.seats >= group.students);
    displayAuditoriums(suitableAuditoriums);
}

// Функція для сортування аудиторій за кількістю місць
function sortBySeats(auditoriums) {
    return auditoriums.sort((a, b) => a.seats - b.seats);
}

// Функція для сортування аудиторій за назвою (за алфавітом)
function sortByName(auditoriums) {
    return auditoriums.sort((a, b) => a.name.localeCompare(b.name));
}
