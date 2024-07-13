function randomJokeGenerator() {
    let random_jokes = [
        "Ek dafa ka zikar hai, ek chooha jungle me chalta hai, toh usay ek billi se takra gaya. Billi ne kaha: 'Arey chuha, aage kahan jana hai?' Chuha bola: 'Arey billi, zindagi me kisi se bhagna hai toh peechay dekhna nahi chahiye.'",
        "Teacher: 'Tumhare walid ka kya naam hai?' Student: 'Sir, naam toh Bablu hai, lekin ghar pe sab Daddy kehte hain.'",
        "Santa: 'Tumhare paas itni saari kutiyaan kyun hain?' Banta: 'Arrey yaar, har kutti ke saath ek sher bhi hona chahiye na!'",
        "Wife: 'Tumhe pata hai, tumhare dost ki biwi apne shohar se kitna pyaar karti hai?' Husband: 'Haan haan, mujhe pata hai, uska roj subah do-chaar pyaar ke sms mil jaate hain.'",
        "Patient: 'Doctor Sahab, mujhe neend na aane ki bimari hai.' Doctor: 'Kab se hai yeh bimari?' Patient: 'Jab se maine apni biwi ko sone nahi diya.'",
        "Customer: 'Yeh aapka dukaan kitne baje tak khula rehta hai?' Shopkeeper: 'Jab tak aap kuch nahi kharidte.'",
        "Wife: 'Tum mujhe kabhi romantic nahi samajhte.' Husband: 'Arrey main samajhta hoon, lekin tujhe pata hai na, yeh Indian Railways ki reservation hai, jo confirm ho jaye wohi romantic hai.'",
        "Ek dost dusre dost se: 'Tumne apni biwi ko kitna pyaar se bulaya hai?' Dost: 'Mehbooba kehti hoon, 'Ghar aajao, daal chawal bani hai'.'",
        "Boss: 'Tum kal office kyun nahi aaye?' Employee: 'Boss, meri biwi ne bola, 'Aaj ghar pe raho, mausam achha hai'.'"]

    let randomJoke = Math.random() * random_jokes.length;
    let roundJoke = Math.floor(randomJoke);
    let jokeGen = random_jokes[roundJoke];

    let joke = document.querySelector('#joke');
    joke.innerText = `" ${jokeGen} "`;
}
