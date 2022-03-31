
var totalCost = 0;
function update() {
    totalCost = 0;
    var strength = document.getElementById("str-score").value;
    var dexterity = document.getElementById("dex-score").value;
    var consitiution = document.getElementById("con-score").value;
    var inteligence = document.getElementById("int-score").value;
    var wisdom = document.getElementById("wis-score").value;
    var charisma = document.getElementById("cha-score").value;

    var totalStrength = parseInt(document.getElementById("str-score").value) + parseInt(document.getElementById("str-mod").value);
    var totalDexterity = parseInt(document.getElementById("dex-score").value) + parseInt(document.getElementById("dex-mod").value);
    var totalConsitiution = parseInt(document.getElementById("con-score").value) + parseInt(document.getElementById("con-mod").value);
    var totalInteligence = parseInt(document.getElementById("int-score").value) + parseInt(document.getElementById("int-mod").value);
    var totalWisdom = parseInt(document.getElementById("wis-score").value) + parseInt(document.getElementById("wis-mod").value);
    var totalCharisma = parseInt(document.getElementById("cha-score").value) + parseInt(document.getElementById("cha-mod").value);

    document.getElementById("total-str-score").innerHTML = totalStrength;
    document.getElementById("total-dex-score").innerHTML = totalDexterity;
    document.getElementById("total-con-score").innerHTML = totalConsitiution;
    document.getElementById("total-int-score").innerHTML = totalInteligence;
    document.getElementById("total-wis-score").innerHTML = totalWisdom;
    document.getElementById("total-cha-score").innerHTML = totalCharisma;

    document.getElementById("str-ab-mod").innerHTML = getAbilityMod(totalStrength);
    document.getElementById("dex-ab-mod").innerHTML = getAbilityMod(totalDexterity);
    document.getElementById("con-ab-mod").innerHTML = getAbilityMod(totalConsitiution);
    document.getElementById("int-ab-mod").innerHTML = getAbilityMod(totalInteligence);
    document.getElementById("wis-ab-mod").innerHTML = getAbilityMod(totalWisdom);
    document.getElementById("cha-ab-mod").innerHTML = getAbilityMod(totalCharisma);

    document.getElementById("str-cost").innerHTML = getPointCost(strength);
    document.getElementById("dex-cost").innerHTML = getPointCost(dexterity);
    document.getElementById("con-cost").innerHTML = getPointCost(consitiution);
    document.getElementById("int-cost").innerHTML = getPointCost(inteligence);
    document.getElementById("wis-cost").innerHTML = getPointCost(wisdom);
    document.getElementById("cha-cost").innerHTML = getPointCost(charisma);

    document.getElementById("total-point").innerHTML = totalCost + "/27";

    if(totalCost > 26) {
        document.getElementById("str-score").max = strength;
        document.getElementById("dex-score").max = dexterity;
        document.getElementById("con-score").max = consitiution;
        document.getElementById("int-score").max = inteligence;
        document.getElementById("wis-score").max = wisdom;
        document.getElementById("cha-score").max = charisma;
    } else {
        document.getElementById("str-score").max = 15;
        document.getElementById("dex-score").max = 15;
        document.getElementById("con-score").max = 15;
        document.getElementById("int-score").max = 15;
        document.getElementById("wis-score").max = 15;
        document.getElementById("cha-score").max = 15;
    }
}

function getAbilityMod(totalScore) {
    var mod;
    if(totalScore == 8 || totalScore == 9) {
        return mod = -1;
    }
    if(totalScore == 10 || totalScore == 11) {
        return mod = 0;
    }
    if(totalScore == 12 || totalScore == 13) {
        return mod = 1;
    }
    if(totalScore == 14 || totalScore == 15) {
        return mod = 2;
    }
    if(totalScore == 16 || totalScore == 17) {
        return mod = 3;
    }
}

function getPointCost(score) {
    var cost;
    if(score == 8){
        totalCost += 0;
        return cost = 0;
    }
    if(score == 9){
        totalCost += 1;
        return cost = 1;
    }
    if(score == 10){
        totalCost += 2;
        return cost = 2;
    }
    if(score == 11){
        totalCost += 3;
        return cost = 3;
    }
    if(score == 12){
        totalCost += 4;
        return cost = 4;
    }
    if(score == 13){
        totalCost += 5;
        return cost = 5;
    }
    if(score == 14){
        totalCost += 7;
        return cost = 7;
    }
    if(score == 15){
        totalCost += 9;
        return cost = 9;
    }
}
update();

