// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monicadingdong@gmail.com";
firstUser.favoriteColor = new Set();
firstUser.favoriteColor.add("Yellow");
firstUser.favoriteColor.add("Pink");
firstUser.favoriteColor.add("White");
firstUser.favoriteColor.add("Purple");
firstUser.isHavePet = true;
firstUser.education = [
      { name: 'SD 01',  city: 'Jakarta', graduate: 2016 },
      { name: 'SMP 02', city: 'Jakarta', graduate: 2019 },
      { name: 'SMA 03', city: 'Tangerang' },
]
firstUser.favoriteRestaurant = new Set(['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi'])

const secondUser = {};
secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendydingdong@gmail.com";
secondUser.favoriteColor = new Set();
secondUser.favoriteColor.add("Blue");
secondUser.favoriteColor.add("Black");
secondUser.favoriteColor.add("Gray");
secondUser.isHavePet = false;
secondUser.education = [

    { name: 'SD 02', city: 'Jakarta', graduate: 2010 },
    { name: 'SMP 03', city: 'Bogor', graduate: 2013 },
    { name: 'SMA 01', city: 'Surabaya', graduate: 2016 },
    { name: 'Universitas Maju', city: 'Tangerang' },
]

    secondUser.favoriteRestaurant = new Set(['Tempura', 'Bento', 'Sushi', 'Pancake', 'Padang', 'Katsu', 'Geprek', 'Pancake', 'Pancake', 'Eggy'])


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

users.push(firstUser);
users.push(secondUser)
// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};